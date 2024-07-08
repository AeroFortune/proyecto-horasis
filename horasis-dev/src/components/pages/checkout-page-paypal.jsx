import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import CheckoutPage from "./checkout-page";


function CheckoutPageWithPayPal() {
  return (
    <PayPalScriptProvider options={{ "client-id": "{client id quitado por razones de seguridad :) }" }}>
      <CheckoutPage></CheckoutPage>
    </PayPalScriptProvider>
  );
}

export default CheckoutPageWithPayPal;