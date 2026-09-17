import HeroBanner from '../components/HeroBanner.jsx'

export default function Home() {
  return (
    <div>
      <HeroBanner />
<<<<<<< HEAD
      <section className="grid grid-cols-1 gap-8 bg-parchment px-6 py-10 md:grid-cols-3 md:px-16 md:py-16">
        <div className="border-t-[3px] border-crimson pt-4">
          <span className="text-2xl">🔎</span>
          <h3 className="mb-2 mt-2 font-display text-xl">Search anything</h3>
          <p className="m-0 text-sm text-ink-soft">
            Find a show by title in seconds, from cult classics to this week's premiere.
          </p>
        </div>
        <div className="border-t-[3px] border-crimson pt-4">
          <span className="text-2xl">⭐</span>
          <h3 className="mb-2 mt-2 font-display text-xl">Real ratings</h3>
          <p className="m-0 text-sm text-ink-soft">
            See audience scores at a glance so you know what's actually worth your evening.
          </p>
        </div>
        <div className="border-t-[3px] border-crimson pt-4">
          <span className="text-2xl">🎞️</span>
          <h3 className="mb-2 mt-2 font-display text-xl">Full details</h3>
          <p className="m-0 text-sm text-ink-soft">
            Open any show for its summary, genres, network, and release year.
          </p>
=======
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
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
        </div>
      </section>
    </div>
  )
}
