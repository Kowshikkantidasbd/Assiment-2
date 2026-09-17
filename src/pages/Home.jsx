import HeroBanner from '../components/HeroBanner.jsx'

const FEATURES = [
  
  {
    title: 'Search anything',
    body: "Find a show by title in seconds, from cult classics to this week's premiere.",
  },
 
  {
    title: 'Real ratings',
    body: "See audience scores at a glance so you know what's actually worth your evening.",
  },
  {
    title: 'Full details',
    body: 'Open any show for its summary, genres, network, and release year.',
  },
]


export default function Home() {
  return (
    <div>
      
      <HeroBanner />
      
      <section className="bg-parchment px-6 py-14 md:px-16 md:py-20">
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-[0.7fr_1fr] md:gap-16">
        
          <div>
        
        
            <h2 className="m-0 max-w-[16ch] font-display text-2xl leading-snug text-ink md:text-3xl">
              Built for people who spend too long picking what to watch.
            </h2>
        
          </div>
        
          <div>
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`grid grid-cols-[auto_1fr] gap-5 py-5 ${i === 0 ? '' : 'border-t border-black/10'}`}
              >
        
                <span className="pt-1 font-display text-lg text-crimson">{feature.title[0]}</span>
        
                <div>
        
                  <h3 className="m-0 mb-1 font-display text-lg text-ink">{feature.title}</h3>
        
                  <p className="m-0 text-[0.95rem] leading-relaxed text-ink-soft">{feature.body}</p>
                </div>
        
              </div>
            ))}
        
          </div>
        
        </div>
      
      </section>
    </div>
  )
}