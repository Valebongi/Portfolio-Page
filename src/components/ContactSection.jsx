const ContactSection = () => {
  const contactLinks = [
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:valenbongiorno11@gmail.com',
      display: 'valenbongiorno11@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/valentino-bongiorno-121b00202/',
      display: 'linkedin.com/in/valentino-bongiorno'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/5493516720095',
      display: '+54 9 351 672-0095'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/ValentinoBongiorno',
      display: 'github.com/ValentinoBongiorno'
    }
  ];

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="container">
        <div className="max-width-content mx-auto text-center fade-in-up">
          {/* Section Header */}
          <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
          <p className="lead text-muted mb-4">
            Have a question, feedback, or just want to say hi? I'd love to hear from you.
          </p>
          <div
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: 'var(--color-accent)',
              margin: '2rem auto 3rem auto'
            }}
          />

          {/* Contact Links */}
          <div className="row g-4">
            {contactLinks.map((link, index) => (
              <div
                key={link.name}
                className={`col-md-6 fade-in-up fade-in-delay-${index + 1}`}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div
                    className="p-4 hover-lift"
                    style={{
                      backgroundColor: 'var(--color-soft-gray)',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'all var(--transition-fast)',
                      border: '2px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.backgroundColor = 'var(--color-soft-gray)';
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                      {link.icon}
                    </div>
                    <h3 className="h6 fw-bold mb-2">{link.name}</h3>
                    <p className="text-muted small mb-0">{link.display}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Alternative: Simple Text Links */}
          <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--color-medium-gray)' }}>
            <p className="text-muted mb-3">Or connect directly:</p>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-underline fw-medium"
                  style={{ fontSize: '1.1rem' }}
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
