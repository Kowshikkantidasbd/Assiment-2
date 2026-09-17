# 🎬 Movie-Explorer 
# Modern Movie Discovery Web App

[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> A sleek, responsive, and feature-packed movie discovery platform built with modern React, TypeScript, and Tailwind CSS.

---

## 📌 Project Overview

**Movie-Explorer** is an interactive movie discovery web application designed for cinema enthusiasts. It lets users search, explore, and view detailed information for hundreds of movies and television shows in real time. The app connects directly to the public TVMaze REST API to provide up-to-date ratings, genres, release dates, and comprehensive storyline overviews.

---

## 🚀 Live Demo & Links

- 🌐 **Live Application:** https://movie-explorer-tau-eight.vercel.app/
- 💻 **Source Code:** https://github.com/Kowshikkantidasbd/Movie-Explorer

---

## ✨ Key Features

### 🌟 1. Cinematic Hero Banner
- High-definition featured backdrop displaying an iconic movie poster.
- Dynamic heading and clear call-to-action **"Explore Now"** button with smooth navigation.

### 🧭 2. Clean Navigation Bar
- Modern brand badge featuring a custom film-reel icon and bold typography.
- Cohesive navigation pill tabs (`Home` and `Movies`) with active state indicators and hover feedback.
- Fully responsive design with quick mobile navigation.

### 🔍 3. Real-Time Instant Search
- Instant, debounced search box that filters shows by title seamlessly.
- Clear search button (`✕`) for quick resetting without page reloads.

### 🎞️ 4. Movie Cards & Grid Catalog
- Clean card layout featuring movie posters, titles, average IMDb ratings, and release years.
- Fallback image placeholders if a movie does not have an official poster available.
- Interactive **"See Details"** button on each card.

### 📑 5. Detailed Movie Modal Dialog
- Rich overlay dialog displaying high-res backdrop art, genres, release year, and star ratings.
- Full synopsis and storyline overview with clean formatting.
- Smooth close interactions via keyboard (`Escape`), background click, or dedicated close buttons.

### 📱 6. Fully Responsive & Mobile-Optimized
- Mobile-first approach scaling seamlessly from smartphones to ultra-wide desktop monitors.
- Fast loading times with optimized asset delivery.

---

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 19** | Component-based UI architecture |
| **Language** | **TypeScript** | Type-safe interfaces and props |
| **Styling** | **Tailwind CSS v4** | Modern utility-first styling |
| **Icons** | **Lucide React** | Clean, lightweight SVG vector icons |
| **Bundler & Tooling** | **Vite** | Blazing-fast development & build tooling |
| **Data Source** | **TVMaze REST API** | Free public movie & television database API |

---

## 📂 Project Structure

```text
movie-explorer/
├── public/                  # Static assets
│   ├── custom-hero.png      # High-res featured hero banner image
│   ├── logo.svg             # Custom vector film reel brand logo
│   └── favicon.ico          # Browser tab icon
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Header with brand logo & navigation tabs
│   │   ├── HeroBanner.tsx   # Cinematic top hero section with CTA
│   │   ├── MovieListing.tsx # Search input, grid layout, loading & error states
│   │   ├── MovieCard.tsx    # Individual movie card with poster & ratings
│   │   ├── MovieModal.tsx   # Detailed modal dialog with storyline & meta
│   │   ├── SiteLogo.tsx     # Reusable brand logo component
│   │   └── Footer.tsx       # Clean bottom footer with copyright & links
│   ├── services/
│   │   └── movieApi.ts      # API fetch handlers & data formatting helpers
│   ├── types.ts             # TypeScript types and interfaces
│   ├── App.tsx              # Main state manager & page router
│   ├── main.tsx             # React application entry point
│   └── index.css            # Tailwind CSS root imports
├── index.html               # Main HTML entry with SEO meta tags
├── package.json             # NPM dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

---

## ⚙️ Getting Started & Local Setup

Follow these simple steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open in browser
Visit **`http://localhost:3000`** in your favorite browser.

### 5. Build for production
```bash
npm run build
```

---

## 📋 Assignment Requirements Checklist

- [x] **Modern SPA Architecture:** Built with React 19 and TypeScript.
- [x] **Component-Driven Design:** Clean separation into Navbar, Hero, Catalog, Card, Modal, and Footer.
- [x] **REST API Integration:** Real-time data consumption from TVMaze API.
- [x] **Search Functionality:** Debounced live query search with instant results.
- [x] **Modal System:** Interactive details popup with keyboard and click-outside support.
- [x] **Fully Responsive:** Tested across mobile, tablet, laptop, and desktop viewports.
- [x] **Type Safety & Clean Code:** Strict TypeScript types with 0 compiler warnings or lint errors.

---

## 👨‍💻 Developer Information

- **Author:** **Kowshik Kanti Das**
- **Role:** Frontend Web Developer
- **Course Assignment:** Frontend Web Development Project
- **Copyright:** © 2026 Movie-Explorer. All rights reserved.

---

## 📄 License

This project is created for educational and assignment submission purposes.
