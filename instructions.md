🎮 Portfolio Web – Technical Frontend Specification
Stack: React + Vite + Bootstrap 5 + HTML + CSS + JavaScript
Design Goal: Minimalist, modern, UX-first, non-invasive, game-friendly portfolio
Primary Colors: White (#FFFFFF), Black (#000000), Red (#E10600 or similar deep red)
1. 🎯 Project Purpose
This website is a developer portfolio and game hub, designed to:
Showcase personal indie games.
Redirect players from games without feeling like spam.
Present a professional yet minimal identity.
Prioritize UX above visual overload.
Feel modern, clean, comfortable, and familiar.
The website must:
Load fast.
Be responsive.
Feel like an extension of the game experience.
Avoid aggressive marketing patterns.
Avoid clutter.
2. 🧱 Core Structure (High-Level Architecture)
The website must be built using:
React (Vite setup)
Bootstrap 5 (layout & base components)
Custom CSS for branding
Functional component structure
Clean folder organization
Suggested Folder Structure
Copiar código

src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Hero.jsx
 │    ├── GameCard.jsx
 │    ├── GamesSection.jsx
 │    ├── AboutSection.jsx
 │    ├── ContactSection.jsx
 │    ├── Footer.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │
 ├── styles/
 │    ├── theme.css
 │
 ├── App.jsx
 ├── main.jsx
3. 🎨 Design System Specification
3.1 Color System
Primary palette:
--color-bg: #FFFFFF
--color-text: #000000
--color-accent: #E10600
--color-soft-gray: #F5F5F5
--color-dark-gray: #1A1A1A
Usage rules:
White background as dominant surface.
Black for primary typography.
Red ONLY for:
CTA buttons
Hover states
Highlights
Underlines
Subtle accents
Avoid:
Overuse of red
Gradients unless extremely subtle
Visual noise
3.2 Typography
Modern sans-serif.
Recommended:
Inter
Poppins
Montserrat
Hierarchy:
H1 → Bold, large, minimal
H2 → Section headers
H3 → Game titles
Body → Clean, 16–18px
Buttons → Medium weight, uppercase optional
Spacing must be generous.
4. 🧭 Navigation Architecture (3–4 Tabs Only)
The site must be simple.
Navbar Sections:
Home
Games
About
Contact
Sticky navbar. Transparent at top. Solid white on scroll.
Subtle animation on scroll transition.
No dropdowns. No nested menus.
5. 🏠 Home Page (Landing Experience)
5.1 Hero Section
Purpose:
Immediate clarity.
Clean first impression.
No overload.
Structure:
Left side:
Developer name or studio name
Short tagline
1–2 sentence description
Primary CTA (View Games)
Right side:
Subtle animated background or geometric pattern
Or abstract texture
Minimal motion (optional)
CTA Button:
Red background
White text
Smooth hover animation
Slight scale effect
Avoid:
Carousels
Auto-playing videos
Popups
6. 🎮 Games Section
This is the core functional area.
6.1 Layout
Grid layout using Bootstrap:
Desktop: 3 columns
Tablet: 2 columns
Mobile: 1 column
Spacing:
Large vertical padding
Clean card separation
6.2 Game Card Component
Each GameCard must include:
Thumbnail image
Game title
Short description (1–2 lines)
Platform icons (optional)
Button: “Play” or “Learn More”
Card Behavior
On hover:
Slight elevation (box-shadow)
Soft transform (translateY -3px)
Red accent line or border highlight
Must feel:
Polished
Soft
Responsive
No flashy animation.
7. 👤 About Section
Tone:
Honest
Minimal
Personal but not oversharing
Structure:
Short intro paragraph
Philosophy section
Development approach
Tools used (React, Unity, etc.)
Optional:
Timeline or minimal bullet list
Design:
Centered column layout
Comfortable line width (max 800px)
8. 📩 Contact Section
Simple. Minimal.
Include:
Email
GitHub
Optional social links
No heavy forms unless necessary.
If form is used:
Bootstrap form
Clean inputs
Red focus state
No spammy feeling
9. 🦶 Footer
Minimal footer.
Include:
Name
Year
Subtle divider
Social icons (optional)
Dark background variation optional.
10. 💡 UX Principles (Critical)
This is not a marketing page. This is not a funnel.
Design principles:
Zero intrusive popups
No auto-scroll
No forced signup
No autoplay audio
No dark patterns
Must feel:
Respectful
Calm
Smooth
Fast
Transitions:
200–300ms max
Ease-in-out
11. 🧩 Technical Requirements
11.1 Responsiveness
Fully responsive using:
Bootstrap grid
Flex utilities
Media queries if necessary
Mobile-first approach.
11.2 Performance
Lazy load images
Optimize images
Avoid heavy libraries
Minimal animation libraries
No unnecessary dependencies
11.3 Animations
Allowed:
Subtle fade-in on scroll
Soft hover effects
Smooth navbar transition
Avoid:
Parallax overload
Excessive motion
Distracting effects
12. 🔥 Visual Identity Rules
The page must feel:
Clean like a SaaS landing
Calm like a modern portfolio
Focused like a product page
Elegant but not corporate
White space is mandatory. Breathing room is intentional.
13. 📦 Future Extensibility
Structure must allow:
Adding more games easily
Adding blog section later
Adding depth layers / background texture variations
Dark mode toggle (future feature)
14. 📌 Emotional Goal
When a player lands here from a game:
They must feel:
This is professional.
This is intentional.
This is clean.
This is trustworthy.
This is not spam.
It should feel like: “A polished indie studio home.”
15. 🚀 Copilot Implementation Notes
When generating components:
Use functional components only.
Use Bootstrap classes primarily.
Keep JSX clean and readable.
Separate styling into theme.css.
Avoid inline styles unless necessary.
Keep components modular and reusable.
Naming conventions:
PascalCase for components.
camelCase for variables.
Clear semantic HTML.
16. 📘 Optional Enhancements (Phase 2)
Subtle background texture layer
Game filtering system
Micro-interactions
Scroll reveal animation
Analytics integration
SEO meta optimization
Final Objective
Build a minimal, modern, UX-centered React portfolio
that reflects:
Clean engineering
Game-focused identity
Professional structure
Respect for user experience
No clutter. No noise. No pressure.
Just clean, intentional presence.