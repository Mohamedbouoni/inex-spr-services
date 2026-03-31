import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import './ServiceModal.css';

export default function ServiceModal({ isOpen, onClose, service }) {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container animate-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-content">
          <div className="modal-image-wrap">
            <img src={service.image} alt={service.title} />
            <div className="overlay-gradient"></div>
            <div className="modal-icon-wrap">
              {service.icon}
            </div>
          </div>

          <div className="modal-details">
            <span className="modal-badge">Information Détaillée</span>
            <h2>{service.title}</h2>
            <p className="modal-description">{service.longDesc}</p>
            
            <div className="modal-features">
              <h3>Notre Expertise</h3>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <div className="feature-check"><Check size={16} /></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-materials">
              <h3>Matériaux & Qualité</h3>
              <div className="materials-list">
                {service.materials.map((material, idx) => (
                  <span key={idx} className="material-tag">{material}</span>
                ))}
              </div>
            </div>

            <button className="btn btn-primary modal-btn" onClick={onClose}>
              J'ai un projet similaire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
