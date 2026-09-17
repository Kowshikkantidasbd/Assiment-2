export default function Footer() {
  const year = new Date().getFullYear()
  return (
<<<<<<< HEAD
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
=======
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="navbar__mark">🎬</span>
          <span>MovieExplorer</span>
        </div>
        <p className="footer__copy">© {year} MovieExplorer. Show data courtesy of TVmaze.</p>
        <div className="footer__links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.tvmaze.com" target="_blank" rel="noreferrer">
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
            TVmaze
          </a>
        </div>
      </div>
    </footer>
  )
}
