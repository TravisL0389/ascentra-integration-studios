
# Ascentra Integration Studios

A premium, front-end only portfolio and productized template showcase.

## Tech Upgrades

### Interactive Particle Field
- **Photon Field**: Subtle drifted background built with HTML Canvas.
- **Interactivity**: 
  - Mouse moves attract particles.
  - Clicking creates a repulsion burst.
- **Performance**: Adaptive density based on screen size (60-180 particles).
- **Accessibility**: Syncs with `prefers-reduced-motion` and includes a manual toggle in the Navbar.

### Motion System
- **Scroll Reveals**: Intersection Observer based fade-and-slide reveals on sections and cards.
- **Persistent Settings**: Effects toggle preference is stored in `localStorage`.

## Deployment Guide (Static Build)

This project is a 100% static front-end application and can be hosted anywhere that serves static files.

### 1. Build the project
```bash
npm run build
```
The output will be in the `dist/` folder.

### 2. Host on Vercel
- Connect your repository.
- Build Command: `npm run build`
- Output Directory: `dist`
- The included `vercel.json` handles SPA routing automatically.

### 3. Host on Netlify
- Drag and drop the `dist/` folder or connect your repo.
- Build Command: `npm run build`
- Output Directory: `dist`
- The included `_redirects` file handles SPA routing automatically.

### 4. Host on Cloudflare Pages
- Connect your repo.
- Framework Preset: `Vite` (or None)
- Build Command: `npm run build`
- Output Directory: `dist`

## Static Contact Form
For frontend-only deployment, the contact form utilizes a `mailto:` fallback. This ensures leads are delivered directly to your inbox without requiring a backend server or third-party database.
