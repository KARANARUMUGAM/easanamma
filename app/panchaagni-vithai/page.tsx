import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PanchaagniVithaiPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Banner Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/vivid-colors-navratri-celebration-festival_23-2151262816.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Panchaagni Vithai
            </h1>
          </div>
        </section>

        {/* Main Introduction Section - Image with Text */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              {/* Left Column - Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/spiritual-ceremony-ritual-fire.jpg" 
                  alt="Panchaagni Vithai" 
                  className="w-full h-full object-cover min-h-[400px] md:min-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                  Panchaagni Vithai – The Crown Jewel of Sri Vidya Sadhana
                </h2>
                <p className="text-lg font-semibold text-primary">
                  As Revealed and Blessed by Gnana Guru Shree Easanamma
                </p>
                <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                  <p>
                    In the ancient streams of Tamil Siddhar wisdom, there exists a supreme path, whispered only from the lips of an enlightened master to the ears of a worthy disciple — Panchaagni Vithai.
                  </p>
                  <p>
                    This is not a religion.
                  </p>
                  <p>
                    This is not mere mantra chanting or ritual.
                  </p>
                  <p>
                    This is the purest art of merging with the Divine Mother, where the microcosm of your own being and the macrocosm of the vast universe become One Breath, One Light, One Consciousness.
                  </p>
                  <p className="font-semibold text-xl">
                    It is the highest form of Sri Vidya Sadhana — not for curiosity seekers, but for those whose souls are restless for truth, who are ready to dissolve their ego and awaken the infinite light within.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives and Essence Section */}
        <section className="relative py-16 sm:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Home_Page-bg.jpeg')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/90"></div>
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-20 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-20 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                Objectives of the Practice
              </h2>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-8 text-center text-primary">
                The Essence of Panchaagni Vithai
              </h3>
              
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg space-y-6 mb-8">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Panchaagni Vithai is the living wisdom of Sridevi Bala — the child form of Sri Lalitha Tripura Sundari, Rajarajeshwari, the Mother of all creation. She is Guru, Mother, and Self — teaching the divine hidden within your own body.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  The Siddhars, in their compassion, discovered this method and lived beyond the limitations of time, still existing as pure light and sound in the subtle planes. This path was never meant for the masses — only for those who have attained the right inner maturity, purified in body, mind, and soul.
                </p>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-red-500">
                  <p className="text-lg font-semibold text-foreground/90 mb-2">
                    Without the touch of a Guru&apos;s grace, the doors to Panchaagni Vithai remain closed.
                  </p>
                  <p className="text-lg text-foreground/80 italic">
                    As the Siddhar proverb says:
                  </p>
                  <p className="text-2xl font-serif text-center mt-4 text-primary">
                    &quot;குரு தொட்டு காட்டா வித்தை சுட்டு போட்டாலும் வராது&quot;
                  </p>
                  <p className="text-center mt-2 text-foreground/80">
                    (Without the Guru&apos;s touch, no amount of study or effort will reveal the truth.)
                  </p>
                </div>
              </div>

              {/* The Way of Panchaagni Vithai */}
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg border-l-4 border-primary">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">🌸</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6">
                    The Way of Panchaagni Vithai
                  </h3>
                </div>
                <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Panchaagni Vithai begins with cleansing — not of the body alone, but of the antahkarana (inner instruments), the tri-karana (thought, word, and deed), and the deha (physical form). Only then can the Guru&apos;s Deeksha ignite the inner flame.
                  </p>
                  <p className="font-semibold">
                    This is Samayachara — the most secret, inner form of worship, practiced without external ritual.
                  </p>
                  <p>
                    It is purely Yoga in its highest form — scientific, systematic, and piercing to the core of your being.
                  </p>
                  <p>
                    Through this path, the Kundalini Shakti is awakened under the Guru&apos;s direct vision, rising through the chakras, illuminating them, merging with Sadashiva at the Sahasrara, and then returning to the Muladhara — completing the sacred circuit of divine union.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Living Presence of Shree Easanamma Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                The Living Presence of Shree Easanamma
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border-2 border-orange-200 shadow-lg">
                  <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                    Gnana Guru Shree Easanamma, foremost disciple of Aadhi Yogi Shivan, has walked this path under the blessings of Father Easan and Mother Lalitha Bala Tripura Sundari.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    She carries the lineage fire of the Siddhar Peedam, not as a preacher of philosophy, but as one who is the living embodiment of the truths she shares.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-200 shadow-lg">
                  <p className="text-lg text-foreground/90 leading-relaxed font-semibold mb-4">
                    Her mission is simple yet cosmic:
                  </p>
                  <p className="text-xl font-bold text-primary text-center italic">
                    &quot;I have come only to awaken the collective consciousness in human beings.&quot;
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed mt-4">
                    Shree Easanamma&apos;s words are not theories. They are living currents of Shakti that enter the heart and transform. She speaks as one who has crossed the river and now extends her hand to others.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-xl border-l-4 border-primary shadow-lg">
                <p className="text-lg text-foreground/90 leading-relaxed text-center">
                  In the Gurukulam, Amma sees no caste, no religion, no worldly identity — only the vibration you emit, the purity of your intent, and your readiness to walk the fire-path of Panchaagni Vithai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Walk the Path Section */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-15 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-15 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                Why Walk the Path of Panchaagni Vithai?
              </h2>
              
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-primary">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  When Panchaagni Vithai enters your life, you begin to see through the veil of Maya.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed font-semibold mb-6">
                  Your body becomes a temple, your breath a mantra, your mind a clear sky, and your soul a mirror to the infinite.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Through Guru Deeksha and disciplined practice, the following unfold naturally:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200 shadow-md">
                  <p className="text-lg font-semibold">Attainment of the state of Maha Siddha Purusha</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-200 shadow-md">
                  <p className="text-lg font-semibold">Brahma Gnana Vedanta – direct realization of the Self</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 shadow-md">
                  <p className="text-lg font-semibold">Complete cleansing and activation of the chakras</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 shadow-md">
                  <p className="text-lg font-semibold">Kundalini awakening in its purest, safest form</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-2 border-red-200 shadow-md">
                  <p className="text-lg font-semibold">Balancing of the five elements in the body</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-2 border-indigo-200 shadow-md">
                  <p className="text-lg font-semibold">Pineal gland activation – awakening the inner light</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-xl border-2 border-teal-200 shadow-md">
                  <p className="text-lg font-semibold">Dissolution of the fear of death</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-200 shadow-md">
                  <p className="text-lg font-semibold">Instant manifestation of pure-hearted intentions</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border-2 border-pink-200 shadow-md">
                  <p className="text-lg font-semibold">Release of deep karmic residues</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 shadow-md">
                  <p className="text-lg font-semibold">Living in continuous awareness of God&apos;s presence</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 shadow-md">
                  <p className="text-lg font-semibold">Self-realization beyond all dogma</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Life in Gurukulam Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                Life in Shree Easanamma Gurukulam
              </h2>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-primary space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  The Gurukulam is not a place for seekers of comfort — it is a sacred fire pit where the ego is burnt away.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Here, every day is structured for sadhana, seva, and silence.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Under Amma&apos;s blessings, the student walks the ancient code of Ashtanga Yoga, Shastra Sampradaya, Yama, and Niyama.
                </p>
                <p className="text-xl font-semibold text-center text-primary mt-6">
                  This is not an escape from life — this is a transformation of life itself.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Householders, renunciates, and sincere seekers alike can walk this path, as Sree Vithai bridges the worldly and the spiritual, leading all to the same destination: Mukti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Call Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-primary via-primary/90 to-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-4xl mb-4 block">✨</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 h2-black">
                  The Call
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  If your soul burns for truth, if your heart beats for the Mother, if your being longs for freedom from the endless cycles of birth and death — then Panchaagni Vithai is calling you.
                </p>
                <p className="text-xl font-bold text-center">
                  Here, under the shade of the Siddhar Peedam, with the grace of Guru Deeksha from Shree Easanamma, you will not learn about God.
                </p>
                <p className="text-2xl font-bold text-center">
                  You will become the light of God.
                </p>
              </div>

              <div className="mt-12 bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-yellow-400/30">
                <div className="text-center mb-4">
                  <span className="text-4xl mb-4 block">🌺</span>
                </div>
                <p className="text-2xl font-bold text-center italic leading-relaxed">
                  &quot;You are not here to become something. You are here to burn away everything that hides what you already are — the eternal Shakti.&quot;
                </p>
                <p className="text-xl text-center mt-4 font-semibold">
                  — Shree Easanamma
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

