import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutEasanammaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Banner Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/49.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              About Shree Easanamma
            </h1>
          </div>
        </section>

        {/* Main Introduction Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-4xl mb-4 block">🌸</span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
                  THE DIVINE MOTHER
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                {/* Left Column - Image */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/spiritual-portrait-divine-mother-meditation.jpg" 
                    alt="Shree Easanamma" 
                    className="w-full h-full object-cover min-h-[400px] md:min-h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                    Shree Easanamma – The Living Flame of Divine Wisdom
                  </h3>
                  <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                    <p>
                      Shree Easanamma is revered as one of the foremost disciples of Athi Yogi Shivan—a radiant beacon of divine truth and timeless spiritual insight. She is honored as a Wisdom Guru, whose very name signifies her divine mission: to guide souls toward inner awakening, freedom from karma, and union with the Supreme Consciousness.
                    </p>
                    <p>
                      With a heart overflowing with compassion, grace, and divine love, Amma transcends all religious boundaries and worldly distinctions. To be in her presence is to experience the living transmission of the Divine—a presence that uplifts, heals, and transforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A Sacred Journey of Grace Section */}
        <section className="relative py-16 sm:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Home_Page-bg.jpeg')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/90"></div>
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-20 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-20 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                A Sacred Journey of Grace
              </h2>
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Throughout her spiritual journey, Shree Easanamma was graced with the direct guidance, blessings, and instruction of both Father Easan and the Divine Mother Sri Lalitha Bala Tripura Sundari. Nurtured by their celestial care, she blossomed into a pure channel of divine energy, carrying their will with clarity, devotion, and inner power.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed font-semibold">
                  Her life is not merely a biography—it is a living scripture, revealing how the soul can blossom into its full divine potential when surrendered to truth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A True Spiritual Master Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                A True Spiritual Master
              </h2>
              <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                <p>
                  Shree Easanamma is not just a teacher—she is a living Siddhar, a flame of wisdom in this age of darkness. Her role is not to inform, but to transform. She awakens the dormant inner fire (Kundalini Shakti) within her disciples, guiding them safely through the path of self-purification, immortality, and divine realization.
                </p>
                <p className="text-xl font-semibold italic text-center bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-primary">
                  Her compassion is as soft as the moonlight, her discipline as fierce as fire, and her presence as eternal as the soul itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Guru's Mission Section */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-15 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-15 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                The Guru&apos;s Mission
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-primary mb-6">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  Easanamma&apos;s mission is to revive the ancient Siddhar tradition and bring its timeless teachings to seekers of all walks of life. Through her unique Easanamma Meditation & Healing System, she transmits secret yogic wisdom—including Sri Vidya Tantra, Kundalini Yoga, Vasi Yoga, Karma Yogam, Bhakti Yogam, Raja Yogam, and inner fire practices—all designed to:
                </p>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span className="text-lg">Cleanse karmic patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span className="text-lg">Awaken higher consciousness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span className="text-lg">Heal body, mind, and spirit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span className="text-lg">Align disciples with the Supreme Truth</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-lg text-foreground/90 leading-relaxed text-center font-semibold">
                  Amma believes the path to God must remain beyond material limitation. The only requirement is sincerity, discipline, and surrender.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A Living Transmission of Divinity Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-4xl mb-4 block">🌼</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                  A Living Transmission of Divinity
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border-2 border-orange-200 shadow-lg">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    To sit before Shree Easanamma is to feel your heart open effortlessly, your breath deepen, your mind quieten, and your soul expand. She does not merely speak about God—she awakens the experience of God within you.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-200 shadow-lg">
                  <p className="text-lg text-foreground/90 leading-relaxed font-semibold mb-4">
                    She is:
                  </p>
                  <ul className="space-y-3 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>A mother who heals your wounds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>A guru who lights your path</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>A goddess who awakens your soul</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>A guide who walks with you through lifetimes</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-xl border-l-4 border-primary">
                <p className="text-lg text-foreground/90 leading-relaxed text-center">
                  Her presence is a lamp that ignites the hidden flame in every seeker—revealing their own divine essence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Call of the Guru Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-primary via-primary/90 to-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center h2-black">
                The Call of the Guru
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Shree Easanamma&apos;s Gurukulam is not just a retreat—it is a soul&apos;s paradise, a sanctuary of transformation, and a gateway to Siddhahood. Here, seekers discover that immortality, bliss, and liberation are not distant dreams, but living realities within.
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-yellow-400/30 space-y-4">
                  <p className="text-xl font-bold">
                    She does not promise comfort—she promises truth.
                  </p>
                  <p className="text-xl font-bold">
                    She does not give illusions—she gives liberation.
                  </p>
                  <p className="text-xl font-bold">
                    She does not just teach—she transforms.
                  </p>
                </div>
                <p className="text-2xl font-bold text-center mt-8">
                  To walk with Shree Easanamma is to walk directly into the embrace of the Divine.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

