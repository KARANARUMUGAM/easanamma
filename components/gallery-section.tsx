export function GallerySection() {
  const galleryImages = [
    {
      src: "/spiritual-temple-meditation-hall.jpg",
      alt: "Meditation Hall",
      title: "Sacred Meditation Space",
    },
    {
      src: "/spiritual-guru-teaching-disciples.jpg",
      alt: "Teaching Session",
      title: "Wisdom Teachings",
    },
    {
      src: "/spiritual-ceremony-ritual-fire.jpg",
      alt: "Sacred Ceremony",
      title: "Divine Ceremonies",
    },
    {
      src: "/meditation-garden-peaceful-nature.jpg",
      alt: "Meditation Garden",
      title: "Tranquil Gardens",
    },
    {
      src: "/spiritual-community-gathering-satsang.jpg",
      alt: "Community Gathering",
      title: "Satsang Gatherings",
    },
    {
      src: "/spiritual-altar-deity-shrine.jpg",
      alt: "Sacred Altar",
      title: "Divine Altar",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-background">
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Sacred Spaces</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our spiritual sanctuary and community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-semibold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
