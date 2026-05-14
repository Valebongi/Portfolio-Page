import { useState, useRef, useCallback } from 'react';

const techStack = ['React', 'Node.js', 'TypeScript', 'Next.js', 'JavaScript', 'Git'];

const particles = [
  { left: '7%',  top: '22%', delay: '0s',    dur: '8s',  size: 2.5 },
  { left: '18%', top: '68%', delay: '1.8s',  dur: '10s', size: 1.8 },
  { left: '80%', top: '28%', delay: '0.6s',  dur: '11s', size: 3 },
  { left: '64%', top: '72%', delay: '2.4s',  dur: '9s',  size: 2 },
  { left: '91%', top: '48%', delay: '1.1s',  dur: '12s', size: 1.8 },
  { left: '52%', top: '12%', delay: '3.2s',  dur: '9.5s',size: 2.5 },
  { left: '38%', top: '83%', delay: '0.4s',  dur: '8.5s',size: 2 },
  { left: '73%', top: '55%', delay: '2s',    dur: '13s', size: 1.5 },
];

const Hero = () => {
  const heroRef = useRef(null);
  const [glow, setGlow] = useState({ x: 72, y: 28 });

  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="d-flex align-items-center hero-section"
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '60px',
        background: '#0f0f0f',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Mouse-following glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(700px circle at ${glow.x}% ${glow.y}%, rgba(225,6,0,0.07) 0%, transparent 65%)`,
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'background 0.15s ease',
      }} />

      {/* Static corner glow */}
      <div style={{
        position: 'absolute', top: '-15%', right: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(225,6,0,0.08) 0%, transparent 65%)',
        borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: p.left, top: p.top,
          width: p.size, height: p.size,
          borderRadius: '50%',
          backgroundColor: '#E10600',
          animation: `float-particle ${p.dur} ease-in-out ${p.delay} infinite`,
          zIndex: 0, pointerEvents: 'none',
        }} />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">

          {/* Left */}
          <div className="col-lg-6 fade-in-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#555', letterSpacing: '0.12em' }}>00</span>
              <div style={{ height: '1px', width: '28px', backgroundColor: '#E10600' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Software Engineer</span>
            </div>

            <h1 className="display-3 fw-bold mb-4" style={{ color: '#FFFFFF', lineHeight: 1.05 }}>
              Valentino<br />
              <span className="hero-name-shimmer">Bongiorno.</span>
              <span className="hero-cursor" />
            </h1>

            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '460px', color: '#BBBBBB' }}>
              Construyo software para web, mobile y videojuegos.
              Integro IA donde realmente suma — no como buzzword, sino como herramienta concreta dentro del producto.
            </p>

            <div className="d-flex gap-3 flex-wrap mb-5">
              <button
                className="btn-primary-custom"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Proyectos
              </button>
              <button
                className="btn-secondary-custom"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#FFFFFF'; e.target.style.color = '#000000'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#FFFFFF'; }}
              >
                Sobre mí
              </button>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="col-lg-6 d-none d-lg-flex flex-column gap-3 fade-in-up fade-in-delay-2">

            {/* Tech Stack Card */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '14px',
              padding: '22px',
              backdropFilter: 'blur(4px)',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', color: '#444', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px', fontWeight: 600 }}>
                Tech Stack
              </p>
              <div className="d-flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span key={tech} style={{
                    backgroundColor: 'rgba(225,6,0,0.08)',
                    border: '1px solid rgba(225,6,0,0.2)',
                    color: '#DDDDDD',
                    padding: '5px 13px',
                    borderRadius: '5px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    animation: `fade-in-badge 0.4s ease ${i * 0.07 + 0.6}s both`,
                  }}>{tech}</span>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="d-flex gap-3">
              <div style={{
                flex: 1,
                backgroundColor: 'rgba(225,6,0,0.06)',
                border: '1px solid rgba(225,6,0,0.18)',
                borderRadius: '14px',
                padding: '22px',
              }}>
                <p style={{ fontFamily: 'var(--font-mono)', color: '#444', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '10px', fontWeight: 600 }}>Proyectos</p>
                <p style={{ color: '#FFFFFF', fontSize: '2.6rem', fontWeight: 700, margin: 0, lineHeight: 1 }}>2+</p>
                <p style={{ color: '#666', fontSize: '0.78rem', margin: '6px 0 0', fontFamily: 'var(--font-mono)' }}>en producción</p>
              </div>

              <div style={{
                flex: 1,
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                padding: '22px',
              }}>
                <p style={{ fontFamily: 'var(--font-mono)', color: '#444', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '10px', fontWeight: 600 }}>Estado</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: 9, height: 9, borderRadius: '50%',
                    backgroundColor: '#22c55e', flexShrink: 0,
                    animation: 'pulse-green 2s ease-in-out infinite',
                  }} />
                  <span style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem' }}>Disponible</span>
                </div>
                <p style={{ color: '#666', fontSize: '0.78rem', margin: '6px 0 0', fontFamily: 'var(--font-mono)' }}>nuevos proyectos</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .hero-name-shimmer {
          background: linear-gradient(90deg, #E10600 0%, #FF5555 35%, #FFaaaa 50%, #FF5555 65%, #E10600 100%);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: text-shimmer 5s linear infinite;
          display: inline-block;
        }
        .hero-cursor {
          display: inline-block;
          width: 3px;
          height: 0.75em;
          background-color: #E10600;
          margin-left: 5px;
          vertical-align: middle;
          border-radius: 1px;
          animation: blink-cursor 1.1s step-end infinite;
        }
        @keyframes text-shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes float-particle {
          0%   { opacity: 0;   transform: translateY(0)    scale(0.8); }
          20%  { opacity: 0.5; }
          80%  { opacity: 0.2; }
          100% { opacity: 0;   transform: translateY(-55px) scale(1.4); }
        }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 5px rgba(34,197,94,0.4); }
          50%       { box-shadow: 0 0 14px rgba(34,197,94,0.85); }
        }
        @keyframes fade-in-badge {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-section { padding-top:100px !important; padding-bottom:80px !important; padding-left:20px !important; padding-right:20px !important; }
          .hero-section h1 { font-size:2rem !important; }
          .hero-section .lead { font-size:1rem !important; }
          .btn-primary-custom, .btn-secondary-custom { width:100%; padding:0.75rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
