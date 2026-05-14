import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects';

const tabs = [
  { key: 'web',    label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'games',  label: 'Games' },
];

const ProjectsSection = () => {
  const [active, setActive] = useState('web');
  const currentProjects = projectsData[active] || [];

  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      <div className="container">

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#999', letterSpacing: '0.12em' }}>01</span>
          <div style={{ height: '1px', width: '32px', backgroundColor: '#E10600' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#999', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Projects</span>
        </div>

        <h2 className="display-5 fw-bold mb-2">Lo que he construido.</h2>
        <p className="text-muted mb-5" style={{ maxWidth: '520px', fontSize: '1rem' }}>
          Proyectos web, mobile y videojuegos — cada uno con sus tecnologías y decisiones propias.
        </p>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #E0E0E0',
          marginBottom: '2.5rem',
          gap: '0'
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
                color: active === key ? '#000000' : '#aaa',
                borderBottom: active === key ? '2px solid #E10600' : '2px solid transparent',
                cursor: 'pointer',
                marginBottom: '-1px',
                transition: 'color 150ms ease',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cards */}
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
