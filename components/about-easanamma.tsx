import { Card, CardContent } from "@/components/ui/card"

export function AboutEasanamma() {
  return (
    <section id="about-easanamma" className="relative overflow-hidden py-16 sm:py-24">
      {/* Centered decorative background image */}
      <div
        className="pointer-events-none select-none absolute inset-0 bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url(/bg.png)", backgroundSize: "contain" }}
        aria-hidden
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            About Shree Easanamma
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left image fills the column */}
            <div className="relative rounded-lg overflow-hidden divine-glow h-full min-h-[380px] md:min-h-[480px] lg:min-h-[560px]">
              <img src="/spiritual-portrait-divine-mother-meditation.jpg" alt="Shree Easanamma" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Right content */}
            <div className="space-y-6 md:pl-2 lg:pl-6 self-center">
              <p className="text-lg text-foreground/80 text-pretty">
                Revered as Divine Mother, guiding seekers through Sri Vidya Tantra with profound compassion and wisdom.
              </p>
              <p className="text-base text-foreground/70 text-pretty">
                Through her divine grace and teachings, countless seekers have found their path to spiritual awakening
                and inner transformation. Her guidance illuminates the ancient wisdom of the Tamil Siddhar tradition,
                making it accessible to modern spiritual aspirants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
