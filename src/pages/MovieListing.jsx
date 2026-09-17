import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import MovieGrid from '../components/MovieGrid.jsx'
import MovieResultsTable from '../components/MovieResultsTable.jsx'
import MovieModal from '../components/MovieModal.jsx'


const ALL_SHOWS_URL = 'https://api.tvmaze.com/shows'

const SEARCH_URL = (q) => `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`

export default function MovieListing() {
  const [query, setQuery] = useState('')
  const [allShows, setAllShows] = useState([])
  const [searchResults, setSearchResults] = useState(null) // null = not searching
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [selectedShow, setSelectedShow] = useState(null)

  
  
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
    
    <div className="mx-auto max-w-7xl px-6 py-10 md:px-16 md:py-12">
    
      <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
    
        <div>
    
          <h1 className="mb-1 font-display text-3xl md:text-4xl">Browse shows</h1>
    
          <div className="h-1 w-14 rounded-full bg-crimson" />
    
        </div>
    
        <div className="w-full md:ml-auto md:max-w-xl">
    
          <SearchBar value={query} onChange={setQuery} />
    
        </div>
    
      </div>

    
      {status === 'loading' && searchResults === null && (
        <p className="text-base text-muted">Loading shows…</p>
      )}
    
      {status === 'error' && searchResults === null && (
        <p className="text-base text-crimson">
          Something went wrong loading shows. Please refresh and try again.
        </p>
    
    )}

    
      {(status === 'ready' || searchResults !== null) && (
        searchResults !== null ? (
          <MovieResultsTable shows={visibleShows.slice(0, 60)} onSelect={setSelectedShow} />
        ) : (
          <MovieGrid shows={visibleShows.slice(0, 60)} onSelect={setSelectedShow} />
        )
      )}

    
      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    
    
    </div>
  )
}