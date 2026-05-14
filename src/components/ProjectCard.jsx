const ProjectCard = ({ project }) => {
  const isLive = project.status === 'live';

  if (!isLive) {
    return (
      <div className="col-lg-6 col-md-12 mb-4">
        <div style={{
          border: '1px solid #E0E0E0',
          borderRadius: '12px',
          padding: '2.5rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#FAFAFA',
          boxShadow: 'var(--shadow-hard)',
        }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: '#999',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              border: '1px solid #ddd',
              padding: '3px 8px',
              borderRadius: '4px',
              display: 'inline-block',
              marginBottom: '1.25rem'
            }}>In Development</span>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>{project.title}</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.65 }}>{project.description}</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '1.5rem' }}>
            {project.techs.map((tech) => (
              <span key={tech} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                backgroundColor: '#F0F0F0',
                color: '#555',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid #E0E0E0'
              }}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-lg-6 col-md-12 mb-4">
      <div
        className="project-card"
        style={{
          border: '1px solid #E0E0E0',
          borderRadius: '12px',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          boxShadow: 'var(--shadow-hard)',
          transition: 'transform 200ms ease, box-shadow 200ms ease'
        }}
      >
        {/* Browser chrome */}
        <div style={{
          backgroundColor: '#1e1e1e',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexShrink: 0
        }}>
          <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#ff5f57', flexShrink: 0 }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#febc2e', flexShrink: 0 }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#28c840', flexShrink: 0 }} />
          <div style={{
            flex: 1,
            backgroundColor: '#2d2d2d',
            borderRadius: 4,
            padding: '4px 10px',
            marginLeft: 8,
            fontSize: '0.72rem',
            color: '#999',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontFamily: 'var(--font-mono)'
          }}>
            {project.link.replace('https://', '')}
          </div>
        </div>

        {/* Live iframe preview */}
        <div style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          flexShrink: 0
        }}>
          <iframe
            src={project.link}
            title={`Preview of ${project.title}`}
            loading="lazy"
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '250%',
              height: '250%',
              transform: 'scale(0.4)',
              transformOrigin: 'top left',
              border: 'none',
              pointerEvents: 'none'
            }}
          />
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
          <div className="card-accent-bar" style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '3px',
            backgroundColor: 'var(--color-accent)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 200ms ease',
            zIndex: 2
          }} />
        </div>

        {/* Card body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>{project.title}</h3>
          <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.65, flexGrow: 1 }}>{project.description}</p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '1rem 0' }}>
            {project.techs.map((tech) => (
              <span key={tech} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                backgroundColor: '#F5F5F5',
                color: '#444',
                padding: '3px 9px',
                borderRadius: '4px',
                border: '1px solid #E0E0E0',
                fontWeight: 700,
                letterSpacing: '0.02em'
              }}>{tech}</span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom text-center text-decoration-none"
            style={{ display: 'block' }}
          >
            {project.ctaText || 'Visit Site'}
          </a>
        </div>
      </div>

      <style>{`
        .project-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #000000 !important;
        }
        .project-card:hover .card-accent-bar {
          transform: scaleX(1);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
