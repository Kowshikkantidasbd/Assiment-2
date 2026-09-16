import MovieCard from './MovieCard.jsx'

export default function MovieGrid({ shows, onSelect }) {
  if (shows.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state__title">No shows found</p>
        <p className="empty-state__desc">
          Try a different title, or check the spelling and search again.
        </p>
      </div>
    )
  }

  return (
    <div className="movie-grid">
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onSelect={onSelect} />
      ))}
    </div>
  )
}
