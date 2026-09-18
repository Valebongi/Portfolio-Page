import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home',     id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Stack',    id: 'stack' },
    { label: 'About',    id: 'about' },
    { label: 'Contact',  id: 'contact' },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        transition: 'background-color 300ms ease, box-shadow 300ms ease',
        backgroundColor: scrolled ? 'var(--navbar-bg-scroll)' : 'var(--navbar-bg-top)',
        boxShadow: scrolled ? '0 1px 0 var(--border-color)' : 'none',
        backdropFilter: 'blur(12px)',
        zIndex: 1050,
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" style={{ fontSize: '1.4rem', color: 'var(--navbar-text)' }}>
          Valentino <span style={{ color: 'var(--accent)' }}>Bongiorno</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-1">
            {navLinks.map(({ label, id }) => (
              <li key={id} className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection(id)}
                  style={{
                    cursor: 'pointer',
                    fontWeight: 500,
                    color: 'var(--navbar-text)',
                    fontSize: '0.9rem',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '6px',
                    transition: 'background-color 150ms ease, color 150ms ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-glow)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* Theme Toggle */}
            <li className="nav-item ms-2">
              <button
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                style={{
                  background: 'none',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '6px 10px',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'border-color 150ms ease, color 150ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
