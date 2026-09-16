export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon" aria-hidden="true">
        🔍
      </span>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search for a show — try “Girls” or “Breaking Bad”"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search for a show by title"
      />
      {value && (
        <button
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  )
}
