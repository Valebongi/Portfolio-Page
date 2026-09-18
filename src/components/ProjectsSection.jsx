import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects';

const tabs = [
  { key: 'web',    label: 'Web' },
  { key: 'mobile', label: 'Apps' },
  { key: 'games',  label: 'Games' },
];

const ProjectsSection = () => {
  const [active, setActive] = useState('web');
  const currentProjects = projectsData[active] || [];

  return (
    <section
      id="projects"
      className="section-padding dot-pattern"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container">

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>01</span>
          <div style={{ height: '1px', width: '32px', backgroundColor: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Projects</span>
        </div>

        <h2 className="display-5 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>Lo que he construido.</h2>
        <p className="mb-5" style={{ maxWidth: '520px', fontSize: '1rem', color: 'var(--text-secondary)' }}>
          Proyectos web, mobile y videojuegos — cada uno con sus tecnologías y decisiones propias.
        </p>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-color)',
          marginBottom: '2.5rem',
        }}>
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                background: 'none',
                border: 'none',
                padding: '10px 22px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: active === key ? 'var(--text-primary)' : 'var(--text-muted)',
                borderBottom: active === key ? '2px solid var(--accent)' : '2px solid transparent',
                cursor: 'pointer',
                marginBottom: '-1px',
                transition: 'color 150ms ease',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="row">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
