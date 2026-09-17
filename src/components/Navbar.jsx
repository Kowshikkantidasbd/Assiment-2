import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-ink px-5 py-4 md:px-8 md:py-5">
      <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-parchment no-underline">
        <span className="text-2xl">🎬</span>
        <span>MovieExplorer</span>
      </Link>
      <nav className="flex items-center gap-2 md:gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-link relative px-1 py-2 text-sm font-medium no-underline text-parchment/80 transition-colors hover:text-parchment ${
              isActive ? 'nav-link--active text-parchment' : ''
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `rounded-full px-5 py-2.5 text-sm font-semibold no-underline text-parchment shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
              isActive
                ? 'bg-crimson-dark ring-2 ring-crimson/40 ring-offset-2 ring-offset-ink'
                : 'bg-crimson hover:bg-crimson-dark'
            }`
          }
        >
          Browse shows
        </NavLink>
      </nav>
    </header>
  )
}