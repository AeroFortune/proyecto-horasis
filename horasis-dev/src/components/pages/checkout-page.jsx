import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Footer from "../navigation/footer";

function CheckoutPage() {



    const handlePayPalApprove = (data, actions) => {
        return actions.order.capture().then(function(details) {
          // Handle successful payment here
          console.log('Transaction completed by ' + details.payer.name.given_name);
          navigate('/checkout/success');
        });
    };

    const [cartData, setCartData] = useState(null);
    const { user, error } = useAuth()
    const [cartItemsData, setCartItemsData] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    

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

    const handleCheckout = () => {
        // aqui habria una ruta para confirmar, llamar a la API y manejar todo el proceso
        // pero no habia tiempo :pensive:
        navigate('/checkout/success');
    };

    return (
        <>
            <div className="checkout-cart-container">
                <div className="checkout-cart-header">
                    <h1>Checkout</h1>
                    <p>Por favor verifica que los objetos que esten comprando sean los correctos.</p>
                </div>
                <div className="checkout-cart-content">

                    <ul className="checkout-cart-items">
                        {cartItemsData && cartItemsData.map((product, index) => (
                            <li key={index} className="checkout-cart-item">
                                <img src={product.image_url} alt={`item${index + 1}`} className="checkout-cart-item-image" />
                                <div className="checkout-cart-item-details">
                                    <h4>{product.name}</h4>
                                    <p>${product.price}</p>
                                </div>
                                <div className="checkout-cart-item-quantity">
                                    <span>Cantidad: <br></br>{getQuantity(product._id.toString())}</span> {/* Puedes ajustar esta parte según la cantidad real */}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <form className="checkout-form">
                        <label>Direccion 1</label>
                        <input type="text"></input>
                        <label>Direccion 2</label>
                        <input type="text"></input>
                        <label>ZIP Code</label>
                        <input type="text"></input>
                        <label>Télefono</label>
                        <input type="text"></input>
                        <br />
                        <label>Método de Pago</label>
                        <div className="checkout-form-payments">
                            <div className="producto-tallas-button">
                                <label>Visa
                                    <input type="radio" name="size"></input>
                                </label><br />
                            </div>
                            <div className="producto-tallas-button">
                                <label>Master Card
                                    <input type="radio" name="size"></input>
                                </label><br />
                            </div>
                            <div className="producto-tallas-button">
                                <label>Yappy
                                    <input type="radio" name="size"></input>
                                </label><br />
                            </div>
                        </div>

                        <label>Número de Tarjeta</label>
                        <input type="text"></input>
                        <label>Nombre de la Tarjeta</label>
                        <input type="text"></input>
                        <label>Fecha de Expiración</label>
                        <input type="text"></input>
                        <input type="text"></input>
                        <div className="checkout-cart-summary">
                            <h2>Resumen</h2>
                            <h2>Total (Impuestos incluidos): <br /> ${totalPrice.toFixed(2)}</h2>

                            <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                purchase_units: [
                                    {
                                    amount: {
                                        value: totalPrice.toFixed(2),
                                    },
                                    },
                                ],
                                });
                            }}
                            onApprove={handlePayPalApprove}
                            onError={(err) => {
                                console.error('PayPal Checkout onError', err);
                                // Handle errors here
                              }}
                            />

                            <button className="checkout-button" onClick={handleCheckout}>Realizar pedido</button>
                        </div>



                    </form>

                </div>

            </div>
            <Footer></Footer>
        </>
    )

}

export default CheckoutPage;
