import HeroBanner from '../components/HeroBanner.jsx'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <section className="highlights">
        <div className="highlight">
          <span className="highlight__icon">🔎</span>
          <h3>Search anything</h3>
          <p>Find a show by title in seconds, from cult classics to this week's premiere.</p>
        </div>
        <div className="highlight">
          <span className="highlight__icon">⭐</span>
          <h3>Real ratings</h3>
          <p>See audience scores at a glance so you know what's actually worth your evening.</p>
        </div>
        <div className="highlight">
          <span className="highlight__icon">🎞️</span>
          <h3>Full details</h3>
          <p>Open any show for its summary, genres, network, and release year.</p>
        </div>
      </section>
    </div>
  )
}
