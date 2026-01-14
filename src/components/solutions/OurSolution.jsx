import './OurSolution.css';
import { CheckCircle2 } from 'lucide-react';

const OurSolution = () => {
    return (
        <section id="solutions" className="solutions-section">
            <div className="solutions-container">
                <div className="solutions-content">
                    <span className="section-tag">Nuestra Propuesta</span>
                    <h2 className="section-title">
                        Soluciones logísticas digitales <br />
                        <span className="text-highlight">a tu medida</span>
                    </h2>
                    <p className="solutions-description">
                        No creemos en recetas mágicas. Diseñamos e implementamos soluciones alineadas al tamaño y realidad de cada organización. Transformamos datos y procesos en decisiones inteligentes.
                    </p>

                    <ul className="benefits-list">
                        <li className="benefit-item">
                            <CheckCircle2 size={24} color="var(--color-accent)" />
                            <span>Optimización de costos operativos</span>
                        </li>
                        <li className="benefit-item">
                            <CheckCircle2 size={24} color="var(--color-accent)" />
                            <span>Visibilidad total de la cadena</span>
                        </li>
                        <li className="benefit-item">
                            <CheckCircle2 size={24} color="var(--color-accent)" />
                            <span>Escalabilidad del negocio</span>
                        </li>
                    </ul>
                </div>
                <div className="solutions-visual">
                    <img src="/usable2.png" alt="Soluciones Logísticas" className="solution-bg-img" />

                    {/* Overlay cards */}
                    <div className="visual-card main-card">Procesos</div>
                    <div className="visual-card accent-card">Tecnología</div>
                    <div className="visual-card secondary-card">Gestión</div>
                </div>
            </div>
        </section>
    );
};

export default OurSolution;
