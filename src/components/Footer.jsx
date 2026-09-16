export default function Footer() {
  const year = new Date().getFullYear()
  return (
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
            TVmaze
          </a>
        </div>
      </div>
    </footer>
  )
}
