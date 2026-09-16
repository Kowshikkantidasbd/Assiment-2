# 🎬 MovieExplorer

A responsive TV show explorer built with React and Vite. Browse shows, search
by title, and open a details modal — powered by the free
[TVmaze API](https://www.tvmaze.com/api).

## Features

- **Home page** — navbar, hero banner with a call-to-action, and footer.
- **Browse page** — search bar that queries the TVmaze search endpoint as you
  type, plus a default grid of all shows (sorted by rating) when there's no
  search query.
- **Details modal** — click "See details" on any card for a backdrop image,
  rating, release year, network, genres, and summary. Closes via the ✕
  button, the "Close" button, the Escape key, or a click on the backdrop.
- **Fully responsive** — single column on mobile, multi-column grid on
  desktop, touch-friendly tap targets throughout.

## Tech stack

- React 18 + React Router
- Vite (dev server & build)
- Plain CSS (custom design system — no UI framework)
- [TVmaze API](https://www.tvmaze.com/api) — no API key required

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    Navbar.jsx        Site header + nav links
    Footer.jsx         Site footer
    HeroBanner.jsx      Home page hero section
    SearchBar.jsx       Controlled search input
    MovieCard.jsx       Poster card (title, rating, year, CTA)
    MovieGrid.jsx       Responsive grid + empty state
    MovieModal.jsx      Details modal overlay
  pages/
    Home.jsx            Landing page
    MovieListing.jsx     Search + browse page, owns API calls
  App.jsx                Routes
  main.jsx               Entry point
  index.css              Design system + all styles
```

## API endpoints used

- `GET https://api.tvmaze.com/shows` — full show catalog for the default grid.
- `GET https://api.tvmaze.com/search/shows?q=:query` — title search, debounced
  by 350ms while typing.

## Deploying

This is a static Vite build, so it deploys as-is to Vercel, Netlify, or GitHub
Pages:

- **Vercel**: import the repo, framework preset "Vite", no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: run `npm run build`, then publish the `dist/` folder (e.g.
  via the `gh-pages` package or a GitHub Actions workflow).

## Notes

- No API key or `.env` file is required — TVmaze's API is public and
  unauthenticated.
- Ratings that TVmaze hasn't collected yet display as `N/A` rather than `0`.
