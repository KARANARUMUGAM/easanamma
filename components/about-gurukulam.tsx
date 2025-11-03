export function AboutGurukulam() {
  const features = [
    {
      image: "/meditation.png",
      title: "Meditation",
      description: "Deep spiritual practices",
    },
    {
      image: "/divine.png",
      title: "Divine Energy",
      description: "Awakening inner power",
    },
    {
      image: "/knowledge.png",
      title: "Knowledge Flame",
      description: "Ancient wisdom teachings",
    },
  ]

  return (
    <section id="about-gurukulam" className="relative overflow-hidden py-16 sm:py-24">
      {/* Decorative corner images */}
      <img
        src="/bg-1.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-30 sm:opacity-40 max-w-[220px] sm:max-w-[280px] md:max-w-[340px]"
      />
      <img
        src="/bg-2.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-30 sm:opacity-40 max-w-[220px] sm:max-w-[280px] md:max-w-[340px]"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">Shree Easanamma Gurukulam</h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto text-pretty">
            A spiritual learning center nurturing seekers in Siddhar tradition through divine guidance, meditation, and
            inner transformation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center">
                <div className="mb-4">
                  <img src={feature.image} alt={feature.title} className="w-28 h-28 object-contain" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
