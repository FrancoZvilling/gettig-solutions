import './Hero.css';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle">Logística & Digital Supply Chain</span>
                    <h1 className="hero-title">
                        Transformamos tus procesos, <br />
                        <span className="highlight">potenciamos tu negocio.</span>
                    </h1>

                    <div className="hero-cta">
                        <a href="#contact" className="btn-primary">
                            Hablemos
                            <ArrowRight size={20} />
                        </a>
                        <a href="#solutions" className="btn-secondary">
                            Nuestra Solución
                        </a>
                    </div>
                </div>
            </div>

            {/* Background decoration with usable1 */}
            <img src="/usable1.png" alt="" className="hero-bg-decoration" />
        </section>
    );
};

export default Hero;
