import { useState, useRef, useCallback, useEffect } from 'react';

const HERO_PHOTO = 'https://raw.githubusercontent.com/Valebongi/page-images/088aa92f836046c65ce61e3e78acdb5442755770/ChatGPT%20Image%2014%20may%202026%2C%2009_59_41.png';

const particles = [
  { left: '5%',  top: '20%', delay: '0s',    dur: '8s',   size: 2.5 },
  { left: '12%', top: '68%', delay: '1.8s',  dur: '10s',  size: 1.8 },
  { left: '30%', top: '85%', delay: '0.4s',  dur: '8.5s', size: 2 },
  { left: '42%', top: '12%', delay: '3.2s',  dur: '9.5s', size: 2.5 },
  { left: '8%',  top: '48%', delay: '2.1s',  dur: '11s',  size: 1.5 },
];

const Hero = () => {
  const heroRef = useRef(null);
  const [glow, setGlow] = useState({ x: 65, y: 40 });

  const [photoReady, setPhotoReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setPhotoReady(true);
    img.src = HERO_PHOTO;
  }, []);

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
        backgroundColor: '#0D0D14',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Photo anchored to the RIGHT — fades in once loaded ── */}
      <div className="hero-photo-right" style={{ opacity: photoReady ? 1 : 0, transition: 'opacity 0.9s ease' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${HERO_PHOTO})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left top',
        }} />
        {/* Blend left edge into dark background */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #0D0D14 0%, rgba(13,13,20,0.6) 25%, rgba(13,13,20,0.1) 55%, transparent 80%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* ── Dot pattern over full section ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '26px 26px',
        zIndex: 1, pointerEvents: 'none',
      }} />

      {/* ── Top + bottom edge fades ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, #0D0D14 0%, transparent 14%)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, #0D0D14 0%, transparent 18%)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* ── Mouse-following glow ── */}
      <div
        className="hero-mouse-glow"
        style={{ '--gx': `${glow.x}%`, '--gy': `${glow.y}%`, zIndex: 3 }}
      />

      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: p.left, top: p.top,
          width: p.size, height: p.size,
          borderRadius: '50%',
          backgroundColor: '#8B5CF6',
          opacity: 0.5,
          animation: `float-particle ${p.dur} ease-in-out ${p.delay} infinite`,
          zIndex: 3, pointerEvents: 'none',
        }} />
      ))}

      {/* ── Content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 4 }}>
        <div className="row">
          <div className="col-lg-7 fade-in-up">

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.12em' }}>00</span>
              <div style={{ height: '1px', width: '28px', backgroundColor: '#8B5CF6' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Software Engineer</span>
            </div>

            <h1 style={{ color: '#F1F5F9', lineHeight: 1.12, fontWeight: 700, fontSize: 'clamp(2.4rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>
              Valentino<br />
              <span className="hero-name-shimmer">Bongiorno.</span>
              <span className="hero-cursor" />
            </h1>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '460px', color: '#94A3B8', marginBottom: '2rem' }}>
              Construyo software para web, mobile y videojuegos.
              Integro IA donde realmente suma — no como buzzword, sino como herramienta concreta dentro del producto.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <button
                className="btn-primary-custom"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Proyectos
              </button>
              <button
                className="btn-secondary-custom"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                Sobre mí
              </button>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        /* Hero always dark regardless of theme toggle */
        #home {
          --bg-primary:   #0D0D14;
          --text-primary: #F1F5F9;
          --accent:       #8B5CF6;
        }
        [data-theme="light"] #home {
          background-color: #0D0D14 !important;
        }

        /* Photo container — right 70% of hero, person visible center-right */
        .hero-photo-right {
          position: absolute;
          top: 0; right: 0;
          width: 95%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        @media (max-width: 991px) {
          .hero-photo-right { width: 100%; opacity: 0.35; }
        }

        .hero-mouse-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(650px circle at var(--gx) var(--gy), rgba(139,92,246,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-name-shimmer {
          background: linear-gradient(90deg, #8B5CF6 0%, #A78BFA 35%, #DDD6FE 50%, #A78BFA 65%, #8B5CF6 100%);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: text-shimmer 5s linear infinite;
          display: inline-block;
          padding-bottom: 0.15em;
        }
        .hero-cursor {
          display: inline-block;
          width: 3px;
          height: 0.72em;
          background-color: #8B5CF6;
          margin-left: 6px;
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
          0%   { opacity: 0;   transform: translateY(0) scale(0.8); }
          20%  { opacity: 0.5; }
          80%  { opacity: 0.2; }
          100% { opacity: 0;   transform: translateY(-55px) scale(1.4); }
        }
        @media (max-width: 768px) {
          .hero-section { padding-top: 100px !important; padding-bottom: 80px !important; }
          .btn-primary-custom, .btn-secondary-custom { width: 100%; }
          /* Stronger dark overlay on mobile so text stays readable */
          #home::after {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(13,13,20,0.55);
            z-index: 1;
            pointer-events: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
