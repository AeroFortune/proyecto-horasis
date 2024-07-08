import Footer from "../navigation/footer";
import Header from "../navigation/header";
import '/src/scripts/footers.css';

function PrivacyPage(){
    return(
        <>
        <Header></Header>
        <div className="privacidad-body">
            <h1>Política de Privacidad</h1>
            <div className="content">
                <p className="paragraph">En Horasis, valoramos tu privacidad y estamos comprometidos a proteger tu información personal.</p>
                <p className="paragraph"> Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos tus datos.</p>

                <h2 className="section-title">1. Información que Recopilamos</h2>
                <p className="paragraph">Recopilamos varios tipos de información para ofrecer y mejorar nuestros servicios:</p>
                <p className="paragraph"><strong>Información Personal:</strong> Nombre, dirección de correo electrónico, dirección de envío, número de teléfono, etc.</p>
                <p className="paragraph"><strong>Información de Pago:</strong> Detalles de tarjetas de crédito/débito u otros métodos de pago.</p>
                <p className="paragraph"><strong>Información de Uso:</strong> Datos sobre cómo utilizas nuestro sitio web, productos y servicios.</p>

                <h2 className="section-title">2. Uso de la Información</h2>
                <p className="paragraph">Utilizamos la información recopilada para los siguientes fines:</p>
                <p className="paragraph"><strong>Procesamiento de Pedidos:</strong> Para gestionar y enviar tus pedidos.</p>
                <p className="paragraph"><strong>Comunicación:</strong> Para enviarte actualizaciones sobre tu pedido, noticias y promociones.</p>
                <p className="paragraph"><strong>Mejora del Servicio:</strong> Para personalizar y mejorar nuestra oferta de productos y servicios.</p>

                <h2 className="section-title">3. Compartir Información</h2>
                <p className="paragraph">No vendemos ni compartimos tu información personal con terceros, excepto en las siguientes circunstancias:</p>
                <p className="paragraph"><strong>Proveedores de Servicios:</strong> Empresas que nos ayudan a operar nuestro sitio web, procesar pagos y enviar pedidos.</p>
                <p className="paragraph"><strong>Obligaciones Legales:</strong> Cuando sea necesario para cumplir con la ley o proteger nuestros derechos legales.</p>

                <h2 className="section-title">4. Seguridad de la Información</h2>
                <p className="paragraph">Implementamos medidas de seguridad para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.</p>

                <h2 className="section-title">5. Tus Derechos</h2>
                <p className="paragraph">Tienes derecho a acceder, corregir o eliminar tu información personal. Para ejercer estos derechos, contáctanos a través de nuestro servicio de atención al cliente.</p>

                <h2 className="section-title">6. Cambios a esta Política</h2>
                <p className="paragraph">Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cualquier cambio publicando la nueva política en nuestro sitio web.</p>

                <h2 className="section-title">7. Contacto</h2>
                <p className="paragraph">Si tienes preguntas o inquietudes sobre nuestra política de privacidad, contáctanos a través de nuestro servicio de atención al cliente.</p>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}
export default PrivacyPage;
