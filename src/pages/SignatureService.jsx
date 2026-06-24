import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, GlassWater, Camera, Check } from 'lucide-react';
import beverageImg from '../assets/images/signature-beverage.png';
import photoboothImg from '../assets/images/signature-photobooth.png';
import heroImg from '../assets/images/private-celebration.png';
import './SignatureService.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function SignatureService() {
  const beverageIncluded = [
    'Custom drink menu design',
    'Premium garnishes & presentation',
    'Signature cocktails & mocktails',
    'Professional beverage setup',
    'Event-themed drink options',
    'Corporate & social packages'
  ];

  const beveragePerfect = [
    'Corporate events',
    'Networking mixers',
    'Launch parties',
    'Weddings',
    'Bridal showers',
    'Birthday celebrations',
    'Private gatherings'
  ];

  const photoboothFeatures = [
    'High-quality digital photos',
    'Instant photo sharing',
    'Custom event branding',
    'Personalized photo overlays',
    'Fun props & accessories',
    'Guest engagement station'
  ];

  const photoboothPerfect = [
    'Corporate events',
    'Brand activations',
    'Weddings',
    'Birthday parties',
    'School events',
    'Holiday celebrations'
  ];

  const whyAdd = [
    'Increased guest engagement & interactive entertainment',
    'Social-media-worthy moments your guests will share',
    'Personalized experience aligned to your event theme',
    'Professional setup & coordination by our team',
    'Seamless integration with your overall event plan',
    'Memories that extend beyond the event itself'
  ];

  return (
    <div className="signature-service-page">
      {/* Hero Header */}
      <section className="page-hero">
        <img src={heroImg} alt="Signature Service Background" className="page-hero-bg" />
        <div className="page-hero-overlay" />
        <motion.div className="page-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="overline">Curated Add-Ons · Seamless Integration</p>
          <h1>Signature Service</h1>
          <p className="hero-sub-p">Looking for more than planning? Enhance your event with our signature guest experiences.</p>
        </motion.div>
      </section>

      {/* Intro Block */}
      <section className="sig-intro section">
        <div className="container sig-intro-inner">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sig-intro-content">
            <span className="overline">Guest Experience</span>
            <h2>Elevate your event with experiences guests won't stop talking about</h2>
            <p className="sig-lead-text">
              Thoughtfully curated services designed to engage your guests, create memorable moments, and leave a lasting impression — seamlessly woven into your event by our team.
            </p>
            <div className="sig-divider" />
            <p className="sig-body-text">
              Our signature services aren't separate offerings — they're extensions of your planning experience. Every detail, from drink presentation to photo delivery, is coordinated by the same team managing your event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Signature Services Catalog */}
      <section className="sig-catalog section">
        <div className="container">
          <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="overline">Offerings</span>
            <h2>Signature Services</h2>
          </motion.div>

          <div className="sig-cards-grid">
            {/* Card 1: Beverage */}
            <motion.div className="sig-service-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="sig-card-image-wrap">
                <img src={beverageImg} alt="Beverage Experience" className="sig-card-img" />
                <div className="sig-card-tag"><GlassWater size={16} /> Beverage Experience</div>
              </div>
              <div className="sig-card-body">
                <h3>Cocktail & Mocktail Experience</h3>
                <p className="sig-card-desc">
                  Crafted with creativity and presentation in mind, our beverage experiences are designed to be more than just drinks — they're conversation starters. Each menu is tailored to your event's theme, aesthetic, and guests.
                </p>
                <div className="sig-card-details">
                  <div className="sig-detail-col">
                    <h4>What's Included</h4>
                    <ul>
                      {beverageIncluded.map((item, idx) => (
                        <li key={idx}><Check size={14} className="check-icon" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="sig-detail-col">
                    <h4>Perfect For</h4>
                    <ul>
                      {beveragePerfect.map((item, idx) => (
                        <li key={idx}><span className="bullet-point">•</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Photobooth */}
            <motion.div className="sig-service-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="sig-card-image-wrap">
                <img src={photoboothImg} alt="Photo Booth Experience" className="sig-card-img" />
                <div className="sig-card-tag"><Camera size={16} /> Interactive Experience</div>
              </div>
              <div className="sig-card-body">
                <h3>Photo Booth Experience</h3>
                <p className="sig-card-desc">
                  Capture the energy and excitement of your event with an interactive photo booth your guests will love. Custom-branded, instantly shareable, and endlessly fun — it's the entertainment that doubles as a keepsake.
                </p>
                <div className="sig-card-details">
                  <div className="sig-detail-col">
                    <h4>Features</h4>
                    <ul>
                      {photoboothFeatures.map((item, idx) => (
                        <li key={idx}><Check size={14} className="check-icon" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="sig-detail-col">
                    <h4>Perfect For</h4>
                    <ul>
                      {photoboothPerfect.map((item, idx) => (
                        <li key={idx}><span className="bullet-point">•</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Add Section */}
      <section className="sig-why section">
        <div className="container">
          <div className="sig-why-grid">
            <motion.div className="sig-why-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="overline">Why Select Us</span>
              <h2>Why add a signature service?</h2>
              <p>
                Our services are carefully selected to enhance the guest experience while creating memorable moments that extend beyond the event itself.
              </p>
            </motion.div>
            <motion.div className="sig-why-list" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {whyAdd.map((item, idx) => (
                <motion.div key={idx} className="sig-why-item" variants={fadeUp}>
                  <div className="sig-why-icon-wrap"><Sparkles size={16} /></div>
                  <p>{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tailored Customization Section */}
      <section className="sig-tailored section">
        <div className="container">
          <motion.div className="sig-tailored-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="overline">Customization</span>
            <h2>Create a customized experience</h2>
            <p className="sig-tailored-lead">
              Looking for something unique? We work closely with clients to create tailored experiences that align with their vision, theme, and event objectives.
            </p>
            <p className="sig-tailored-body">
              Whether you're hosting an intimate gathering, a corporate function, or a large-scale celebration, our team can help curate the perfect combination of services to bring your event to life.
            </p>
            <h3 className="sig-tailored-signoff">We handle the coordination. You enjoy the moment.</h3>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" id="sig-cta-banner">
        <img src={beverageImg} alt="Luxury beverages" className="cta-bg" />
        <div className="cta-overlay" />
        <motion.div className="cta-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2>Ready to elevate your event?</h2>
          <p>Inquire today to discuss your vision and receive a customized proposal tailored to your event goals.</p>
          <Link to="/contact" className="btn btn-accent">Inquire about signature services ↗</Link>
        </motion.div>
      </section>
    </div>
  );
}
