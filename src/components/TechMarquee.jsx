const row1 = [
  { name: 'React' }, { name: 'TypeScript' }, { name: 'Node.js' },
  { name: 'Next.js' }, { name: 'JavaScript' }, { name: 'Python' },
  { name: 'C#' }, { name: 'HTML / CSS' }, { name: 'Vite' }, { name: 'Git' },
];

const row2 = [
  { name: 'Claude API', ai: true }, { name: 'OpenAI API', ai: true },
  { name: 'Cursor', ai: true }, { name: 'GitHub Copilot', ai: true },
  { name: 'Vercel AI SDK', ai: true }, { name: 'Unity' },
  { name: 'Figma' }, { name: 'Docker' }, { name: 'Vercel' },
];

const MarqueeTrack = ({ items, direction = 'left', speed = 35 }) => {
  const doubled = [...items, ...items];
  const duration = `${items.length * speed}s`;
  const animation = direction === 'left'
    ? `marquee-left ${duration} linear infinite`
    : `marquee-right ${duration} linear infinite`;

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div style={{ display: 'flex', animation, willChange: 'transform' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0 28px',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: item.ai ? '#ffffff' : '#444444',
              fontWeight: item.ai ? 700 : 400,
            }}
          >
            {item.ai && (
              <span style={{
                fontSize: '0.58rem',
                color: '#E10600',
                border: '1px solid #E10600',
                padding: '1px 5px',
                borderRadius: '3px',
                letterSpacing: '0.08em',
                fontWeight: 700,
                lineHeight: 1.6
              }}>AI</span>
            )}
            {item.name}
            <span style={{ color: '#E10600', opacity: 0.35, marginLeft: '4px' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const TechMarquee = () => {
  return (
    <section id="stack" style={{
      backgroundColor: '#0f0f0f',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      padding: '0',
      overflow: 'hidden'
    }}>
      {/* Section label */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#555', letterSpacing: '0.12em' }}>02</span>
          <div style={{ height: '1px', width: '32px', backgroundColor: '#E10600' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Stack & Tools</span>
        </div>
        <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Lo que uso para construir.
        </h2>
        <p style={{ color: '#888', fontSize: '0.95rem', marginBottom: '0', maxWidth: '520px' }}>
          Trabajo con IA diariamente — no como buzzword, sino como herramienta real integrada en el desarrollo de productos.
        </p>
      </div>

      {/* Marquee rows */}
      <div style={{ paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <MarqueeTrack items={row1} direction="left" speed={4} />
        <MarqueeTrack items={row2} direction="right" speed={4} />
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;
