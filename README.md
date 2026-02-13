# Portfolio Website

A minimalist, UX-first portfolio website showcasing indie games. Built with React, Vite, and Bootstrap 5.

## ✨ Features

- **Clean Design:** White/black/red color scheme with subtle animations
- **Fully Responsive:** Mobile-first approach with Bootstrap grid
- **Performance Optimized:** Lazy loading, optimized images, fast load times
- **Accessible:** Semantic HTML, ARIA labels, keyboard navigation
- **Game-Friendly:** Non-invasive design that respects user experience
- **GitHub Pages Ready:** Pre-configured for deployment

## 🛠 Tech Stack

- React 18
- Vite 6
- Bootstrap 5.3
- CSS Variables for theming
- Vanilla JavaScript (no heavy frameworks)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Portfolio-Page.git
cd Portfolio-Page
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will automatically build and push to the `gh-pages` branch.

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── GameCard.jsx
│   ├── GamesSection.jsx
│   ├── AboutSection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── pages/          # Page-level compositions
│   └── Home.jsx
├── styles/         # Global styles and theme
│   ├── theme.css
│   └── animations.css
├── data/           # Data files
│   └── games.js
├── App.jsx         # Root component
└── main.jsx        # Entry point
```

## 🎨 Customization

### Update Personal Information

1. **Navbar & Footer:** Edit brand name in `src/components/Navbar.jsx` and `src/components/Footer.jsx`
2. **Hero Section:** Edit title and description in `src/components/Hero.jsx`
3. **Games:** Update `src/data/games.js` with your actual games
4. **About Text:** Edit content in `src/components/AboutSection.jsx`
5. **Contact Links:** Update URLs in `src/components/ContactSection.jsx`
6. **SEO Meta Tags:** Update `index.html` with your information

### Change Colors

Edit CSS variables in `src/styles/theme.css`:

```css
:root {
  --color-bg: #FFFFFF;
  --color-text: #000000;
  --color-accent: #E10600;  /* Change this to your brand color */
}
```

### Add New Games

Add entries to `src/data/games.js`:

```javascript
{
  id: 7,
  title: "Your Game Title",
  description: "Brief 1-2 sentence description",
  thumbnail: "path/to/image.jpg",
  platforms: ["Web", "Windows"],
  link: "https://your-game-link.com",
  ctaText: "Play Now"
}
```

### Replace Placeholder Images

1. Add your game thumbnails to `public/assets/games/`
2. Update the `thumbnail` field in `src/data/games.js` to point to your images
3. Recommended size: 1200x675px (16:9 ratio), WebP format, < 150KB

## ⚡ Performance

- Lighthouse Score: 90+ across all metrics
- Lazy loading for images
- Code splitting for optimal bundles
- Minimal dependencies

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 📧 Contact

Replace with your contact information:
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)

## 🙏 Acknowledgments

Built following modern web development best practices with a focus on:
- Clean, maintainable code
- Exceptional user experience
- Performance optimization
- Accessibility standards

---

**Made with ❤️ for indie game developers**
