import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/auth";
import Footer from "../navigation/footer";
import Header from "../navigation/header";


function CarritoPage() {

    const [cartData, setCartData] = useState(null);
    const { user, error } = useAuth()
    const [cartItemsData, setCartItemsData] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    function getQuantity(productId) {
        if (!cartData) return null;

        const item = cartData.items.find(item => item.productId === productId);
        return item ? item.quantity : 0;
    }

    const calculateTotalPrice = () => {
        if (!cartItemsData) return; // Salir si no hay datos de productos

        let total = 0;
        cartItemsData.forEach(product => {
            const quantity = getQuantity(product._id.toString());
            total += product.price * quantity;
        });

        setTotalPrice(total);
    };

    useEffect(() => {

        const fetchData = async () => {
            try {

                if (!user) {
                    return;
                }

                console.log(user)

                const currentUserId = user._id.toString()
                // Proceso para conseguir token -> agarrar del token la ID del usuario

                const response = await axios.get(`http://localhost:5000/carts/${currentUserId}`);
                setCartData(response.data);
                console.log(response.data);

                const productIds = response.data.items.map(item => item.productId.toString());
                const promises = productIds.map(async (productId) => {
                    const productResponse = await axios.get(`http://localhost:5000/products/${productId}`);
                    console.log(productResponse)
                    return productResponse.data; // Retorna los datos del producto
                });

                // Esperar a que todas las llamadas se completen
                const productsData = await Promise.all(promises);

                // Guardar los datos de los productos en el estado
                setCartItemsData(productsData);
                console.log(cartItemsData)

            } catch (error) {
                console.error(error)
            }
        }

        fetchData();

    }, []);

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItemsData, cartData]);



    return (
        <>
            <Header></Header>
            <div className="cart-container">
                <div className="cart-header">
                    <h1>Carrito</h1>
                </div>
                <div className="cart-content">
                    <ul className="cart-items">
                        {cartItemsData && cartItemsData.map((product, index) => (
                            <li key={index} className="cart-item">
                                <img src={product.image_url} alt={`item${index + 1}`} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h2>{product.name}</h2>
                                    <p>${product.price}</p>
                                </div>
                                <div className="cart-item-quantity">
                                    <span>Cantidad: <br></br>{getQuantity(product._id.toString())}</span> {/* Puedes ajustar esta parte según la cantidad real */}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h2>Resumen</h2>
                        <h2>Total (Impuestos incluidos): <br /> ${totalPrice.toFixed(2)}</h2>
                        <button className="checkout-button">Realizar pedido</button>


                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default CarritoPage;
