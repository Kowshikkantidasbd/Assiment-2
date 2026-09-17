import { Link } from 'react-router-dom'

export default function HeroBanner() {
  return (
<<<<<<< HEAD
    <section className="grid min-h-[70vh] grid-cols-1 items-center gap-8 bg-ink px-6 py-12 text-parchment md:grid-cols-[1.2fr_0.8fr] md:px-16 md:py-20">
      <div>
        <p className="mb-4 font-body text-sm text-gold">Your next watch is in here somewhere</p>
        <h1 className="mb-6 max-w-[14ch] font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
=======
    <section className="hero">
      <div className="hero__copy">
        <p className="hero__kicker">Your next watch is in here somewhere</p>
        <h1 className="hero__title">
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
          Discover shows worth
          <br />
          staying up for.
        </h1>
<<<<<<< HEAD
        <p className="mb-8 max-w-[42ch] text-base text-parchment-dim md:text-lg">
          Search thousands of TV shows, compare ratings, and line up your
          watchlist — all from one place, powered by TVmaze.
        </p>
        <Link
          to="/movies"
          className="inline-block bg-crimson px-7 py-3.5 text-base font-semibold text-parchment no-underline transition-all hover:-translate-y-0.5 hover:bg-crimson-dark"
        >
          Explore now
        </Link>
      </div>

      <div className="hidden items-stretch justify-center gap-2 md:flex" aria-hidden="true">
        <div className="flex flex-col justify-around py-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="h-3.5 w-3.5 rounded-sm bg-parchment opacity-15" />
          ))}
        </div>
        <div className="flex max-w-[260px] flex-1 items-center justify-center bg-gradient-to-br from-crimson to-crimson-dark">
          <span className="text-7xl">🎞️</span>
        </div>
        <div className="flex flex-col justify-around py-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="h-3.5 w-3.5 rounded-sm bg-parchment opacity-15" />
=======
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
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
          ))}
        </div>
      </div>
    </section>
  )
}
