import '/src/scripts/footers.css';
import Footer from "../navigation/footer";
import Header from "../navigation/header";

function TerminosPage(){
    return(
        <>
        <Header></Header><div className="body-TyM">
            <h1 id="title">Términos y Condiciones</h1>
            <div className="content">
                <p className="paragraph">Bienvenido a Horasis. Al utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con alguno de estos términos, por favor, no utilices nuestro sitio web.</p>

                <h2 className="section-title">1. General</h2>
                <p className="paragraph">Horasis se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán efectivas una vez publicadas en el sitio web.</p>
                <p className="paragraph">Es responsabilidad del usuario revisar regularmente los términos y condiciones para estar al tanto de cualquier cambio.</p>

                <h2 className="section-title">2. Productos y Precios</h2>
                <p className="paragraph">Todos los productos ofrecidos en Horasis están sujetos a disponibilidad.</p>
                <p className="paragraph">Nos esforzamos por mostrar con precisión los colores y las imágenes de nuestros productos. No podemos garantizar que el monitor de tu computadora muestre los colores de manera exacta.</p>
                <p className="paragraph">Los precios de nuestros productos están sujetos a cambios sin previo aviso.</p>

                <h2 className="section-title">3. Pedidos y Pagos</h2>
                <p className="paragraph">Al realizar un pedido en Horasis, aceptas proporcionar información exacta y completa.</p>
                <p className="paragraph">Nos reservamos el derecho de rechazar cualquier pedido. En caso de que rechacemos un pedido, te reembolsaremos el monto pagado.</p>
                <p className="paragraph">Aceptamos varios métodos de pago, que se especifican en el proceso de compra.</p>

                <h2 className="section-title">4. Envíos y Devoluciones</h2>
                <p className="paragraph">Los tiempos de envío y las tarifas se detallan en nuestra página de envíos.</p>
                <p className="paragraph">Si no estás satisfecho con tu compra, puedes devolver los productos dentro de los 30 días posteriores a la recepción. Los productos deben estar en su estado original y con todas las etiquetas intactas.</p>
                <p className="paragraph">Los gastos de envío para las devoluciones correrán por cuenta del cliente, salvo que el producto esté defectuoso o se haya enviado incorrectamente.</p>

                <h2 className="section-title">5. Privacidad</h2>
                <p className="paragraph">Horasis respeta tu privacidad. Consulta nuestra Política de Privacidad para obtener información sobre cómo recopilamos, utilizamos y protegemos tu información personal.</p>

                <h2 className="section-title">6. Propiedad Intelectual</h2>
                <p className="paragraph">Todo el contenido del sitio web, incluidos los textos, gráficos, logotipos, imágenes y software, es propiedad de Horasis o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.</p>

                <h2 className="section-title">7. Limitación de Responsabilidad</h2>
                <p className="paragraph">Horasis no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de uso de nuestro sitio web o productos.</p>

                <h2 className="section-title">8. Ley Aplicable</h2>
                <p className="paragraph">Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del país en el que operamos.</p>

                <p className="paragraph">Si tienes alguna pregunta sobre estos términos y condiciones, por favor, contáctanos a través de nuestro servicio de atención al cliente.</p>
            </div>
            
        </div>
        <Footer></Footer>
        </>
    );
}
export default TerminosPage;
