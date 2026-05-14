import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import heroImg from '../assets/images/hero-wedding.png';
import corporateImg from '../assets/images/corporate-event.png';
import privateImg from '../assets/images/private-celebration.png';
import destinationImg from '../assets/images/destination-wedding.png';
import galaImg from '../assets/images/gala-dinner.png';
import portfolioImg from '../assets/images/portfolio-wedding.png';
import detailsImg from '../assets/images/wedding-details.png';
import './Portfolio.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const categories = ['All', 'Wedding', 'Corporate', 'Private', 'Destination'];

  const projects = [
    { id: 1, img: heroImg, title: 'The Anderson Wedding', location: 'Garden Estate, Atlanta', category: 'Wedding', year: '2025' },
    { id: 2, img: corporateImg, title: 'Tech Innovators Gala', location: 'Grand Ballroom, NYC', category: 'Corporate', year: '2024' },
    { id: 3, img: privateImg, title: 'Isabella\'s 30th Birthday', location: 'Villa Toscana, Malibu', category: 'Private', year: '2025' },
    { id: 4, img: destinationImg, title: 'Sunset Cove Ceremony', location: 'Turquoise Bay, Bahamas', category: 'Destination', year: '2024' },
    { id: 5, img: galaImg, title: 'Annual Charity Dinner', location: 'The Plaza, London', category: 'Corporate', year: '2023' },
    { id: 6, img: portfolioImg, title: 'The Johnson Reception', location: 'Heritage Hall, Chicago', category: 'Wedding', year: '2024' },
    { id: 7, img: detailsImg, title: 'Bespoke Details', location: 'Sonoma Valley, CA', category: 'Wedding', year: '2024' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      <section className="page-hero">
        <img src={portfolioImg} alt="Our Portfolio" className="page-hero-bg" />
        <div className="page-hero-overlay" />
        <motion.div className="page-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="overline">Our Work</p>
          <h1>Portfolio</h1>
          <p className="hero-sub-p">A curated selection of our most memorable events, showcasing our commitment to elegance, creativity, and flawless execution.</p>
        </motion.div>
      </section>

      <section className="portfolio-gallery section">
        <div className="container">
          <motion.div className="filter-bar" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {categories.map(c => (
              <button 
                key={c} 
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="gallery-masonry" initial="hidden" animate="visible" variants={stagger}>
            <AnimatePresence>
              {filteredProjects.map((p) => (
                <motion.div 
                  layout
                  key={p.id}
                  className="gallery-item"
                  variants={fadeUp}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImg(p)}
                >
                  <img src={p.img} alt={p.title} />
                  <div className="gallery-overlay">
                    <Search size={24} className="gallery-icon" />
                    <div className="gallery-info">
                      <h4>{p.title}</h4>
                      <p>{p.location} • {p.year}</p>
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
                <p>{selectedImg.category} • {selectedImg.location} • {selectedImg.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
