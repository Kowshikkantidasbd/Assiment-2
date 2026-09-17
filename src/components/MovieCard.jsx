const FALLBACK_POSTER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="440" viewBox="0 0 300 440">
      <rect width="300" height="440" fill="#2A2830"/>
      <text x="50%" y="50%" text-anchor="middle" fill="#8A8694" font-family="sans-serif" font-size="20">No poster</text>
    </svg>`
  )

export default function MovieCard({ show, onSelect }) {
  const year = show.premiered ? show.premiered.slice(0, 4) : '—'
  const rating = show.rating?.average ? show.rating.average.toFixed(1) : 'N/A'
  const poster = show.image?.medium || show.image?.original || FALLBACK_POSTER

  return (
<<<<<<< HEAD
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/20">
      <div className="relative aspect-[2/3] overflow-hidden bg-ink-soft">
        <img
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
=======
    <article className="movie-card">
      <div className="movie-card__poster-wrap">
        <img
          className="movie-card__poster"
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
          src={poster}
          alt={`Poster for ${show.name}`}
          loading="lazy"
        />
<<<<<<< HEAD
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-semibold text-gold shadow-sm backdrop-blur-sm">
          ⭐ {rating}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="m-0 truncate font-display text-base font-semibold leading-tight text-ink" title={show.name}>
          {show.name}
        </h3>
        <p className="m-0 flex items-center gap-1.5 text-sm text-muted">
          <span>📅 {year}</span>
        </p>
        <button
          onClick={() => onSelect(show)}
          className="group/btn mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-ink py-2.5 text-sm font-semibold text-parchment shadow-sm transition-all duration-200 hover:bg-crimson hover:shadow-md"
        >
          See details
          <span className="transition-transform duration-200 group-hover/btn:translate-x-0.5" aria-hidden="true">
            →
          </span>
=======
      </div>
      <div className="movie-card__body">
        <h3 className="movie-card__title">{show.name}</h3>
        <p className="movie-card__meta">
          <span className="movie-card__rating">⭐ {rating}</span>
          <span className="movie-card__dot">•</span>
          <span>📅 {year}</span>
        </p>
        <button className="movie-card__btn" onClick={() => onSelect(show)}>
          See details
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
        </button>
      </div>
    </article>
  )
}
