import { Sparkles, Heart, BookOpen, Users } from "lucide-react"

export function PracticesSection() {
  const practices = [
    {
      icon: Sparkles,
      title: "Meditation & Dhyana",
      description:
        "Daily guided meditation sessions to connect with your inner divine consciousness and achieve mental clarity.",
    },
    {
      icon: Heart,
      title: "Bhakti Yoga",
      description:
        "Devotional practices and chanting to cultivate love, surrender, and spiritual connection with the divine.",
    },
    {
      icon: BookOpen,
      title: "Scriptural Study",
      description:
        "Deep exploration of Tamil Siddhar texts, Vedas, and sacred scriptures to understand ancient wisdom.",
    },
    {
      icon: Users,
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
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <practice.icon className="w-6 h-6 text-primary" />
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
