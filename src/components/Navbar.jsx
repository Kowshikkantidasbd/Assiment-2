import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-ink px-5 py-4 md:px-8 md:py-5">
      <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-parchment no-underline">
        <span className="text-2xl">🎬</span>
        <span>MovieExplorer</span>


      </Link>
      <nav className="flex items-center gap-3 md:gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-sm no-underline text-parchment ${isActive ? 'opacity-100' : 'opacity-80'} hover:opacity-100`
          }

        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className="bg-crimson px-3.5 py-2 text-sm font-semibold text-parchment no-underline transition-colors hover:bg-crimson-dark md:px-5"
        >
          Browse shows
        </NavLink>
      </nav>

      
    </header>
  )
}
