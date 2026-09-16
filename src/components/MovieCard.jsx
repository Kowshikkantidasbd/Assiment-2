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
    <article className="movie-card">
      <div className="movie-card__poster-wrap">
        <img
          className="movie-card__poster"
          src={poster}
          alt={`Poster for ${show.name}`}
          loading="lazy"
        />
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
        </button>
      </div>
    </article>
  )
}
