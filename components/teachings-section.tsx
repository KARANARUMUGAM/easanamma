import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TeachingsSection() {
  const teachings = [
    {
      title: "Chita Viruthi Nirodha",
      description: "An ancient Tamil Siddhar technique to silence mind fluctuations and awaken true awareness.",
      id: "chita-viruthi",
    },
    {
      title: "Panchaagni Vithai",
      description: "A supreme yogic path that connects spirit, science, and the divine within.",
      id: "panchaagni",
    },
  ]

  return (
    <section className="py-16 sm:py-24 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Home_Page-bg.jpeg')" }}>
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12 h2-black">Featured Teachings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teachings.map((teaching) => (
            <Card
              key={teaching.id}
              id={teaching.id}
              className="border-2 border-primary/30 divine-glow-hover transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="font-serif text-2xl" style={{ background: "linear-gradient(to right, #ff6b00, #ffeb3b)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>{teaching.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/80 mb-6">{teaching.description}</CardDescription>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
