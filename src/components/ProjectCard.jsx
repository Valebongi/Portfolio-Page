const ProjectCard = ({ project }) => {
  const { status } = project;

  /* ── Coming Soon ── */
  if (status === 'coming-soon') {
    return (
      <div className="col-lg-6 col-md-12 mb-4">
        <div style={{
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '2.5rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'var(--bg-surface)',
          boxShadow: 'var(--shadow-hard)',
        }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              border: '1px solid var(--border-color)',
              padding: '3px 8px',
              borderRadius: '4px',
              display: 'inline-block',
              marginBottom: '1.25rem',
            }}>In Development</span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>{project.description}</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '1.5rem' }}>
            {project.techs.map((tech) => (
              <span key={tech} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                backgroundColor: 'var(--accent-glow)',
                color: 'var(--text-secondary)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid var(--accent-border)',
              }}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Prototype (static image: apps, games) ── */
  if (status === 'prototype') {
    return (
      <div className="col-lg-6 col-md-12 mb-4">
        <div
          className="project-card"
          style={{
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--bg-surface)',
            boxShadow: 'var(--shadow-hard)',
            transition: 'transform 200ms ease, box-shadow 200ms ease',
          }}
        >
          {/* Image preview */}
          <div style={{
            position: 'relative',
            width: '100%',
            paddingTop: '52%',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-primary)',
            flexShrink: 0,
          }}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: project.imagePosition || 'top center',
              }}
            />
            {/* Mobile screenshot overlay — responsive showcase */}
            {project.imageMobile && (
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '12px',
                width: '20%',
                aspectRatio: '9 / 16',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.55)',
                border: '2px solid rgba(255,255,255,0.18)',
                zIndex: 3,
              }}>
                <img
                  src={project.imageMobile}
                  alt={`${project.title} mobile`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
            )}
            {/* Accent bar on hover */}
            <div className="card-accent-bar" style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '3px',
              backgroundColor: 'var(--accent)',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 200ms ease',
              zIndex: 2,
            }} />
          </div>

          {/* Card body */}
          <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.6rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>{project.title}</h3>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--accent)',
                border: '1px solid var(--accent-border)',
                padding: '2px 7px',
                borderRadius: '4px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>Prototipo</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, flexGrow: 1 }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1rem' }}>
              {project.techs.map((tech) => (
                <span key={tech} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.67rem',
                  backgroundColor: 'var(--accent-glow)',
                  color: 'var(--text-secondary)',
                  padding: '3px 9px',
                  borderRadius: '4px',
                  border: '1px solid var(--accent-border)',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .project-card:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-hard) !important; }
          .project-card:hover .card-accent-bar { transform: scaleX(1); }
        `}</style>
      </div>
    );
  }

  /* ── Live (iframe preview: web projects) ── */
  return (
    <div className="col-lg-6 col-md-12 mb-4">
      <div
        className="project-card"
        style={{
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bg-surface)',
          boxShadow: 'var(--shadow-hard)',
          transition: 'transform 200ms ease, box-shadow 200ms ease',
        }}
      >
        {/* Browser chrome — intentionally fixed dark */}
        <div style={{
          backgroundColor: '#1e1e1e',
          padding: '9px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexShrink: 0,
        }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#febc2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#28c840' }} />
          <div style={{
            flex: 1,
            backgroundColor: '#2d2d2d',
            borderRadius: 4,
            padding: '3px 10px',
            marginLeft: 8,
            fontSize: '0.7rem',
            color: '#777',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontFamily: 'var(--font-mono)',
          }}>
            {project.link.replace('https://', '')}
          </div>
        </div>

        {/* Iframe preview — reduced ratio for compact cards */}
        <div style={{
          position: 'relative',
          width: '100%',
          paddingTop: '42%',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-primary)',
          flexShrink: 0,
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
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
          <div className="card-accent-bar" style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '3px',
            backgroundColor: 'var(--accent)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 200ms ease',
            zIndex: 2,
          }} />
        </div>

        {/* Card body */}
        <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>{project.title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, flexGrow: 1 }}>{project.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '0.9rem 0' }}>
            {project.techs.map((tech) => (
              <span key={tech} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.67rem',
                backgroundColor: 'var(--accent-glow)',
                color: 'var(--text-secondary)',
                padding: '3px 9px',
                borderRadius: '4px',
                border: '1px solid var(--accent-border)',
                fontWeight: 700,
                letterSpacing: '0.02em',
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
        .project-card:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-hard) !important; }
        .project-card:hover .card-accent-bar { transform: scaleX(1); }
      `}</style>
    </div>
  );
};

export default ProjectCard;
