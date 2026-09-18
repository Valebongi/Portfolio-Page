const projectsData = {
  web: [
    {
      id: 6,
      title: "RutaLib",
      description: "Plataforma colaborativa de accesibilidad urbana de DAX: cualquier persona reporta obstáculos de la vía pública con una foto, desde la web o por WhatsApp sin instalar nada, y la IA clasifica cada reporte. Como co-fundador y responsable técnico definí la arquitectura en microservicios, el bot de WhatsApp, el análisis de imágenes con IA y la seguridad del sistema.",
      link: "https://rutalib.com.ar",
      techs: ["React", "TypeScript", "IA de visión", "WhatsApp API"],
      ctaText: "Visit Site",
      status: "live"
    },
    {
      id: 1,
      title: "DAX",
      description: "Startup de desarrollo de software que co-fundé en 2026. Diseñamos, construimos e implementamos productos digitales a medida, con foco en IA aplicada a procesos de negocio. Soy co-fundador y responsable técnico; RutaLib es uno de nuestros productos.",
      link: "https://dax.ar",
      techs: ["Next.js", "TypeScript", "IA aplicada", "Microservicios"],
      ctaText: "Visit Site",
      status: "live"
    },
    {
      id: 2,
      title: "RankAgile",
      description: "SaaS de SEO ágil y marketing digital para mejorar el posicionamiento online y la visibilidad en buscadores.",
      link: "https://rankagile.com",
      techs: ["Next.js", "TypeScript", "Node.js", "SEO"],
      ctaText: "Visit Site",
      status: "live"
    }
  ],
  mobile: [
    {
      id: 5,
      title: "PhysikArg",
      description: "Sistema de gestión interno para gimnasios. Control de deudas, planes de entrenamiento, biblioteca de ejercicios por grupo muscular, turnos y atención personalizada por miembro.",
      image: "/Portfolio-Page/assets/projects/physik-desktop.png",
      imageMobile: "/Portfolio-Page/assets/projects/physik-mobile.png",
      imagePosition: "top left",
      techs: ["React", "TypeScript", "Node.js", "UI/UX"],
      status: "prototype"
    },
    {
      id: 3,
      title: "Neuro",
      description: "App de escritorio pensada para apoyar a familias con integrantes neurodivergentes en su día a día. Interfaz visual e intuitiva para gestionar rutinas, comunicación y recursos de apoyo — sin fricción.",
      image: "/Portfolio-Page/assets/projects/neuro.png",
      imagePosition: "top left",
      techs: ["React", "Electron", "TypeScript", "UI/UX"],
      status: "prototype"
    }
  ],
  games: [
    {
      id: 4,
      title: "Myco Hell",
      description: "Roguelite bullet hell ambientado en un mundo pixelart de naturaleza. Combate frenético, builds procedurales y un estilo visual único dominado por hongos y vegetación.",
      image: "/Portfolio-Page/assets/projects/myco-hell.png",
      imagePosition: "center",
      techs: ["Unity", "C#", "Pixelart", "Game Design"],
      status: "prototype"
    }
  ]
};

export default projectsData;
