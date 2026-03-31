import React from 'react';
import { Coffee, ClipboardCheck, Brush, SearchCheck } from 'lucide-react';
import './ProcessTimeline.css';

const steps = [
  {
    id: 1,
    title: "Conseil & Devis",
    desc: "Nous analysons vos besoins lors d'un premier rendez-vous pour vous proposer une estimation précise et personnalisée.",
    icon: <Coffee size={32} />
  },
  {
    id: 2,
    title: "Préparation Méticuleuse",
    desc: "C'est l'étape la plus importante. Nous protégeons vos sols et meubles avant de préparer les supports pour une finition parfaite.",
    icon: <ClipboardCheck size={32} />
  },
  {
    id: 3,
    title: "Mise en Œuvre",
    desc: "Nos experts interviennent avec des matériaux de haute qualité (A+) pour réaliser vos travaux de peinture et de revêtement.",
    icon: <Brush size={32} />
  },
  {
    id: 4,
    title: "Contrôle Qualité",
    desc: "Un dernier tour du chantier est effectué avec vous pour s'assurer que chaque détail correspond à vos attentes.",
    icon: <SearchCheck size={32} />
  }
];

export default function ProcessTimeline() {
  return (
    <section id="method" className="section method-section">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '5rem' }}>
          <h2 className="section-title">Notre Méthode d'Excellence</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Un projet réussi repose sur une organisation rigoureuse. Voici comment nous donnons vie à vos idées.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {steps.map((step, index) => (
            <div key={step.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot">
                {step.icon}
              </div>
              <div className="timeline-content animate-in">
                <span className="step-number">Étape {step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
