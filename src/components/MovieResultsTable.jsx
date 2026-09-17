const FALLBACK_POSTER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="88" viewBox="0 0 60 88">
      <rect width="60" height="88" fill="#2A2830"/>
      <text x="50%" y="50%" text-anchor="middle" fill="#8A8694" font-family="sans-serif" font-size="8">No poster</text>
    </svg>`
  )

export default function MovieResultsTable({ shows, onSelect }) {
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
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-black/5 bg-parchment-dim/60">
              <th className="w-16 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted" />
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Title
              </th>
              <th className="hidden px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted sm:table-cell">
                Genres
              </th>
              <th className="hidden px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted md:table-cell">
                Premiered
              </th>
              <th className="hidden px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted md:table-cell">
                Status
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Rating
              </th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {shows.map((show) => {
              const year = show.premiered ? show.premiered.slice(0, 4) : '—'
              const rating = show.rating?.average ? show.rating.average.toFixed(1) : 'N/A'
              const poster = show.image?.medium || show.image?.original || FALLBACK_POSTER
              const genres = show.genres?.length ? show.genres.join(', ') : '—'

              return (
                <tr
                  key={show.id}
                  onClick={() => onSelect(show)}
                  className="cursor-pointer border-b border-black/5 transition-colors last:border-b-0 hover:bg-parchment-dim/50"
                >
                  <td className="px-4 py-2.5">
                    <img
                      src={poster}
                      alt={`Poster for ${show.name}`}
                      loading="lazy"
                      className="h-14 w-10 rounded-md object-cover shadow-sm"
                    />
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="font-display text-base font-semibold text-ink">{show.name}</span>
                  </td>
                  <td className="hidden px-4 py-2.5 text-sm text-muted sm:table-cell">{genres}</td>
                  <td className="hidden px-4 py-2.5 text-sm text-muted md:table-cell">{year}</td>
                  <td className="hidden px-4 py-2.5 text-sm text-muted md:table-cell">
                    {show.status || '—'}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-ink/5 px-2.5 py-1 text-xs font-semibold text-ink">
                      ⭐ {rating}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onSelect(show)
                      }}
                      className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-parchment shadow-sm transition-colors hover:bg-crimson"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
