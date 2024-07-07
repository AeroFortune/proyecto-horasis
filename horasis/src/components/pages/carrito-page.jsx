import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../navigation/footer";
import Header from "../navigation/header";

function CarritoPage() {

    const [cartData, setCartData] = useState(null);
    useEffect(() => {

        const fetchData = async () => {
            try {

                const currentUserId = "66861b8ed7ef37ffb6a607d3"
                // Proceso para conseguir token -> agarrar del token la ID del usuario

                const response = await axios.get(`http://localhost:5000/carts/${currentUserId}`);
                setCartData(response.data);
                console.log(response.data);



            } catch (error) {
                console.error(error)
            }
        }

        fetchData();

    }, []);

    const cartItems = [
        <li className="cart-item">
            <img src="https://img2.finalfantasyxiv.com/f/5c7361031b3a3d38ed26034dde5d1a3c_72c48f093f2278ac3243962d3eb6a8d7fc0.jpg?1720329818" alt="item1" className="cart-item-image" />
            <div className="cart-item-details">
                <h2>dumbass</h2>
                <p>$as many as needed</p>
            </div>
            <div className="cart-item-quantity">
                <span>Cantidad: <br></br>1</span>
            </div>
        </li>
    ]

    return (
        <>
            <Header></Header>
            <div className="cart-container">
                <div className="cart-header">
                    <h1>Carrito</h1>
                    <span>3 artículos</span>
                </div>
                <div className="cart-content">
                    <ul className="cart-items">
                        {cartItems}
                        {cartItems}
                        {cartItems}
                        {cartItems}
                    </ul>
                    <div className="cart-summary">
                        <h2>Resumen</h2>
                        <p>Subtotal artículos: 1742,49€</p>
                        <h3>Total (Impuestos incluidos): 1742,49€</h3>
                        <button className="checkout-button">Realizar pedido</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default CarritoPage;
