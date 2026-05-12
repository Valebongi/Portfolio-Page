const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-soft-gray)' }}
    >
      <div className="container">
        <div className="max-width-content mx-auto fade-in-up">
          {/* Section Header */}
          <h2 className="display-5 fw-bold text-center mb-4">About</h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: 'var(--color-accent)',
              margin: '0 auto 3rem auto'
            }}
          />

          {/* Content */}
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            <p className="mb-4">
              I'm a software engineer focused on building web products that are fast, scalable, and user-friendly.
              My work blends clean architecture, modern tooling, and a strong focus on real-world outcomes.
            </p>

            <p className="mb-4">
              Every project starts with a simple question: <em>"What problem does this actually solve?"</em>
              From there, I build systems and interfaces that serve that goal—nothing more, nothing less.
            </p>

            <h3 className="h5 fw-bold mt-5 mb-3">Philosophy</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li className="mb-2">
                <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>✓</span>
                {' '}Solve real problems, not hypothetical ones
              </li>
              <li className="mb-2">
                <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>✓</span>
                {' '}Design for clarity, not complexity
              </li>
              <li className="mb-2">
                <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>✓</span>
                {' '}Write code that's easy to read and maintain
              </li>
              <li className="mb-2">
                <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>✓</span>
                {' '}Ship quality over quantity
              </li>
            </ul>

            <h3 className="h5 fw-bold mt-5 mb-3">Tools & Technologies</h3>
            <div className="d-flex flex-wrap gap-2">
              {['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML/CSS', 'Git'].map((tool) => (
                <span
                  key={tool}
                  className="badge"
                  style={{
                    backgroundColor: 'white',
                    color: 'var(--color-text)',
                    padding: '0.6rem 1.2rem',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    border: '1px solid var(--color-medium-gray)'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
