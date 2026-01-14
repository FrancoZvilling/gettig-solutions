import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo">
                    <img src="/logo.jpeg" alt="Gettig Solutions" className="logo-img" />
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} color="var(--color-secondary)" /> : <Menu size={28} color="var(--color-secondary)" />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#hero" className="nav-link" onClick={toggleMenu}>Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={toggleMenu}>Quiénes Somos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#solutions" className="nav-link" onClick={toggleMenu}>Soluciones</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link" onClick={toggleMenu}>Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link-btn" onClick={toggleMenu}>Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
