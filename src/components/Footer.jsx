export default function Footer() {
  const year = new Date().getFullYear()
  return (

    <footer className="bg-ink px-6 py-8 text-parchment-dim">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">

        <div className="flex items-center gap-2 font-display font-semibold text-parchment">
          <span className="text-xl">🎬</span>

          <span>MovieExplorer</span>
        </div>
        <p className="m-0 text-sm">© {year} MovieExplorer. Show data courtesy of TVmaze.</p>
        <div className="flex gap-5 text-sm">

          <a href="https://github.com" target="_blank" rel="noreferrer" className="opacity-85 hover:opacity-100">
            GitHub
          </a>

          <a href="https://www.tvmaze.com" target="_blank" rel="noreferrer" className="opacity-85 hover:opacity-100">
            TVmaze
          </a>
        </div>

      </div>
    </footer>
    
  )
}
