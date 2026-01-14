import './Contact.css';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <span className="section-tag">Contacto</span>
                    <h2 className="section-title">Hablemos de tu próximo desafío</h2>
                    <p className="contact-desc">
                        Estamos listos para escalar tu operación. Escribinos y coordinemos una reunión.
                    </p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <div className="detail-icon">
                                <Mail size={24} color="var(--color-accent)" />
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:gettigsolutions@gmail.com">gettigsolutions@gmail.com</a>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <MapPin size={24} color="var(--color-accent)" />
                            </div>
                            <div>
                                <h4>Operaciones</h4>
                                <p>Buenos Aires - Entre Ríos</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" placeholder="Tu nombre" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="tu@email.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        Enviar Mensaje
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
