const techStack = ['React', 'Node.js', 'TypeScript', 'JavaScript', 'Next.js', 'Git'];

const Hero = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center hero-section"
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '60px',
        background: '#0f0f0f',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle red glow — top right corner only */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(225, 6, 0, 0.09) 0%, transparent 65%)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">

          {/* Left: Text */}
          <div className="col-lg-6 fade-in-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#555', letterSpacing: '0.12em' }}>00</span>
              <div style={{ height: '1px', width: '28px', backgroundColor: '#E10600' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Software Engineer</span>
            </div>

            <h1 className="display-3 fw-bold mb-4" style={{ color: '#FFFFFF', lineHeight: 1.1 }}>
              Valentino<br />
              <span style={{ color: 'var(--color-accent)' }}>Bongiorno.</span>
            </h1>

            <p className="lead mb-4" style={{ fontSize: '1.15rem', lineHeight: 1.75, maxWidth: '480px', color: '#BBBBBB' }}>
              Construyo software para web, mobile y videojuegos.
              Integro IA donde realmente suma — no como buzzword, sino como herramienta concreta dentro del producto.
            </p>

            <div className="d-flex gap-3 flex-wrap mb-5">
              <button
                className="btn-primary-custom"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>

              <button
                className="btn-secondary-custom"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FFFFFF';
                  e.target.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#FFFFFF';
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="col-lg-6 d-none d-lg-flex flex-column gap-3 fade-in-up fade-in-delay-2">

            {/* Tech Stack Card */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <p style={{ color: '#888', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '14px', fontWeight: 600 }}>
                Tech Stack
              </p>
              <div className="d-flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      backgroundColor: 'rgba(225, 6, 0, 0.1)',
                      border: '1px solid rgba(225, 6, 0, 0.25)',
                      color: '#FFFFFF',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="d-flex gap-3">

              {/* Projects Card */}
              <div style={{
                flex: 1,
                backgroundColor: 'rgba(225, 6, 0, 0.07)',
                border: '1px solid rgba(225, 6, 0, 0.2)',
                borderRadius: '16px',
                padding: '24px'
              }}>
                <p style={{ color: '#888', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px', fontWeight: 600 }}>
                  Projects
                </p>
                <p style={{ color: '#FFFFFF', fontSize: '2.8rem', fontWeight: 700, margin: 0, lineHeight: 1 }}>2+</p>
                <p style={{ color: '#999', fontSize: '0.82rem', margin: '8px 0 0' }}>shipped to production</p>
              </div>

              {/* Status Card */}
              <div style={{
                flex: 1,
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '24px'
              }}>
                <p style={{ color: '#888', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px', fontWeight: 600 }}>
                  Status
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    flexShrink: 0,
                    animation: 'pulse-green 2s ease-in-out infinite'
                  }} />
                  <p style={{ color: '#FFFFFF', fontWeight: 600, margin: 0, fontSize: '0.95rem' }}>Available</p>
                </div>
                <p style={{ color: '#999', fontSize: '0.82rem', margin: '8px 0 0' }}>for new projects</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 6px rgba(34,197,94,0.5); }
          50% { box-shadow: 0 0 14px rgba(34,197,94,0.9); }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 100px !important;
            padding-bottom: 80px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .hero-section .d-flex.gap-3 {
            gap: 1rem !important;
            margin-top: 2rem !important;
            justify-content: center;
          }
          .hero-section h1 {
            font-size: 2rem !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-section .lead {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
          }
          .btn-primary-custom,
          .btn-secondary-custom {
            width: 100%;
            padding: 0.75rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
