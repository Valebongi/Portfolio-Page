import {
  SiReact, SiTypescript, SiNodedotjs, SiNextdotjs, SiJavascript,
  SiPython, SiGit, SiUnity, SiFigma, SiDocker, SiVercel, SiVite, SiDotnet
} from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';

const techItems = [
  { name: 'React',           Icon: SiReact,      color: '#61DAFB' },
  { name: 'TypeScript',      Icon: SiTypescript,  color: '#3178C6' },
  { name: 'Node.js',         Icon: SiNodedotjs,   color: '#6cc24a' },
  { name: 'Next.js',         Icon: SiNextdotjs,   color: '#e0e0e0' },
  { name: 'JavaScript',      Icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Python',          Icon: SiPython,      color: '#4B9CD3' },
  { name: 'C# / .NET',       Icon: SiDotnet,      color: '#512BD4' },
  { name: 'Claude API',      Icon: FaRobot,       color: '#E10600', ai: true },
  { name: 'OpenAI API',      Icon: FaRobot,       color: '#10a37f', ai: true },
  { name: 'GitHub Copilot',  Icon: FaRobot,       color: '#8957e5', ai: true },
  { name: 'Unity',           Icon: SiUnity,       color: '#cccccc' },
  { name: 'Figma',           Icon: SiFigma,       color: '#F24E1E' },
  { name: 'Docker',          Icon: SiDocker,      color: '#2496ED' },
  { name: 'Vercel',          Icon: SiVercel,      color: '#cccccc' },
  { name: 'Vite',            Icon: SiVite,        color: '#646CFF' },
  { name: 'Git',             Icon: SiGit,         color: '#F05032' },
];

const TechMarquee = () => {
  const doubled = [...techItems, ...techItems];

  return (
    <section id="stack" style={{
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: '18px 0',
      overflow: 'hidden',
    }}>
      {/* Label */}
      <p style={{
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        color: '#3a3a3a',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: '14px',
      }}>
        Stack Tecnológico
      </p>

      {/* Scrolling row with edge fade */}
      <div style={{
        position: 'relative',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}>
        <div style={{
          display: 'flex',
          animation: 'marquee-left 40s linear infinite',
          willChange: 'transform',
        }}>
          {doubled.map((item, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '0 26px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              <item.Icon size={14} color={item.color} style={{ flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.73rem',
                color: item.ai ? '#cccccc' : '#666',
                fontWeight: item.ai ? 700 : 400,
              }}>
                {item.name}
              </span>
              {item.ai && (
                <span style={{
                  fontSize: '0.5rem',
                  color: '#E10600',
                  border: '1px solid rgba(225,6,0,0.55)',
                  padding: '0px 4px',
                  borderRadius: '2px',
                  lineHeight: '1.7',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.06em',
                }}>AI</span>
              )}
              <span style={{ color: '#2a2a2a', marginLeft: '4px', fontSize: '0.8rem' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;
