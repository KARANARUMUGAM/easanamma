import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutGurukulam } from "@/components/about-gurukulam"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Banner Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/2151544419.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              About us
            </h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              {/* Left Column - Title and Intro */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    Shree Easanamma Gurukulam
                  </h2>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-primary mb-6">
                    Prism of Siddharism – A Divine Path to Soul Liberation
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Shree Easanamma Gurukulam – Prism of Siddharism was born with a divine purpose:
                  </p>
                </div>
              </div>

              {/* Right Column - Purpose Items */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-lg border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ffeb3b] flex items-center justify-center">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <p className="text-lg text-foreground/90 leading-relaxed pt-2">
                      To liberate souls from the illusions and attachments of the material world,
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ffeb3b] flex items-center justify-center">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <p className="text-lg text-foreground/90 leading-relaxed pt-2">
                      To guide humanity back to its eternal nature,
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ffeb3b] flex items-center justify-center">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <p className="text-lg text-foreground/90 leading-relaxed pt-2">
                      To awaken the truth that we are not the body—we are the soul.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section - Split Layout */}
        <section className="relative py-16 sm:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Home_Page-bg.jpeg')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/90"></div>
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-20 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-20 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
                Why Shree Easanamma Gurukulam?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg border-l-4 border-primary">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Human beings are meant to live in harmony, yet the mind—clouded by ego, emotions, and judgment—often becomes a battlefield. We love and hate, rise and fall, attach and suffer. But this life, though fragile, is the greatest opportunity for spiritual awakening.
                  </p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg border-r-4 border-primary bg-gradient-to-br from-primary/10 to-primary/5">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Shree Easanamma Gurukulam offers a sacred space and a living path to self-realization, grounded in the wisdom of the ancient Siddhars—those enlightened beings who walked the earth just like us, yet unlocked the secrets of the cosmos within themselves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Siddharism Section - Card Grid Layout */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
                Siddharism: The Science of the Soul
              </h2>
              <p className="text-lg text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
                The Siddhars discovered what modern science now begins to glimpse:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border-2 border-orange-200 shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4 text-center">🌌</div>
                  <p className="text-base text-foreground/90 leading-relaxed text-center">
                    That the universe is made of atoms, and yet the entire universe itself is an atom.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-200 shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4 text-center">⚡</div>
                  <p className="text-base text-foreground/90 leading-relaxed text-center">
                    That cosmic energy is the true creator of everything—sunlight, stars, matter, and mind.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border-2 border-orange-200 shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4 text-center">🔥</div>
                  <p className="text-base text-foreground/90 leading-relaxed text-center">
                    That by tuning into this cosmic vibration, one can transform suffering into spiritual power.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-xl border-l-4 border-primary max-w-4xl mx-auto">
                <p className="text-lg text-foreground/90 leading-relaxed text-center">
                  They didn't receive divine power by favour. They earned it through circumstances, through discipline, and through absorbing cosmic energy during life's most painful trials. That is true Siddharism—a path open to all who dare to rise through their own inner fire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Truth of Our Existence Section - Asymmetric Split */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-15 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-15 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
                The Truth of Our Existence
              </h2>
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Left Column - Questions */}
                <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary">
                  <p className="font-semibold text-xl mb-6 text-primary">
                    We must all ask:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <span className="text-2xl">❓</span>
                      <span className="text-lg font-medium">Where do we come from?</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <span className="text-2xl">❓</span>
                      <span className="text-lg font-medium">What are we?</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <span className="text-2xl">❓</span>
                      <span className="text-lg font-medium">Where will we go?</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Answers */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl shadow-lg border-l-4 border-primary">
                    <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                      <span className="font-semibold">Siddharism reveals that the soul alone is real.</span>
                    </p>
                    <p className="text-lg text-foreground/90 leading-relaxed">
                      The body is temporary, but the soul is eternal—formed by cosmic rays, solar energy, and the divine blueprint of the universe. No power on earth or in heaven can destroy it.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-8 rounded-xl shadow-xl">
                    <p className="text-xl font-bold mb-3 text-center">
                      This body is not ours. We do not exist to serve the body.
                    </p>
                    <p className="text-2xl font-bold text-center">
                      We exist to serve the soul.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why the Human Soul is Sacred Section - Grid Cards */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
                Why the Human Soul is Sacred
              </h2>
              <p className="text-lg text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
                Among all of creation, only humans can:
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200 shadow-md hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-4xl mb-4 text-center">🌿</div>
                  <h3 className="font-semibold text-lg text-center mb-2">Create like nature</h3>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 shadow-md hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-4xl mb-4 text-center">🌬️</div>
                  <h3 className="font-semibold text-lg text-center mb-2">Inhale cosmic prana</h3>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 shadow-md hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-4xl mb-4 text-center">✨</div>
                  <h3 className="font-semibold text-lg text-center mb-2">Realize the Self</h3>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-200 shadow-md hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-4xl mb-4 text-center">♾️</div>
                  <h3 className="font-semibold text-lg text-center mb-2">Attain the immortal state</h3>
                </div>
              </div>

              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-primary/30">
                  <p className="text-lg text-foreground/90 leading-relaxed text-center">
                    That is why the human soul is divine.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border-l-4 border-primary">
                  <p className="text-lg text-foreground/90 leading-relaxed text-center">
                    That is why our sages taught: &quot;God lives within you.&quot;
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-8 rounded-xl shadow-xl">
                  <p className="font-bold text-2xl text-center">
                    We are the fingerprints of God.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shree Easanamma Gurukulam is the Way Back to the Divine Section - Feature List + Highlight */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-15 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-15 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                Shree Easanamma Gurukulam is the Way Back to the Divine
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-10">
                {/* Left - Features Grid */}
                <div>
                  <p className="text-lg mb-6 font-semibold text-foreground/90">
                    In a world distracted by materialism, Gurukulam offers a return to:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-lg border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-3xl mb-2">🌳</div>
                      <p className="font-medium">Nature&apos;s way of life</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-3xl mb-2">🌌</div>
                      <p className="font-medium">Cosmic connection</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-3xl mb-2">💫</div>
                      <p className="font-medium">Soul-centred living</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-3xl mb-2">🔮</div>
                      <p className="font-medium">The mystery and purpose of our existence</p>
                    </div>
                  </div>
                </div>

                {/* Right - Statement Boxes */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                    <p className="text-lg text-foreground/90 leading-relaxed">
                      Shree Easanamma does not belong to any religion. It belongs to the truth.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl shadow-lg border-r-4 border-primary">
                    <p className="text-lg text-foreground/90 leading-relaxed">
                      It teaches spiritual self-discipline not to escape life, but to transform it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Highlight Box */}
              <div className="bg-gradient-to-r from-primary via-primary/90 to-primary text-white p-10 rounded-2xl shadow-2xl border-4 border-yellow-400">
                <p className="font-bold text-xl sm:text-2xl leading-relaxed text-center">
                  The knowledge of Shree Easanamma Gurukulam Siddharism holds the sacred mystery of why we are here—and how we can rise beyond suffering to fulfil the true purpose of human birth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {/* <div className="bg-white">
          <AboutGurukulam />
        </div> */}
      </main>
      <Footer />
    </div>
  )
}


