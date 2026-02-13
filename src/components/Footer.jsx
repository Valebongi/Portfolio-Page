const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-dark-gray)',
        color: 'var(--color-bg)',
        padding: 'var(--spacing-xl) 0',
        marginTop: 'auto'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Brand/Name */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold mb-2" style={{ color: 'white' }}>
              Valentino <span style={{ color: 'var(--color-accent)' }}>Bongiorno</span>
            </h5>
            <p className="small text-muted mb-0">
              Indie Game Developer & Designer
            </p>
          </div>

          {/* Right: Copyright & Links */}
          <div className="col-md-6 text-center text-md-end">
            <p className="small mb-2" style={{ color: '#999' }}>
              © {currentYear} Valentino Bongiorno. All rights reserved.
            </p>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="#home"
                className="small"
                style={{
                  color: '#999',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.target.style.color = '#999'}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: 'var(--spacing-lg) 0'
          }}
        />

        {/* Bottom Row: Legal Links */}
        <div className="text-center">
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a
              href="#privacy"
              className="small"
              style={{
                color: '#666',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#666'}
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="small"
              style={{
                color: '#666',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#666'}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
