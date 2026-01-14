import { useState } from 'react';
import { X, Send, Instagram } from 'lucide-react';
import './FloatingContact.css';

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={`floating-contact-wrapper ${isOpen ? 'open' : ''}`}>
            {/* Contact Modal/Popover */}
            <div className={`contact-popover ${isOpen ? 'visible' : ''}`}>
                <div className="popover-header">
                    <h3>Contáctanos</h3>
                    <button onClick={toggleOpen} className="close-btn">
                        <X size={20} />
                    </button>
                </div>

                <div className="popover-body">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Nombre" className="floating-input" required />
                        <input type="email" placeholder="Email" className="floating-input" required />
                        <textarea placeholder="Mensaje" rows="3" className="floating-input" required></textarea>

                        <button type="submit" className="popover-submit-btn">
                            Enviar Email <Send size={16} />
                        </button>
                    </form>

                    <div className="divider">
                        <span>o escribinos por instagram</span>
                    </div>

                    <a href="https://www.instagram.com/gettigsolutions?igsh=MWE2YjB3eHM5N3luMg==" target="_blank" rel="noopener noreferrer" className="instagram-btn">
                        Instagram <Instagram size={18} />
                    </a>
                </div>
            </div>

            {/* Floating Button */}
            <button className="floating-btn" onClick={toggleOpen}>
                <div className="floating-icon-container">
                    <img src="/icono.png" alt="Contacto" className={`floating-icon-img ${isOpen ? 'hidden' : ''}`} />
                    <X size={28} className={`floating-close-icon ${isOpen ? 'visible' : ''}`} color="white" />
                </div>
            </button>
        </div>
    );
};

export default FloatingContact;
