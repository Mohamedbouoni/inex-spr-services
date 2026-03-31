import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import './QuoteEstimator.css';

const services = [
  { id: 'peinture', title: 'Peinture Intérieure', basePrice: 25 }, // per m2 approx
  { id: 'sol', title: 'Revêtement de Sol', basePrice: 40 },
  { id: 'renovation', title: 'Rénovation Complète', basePrice: 800 }, // per m2 approx
];

const conditions = [
  { id: 'neuf', title: 'Neuf / Bon État', multiplier: 1 },
  { id: 'renovation', title: 'À Préparer', multiplier: 1.5 },
  { id: 'lourd', title: 'Dégât important', multiplier: 2.2 },
];

export default function QuoteEstimator() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    serviceId: '',
    surface: 50,
    conditionId: '',
    email: '',
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const calculateEstimate = () => {
    const service = services.find((s) => s.id === selections.serviceId);
    const condition = conditions.find((c) => c.id === selections.conditionId);
    if (!service || !condition) return { min: 0, max: 0 };

    const baseCost = selections.surface * service.basePrice * condition.multiplier;
    return {
      min: Math.round(baseCost * 0.9),
      max: Math.round(baseCost * 1.1),
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="estimator" className="section estimator-section">
      <div className="container">
        <div className="estimator-wrapper">
          <div className="estimator-header">
            <div className="icon-wrap"><Calculator size={32} /></div>
            <h2>Estimateur de Devis Instantané</h2>
            <p>Obtenez une idée de votre budget en moins de 2 minutes.</p>
          </div>

          <div className="estimator-body">
            {/* Progress Bar */}
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
            </div>

            {/* Step 1: Service */}
            {step === 1 && (
              <div className="step-content animate-in">
                <h3>Quel est votre projet ?</h3>
                <div className="grid-cards">
                  {services.map((s) => (
                    <div 
                      key={s.id} 
                      className={`card-select ${selections.serviceId === s.id ? 'active' : ''}`}
                      onClick={() => setSelections({ ...selections, serviceId: s.id })}
                    >
                      <CheckCircle2 className="card-check" size={24} />
                      <h4>{s.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Surface */}
            {step === 2 && (
              <div className="step-content animate-in">
                <h3>Quelle est la surface concernée ? (en m²)</h3>
                <div className="slider-wrapper">
                  <span className="surface-value">{selections.surface} m²</span>
                  <input 
                    type="range" 
                    min="10" 
                    max="300" 
                    step="5"
                    className="surface-slider"
                    value={selections.surface} 
                    onChange={(e) => setSelections({ ...selections, surface: Number(e.target.value) })}
                  />
                  <div className="slider-labels">
                    <span>Petit</span>
                    <span>Grand</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Condition */}
            {step === 3 && (
              <div className="step-content animate-in">
                <h3>Quel est l'état actuel des supports ?</h3>
                <div className="grid-cards row">
                  {conditions.map((c) => (
                    <div 
                      key={c.id} 
                      className={`card-select ${selections.conditionId === c.id ? 'active' : ''}`}
                      onClick={() => setSelections({ ...selections, conditionId: c.id })}
                    >
                      <CheckCircle2 className="card-check" size={24} />
                      <h4>{c.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Result */}
            {step === 4 && (
              <div className="step-content animate-in result-step">
                <div className="result-card">
                  <h3>Estimation de votre projet</h3>
                  <div className="price-range">
                    <span className="price">{estimate.min.toLocaleString('fr-FR')} €</span>
                    <span className="separator">à</span>
                    <span className="price">{estimate.max.toLocaleString('fr-FR')} €</span>
                  </div>
                  <p className="disclaimer">*Ceci est une estimation TTC à titre indicatif. Pour un devis précis, veuillez renseigner votre email ci-dessous.</p>
                  
                  <div className="lead-capture">
                    <input 
                      type="email" 
                      placeholder="Votre adresse email" 
                      value={selections.email}
                      onChange={(e) => setSelections({ ...selections, email: e.target.value })}
                    />
                    <button className="btn btn-primary lead-btn">Recevoir ce devis estimatif</button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="step-actions">
              {step > 1 && step < 4 && (
                <button className="btn btn-outline" onClick={handleBack} style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Retour</button>
              )}
              {step < 4 && (
                <button 
                  className="btn btn-primary" 
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selections.serviceId) ||
                    (step === 3 && !selections.conditionId)
                  }
                  style={{ marginLeft: 'auto' }}
                >
                  Suivant <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
