import { useState } from 'react';
import './WhoWeAre.css';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';

const FlipCard = ({ title, icon: Icon, text }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`flip-card ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
            onMouseLeave={() => setIsFlipped(false)} // Opcional: volver al frente al sacar el mouse
        >
            <div className="flip-card-inner">
                {/* Frente de la tarjeta */}
                <div className="flip-card-front">
                    <div className="icon-box">
                        <Icon size={40} color="white" />
                    </div>
                    <h3>{title}</h3>
                    <span className="tap-hint">Ver más +</span>
                </div>

                {/* Dorso de la tarjeta */}
                <div className="flip-card-back">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

const WhoWeAre = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <span className="section-tag">¿Quiénes Somos?</span>
                    <h2 className="section-title">EXPERTOS EN LOGÍSTICA <br /> & DIGITAL SUPPLY CHAIN</h2>
                    <p className="about-lead">
                        Transformamos la complejidad de la cadena de suministro en ventajas competitivas reales mediante disrupción tecnológica y experiencia operativa.
                    </p>
                </div>

                <div className="features-grid">
                    <FlipCard
                        title="MISIÓN"
                        icon={TrendingUp}
                        text="Transformar la gestión logística mediante soluciones digitales innovadoras que optimicen procesos y potencien la rentabilidad de nuestros clientes."
                    />
                    <FlipCard
                        title="VISIÓN"
                        icon={Target}
                        text="Ser referentes indiscutidos en la integración de tecnología y logística en la región, impulsando la evolución hacia cadenas de suministro inteligentes."
                    />
                    <FlipCard
                        title="OBJETIVOS"
                        icon={ShieldCheck}
                        text="Maximizar la eficiencia operativa, reducir costos ocultos, implementar tecnologías escalables y garantizar decisiones basadas en datos precisos."
                    />
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
