export default function SearchBar({ value, onChange }) {
  return (
<<<<<<< HEAD
    <form
      className="flex max-w-2xl items-center gap-3 rounded-full border border-black/5 bg-white py-2 pl-5 pr-2 shadow-sm transition-shadow duration-200 focus-within:shadow-md focus-within:ring-2 focus-within:ring-crimson/30"
      onSubmit={(e) => e.preventDefault()}
    >
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-crimson/10 text-base text-crimson" aria-hidden="true">
=======
    <div className="search-bar">
      <span className="search-bar__icon" aria-hidden="true">
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
        🔍
      </span>
      <input
        type="text"
<<<<<<< HEAD
        className="flex-1 border-none bg-transparent py-2 font-body text-lg font-medium text-ink outline-none placeholder:font-normal placeholder:text-ink-soft"
        placeholder="Search for a show — try “Boys” or “Breaking Bad”"
=======
        className="search-bar__input"
        placeholder="Search for a show — try “Girls” or “Breaking Bad”"
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search for a show by title"
      />
      {value && (
        <button
<<<<<<< HEAD
          type="button"
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-none bg-ink-soft/10 text-sm text-muted transition-colors hover:bg-ink-soft/20 hover:text-ink"
=======
          className="search-bar__clear"
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
<<<<<<< HEAD
      <button
        type="submit"
        className="flex-shrink-0 rounded-full bg-crimson px-6 py-2.5 text-sm font-semibold text-parchment shadow-sm transition-colors hover:bg-crimson-dark"
      >
        Search
      </button>
    </form>
=======
    </div>
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
  )
}
