import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/private-celebration.png';
import './ThankYou.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

export default function ThankYou() {
  return (
    <div className="thank-you-page">
      <section className="ty-hero">
        <img src={heroImg} alt="Thank You" className="ty-bg" />
        <div className="ty-overlay" />
        <motion.div className="ty-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="overline">Enquiry Received</p>
          <h1>Thank You</h1>
          <p className="ty-text">Your vision is in good hands. We have received your details and our team will be in touch shortly to discuss the next steps.</p>
          <div className="ty-ctas">
            <Link to="/" className="btn btn-primary">Return Home</Link>
            <Link to="/blog" className="btn">Read Our Journal</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
