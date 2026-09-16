import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import MovieGrid from '../components/MovieGrid.jsx'
import MovieModal from '../components/MovieModal.jsx'

const ALL_SHOWS_URL = 'https://api.tvmaze.com/shows'
const SEARCH_URL = (q) => `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`

export default function MovieListing() {
  const [query, setQuery] = useState('')
  const [allShows, setAllShows] = useState([])
  const [searchResults, setSearchResults] = useState(null) // null = not searching
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [selectedShow, setSelectedShow] = useState(null)

  // Load the default browsing grid once.
  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    fetch(ALL_SHOWS_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load shows')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        // Sort by rating (highest first) so the default grid leads with the good stuff.
        const sorted = [...data].sort(
          (a, b) => (b.rating?.average || 0) - (a.rating?.average || 0)
        )
        setAllShows(sorted)
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Debounced search-as-you-type against the search endpoint.
  useEffect(() => {
    const trimmed = query.trim()
    if (!trimmed) {
      setSearchResults(null)
      return
    }
    const handle = setTimeout(() => {
      fetch(SEARCH_URL(trimmed))
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.map((entry) => entry.show))
        })
        .catch(() => setSearchResults([]))
    }, 350)
    return () => clearTimeout(handle)
  }, [query])

  const visibleShows = useMemo(() => {
    return searchResults !== null ? searchResults : allShows
  }, [searchResults, allShows])

  return (
    <div className="listing-page">
      <div className="listing-page__header">
        <h1>Browse shows</h1>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {status === 'loading' && searchResults === null && (
        <p className="status-text">Loading shows…</p>
      )}
      {status === 'error' && searchResults === null && (
        <p className="status-text status-text--error">
          Something went wrong loading shows. Please refresh and try again.
        </p>
      )}

      {(status === 'ready' || searchResults !== null) && (
        <MovieGrid shows={visibleShows.slice(0, 60)} onSelect={setSelectedShow} />
      )}

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  )
}
