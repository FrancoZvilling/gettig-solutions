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
                            <a href="https://www.threads.net/@gettigsolutions" target="_blank" rel="noopener noreferrer" className="social-icon">
                                {/* Threads Logo SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19.25 10.975c-.275-4.475-3.625-7.7-7.7-7.7-4.4 0-7.7 3.6-7.7 8.35s3.3 8.325 8.1 8.325c2.325 0 4.2-1.025 5.5-2.7.275-.35.15-1.075-.425-1.075H16.8c-.575 0-.825.475-1.075.825-1.075 1.45-2.6 1.95-4.175 1.95-2.925 0-5.25-2.225-5.25-5.325 0-2.825 2.225-5.35 5.25-5.35 2.7 0 4.8 2.05 5.075 4.85.05.5.025 1.05-.125 1.55-.425 1.375-1.575 2.1-2.95 2.1-1.35 0-1.925-.975-1.85-2.425.075-1.8 1.4-3.1 3.225-3.1 1.025 0 1.9.45 2.525.925.3.225.75-.05.75-.425V10.4c0-.2.15-.35.35-.35h1.225c.2 0 .35.15.35.35v2.85c0 3.75-2.9 6.225-6.625 6.225-4.8 0-8.2-3.8-8.2-8.525 0-4.925 3.525-9.175 9-9.175 5.225 0 9.175 3.475 9.175 9.175 0 .225-.175.425-.4.425h-1.625c-.2 0-.375-.2-.375-.425Z" />
                                </svg>
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
