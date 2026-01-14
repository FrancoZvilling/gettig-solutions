import './WhoWeAre.css';
import { Target, TrendingUp, Users } from 'lucide-react';

const WhoWeAre = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <span className="section-tag">¿Quiénes Somos?</span>
                    <h2 className="section-title">Expertos en Logística <br /> y Digital Chain</h2>
                    <p className="about-lead">
                        Acompañamos a empresas en la mejora y transformación de sus procesos logísticos, combinando diagnóstico, tecnología y gestión.
                    </p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="icon-box">
                            <TrendingUp size={32} color="var(--color-accent)" />
                        </div>
                        <h3>Enfoque Práctico</h3>
                        <p>Nuestro enfoque es práctico, escalable y orientado a resultados reales. Sin vueltas.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon-box">
                            <Target size={32} color="var(--color-accent)" />
                        </div>
                        <h3>Visión Estratégica</h3>
                        <p>La logística dejó de ser solo operativa. Hoy es estratégica. Te ayudamos a verla así.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon-box">
                            <Users size={32} color="var(--color-accent)" />
                        </div>
                        <h3>Soluciones Adaptables</h3>
                        <p>Diseñamos soluciones a la medida de tu empresa, alineadas a tu tamaño y realidad.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
