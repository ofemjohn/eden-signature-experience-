import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Heart, Sparkles, CalendarDays, PartyPopper } from 'lucide-react';
import heroImg from '../assets/images/hero-wedding.png';
import destinationImg from '../assets/images/destination-wedding.png';
import galaImg from '../assets/images/gala-dinner.png';
import portfolioImg from '../assets/images/diverse-wedding-couple.png';
import bgWedding from '../assets/images/service-art-weddings.png';
import bgCorporate from '../assets/images/service-art-corporate.png';
import bgPrivate from '../assets/images/service-art-private.png';
import './Home.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Home() {
  const services = [
    { icon: <Heart size={32} />, title: 'Weddings', desc: 'From intimate ceremonies to grand celebrations, we bring your love story to life with elegance and precision.', bg: bgWedding },
    { icon: <Sparkles size={32} />, title: 'Corporate Events', desc: 'Impactful brand activations, galas, and conferences designed to exceed every expectation.', bg: bgCorporate },
    { icon: <PartyPopper size={32} />, title: 'Private Celebrations', desc: 'Milestone birthdays, anniversaries, and bespoke gatherings crafted with personal attention to detail.', bg: bgPrivate },
  ];

  const aestheticShowcase = [
    { img: portfolioImg, title: 'Timeless Settings', subtitle: 'Atmospheric Spaces' },
    { img: galaImg, title: 'Tablescapes', subtitle: 'Artful Dinner Details' },
    { img: destinationImg, title: 'Scenic Backdrops', subtitle: 'Exquisite Locations' },
    { img: heroImg, title: 'Bespoke Curation', subtitle: 'Tailored Concepts' },
  ];

  const steps = [
    { num: '01', title: 'Dream', desc: 'Share your vision with us' },
    { num: '02', title: 'Design', desc: 'We craft the perfect plan' },
    { num: '03', title: 'Execute', desc: 'Seamless, flawless delivery' },
    { num: '04', title: 'Celebrate', desc: 'Your unforgettable moment' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-overlay" />
        <video 
          className="hero-bg video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={heroImg}
        >
          <source src="https://player.vimeo.com/external/498801552.sd.mp4?s=d0382903ab794b65ddda5b1bb4cb8008a65fdb5b&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <motion.div className="hero-content" initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="hero-label" variants={fadeUp}>Full-Service Event Management</motion.p>
          <motion.h1 variants={fadeUp}>Curating Unforgettable<br />Experiences</motion.h1>
          <motion.p className="hero-sub" variants={fadeUp}>Crafting extraordinary, once-in-a-lifetime experiences with elegance, precision, and heart.</motion.p>
          <motion.div className="hero-ctas" variants={fadeUp}>
            <Link to="/portfolio" className="btn btn-primary">Explore Our Work</Link>
            <Link to="/contact" className="btn">Begin Planning</Link>
          </motion.div>
        </motion.div>
        <div className="hero-scroll-indicator">
          <span />
        </div>
      </section>

      {/* Intro Strip */}
      <motion.section className="intro-strip section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
        <div className="container intro-strip-inner">
          <div className="intro-accent-line" />
          <p className="intro-statement">At Eden Signature Experience, we believe that every celebration deserves to be extraordinary. We combine artistry with meticulous planning to create events that are as unique as the people they honor.</p>
          <blockquote className="intro-quote">"They didn't just plan our event — they understood our story."<cite>— Past Client</cite></blockquote>
        </div>
      </motion.section>

      {/* Services Snapshot */}
      <section className="services-snapshot section">
        <div className="container">
          <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="overline">What We Do</p>
            <h2>Our Services</h2>
          </motion.div>
          <motion.div className="services-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {services.map((s, i) => (
              <motion.div className="service-card text-card" key={i} variants={fadeUp} style={{ backgroundImage: `url(${s.bg})` }}>
                <div className="card-glass-overlay"></div>
                <div className="service-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="card-link">Learn More <ChevronRight size={16} /></Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Portfolio / The Eden Aesthetic */}
      <section className="featured-portfolio section">
        <div className="container">
          <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="overline">Design Vision</p>
            <h2>The Eden Aesthetic</h2>
          </motion.div>
          <motion.div className="portfolio-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {aestheticShowcase.map((p, i) => (
              <motion.div className={`portfolio-item ${i === 0 ? 'large' : ''}`} key={i} variants={fadeUp}>
                <img src={p.img} alt={p.title} />
                <div className="portfolio-overlay">
                  <h4>{p.title}</h4>
                  <p>{p.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="center-cta">
            <Link to="/portfolio" className="btn">Explore Design Vision</Link>
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="process-section section">
        <div className="container">
          <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="overline">How It Works</p>
            <h2>The Eden Process</h2>
          </motion.div>
          <motion.div className="process-steps" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {steps.map((s, i) => (
              <motion.div className="process-step" key={i} variants={fadeUp}>
                <span className="step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < steps.length - 1 && <div className="step-connector" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="cta-banner" id="cta-banner">
        <img src={galaImg} alt="Luxury event" className="cta-bg" />
        <div className="cta-overlay" />
        <motion.div className="cta-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2>Start Your Journey Today</h2>
          <p>Let's craft an unforgettable experience together.</p>
          <Link to="/contact" className="btn btn-accent">Begin Planning</Link>
        </motion.div>
      </section>
    </div>
  );
}
