import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import detailsImg from '../assets/images/wedding-details.png';
import luxuryDecorImg from '../assets/images/luxury-table-decor.png';
import blackCoupleImg from '../assets/images/black-wedding-couple.png';
import luxuryFloralsImg from '../assets/images/luxury-florals.png';
import luxuryStationeryImg from '../assets/images/luxury-stationery.png';
import portfolioImg from '../assets/images/diverse-wedding-couple.png';
import './Portfolio.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  const inspirations = [
    { id: 1, img: detailsImg, title: 'Bespoke Details', desc: 'Crafting unique tactile details that reflect personal narratives.' },
    { id: 2, img: luxuryDecorImg, title: 'Tablescapes & Curation', desc: 'Artful dinner pairings, customized linens, and lighting alignment.' },
    { id: 3, img: blackCoupleImg, title: 'Scenic Environments', desc: 'Sourcing venues that provide breathtaking backdrops worldwide.' },
    { id: 4, img: luxuryFloralsImg, title: 'Exquisite Florals', desc: 'Elegant botanicals selected for scent, texture, and visual impact.' },
    { id: 5, img: luxuryStationeryImg, title: 'Couture Stationery', desc: 'Custom calligraphy, gold-foil lettering, and hand-pressed wax seals that set the tone.' },
    { id: 6, img: portfolioImg, title: 'Timeless Settings', desc: 'Designing atmospheric spaces where lasting memories are formed.' }
  ];

  return (
    <div className="portfolio-page">
      <section className="page-hero">
        <img src={luxuryStationeryImg} alt="Our Design Philosophy" className="page-hero-bg" />
        <div className="page-hero-overlay" />
        <motion.div className="page-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="overline">Gallery</p>
          <h1>Portfolio</h1>
          <p className="hero-sub-p">Every extraordinary celebration begins with a single vision. We are preparing to unveil our signature catalog of events.</p>
        </motion.div>
      </section>

      {/* Under Curation Section */}
      <section className="curation-banner-section section">
        <div className="container">
          <motion.div className="curation-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="overline">Aesthetic Preview</span>
            <h2>Curating Our Signature Catalog</h2>
            <p className="curation-desc">
              We are currently designing our digital gallery to showcase the weddings, corporate galas, and bespoke celebrations that define the Eden Standard.
            </p>
            <div className="curation-action">
              <Link to="/contact" className="btn btn-primary">Inquire Now</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aesthetic Inspirations Grid */}
      <section className="portfolio-gallery section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="overline">Design Vision</span>
            <h3>The Eden Aesthetic</h3>
          </motion.div>

          <motion.div layout className="gallery-masonry" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <AnimatePresence>
              {inspirations.map((item) => (
                <motion.div 
                  layout
                  key={item.id}
                  className="gallery-item"
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImg(item)}
                >
                  <img src={item.img} alt={item.title} />
                  <div className="gallery-overlay">
                    <Search size={24} className="gallery-icon" />
                    <div className="gallery-info">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedImg(null)}>
              <X size={32} />
            </button>
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImg.img} alt={selectedImg.title} />
              <div className="lightbox-caption">
                <h3>{selectedImg.title}</h3>
                <p>{selectedImg.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
