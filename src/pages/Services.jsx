import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, PartyPopper, Plane, CalendarDays, Monitor, ChevronDown, Flower2, Camera, UtensilsCrossed, Music } from 'lucide-react';
import heroImg from '../assets/images/gala-dinner.png';
import './Services.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    { icon: <Heart size={28} />, title: 'Wedding Planning', desc: 'From your first consultation to your last dance, we orchestrate every detail of your dream wedding with elegance and care.', inclusions: ['Venue sourcing', 'Vendor coordination', 'Design & decor concept', 'Timeline & logistics planning', 'Day-of coordination', 'Guest management'] },
    { icon: <Sparkles size={28} />, title: 'Corporate Events', desc: 'Conferences, product launches, galas, and team-building — we deliver polished, on-brand events that leave lasting impressions.', inclusions: ['Brand-aligned theming', 'AV & production management', 'Speaker & entertainment coordination', 'Budget management', 'Post-event reporting', 'Sponsorship integration'] },
    { icon: <PartyPopper size={28} />, title: 'Private Celebrations', desc: 'Milestone birthdays, anniversaries, and intimate gatherings designed with personal attention and creative flair.', inclusions: ['Theme conceptualization', 'Custom invitation design', 'Venue sourcing', 'Vendor coordination', 'Décor & floral design', 'Photography & videography'] },
    { icon: <Plane size={28} />, title: 'Destination Events', desc: 'Whether a beachside ceremony or a countryside retreat, we handle every logistical detail so you can simply arrive and celebrate.', inclusions: ['Location scouting', 'Travel logistics', 'Local vendor sourcing', 'Guest accommodation', 'Cultural integration', 'Welcome & farewell events'] },
    { icon: <CalendarDays size={28} />, title: 'Day-of Coordination', desc: 'Already planned your event? We step in on the big day to manage every moving part so you can be fully present.', inclusions: ['Final vendor confirmations', 'Timeline enforcement', 'Setup & breakdown oversight', 'Guest coordination', 'Emergency management', 'Bridal party support'] },
    { icon: <Monitor size={28} />, title: 'Virtual & Hybrid Events', desc: 'Seamless virtual and hybrid experiences that connect audiences worldwide without compromising production quality.', inclusions: ['Platform selection & setup', 'Technical production', 'Live streaming', 'Interactive features', 'Digital branding', 'Post-event analytics'] },
  ];

  const process = [
    { num: '01', title: 'Discovery Call', desc: 'We learn about your vision, style, and goals in a complimentary consultation.' },
    { num: '02', title: 'Concept & Proposal', desc: 'We develop a tailored concept and detailed proposal for your review.' },
    { num: '03', title: 'Design & Planning', desc: 'Our creative team brings the concept to life with mood boards, floor plans, and vendor curation.' },
    { num: '04', title: 'Coordination', desc: 'We manage every vendor, timeline, and logistic with precision.' },
    { num: '05', title: 'The Event', desc: 'We execute seamlessly so you can be fully immersed in the moment.' },
    { num: '06', title: 'Post-Event', desc: 'We handle wrap-up, vendor settlements, and deliver your event highlights.' },
  ];

  const addOns = [
    { icon: <Flower2 size={24} />, title: 'Floral Design' },
    { icon: <Camera size={24} />, title: 'Photography & Video' },
    { icon: <UtensilsCrossed size={24} />, title: 'Catering Liaison' },
    { icon: <Music size={24} />, title: 'Entertainment' },
  ];

  const faqs = [
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 6–12 months in advance for weddings and large-scale events. Corporate events can often be planned in 3–6 months, depending on scale.' },
    { q: 'Do you offer customized packages?', a: 'Absolutely. Every event is unique, and we tailor our services to fit your specific needs, vision, and budget.' },
    { q: 'What is your pricing structure?', a: 'Our pricing varies by event type and scope. After an initial consultation, we provide a detailed, transparent proposal with no hidden fees.' },
    { q: 'Do you travel for destination events?', a: 'Yes! We coordinate destination events both locally and internationally. Travel fees are discussed during the planning phase.' },
    { q: 'What happens if I need to cancel or postpone?', a: 'We understand that plans change. Our contract outlines flexible postponement and cancellation policies to protect your investment.' },
    { q: 'Can I be involved in the planning process?', a: 'Of course. We encourage collaboration. You can be as hands-on or hands-off as you prefer — we adapt to your style.' },
  ];

  return (
    <div className="services-page">
      <section className="page-hero">
        <img src={heroImg} alt="Our Services" className="page-hero-bg" />
        <div className="page-hero-overlay" />
        <motion.div className="page-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="overline">What We Do</p>
          <h1>Our Services</h1>
          <p className="hero-sub-p">We offer comprehensive event management and coordination, tailored to your vision and delivered with uncompromising attention to detail.</p>
        </motion.div>
      </section>

      <section className="services-cards section">
        <div className="container">
          <div className="services-full-grid">
            {services.map((s, i) => (
              <motion.div className="service-full-card" key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="sfc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="sfc-inclusions">{s.inclusions.map((inc, j) => <li key={j}>{inc}</li>)}</ul>
                <Link to="/contact" className="btn btn-primary sfc-btn">Inquire</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="eden-process section">
        <div className="container">
          <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="overline">Your Journey With Us</p>
            <h2>The Eden Process</h2>
          </motion.div>
          <div className="process-vertical">
            {process.map((p, i) => (
              <motion.div className="pv-step" key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="pv-num">{p.num}</div>
                <div className="pv-content"><h4>{p.title}</h4><p>{p.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="addons-section section">
        <div className="container">
          <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="overline">Enhancements</p>
            <h2>Add-On Services</h2>
          </motion.div>
          <div className="addons-grid">
            {addOns.map((a, i) => (
              <motion.div className="addon-card" key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="addon-icon">{a.icon}</div>
                <h4>{a.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="overline">Questions?</p>
            <h2>Frequently Asked</h2>
          </motion.div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <motion.div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </button>
                <div className="faq-a"><p>{f.a}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
