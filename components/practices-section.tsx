export function PracticesSection() {
  const practices = [
    {
      image: "/sp-1.png",
      title: "Meditation & Dhyana",
      description:
        "Daily guided meditation sessions to connect with your inner divine consciousness and achieve mental clarity.",
    },
    {
      image: "/sp-2.png",
      title: "Bhakti Yoga",
      description:
        "Devotional practices and chanting to cultivate love, surrender, and spiritual connection with the divine.",
    },
    {
      image: "/sp-3.png",
      title: "Scriptural Study",
      description:
        "Deep exploration of Tamil Siddhar texts, Vedas, and sacred scriptures to understand ancient wisdom.",
    },
    {
      image: "/sp-4.png",
      title: "Satsang",
      description:
        "Community gatherings for spiritual discourse, sharing experiences, and collective growth in consciousness.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Spiritual Practices</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your life through ancient practices and modern guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">
                <img src={practice.image} alt={practice.title} className="w-20 h-20 object-contain" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{practice.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
