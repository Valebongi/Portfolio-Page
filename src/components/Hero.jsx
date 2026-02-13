import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Geometric Pattern Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(45deg, rgba(225, 6, 0, 0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(225, 6, 0, 0.05) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(225, 6, 0, 0.05) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(225, 6, 0, 0.05) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
          opacity: 0.3,
          zIndex: 0
        }}
      />

      {/* Glowing Red Accent Lines */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '3px',
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
          boxShadow: '0 0 20px rgba(225, 6, 0, 0.5)',
          zIndex: 0,
          animation: 'pulse 3s ease-in-out infinite'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '5%',
          width: '250px',
          height: '3px',
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
          boxShadow: '0 0 20px rgba(225, 6, 0, 0.5)',
          zIndex: 0,
          animation: 'pulse 3s ease-in-out infinite 1.5s'
        }}
      />

      {/* Circular Gradient Accents */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(225, 6, 0, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Left: Text Content */}
          <div className="col-lg-6 fade-in-up">
            <h1 className="display-3 fw-bold mb-4" style={{ color: '#FFFFFF' }}>
              Valentino Bongiorno
              <br />
              <span style={{ color: 'var(--color-accent)' }}>Game Developer</span>
            </h1>

            <p className="lead mb-4" style={{ fontSize: '1.25rem', lineHeight: 1.75, maxWidth: '500px', color: '#CCCCCC' }}>
              Crafting immersive experiences that blend storytelling, mechanics, and art.
              Building games that respect your time and intelligence.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <button
                className="btn-primary-custom"
                onClick={() => document.getElementById('games').scrollIntoView({ behavior: 'smooth' })}
              >
                View Games
              </button>

              <button
                className="btn-secondary-custom"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                style={{
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF'
                }}
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

          {/* Right: Abstract Visual Element with Red Accents */}
          <div className="col-lg-6 d-none d-lg-block text-center fade-in-up fade-in-delay-2">
            <div
              style={{
                width: '400px',
                height: '400px',
                margin: '0 auto',
                position: 'relative'
              }}
            >
              {/* Outer rotating ring */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '350px',
                  height: '350px',
                  border: '2px solid rgba(225, 6, 0, 0.3)',
                  borderRadius: '50%',
                  animation: 'rotate 20s linear infinite'
                }}
              />

              {/* Middle ring */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '280px',
                  height: '280px',
                  border: '2px solid rgba(225, 6, 0, 0.5)',
                  borderRadius: '50%',
                  borderTopColor: 'var(--color-accent)',
                  animation: 'rotate-reverse 15s linear infinite'
                }}
              />

              {/* Center circle with logo */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '280px',
                  height: '280px',
                  background: 'linear-gradient(135deg, #1A1A1A 0%, #000000 100%)',
                  borderRadius: '50%',
                  boxShadow: '0 20px 60px rgba(225, 6, 0, 0.3), inset 0 0 40px rgba(225, 6, 0, 0.1)',
                  border: '4px solid var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={logo}
                  alt="Valentino Bongiorno Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 15px rgba(225, 6, 0, 0.6))'
                  }}
                />
              </div>

              {/* Glowing dots */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '8px',
                  height: '8px',
                  background: 'var(--color-accent)',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px rgba(225, 6, 0, 0.8)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '8px',
                  height: '8px',
                  background: 'var(--color-accent)',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px rgba(225, 6, 0, 0.8)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
