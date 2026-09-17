import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SHOWS_URL = 'https://api.tvmaze.com/shows?page=0'

export default function HeroBanner() {
  const [posters, setPosters] = useState([])

  useEffect(() => {
    let cancelled = false
    fetch(SHOWS_URL)
      .then((res) => {
        if (!res.ok) throw new Error('failed')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        const picks = data
          .filter((show) => show.image?.medium && show.rating?.average)
          .sort((a, b) => b.rating.average - a.rating.average)
          .slice(0, 24)
          .map((show) => ({ id: show.id, src: show.image.medium, name: show.name }))
        setPosters(picks)
      })
      .catch(() => {
        // Silent fallback: hero still looks fine with no posters.
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Three staggered columns for the scrolling strip on the right.
  const columns = [posters.slice(0, 6), posters.slice(6, 12), posters.slice(12, 18)]

  return (
    <section className="relative isolate grid min-h-[70vh] grid-cols-1 items-center gap-8 overflow-hidden bg-ink px-6 py-12 text-parchment md:grid-cols-[1.2fr_0.8fr] md:px-16 md:py-20">
      {/* Blurred poster collage behind everything */}
      {posters.length > 0 && (
        <div className="hero-collage" aria-hidden="true">
          {posters.map((poster) => (
            <img key={`bg-${poster.id}`} src={poster.src} alt="" loading="lazy" />
          ))}
        </div>
      )}
      <div className="hero-veil" aria-hidden="true" />

      <div className="relative z-10">
        <p className="mb-4 font-body text-sm text-gold">Your next watch is in here somewhere</p>
        <h1 className="mb-6 max-w-[14ch] font-display text-4xl font-semibold leading-[1.05] drop-shadow-[0_2px_18px_rgba(21,20,26,0.9)] md:text-6xl">
          Discover shows worth
          <br />
          staying up for.
        </h1>
        <p className="mb-8 max-w-[42ch] text-base text-parchment-dim md:text-lg">
          Search thousands of TV shows, compare ratings, and line up your
          watchlist — all from one place, powered by TVmaze.
        </p>
        <Link
          to="/movies"
          className="inline-block bg-crimson px-7 py-3.5 text-base font-semibold text-parchment no-underline shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-crimson-dark"
        >
          Explore now
        </Link>
      </div>

      {/* Scrolling poster strip */}
      <div className="relative z-10 hidden md:block" aria-hidden="true">
        {posters.length > 0 ? (
          <div className="hero-strip">
            {columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`hero-strip__col${colIndex === 1 ? ' hero-strip__col--down' : ''}`}
                style={{ '--dur': `${38 + colIndex * 9}s` }}
              >
                {[...column, ...column].map((poster, i) => (
                  <figure key={`${colIndex}-${poster.id}-${i}`} className="hero-poster">
                    <img src={poster.src} alt="" loading="lazy" />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-stretch justify-center gap-2">
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
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}