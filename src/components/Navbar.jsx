import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      style={{
        transition: 'all 300ms ease-in-out',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(0, 0, 0, 0.9)',
        boxShadow: scrolled ? '0 2px 12px rgba(0, 0, 0, 0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(10px)',
        zIndex: 1050
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" style={{ fontSize: '1.5rem' }}>
          <span style={{ color: 'var(--color-accent)' }}>Valentino</span>
          <span style={{ color: scrolled ? '#000000' : '#FFFFFF' }}> Bongiorno</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection('home')}
                style={{ cursor: 'pointer', fontWeight: 500 }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection('projects')}
                style={{ cursor: 'pointer', fontWeight: 500 }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection('about')}
                style={{ cursor: 'pointer', fontWeight: 500 }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection('contact')}
                style={{ cursor: 'pointer', fontWeight: 500 }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
