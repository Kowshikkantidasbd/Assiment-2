import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        <span className="navbar__mark">🎬</span>
        <span>MovieExplorer</span>
      </Link>
      <nav className="navbar__links">
        <NavLink to="/" className="navbar__link" end>
          Home
        </NavLink>
        <NavLink to="/movies" className="navbar__cta">
          Browse shows
        </NavLink>
      </nav>
    </header>
  )
}
