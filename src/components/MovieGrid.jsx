import MovieCard from './MovieCard.jsx'

export default function MovieGrid({ shows, onSelect }) {
  if (shows.length === 0) {
    return (
<<<<<<< HEAD
      <div className="py-16 text-center">
        <p className="mb-2 font-display text-xl">No shows found</p>
        <p className="m-0 text-muted">
=======
      <div className="empty-state">
        <p className="empty-state__title">No shows found</p>
        <p className="empty-state__desc">
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
          Try a different title, or check the spelling and search again.
        </p>
      </div>
    )
  }

  return (
<<<<<<< HEAD
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 md:gap-7 lg:grid-cols-5">
=======
    <div className="movie-grid">
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onSelect={onSelect} />
      ))}
    </div>
  )
}
