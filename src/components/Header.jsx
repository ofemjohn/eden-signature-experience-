import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Events' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/signature-service', label: 'Signature Services' },
    { to: '/contact', label: 'Inquire' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="main-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="Eden Signature Experience" className="logo-img" />
        </Link>
        <button className={`mobile-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {links.filter(l => l.to !== '/contact').map(l => (
              <li key={l.to}>
                <NavLink to={l.to} onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="nav-cta-btn">
                Inquire
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
