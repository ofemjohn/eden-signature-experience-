import { motion } from 'framer-motion';
import founderImg from '../assets/images/about-luxury-details.png';
import heroImg from '../assets/images/hero-wedding.png';
import './About.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

export default function About() {
  const values = [
    { title: 'Elegance', desc: 'We elevate every detail to create experiences that exude sophistication and beauty.' },
    { title: 'Precision', desc: 'Meticulous planning and flawless execution are the hallmarks of every Eden event.' },
    { title: 'Warmth', desc: 'We treat every client like family, bringing personal care to every interaction.' },
    { title: 'Creativity', desc: 'We push boundaries to design events that are as unique as the people they celebrate.' },
  ];

  const journey = [
    { step: '01', title: 'Personalized Consultation', text: 'We begin by deeply understanding your vision, preferences, and the unique story you wish to tell.' },
    { step: '02', title: 'Bespoke Design Concept', text: 'Our team crafts a comprehensive, one-of-a-kind aesthetic that perfectly aligns with your brand or personal style.' },
    { step: '03', title: 'Meticulous Curation', text: 'We source the finest venues, premier vendors, and exclusive materials to bring the concept to life.' },
    { step: '04', title: 'Precision Planning', text: 'Every logistical detail, timeline, and contingency is orchestrated with absolute precision.' },
    { step: '05', title: 'Flawless Execution', text: 'On the day of your event, we seamlessly manage every moving part so you can be fully present.' },
    { step: '06', title: 'The Eden Memory', text: 'We ensure the final wrap-up is just as elegant, leaving you with nothing but perfect memories.' },
  ];

  return (
    <div className="about-page">
      <section className="page-hero" id="about-hero">
        <img src={heroImg} alt="About Eden" className="page-hero-bg" />
        <div className="page-hero-overlay" />
        <motion.div className="page-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="overline">Who We Are</p>
          <h1>About Eden</h1>
        </motion.div>
      </section>

      <section className="about-intro section">
        <div className="container about-intro-grid">
          <motion.div className="about-img-wrap" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img src={founderImg} alt="Founder of Eden Signature Experience" />
          </motion.div>
          <motion.div className="about-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="overline">Our Story</p>
            <h2>A Passion for Extraordinary Moments</h2>
            <p>Eden Signature Experience was born from a simple belief: that every milestone in life deserves to be celebrated with intention, beauty, and joy. What began as a passion for curating unforgettable moments has grown into a full-service event management firm trusted by couples, corporations, and discerning clients alike.</p>
            <p>Our founder's vision was clear from day one — to create a company where artistry meets logistics, where every touchpoint reflects warmth, and where clients can trust that their most important celebrations are in expert hands.</p>
            <p>Today, we continue that mission with a growing team of creative professionals who share an unwavering commitment to excellence.</p>
          </motion.div>
        </div>
      </section>

      <section className="values-section section">
        <div className="container">
          <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="overline">What Guides Us</p>
            <h2>Our Core Values</h2>
          </motion.div>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div className="value-card" key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="value-num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section section">
        <div className="container">
          <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="overline">Our Approach</p>
            <h2>The Eden Standard</h2>
          </motion.div>
          <div className="timeline">
            {journey.map((j, i) => (
              <motion.div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">Phase {j.step}</span>
                  <h4 style={{marginBottom: '0.5rem', color: 'var(--color-primary)', fontSize: '1.2rem'}}>{j.title}</h4>
                  <p>{j.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
