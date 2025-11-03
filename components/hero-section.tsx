import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/spiritual-temple-meditation-hall.jpg)",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Radial Glow on top of image */}
      <div className="absolute inset-0 radial-glow opacity-30" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            Unlock Divine Wisdom with Sri Vidya Tantra Guidance
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty drop-shadow-md">
            Ancient Tamil Siddhar knowledge for self-realization & inner awakening
          </p>
          <Button
            size="lg"
            className="divine-glow-hover bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full"
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  )
}
