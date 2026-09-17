export default function SearchBar({ value, onChange }) {
  return (
    <form
      className="flex w-full items-center gap-3 rounded-xl border border-[#e3e8ef] bg-[#f8fafc] px-5 py-4 transition-all duration-200 focus-within:border-[#cbd5e1] focus-within:bg-white focus-within:shadow-[0_1px_3px_rgba(21,20,26,0.08)]"
      onSubmit={(e) => e.preventDefault()}
    >
      <svg
        className="h-5 w-5 flex-shrink-0 text-[#94a3b8]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" />
      </svg>

      <input
        type="text"
        className="flex-1 border-none bg-transparent font-body text-base text-ink outline-none placeholder:text-[#94a3b8]"
        placeholder="Search for a movie..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search for a show by title"
      />

      {value && (
        <button
          type="button"
          className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-none bg-transparent text-sm text-[#94a3b8] transition-colors hover:text-ink"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </form>
  )
}