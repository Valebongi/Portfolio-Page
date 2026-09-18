import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const contactLinks = [
  {
    name: 'Email',
    Icon: FaEnvelope,
    url: 'mailto:valenbongiorno11@gmail.com',
    display: 'valenbongiorno11@gmail.com'
  },
  {
    name: 'LinkedIn',
    Icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/valentino-bongiorno-121b00202/',
    display: 'linkedin.com/in/valentino-bongiorno'
  },
  {
    name: 'WhatsApp',
    Icon: FaWhatsapp,
    url: 'https://wa.me/5493516720095',
    display: '+54 9 351 672-0095'
  },
  {
    name: 'GitHub',
    Icon: FaGithub,
    url: 'https://github.com/ValentinoBongiorno',
    display: 'github.com/ValentinoBongiorno'
  }
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-padding dot-pattern"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container">
        <div className="max-width-content mx-auto text-center fade-in-up">

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>03</span>
            <div style={{ height: '1px', width: '32px', backgroundColor: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Contacto</span>
          </div>

          <h2 className="display-5 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Get In Touch</h2>
          <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
            ¿Tenés un proyecto en mente o querés charlar? Escribime.
          </p>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', margin: '2rem auto 3rem auto' }} />

          <div className="row g-4">
            {contactLinks.map((link, index) => (
              <div key={link.name} className={`col-md-6 fade-in-up fade-in-delay-${index + 1}`}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <div
                    className="p-4"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'border-color 200ms ease, background-color 200ms ease, transform 200ms ease',
                      border: '2px solid transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.backgroundColor = 'var(--accent-glow)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ marginBottom: '0.75rem', color: 'var(--accent)' }}>
                      <link.Icon size={32} />
                    </div>
                    <h3 className="h6 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>{link.name}</h3>
                    <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>{link.display}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
            <p className="mb-3" style={{ color: 'var(--text-muted)' }}>O conectá directo:</p>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-underline fw-medium"
                  style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
