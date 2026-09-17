import { useEffect } from 'react'

function stripHtml(html) {
  if (!html) return 'No summary available for this show yet.'
  return html.replace(/<[^>]+>/g, '')
}



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
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">

      <path d="M10 1.5l2.49 5.31 5.76.65-4.3 3.98 1.18 5.72L10 14.9l-5.13 2.26 1.18-5.72-4.3-3.98 5.76-.65L10 1.5z" />
    </svg>
  )

}

export default function MovieModal({ show, onClose }) {

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()

    }
    document.addEventListener('keydown', onKeyDown)

    document.body.style.overflow = 'hidden'
    return () => {

      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }

  }, [onClose])

  if (!show) return null

  const poster = show.image?.original || show.image?.medium || FALLBACK_POSTER

  const rating = show.rating?.average ? show.rating.average.toFixed(1) : null

  const year = show.premiered ? show.premiered.slice(0, 4) : null
  const genres = show.genres?.length ? show.genres.join(', ') : 'Unlisted'

  const network = show.network?.name || show.webChannel?.name || null

  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm md:p-6"
      onClick={onClose}

    >
      <div

        className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden bg-parchment shadow-[0_24px_60px_rgba(21,20,26,0.35)] sm:flex-row"
        role="dialog"

        aria-modal="true"
        aria-labelledby="modal-title"

        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border border-white/40 bg-ink/70 text-parchment backdrop-blur transition-colors hover:bg-crimson"
          onClick={onClose}

          aria-label="Close details"
        >
          ✕
        </button>

        <div className="relative aspect-[2/3] w-full flex-shrink-0 overflow-hidden bg-ink-soft sm:w-2/5 sm:aspect-auto">
          <img
            className="h-full w-full object-cover"

            src={poster}

            alt={`Poster for ${show.name}`}
          />
          {rating && (
            <span className="absolute left-3 top-3 flex items-center gap-1 bg-ink/85 px-2.5 py-1 text-sm font-semibold text-gold">
              <StarIcon />

              {rating}
            </span>

          )}
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-7">

          <h2 id="modal-title" className="m-0 mb-2 font-display text-2xl leading-tight text-ink md:text-3xl">
            {show.name}

          </h2>

          <p className="m-0 mb-1 text-sm text-ink-soft md:text-base">

            {[year, network].filter(Boolean).join('  —  ') || 'Details unavailable'}
          </p>

          <p className="m-0 mb-5 text-sm text-muted">Genres: {genres}</p>


          <h3 className="m-0 mb-2 font-display text-lg text-ink">Overview</h3>


          <p className="leading-relaxed text-ink-soft">{stripHtml(show.summary)}</p>
        </div>
        
      </div>
    </div>
  )
}