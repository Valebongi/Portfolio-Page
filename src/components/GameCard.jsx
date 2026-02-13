const GameCard = ({ game }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
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
        {/* Game Thumbnail */}
        <div
          style={{
            position: 'relative',
            paddingTop: '56.25%', // 16:9 aspect ratio
            backgroundColor: 'var(--color-soft-gray)',
            overflow: 'hidden'
          }}
        >
          <img
            src={game.thumbnail}
            alt={game.title}
            loading="lazy"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform var(--transition-medium)'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />

          {/* Accent Border on Hover */}
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
              transition: 'transform var(--transition-fast)'
            }}
          />
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column">
          <h3 className="card-title h5 fw-bold mb-2">{game.title}</h3>

          <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.95rem' }}>
            {game.description}
          </p>

          {/* Platform Tags */}
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

          {/* CTA Button */}
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom text-center text-decoration-none"
            style={{ display: 'block' }}
          >
            {game.ctaText || 'Play Now'}
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
