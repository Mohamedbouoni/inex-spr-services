import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ArrowRight, Paintbrush, Hammer, Image as ImageIcon, Ruler } from 'lucide-react';
import './index.css';
import QuoteEstimator from './QuoteEstimator';
import './QuoteEstimator.css';
import ComparisonSlider from './ComparisonSlider';
import './ComparisonSlider.css';
import ProcessTimeline from './ProcessTimeline';
import './ProcessTimeline.css';
import ServiceModal from './ServiceModal';
import './ServiceModal.css';
import { Star, ShieldCheck, Leaf, Award, Quote } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicesData = [
    {
      id: 'renovation',
      title: 'Rénovation Globale',
      image: '/service_renovation_1774959912526.png',
      icon: <Hammer size={32} />,
      longDesc: "Notre service de rénovation clé en main transforme intégralement vos espaces. Nous gérons l'ensemble de la coordination technique, du gros œuvre aux finitions décoratives les plus fines.",
      features: ["Coordination de chantier", "Maçonnerie légère & Plâtrerie", "Optimisation de l'espace", "Rénovation énergétique"],
      materials: ["Plâtre haute dureté", "Isolants biosourcés", "Menuiseries sur mesure", "Éclairage LED intégré"]
    },
    {
      id: 'peinture',
      title: 'Peinture Intérieure',
      image: '/service_painting_1774959758396.png',
      icon: <Paintbrush size={32} />,
      longDesc: "Plus qu'une simple application, nous créons des ambiances. Nous maîtrisons les finitions mates, satinées et laquées, ainsi que les enduits décoratifs complexes.",
      features: ["Préparation soignée des supports", "Peinture Airless ou traditionnelle", "Enduits à la chaux & Stucco", "Conseils colorimétriques"],
      materials: ["Peintures A+ sans odeur", "Pigments naturels", "Vernis haute résistance", "Toiles de verre techniques"]
    },
    {
      id: 'sol',
      title: 'Revêtements de Sols',
      image: '/service_flooring_1774959812892.png',
      icon: <Ruler size={32} />,
      longDesc: "Le sol est la fondation de votre décoration. Nous posons tous types de revêtements avec une précision millimétrique pour une durabilité maximale.",
      features: ["Pose de parquets massifs & flottants", "Sols vinyles & PVC hautes performances", "Ragréage & préparation de surface", "Habillage d'escaliers"],
      materials: ["Chêne massif certifié PEFC", "Sous-couches acoustiques", "Colles sans solvants", "Plinthes assorties"]
    }
  ];

  const openModal = (serviceId) => {
    const service = servicesData.find(s => s.id === serviceId);
    if (service) {
      setActiveModal(service);
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">
            <img src="/logo.png" alt="INEX SPR Logo" className="logo-img" />
          </a>
          <div className="nav-links">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
            <a href="#comparison" onClick={(e) => { e.preventDefault(); scrollTo('comparison'); }}>Réalisations</a>
            <a href="#method" onClick={(e) => { e.preventDefault(); scrollTo('method'); }}>Méthode</a>
            <a href="#estimator" onClick={(e) => { e.preventDefault(); scrollTo('estimator'); }}>Estimation</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>À Propos</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container relative">
          <div className="hero-content">
            <span className="hero-badge">Rénovation & Décoration d'Intérieur</span>
            <h1 className="hero-title">
              Transformez vos espaces avec <span>Précision</span> & <span>Élégance</span>.
            </h1>
            <p className="hero-desc">
              Experts en peinture et revêtements à Saint-Aubin-lès-Elbeuf. 
              Nous donnons vie à vos projets immobiliers et intérieurs professionnels.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
                Obtenir un Devis Gratuit
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline" onClick={() => scrollTo('services')}>
                Voir nos réalisations
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Comparison Slider Section */}
      <ComparisonSlider />

      {/* Interactive Quote Estimator Section */}
      <QuoteEstimator />

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">L'Artisanat au service de votre intérieur</h2>
              <p className="highlight-text">
                INEX SPR est votre partenaire de confiance pour la rénovation et l'embellissement de vos espaces de vie ou de travail.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Grâce à notre savoir-faire acquis sur de nombreux chantiers en Normandie, nous maîtrisons toutes les techniques de peinture, de pose de revêtements de sol et de murs, ainsi que la rénovation globale. 
                Notre engagement ? Des finitions impeccables et un chantier propre.
              </p>
              <button className="btn btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', boxShadow: 'none' }} onClick={() => scrollTo('contact')}>
                Contactez-nous
              </button>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4>15+</h4>
                <p>Années d'Expérience</p>
              </div>
              <div className="stat-item">
                <h4>500+</h4>
                <p>Projets Réalisés</p>
              </div>
              <div className="stat-item">
                <h4>100%</h4>
                <p>Clients Satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio (Bento Grid) */}
      <section id="services" className="section services">
        <div className="container">
          <h2 className="section-title">Nos Services & Réalisations</h2>
          <p className="section-subtitle">
            Découvrez nos spécialités en neuf comme en rénovation. Chaque projet est une signature.
          </p>

          <div className="bento-grid">
            {/* Bento Item 1: Large Parallax */}
            <div className="bento-item bento-large" onClick={() => openModal('renovation')}>
              <img src="/service_renovation_1774959912526.png" alt="Rénovation Complète" className="bento-bg" />
              <div className="bento-content">
                <div className="bento-icon"><Hammer size={24} /></div>
                <h3>Rénovation Globale</h3>
                <p>De la démolition aux finitions, nous coordonnons l'ensemble de votre rénovation avec une attention obsessionnelle aux détails.</p>
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="bento-item" onClick={() => openModal('peinture')}>
              <img src="/service_painting_1774959758396.png" alt="Peinture Intérieure" className="bento-bg" />
              <div className="bento-content">
                <div className="bento-icon"><Paintbrush size={24} /></div>
                <h3>Peinture Intérieure</h3>
                <p>Finitions parfaites, laques, vernis et peintures écologiques.</p>
              </div>
            </div>

            {/* Bento Item 3 */}
            <div className="bento-item" onClick={() => openModal('sol')}>
              <img src="/service_flooring_1774959812892.png" alt="Revêtements de sols" className="bento-bg" />
              <div className="bento-content">
                <div className="bento-icon"><Ruler size={24} /></div>
                <h3>Revêtements de Sols</h3>
                <p>Pose de parquet, moquette, sol PVC, lino et carrelage.</p>
              </div>
            </div>
            
            {/* Additional Text Blocks that look clean */}
            <div className="bento-item" style={{ backgroundColor: 'var(--primary)' }}>
              <div className="bento-content" style={{ transform: 'none' }}>
                <div className="bento-icon" style={{ background: 'var(--white)', color: 'var(--primary)' }}><ImageIcon size={24} /></div>
                <h3 style={{ color: 'var(--white)' }}>Revêtements Muraux</h3>
                <p style={{ opacity: 1, maxHeight: 'none', color: 'rgba(255,255,255,0.7)', transform: 'none' }}>Pose de papier peint, toile de verre, enduits décoratifs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <ProcessTimeline />

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">Confiance & Satisfaction</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Nos clients parlent de notre métier. La meilleure preuve de notre savoir-faire reste votre satisfaction.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars"><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /></div>
              <p className="testimonial-text">"Une équipe ponctuelle et très professionnelle. La peinture de mon salon est impeccable, sans aucune bavure. Je recommande INEX SPR les yeux fermés."</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>Marc Dubois</strong>
                  <span>Propriétaire à Elbeuf</span>
                </div>
              </div>
              <Quote className="quote-icon" size={40} />
            </div>

            <div className="testimonial-card">
              <div className="stars"><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /></div>
              <p className="testimonial-text">"Remise à neuf complète de mon appartement. Le parquet chevron est magnifique. Merci pour les conseils sur le choix des teintes !"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>Sophie Laurent</strong>
                  <span>Architecte d'Intérieur</span>
                </div>
              </div>
              <Quote className="quote-icon" size={40} />
            </div>

            <div className="testimonial-card">
              <div className="stars"><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /><Star size={16} fill="var(--accent)" stroke="none" /></div>
              <p className="testimonial-text">"Très satisfaite pour le revêtement de sol de ma boutique. Travail rapide et propre. Le résultat est encore mieux que ce que j'imaginais."</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>Julie Martin</strong>
                  <span>Commerçante</span>
                </div>
              </div>
              <Quote className="quote-icon" size={40} />
            </div>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="badge-item">
              <ShieldCheck size={32} />
              <div className="badge-text">
                <h4>Garantie Décennale</h4>
                <p>Vos travaux protégés pour 10 ans</p>
              </div>
            </div>
            <div className="badge-item">
              <Leaf size={32} />
              <div className="badge-text">
                <h4>Eco-Responsable</h4>
                <p>Peintures & matériaux certifiés A+</p>
              </div>
            </div>
            <div className="badge-item">
              <Award size={32} />
              <div className="badge-text">
                <h4>Savoir-Faire Artisanal</h4>
                <p>Maîtrise technique et finitions luxe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="contact-info">
              <h2>Prêt à sublimer<br/>votre intérieur ?</h2>
              <p>Contactez-nous aujourd'hui pour une estimation gratuite et détaillée de votre projet de rénovation.</p>

              <div className="info-wrap" style={{ marginTop: '3rem' }}>
                <div className="info-item">
                  <MapPin className="info-icon" size={24} />
                  <div className="info-text">
                    <h4>Notre Siège</h4>
                    <p>76410 Saint-Aubin-lès-Elbeuf, France</p>
                  </div>
                </div>

                <div className="info-item">
                  <Phone className="info-icon" size={24} />
                  <div className="info-text">
                    <h4>Téléphone</h4>
                    <p>+33 (0) 6 XX XX XX XX</p>
                  </div>
                </div>

                <div className="info-item">
                  <Mail className="info-icon" size={24} />
                  <div className="info-text">
                    <h4>Email</h4>
                    <p>contact@inexspr.fr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Nom / Entreprise</label>
                  <input type="text" id="name" className="form-input" placeholder="Votre nom" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-input" placeholder="votre@email.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Parlez-nous de votre projet</label>
                  <textarea id="message" className="form-input" placeholder="Je souhaite rénover..."></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo-wrap">
              <img src="/logo.png" alt="INEX SPR Logo" className="footer-logo-img" />
            </div>
            <p>© {new Date().getFullYear()} INEX SPR Services Peinture Revêtement. Tous droits réservés. | Designed with creativity.</p>
          </div>
        </div>
      </footer>
      {/* UI Modals */}
      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={activeModal} 
      />
    </div>
  );
}

export default App;
