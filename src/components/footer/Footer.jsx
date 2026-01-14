import { Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-top">
                    <div className="footer-brand-column">
                        <div className="footer-logo">
                            <img src="/icono.png" alt="Gettig Solutions Logo" className="footer-logo-img" />
                            <h3>Gettig Solutions</h3>
                        </div>
                        <p className="footer-tagline">
                            Transformamos procesos y datos en decisiones inteligentes. <br />
                            Logística & Digital Chain.
                        </p>
                    </div>

                    <div className="footer-nav-column">
                        <h4>Navegación</h4>
                        <a href="#hero">Inicio</a>
                        <a href="#about">Quiénes Somos</a>
                        <a href="#solutions">Soluciones</a>
                        <a href="#services">Servicios</a>
                    </div>

                    <div className="footer-contact-column">
                        <h4>Contacto</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com/gettigsolutions?igsh=MWE2YjB3eHM5N3luMg==" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Instagram size={24} />
                            </a>
                            <a href="mailto:gettigsolutions@gmail.com" className="social-icon">
                                <Mail size={24} />
                            </a>
                        </div>
                        <p className="contact-email">gettigsolutions@gmail.com</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Gettig Solutions. Todos los derechos reservados.</p>
                    <p className="designed-by">
                        Diseñado por <a href="https://wa.me/5493541315119" target="_blank" rel="noopener noreferrer" className="designer-link">Franco Zvilling</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
