import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import heroImg from '../assets/images/about-luxury-details.png';
import './Contact.css';

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', type: '', count: '', date: '', budget: '', source: '', message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      navigate('/thank-you');
    }, 500);
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <img src={heroImg} alt="Contact Eden" className="page-hero-bg" />
        <div className="page-hero-overlay" />
        <motion.div className="page-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="overline">Get in Touch</p>
          <h1>Begin Planning</h1>
        </motion.div>
      </section>

      <section className="contact-section section">
        <div className="container contact-grid">
          <motion.div className="contact-info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>Let's Craft An Unforgettable Experience Together</h2>
            <p className="contact-intro">We take on a limited number of events each year to ensure our clients receive our undivided attention. Please fill out the form, and we will respond to all enquiries shortly.</p>
            
            <div className="contact-methods">
              <a href="mailto:info@edensignatureexperience.com" className="cm-item clickable-item">
                <Mail className="cm-icon" />
                <div>
                  <strong>Email</strong>
                  <span>info@edensignatureexperience.com</span>
                </div>
              </a>
              <a href="tel:+1234567890" className="cm-item clickable-item">
                <Phone className="cm-icon" />
                <div>
                  <strong>Phone</strong>
                  <span>+1 (234) 567-890</span>
                </div>
              </a>
              <div className="cm-item">
                <MapPin className="cm-icon" />
                <div>
                  <strong>Office</strong>
                  <span>Atlanta, GA (Available Worldwide)</span>
                </div>
              </div>
            </div>

            <div className="contact-whatsapp">
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-accent"><MessageSquare size={18} /> Chat on WhatsApp</a>
            </div>

            <div className="contact-socials">
              <p>Follow our journey</p>
              <div className="cs-links">
                <a href="https://instagram.com/edensignature.co" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                <a href="https://tiktok.com/@edensignature.co" target="_blank" rel="noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.78a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.19z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-wrap" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Event Type *</label>
                  <select name="type" required value={formData.type} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private">Private Celebration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Estimated Guest Count</label>
                  <input type="number" name="count" value={formData.count} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Preferred Date / Range</label>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Estimated Budget Range</label>
                  <select name="budget" value={formData.budget} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>How did you hear about us?</label>
                  <input type="text" name="source" value={formData.source} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group full-width">
                <label>Tell us about your vision *</label>
                <textarea name="message" rows="5" required value={formData.message} onChange={handleChange} placeholder="Share as many details as you'd like..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Submit Enquiry</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
