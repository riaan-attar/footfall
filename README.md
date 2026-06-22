# Footfall Marketing - Client Handover Documentation

Welcome to the client handover repository for **Footfall Marketing**. This project is a modern, high-performance, and visually stunning web application built to deliver an immersive and premium user experience.

---

## 🚀 Project Overview

**Footfall Marketing** is a high-fidelity web application built using React, Vite, Tailwind CSS, and a suite of advanced 3D and animation libraries. It features immersive 3D graphics, rich micro-interactions, responsive design, and smooth kinetics to captivate users.

---

## 🛠️ Technology Stack

The project utilizes a modern frontend architecture designed for speed, flexibility, and visual excellence:

- **Core Framework**: [React](https://react.dev/) (v18.2.0) with [Vite](https://vitejs.dev/) for extremely fast development builds and optimized production bundling.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3.4.3) with Autoprefixer and PostCSS for responsive, custom utility-first styles.
- **3D Graphics & Physics**: 
  - [Three.js](https://threejs.org/)
  - [@react-three/fiber](https://r3f.docs.pmnd.rs/) (React wrapper for Three.js)
  - [@react-three/drei](https://github.com/pmndrs/drei) (Helpers for React Three Fiber)
  - [@react-three/rapier](https://github.com/pmndrs/react-three-rapier) (3D physics engine support)
- **Animations & Kinetics**:
  - [GSAP](https://gsap.com/) (GreenSock Animation Platform) & ScrollTrigger for precise scroll-driven animations.
  - [Framer Motion](https://www.framer.com/motion/) for fluid component-level transitions and animations.
  - [Shery.js](https://github.com/obysource/sheryjs) for premium hover effects and advanced mouse/canvas interactions.
  - [Anime.js](https://animejs.com/) & [D3.js](https://d3js.org/) for data-driven visuals and complex animations.
- **Scrolling**: [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) for custom, premium inertia-based smooth scrolling.

---

## 📂 Project Structure

A quick overview of the key directories in the project:

```text
footfall/
├── public/                 # Static assets (favicons, OG images, model files)
├── src/
│   ├── assets/             # Images, SVGs, and media assets
│   ├── components/         # Reusable React components
│   │   ├── About/          # About section and team details
│   │   ├── Ballpit/        # Interactive 3D physical ball pit
│   │   ├── CardSwap/       # Sliding card transition interactions
│   │   ├── CaseStudies/    # Case studies showcase component
│   │   ├── CircularGallery/# Circular rotating gallery layout
│   │   ├── CubeViewer/     # Interactive 3D cube showcase
│   │   ├── FAQ/            # Collapsible accordion FAQ list
│   │   ├── Footer/         # Page footer with social links & site navigation
│   │   ├── GlobeViewer/    # Interactive 3D rotating globe
│   │   ├── Lanyard/        # 3D interactive floating badge/lanyard
│   │   ├── Navbar/         # Responsive navigation menu
│   │   ├── ui/             # Core UI building blocks (buttons, inputs)
│   │   └── ...             # Core GSAP/Animation wrappers (Magnetic, Cursor, etc.)
│   ├── App.jsx             # Main application layout and assembly
│   ├── App.css             # Main component level styles
│   ├── index.css           # Global CSS variables, custom scrollbars, and fonts
│   └── main.jsx            # React entrypoint
├── index.html              # Core HTML file (includes meta tags & SEO)
├── tailwind.config.js      # Tailwind style system configuration
├── vite.config.js          # Vite build config
└── package.json            # Scripts, dependencies, and project metadata
```

---

## ⚙️ Getting Started & Installation

Follow these steps to run the project locally or build it for production.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or later recommended) along with `npm` (usually bundled with Node.js).

### 1. Install Dependencies

In the project root directory, run the following command to install all required npm packages:

```bash
npm install
```

### 2. Run the Development Server

To launch the local development environment:

```bash
npm run dev
```

Once started, the application will be accessible at the local URL printed in your terminal (typically `http://localhost:5173`).

### 3. Build for Production

To generate an optimized, minified, and production-ready distribution:

```bash
npm run build
```

This will output all compiled assets into the `dist/` directory, which can be deployed directly to Vercel, Netlify, AWS S3, or any static web hosting provider.

### 4. Preview the Production Build

To preview the built site locally before deploying it to production:

```bash
npm run preview
```

---

## 📝 Configuration & Customization

### 🔗 Updating Social & Contact Links
- **Footer Socials**: Located in [Footer/Index.jsx](file:///c:/Users/Admin/Desktop/footfall/src/components/Footer/Index.jsx). Customize paths for Instagram, LinkedIn, etc.
- **Navigation Menu**: Configured in [Navbar/Index.jsx](file:///c:/Users/Admin/Desktop/footfall/src/components/Navbar/Index.jsx) for header routing.

### 🎨 Styling System
- Global styles, typography settings, and reset rules are defined in [index.css](file:///c:/Users/Admin/Desktop/footfall/src/index.css).
- Theme customization, custom colors, animations, and Tailwind plugins are configured in [tailwind.config.js](file:///c:/Users/Admin/Desktop/footfall/tailwind.config.js).

### 🔍 Search Engine Optimization (SEO)
- Meta tags, Open Graph (OG) tags, descriptions, titles, and fonts (loaded from Google Fonts) are located in the [index.html](file:///c:/Users/Admin/Desktop/footfall/index.html) file.

---

## 📦 Handover Verification & Deployment Note

- **Production Readiness**: All dependencies are locked down in `package-lock.json`.
- **Quality Standards**: ESLint configuration is established to ensure code cleanliness. Runs with `npm run lint`.
- **Asset Integrity**: Open Graph images (`public/og-image.png`) and branding icons are preloaded and fully configured.
