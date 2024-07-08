import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Horasis. Todos los derechos reservados.</p>
                <ul className="footer-links">
                    <li><Link to="/about">Acerca de</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                    <li><Link to="/privacy">Política de privacidad</Link></li>
                    <li><Link to="/terms">Términos y condiciones</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
