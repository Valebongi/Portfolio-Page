import GameCard from './GameCard';
import gamesData from '../data/games';

const GamesSection = () => {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5 fade-in-up">
          <h2 className="display-5 fw-bold mb-3">Featured Projects</h2>
          <p className="lead text-muted max-width-content">
            Web products and platforms built with attention to quality and user experience.
          </p>
          <div
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: 'var(--color-accent)',
              margin: '1.5rem auto'
            }}
          />
        </div>

        {/* Games Grid */}
        <div className="row">
          {gamesData.map((game, index) => (
            <GameCard
              key={game.id}
              game={game}
            />
          ))}
        </div>

        {/* Empty State */}
        {gamesData.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No projects available at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GamesSection;
