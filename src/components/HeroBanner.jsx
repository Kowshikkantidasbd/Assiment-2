import { Link } from 'react-router-dom'

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <p className="hero__kicker">Your next watch is in here somewhere</p>
        <h1 className="hero__title">
          Discover shows worth
          <br />
          staying up for.
        </h1>
        <p className="hero__desc">
          Search thousands of TV shows, compare ratings, and line up your
          watchlist — all from one place, powered by TVmaze.
        </p>
        <Link to="/movies" className="hero__cta">
          Explore now
        </Link>
      </div>
      <div className="hero__reel" aria-hidden="true">
        <div className="filmstrip">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="filmstrip__hole" />
          ))}
        </div>
        <div className="hero__frame">
          <span className="hero__frame-emoji">🎞️</span>
        </div>
        <div className="filmstrip">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="filmstrip__hole" />
          ))}
        </div>
      </div>
    </section>
  )
}
