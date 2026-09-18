const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding dot-pattern-lg"
      style={{ backgroundColor: 'var(--bg-section-alt)' }}
    >
      <div className="container">
        <div className="max-width-content mx-auto fade-in-up">

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>02</span>
            <div style={{ height: '1px', width: '32px', backgroundColor: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Sobre mí</span>
          </div>

          <h2 className="display-5 fw-bold text-center mb-4" style={{ color: 'var(--text-primary)' }}>About</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', margin: '0 auto 3rem auto' }} />

          <div style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Soy software engineer enfocado en construir productos web, mobile y de videojuegos que sean rápidos, escalables y fáciles de usar.
              Mi trabajo combina arquitectura limpia, herramientas modernas y un foco real en resultados concretos.
            </p>

            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Trabajo con IA todos los días — la integro en productos que llegan a producción, no en demos.
              Cada proyecto parte de una pregunta simple: <em style={{ color: 'var(--text-primary)' }}>"¿Qué problema concreto estamos resolviendo?"</em>
            </p>

            <h3 className="h5 fw-bold mt-5 mb-3" style={{ color: 'var(--text-primary)' }}>Filosofía</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              {[
                'Resolver problemas reales, no hipotéticos',
                'Claridad sobre complejidad',
                'Código legible y mantenible',
                'Calidad antes que cantidad',
              ].map((item) => (
                <li key={item} className="mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>{' '}{item}
                </li>
              ))}
            </ul>

            <h3 className="h5 fw-bold mt-5 mb-3" style={{ color: 'var(--text-primary)' }}>Tecnologías</h3>
            <div className="d-flex flex-wrap gap-2">
              {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Next.js', 'Git'].map((tool) => (
                <span key={tool} className="badge" style={{
                  backgroundColor: 'var(--accent-glow)',
                  color: 'var(--text-secondary)',
                  padding: '0.55rem 1.1rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  border: '1px solid var(--accent-border)',
                  fontFamily: 'var(--font-mono)',
                }}>
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
