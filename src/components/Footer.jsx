import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import './Footer.css';

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-link">
              <img src="/logo.png" alt="Eden Signature Experience" className="footer-logo" />
            </Link>
            <p className="footer-tagline">Curating extraordinary moments with elegance and precision.</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Navigate</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Enquire</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="mailto:info@edensignatureexperience.com" className="icon-link"><Mail size={14} /> info@edensignatureexperience.com</a></li>
              <li><a href="tel:+1234567890" className="icon-link"><Phone size={14} /> +1 (234) 567-890</a></li>
              <li><a href="https://instagram.com/edensignature.co" target="_blank" rel="noreferrer" className="icon-link"><InstagramIcon size={14} /> @edensignature.co</a></li>
            </ul>
            <div className="footer-socials">
              <a href="https://instagram.com/edensignature.co" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={20} /></a>
              <a href="https://tiktok.com/@edensignature.co" target="_blank" rel="noreferrer" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.78a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.19z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Eden Signature Experience. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
