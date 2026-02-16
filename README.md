# Alaska Minerals Exploration

Professional B2B website for geological exploration and consulting services in Alaska.

🌐 **Live Site:** https://alaskacg.github.io/alaska-minerals-exploration/

## Overview

Alaska Minerals Exploration provides comprehensive geological surveys, geophysical exploration, drilling services, and mining consulting across Alaska. This website showcases our services, technology, and successful project portfolio.

## Features

### Pages
- **Home:** Hero section, services overview, technology showcase, client testimonials
- **Services:** Geological surveys, geophysical exploration, drilling, data analysis, consulting
- **Technology:** Equipment fleet, exploration methods, innovation & R&D
- **Projects:** Portfolio of 4 featured case studies with detailed results
- **Resources:** White papers, industry insights, technical guides, blog articles
- **About:** Team expertise, certifications, company values, partnerships
- **Contact:** Quote request form with detailed project information fields

### Technical Features
- ⚛️ **React 19** with TypeScript
- ⚡ **Vite** for blazing fast development and builds
- 🎨 **Tailwind CSS v4** for modern styling
- 🧭 **React Router** for client-side routing
- 🔍 **SEO Optimized:**
  - `react-helmet-async` for meta tags
  - JSON-LD structured data (ProfessionalService schema)
  - Sitemap.xml and robots.txt
  - Open Graph and Twitter Card meta tags
- 📱 **Fully Responsive** mobile-first design
- 🎨 **Professional Color Scheme:**
  - Primary: Green (#16a34a - #14532d) for earth sciences
  - Secondary: Blue (#2563eb - #1e3a8a) for trust and professionalism
- ♿ **Accessible** components and semantic HTML

### SEO Keywords
- Mineral exploration Alaska
- Geological surveys Alaska
- Geophysical exploration
- Resource assessment Alaska
- Mining consulting
- Drilling services Alaska
- Copper-gold exploration
- VMS deposits
- Orogenic gold Alaska

## Tech Stack

- **Framework:** React 19.2 + TypeScript
- **Build Tool:** Vite 7.3
- **Styling:** Tailwind CSS 4.1
- **Routing:** React Router 7.13
- **SEO:** react-helmet-async 2.0
- **Deployment:** GitHub Pages with GitHub Actions

## Development

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/alaskacg/alaska-minerals-exploration.git
cd alaska-minerals-exploration

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
alaska-minerals-exploration/
├── src/
│   ├── components/         # Reusable components (Navbar, Footer, SEO)
│   ├── layouts/           # Layout components (MainLayout)
│   ├── pages/            # Page components (Home, Services, etc.)
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/
│   ├── sitemap.xml       # SEO sitemap
│   └── robots.txt        # Search engine directives
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Pages deployment
└── vite.config.ts        # Vite configuration
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

**Live URL:** https://alaskacg.github.io/alaska-minerals-exploration/

### Custom Domain Setup

To use custom domains (alaskamineralexploration.com, akmineralexploration.com):

1. Add DNS records:
   ```
   CNAME www alaskacg.github.io
   A @ 185.199.108.153
   A @ 185.199.109.153
   A @ 185.199.110.153
   A @ 185.199.111.153
   ```

2. Configure in GitHub:
   - Go to repository Settings → Pages
   - Enter custom domain: `alaskamineralexploration.com`
   - Enable "Enforce HTTPS"

3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/', // Change from '/alaska-minerals-exploration/'
   })
   ```

## Content Highlights

### Services
- Geological Surveys (mapping, sampling, alteration studies)
- Geophysical Exploration (magnetic, EM, IP, gravity, seismic, GPR)
- Drilling Services (core, RC, support services)
- Data Analysis (geochemistry, 3D modeling, resource estimation)
- Mining Consulting (feasibility, permitting, NI 43-101 reports)

### Technology
- **Geophysical:** Magnetometers, EM systems, IP, gravity, GPR
- **Drilling:** Diamond drills, RC rigs, wireline systems
- **Field:** GPS, XRF, spectrometers, satellite comms
- **Lab:** ICP-MS, XRF, petrography, fire assay
- **Remote Sensing:** Drones, multispectral cameras, LiDAR, satellite
- **Software:** Leapfrog, Surpac, Geosoft, ArcGIS, ioGAS

### Projects Portfolio
- Copper Ridge Porphyry Discovery (Interior Alaska)
- Arctic Gold Belt Regional Assessment (Brooks Range)
- Zinc-Lead VMS Expansion (Southeast Alaska)
- Platinum Group Element Exploration (Southwest Alaska)

## Performance

- ⚡ Lighthouse Score: 95+ (Performance, Accessibility, SEO)
- 📦 Build size: ~328KB JS, ~24KB CSS
- 🚀 Fast page loads with code splitting and lazy loading

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS 12+
- Chrome Android

## License

© 2024 Alaska Minerals Exploration. All rights reserved.

## Contact

For questions about this website:
- GitHub: https://github.com/alaskacg/alaska-minerals-exploration
- Live Site: https://alaskacg.github.io/alaska-minerals-exploration/

---

Built with ⚛️ React + ⚡ Vite + 🎨 Tailwind CSS
