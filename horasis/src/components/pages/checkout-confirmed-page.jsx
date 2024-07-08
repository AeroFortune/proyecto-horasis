import { useNavigate } from "react-router-dom";

function CheckoutConfirmPage() {

    const navigate = useNavigate();

    const handleCheckoutExit = () => {
        // Navegar a una ruta específica cuando se hace clic en el botón
        navigate('/');
    };

    return (
        <>
            <div className="checkout-confirmed-container">
                <h1>
                    Gracias por hacer su pedido!
                </h1>
                <h3>
                    Pronto estará llegando un recibo a su correo.
                </h3>

                <button onClick={handleCheckoutExit}>Volver a la pantalla principal</button>

            </div>
        </>
    );
}

export default CheckoutConfirmPage;
