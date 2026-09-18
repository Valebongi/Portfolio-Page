const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--bg-section-alt)',
      borderTop: '1px solid var(--border-color)',
      padding: 'var(--spacing-xl) 0',
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>
              Valentino <span style={{ color: 'var(--accent)' }}>Bongiorno</span>
            </h5>
            <p className="small mb-0" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em' }}>
              Software Engineer
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <p className="small mb-2" style={{ color: 'var(--text-muted)' }}>
              © {currentYear} Valentino Bongiorno. All rights reserved.
            </p>
            <a
              href="#home"
              className="small"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Back to Top ↑
            </a>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: 'var(--spacing-lg) 0' }} />

        <div className="text-center">
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            {['Privacy', 'Terms'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="small"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
