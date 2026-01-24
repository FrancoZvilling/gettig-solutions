import { useState } from 'react';
import './Services.css';
import { ClipboardList, Settings, Truck, BarChart3, GraduationCap } from 'lucide-react';

const FlipCard = ({ icon, title, desc }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`service-card flip-card ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className="flip-card-inner">
                {/* Frente */}
                <div className="flip-card-front">
                    <div className="service-icon">
                        {icon}
                    </div>
                    <h3 className="service-title">{title}</h3>
                    <span className="tap-hint">Ver detalle +</span>
                </div>

                {/* Dorso */}
                <div className="flip-card-back">
                    <h3 className="service-title">{title}</h3>
                    <p className="service-desc">{desc}</p>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    const services = [
        {
            icon: <ClipboardList size={32} />,
            title: "Diagnóstico Logístico Integral",
            desc: "Analizamos el estado actual de tus operaciones para detectar cuellos de botella y oportunidades."
        },
        {
            icon: <Settings size={32} />,
            title: "Optimización de Procesos",
            desc: "Rediseñamos flujos de trabajo para ganar eficiencia y reducir tiempos muertos."
        },
        {
            icon: <Truck size={32} />,
            title: "Digital Supply Chain",
            desc: "Digitalización de operaciones. Implementación de tecnologías para la trazabilidad."
        },
        {
            icon: <BarChart3 size={32} />,
            title: "KPIs y Gestión",
            desc: "Implementación de tableros de control para tomar decisiones basadas en datos reales."
        },
        {
            icon: <GraduationCap size={32} />,
            title: "Capacitación In Company",
            desc: "Formamos a tu equipo para que puedan sostener las mejoras en el tiempo."
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <span className="section-tag">Nuestros Servicios</span>
                    <h2 className="section-title">Qué hacemos por tu empresa</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <FlipCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            desc={service.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
