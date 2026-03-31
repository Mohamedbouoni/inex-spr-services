import React, { useState, useRef, useEffect } from 'react';
import './ComparisonSlider.css';

export default function ComparisonSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const x = clientX - left;
      const percentage = Math.max(0, Math.min(100, (x / width) * 100));
      setPosition(percentage);
    }
  };

  const onMouseMove = (e) => handleMove(e.clientX);
  const onTouchMove = (e) => handleMove(e.touches[0].clientX);

  return (
    <section id="comparison" className="section comparison-section">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">L'Impact de nos Interventions</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Glissez la barre pour observer la transformation radicale de nos chantiers. 
            La qualité se voit dans les détails.
          </p>
        </div>

        <div 
          className="slider-container" 
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          {/* After image (the 'finished' look) - will be at the bottom layer */}
          <div className="image-after">
            <img src="/after.png" alt="Après rénovation" />
            <span className="label label-after">Après</span>
          </div>

          {/* Before image (the 'messy' look) - clipped top layer */}
          <div 
            className="image-before" 
            style={{ width: `${position}%` }}
          >
            <img src="/before.png" alt="Avant rénovation" />
            <span className="label label-before">Avant</span>
          </div>

          {/* Drag handle */}
          <div 
            className="slider-handle" 
            style={{ left: `${position}%` }}
          >
            <div className="handle-line"></div>
            <div className="handle-circle">
              <div className="arrows">
                <span>←</span><span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
