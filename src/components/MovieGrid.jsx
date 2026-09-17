import MovieCard from './MovieCard.jsx'

export default function MovieGrid({ shows, onSelect }) {
  if (shows.length === 0) {
    return (
      <div className="py-16 text-center">


        <p className="mb-2 font-display text-xl">No shows found</p>


        <p className="m-0 text-muted">
          Try a different title, or check the spelling and search again.
        </p>
      </div>
    )


  }

  return (

    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 md:gap-7 lg:grid-cols-5">
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onSelect={onSelect} />
      ))}
      
    </div>
  )
  
}
