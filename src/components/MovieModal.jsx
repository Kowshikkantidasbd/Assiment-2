import { useEffect } from 'react'

function stripHtml(html) {
  if (!html) return 'No summary available for this show yet.'
  return html.replace(/<[^>]+>/g, '')
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

  const backdrop = show.image?.original || show.image?.medium
  const rating = show.rating?.average ? show.rating.average.toFixed(1) : 'N/A'
  const year = show.premiered ? show.premiered.slice(0, 4) : '—'
  const genres = show.genres?.length ? show.genres.join(', ') : 'Unlisted'
  const network = show.network?.name || show.webChannel?.name || 'Unknown network'

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close details">
          ✕
        </button>

        {backdrop && (
          <div className="modal__backdrop-wrap">
            <img className="modal__backdrop" src={backdrop} alt={`Backdrop for ${show.name}`} />
          </div>
        )}

        <div className="modal__body">
          <h2 id="modal-title" className="modal__title">
            {show.name}
          </h2>
          <p className="modal__meta">
            <span>⭐ Rating: {rating}</span>
            <span className="movie-card__dot">•</span>
            <span>📅 Release: {year}</span>
            <span className="movie-card__dot">•</span>
            <span>📺 {network}</span>
          </p>
          <p className="modal__genres">Genres: {genres}</p>

          <h3 className="modal__section-title">Overview</h3>
          <p className="modal__summary">{stripHtml(show.summary)}</p>

          <div className="modal__actions">
            <button className="modal__close-btn" onClick={onClose}>
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
