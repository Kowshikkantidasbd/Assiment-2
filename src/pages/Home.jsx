import HeroBanner from '../components/HeroBanner.jsx'

export default function Home() {
  return (
    <div>
      <HeroBanner />
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
        </div>
      </section>
    </div>
  )
}
