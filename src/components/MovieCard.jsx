const FALLBACK_POSTER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="440" viewBox="0 0 300 440">
      <rect width="300" height="440" fill="#2A2830"/>
      <text x="50%" y="50%" text-anchor="middle" fill="#8A8694" font-family="sans-serif" font-size="20">No poster</text>
    </svg>`
  )



function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden="true">
      <path d="M10 1.5l2.49 5.31 5.76.65-4.3 3.98 1.18 5.72L10 14.9l-5.13 2.26 1.18-5.72-4.3-3.98 5.76-.65L10 1.5z" />
    </svg>
  )
}



export default function MovieCard({ show, onSelect }) {
  const year = show.premiered ? show.premiered.slice(0, 4) : null
  const rating = show.rating?.average ? show.rating.average.toFixed(1) : null
  const poster = show.image?.medium || show.image?.original || FALLBACK_POSTER

  return (
    <article className="group flex flex-col overflow-hidden border border-black/8 bg-white transition-shadow duration-200 hover:shadow-[0_10px_28px_rgba(21,20,26,0.14)]">
      <button
        onClick={() => onSelect(show)}
        className="relative block aspect-[2/3] w-full overflow-hidden border-none bg-ink-soft p-0 text-left"
      >


        <img
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={poster}
          alt={`Poster for ${show.name}`}
          loading="lazy"
        />
        {rating && (
          <span className="absolute right-2 top-2 flex items-center gap-1 bg-ink/85 px-2 py-1 text-xs font-semibold text-gold">
            <StarIcon />
            {rating}
          </span>
        )}
      </button>


      <div className="flex flex-1 flex-col gap-1 border-t border-black/8 p-3.5">
        <h3 className="m-0 truncate font-display text-base font-semibold leading-tight text-ink" title={show.name}>
          {show.name}
        </h3>
        <p className="m-0 text-sm text-muted">{year || 'Year unknown'}</p>
        <button
          onClick={() => onSelect(show)}
          className="mt-2.5 w-full border border-ink bg-transparent py-2 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-ink hover:text-parchment"
        >
          See details
        </button>
        
      </div>

    </article>
  )
}