import { motion } from 'framer-motion';
import founderImg from '../assets/images/founder-portrait.png';
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

  const milestones = [
    { year: '2018', text: 'Eden Signature Experience founded with a vision for luxury event planning' },
    { year: '2019', text: 'Coordinated our first 100-guest destination wedding' },
    { year: '2020', text: 'Pioneered virtual event coordination during the global pivot' },
    { year: '2021', text: 'Expanded to full-service corporate event management' },
    { year: '2023', text: 'Celebrated our 200th successful event milestone' },
    { year: '2025', text: 'Launched the Eden Signature Concierge — our premium bespoke tier' },
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
            <p className="overline">Our Journey</p>
            <h2>Milestones</h2>
          </motion.div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <motion.div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
