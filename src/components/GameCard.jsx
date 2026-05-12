const GameCard = ({ game }) => {
  return (
    <div className="col-lg-6 col-md-12 mb-4">
      <div
        className="card h-100 hover-lift"
        style={{
          border: 'none',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all var(--transition-fast)'
        }}
      >
        {/* Browser Mockup Chrome */}
        <div
          style={{
            backgroundColor: '#1e1e1e',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexShrink: 0
          }}
        >
          <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#ff5f57', flexShrink: 0 }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#febc2e', flexShrink: 0 }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#28c840', flexShrink: 0 }} />
          <div
            style={{
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
              fontFamily: 'monospace'
            }}
          >
            {game.link.replace('https://', '')}
          </div>
        </div>

        {/* Live iframe Preview — scaled to fit 16:9 container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%',
            overflow: 'hidden',
            backgroundColor: '#f5f5f5'
          }}
        >
          <iframe
            src={game.link}
            title={`Preview of ${game.title}`}
            loading="lazy"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '250%',
              height: '250%',
              transform: 'scale(0.4)',
              transformOrigin: 'top left',
              border: 'none',
              pointerEvents: 'none'
            }}
          />
          {/* Invisible overlay so card hover works, not iframe */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }} />

          <div
            className="accent-bar"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: 'var(--color-accent)',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform var(--transition-fast)',
              zIndex: 2
            }}
          />
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column p-4">
          <h3 className="card-title h5 fw-bold mb-2">{game.title}</h3>

          <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.95rem' }}>
            {game.description}
          </p>

          {game.platforms && (
            <div className="mb-3">
              {game.platforms.map((platform, index) => (
                <span
                  key={index}
                  className="badge me-2"
                  style={{
                    backgroundColor: 'var(--color-soft-gray)',
                    color: 'var(--color-text)',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }}
                >
                  {platform}
                </span>
              ))}
            </div>
          )}

          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom text-center text-decoration-none"
            style={{ display: 'block' }}
          >
            {game.ctaText || 'Visit Site'}
          </a>
        </div>
      </div>

      <style>{`
        .card:hover .accent-bar {
          transform: scaleX(1);
        }
      `}</style>
    </div>
  );
};

export default GameCard;
