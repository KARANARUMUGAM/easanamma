import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RajaMargaPage() {
  const ashtangaYoga = [
    "Yama – Moral restraints (non-violence, truth, non-stealing, etc.)",
    "Niyama – Observances (purity, contentment, discipline, etc.)",
    "Asana – Physical postures",
    "Pranayama – Regulation of breath",
    "Pratyahara – Withdrawal of senses",
    "Dharana – Concentration",
    "Dhyana – Meditation",
    "Samadhi – Union with the Divine",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Banner Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/3.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Raja Marga
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
              राजर्ार्म | Path of Meditation and Discipline
            </p>
            <p className="text-lg md:text-xl text-white/80 italic mt-2">
              "Mastery of Mind leads to Mastery of Self."
            </p>
          </div>
        </section>

        {/* Core Idea Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8 border-2 border-primary">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Core Idea</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Raja Marga is the royal path of meditation, discipline, and control of mind and body to 
                    experience the Divine within. It is the path of self-mastery through Yoga, as systematized by 
                    Patanjali in the Yoga Sutras.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Eight Limbs (Ashtanga Yoga)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-foreground/90 list-decimal list-inside">
                    {ashtangaYoga.map((limb, index) => (
                      <li key={index}>{limb}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Suitable For</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      People inclined toward meditation, discipline, and self-control — seekers who pursue spiritual 
                      realization through silence and inner stillness.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Goal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Through mental purification and meditation, attain Samadhi — the state of oneness with the 
                      Supreme Consciousness.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Philosophy Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
                Teaching & Training Programmes
              </h2>

              <Card className="mb-8 border-l-4 border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Teaching Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground/90 leading-relaxed italic mb-4">
                    "Yoga is the cessation of the fluctuations of the mind." — Patanjali Yoga Sutra 1.2
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    Raja Yoga, also known as the Royal Path, focuses on mental control, meditation, and discipline 
                    through the eightfold (Ashtanga) Yoga system. It unites body, mind, and spirit through inner 
                    mastery.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Traditional Training Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-foreground/90">
                      <li>• Guru-led meditation training: Silent sitting, breath regulation, and mantra japa.</li>
                      <li>• Ashram life: Strict discipline, early rising, meditation hours, and moral observances.</li>
                      <li>• Hatha Yoga practices: Physical postures and breath control as preparatory stages.</li>
                      <li>• Silence retreats: For deepening concentration and detachment.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Modern Institutional Programmes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-foreground/90">
                      <li>• The Yoga Institute (Mumbai): Oldest yoga center teaching classical Raja Yoga.</li>
                      <li>• Bihar School of Yoga (Munger): Integral yoga training with scriptural study.</li>
                      <li>• Isha Foundation, Sivananda Yoga Vedanta, Art of Living: Offer guided Raja Yoga and Dhyana (meditation) courses.</li>
                      <li>• University-level Yoga departments: Offer diploma and degree programs in Yoga and Consciousness.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Core Training Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-foreground/90 list-decimal list-inside">
                    <li>Theory of Mind and Consciousness</li>
                    <li>Ashtanga Yoga: Yama to Samadhi</li>
                    <li>Pranayama and Breath Regulation</li>
                    <li>Concentration and Meditation Techniques</li>
                    <li>Psychological Balance and Mindfulness</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programme Durations Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
                Programme Durations
              </h2>

              <div className="space-y-8">
                {/* 10-Day Programme */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">10-Day Programme: "Silence Within"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b">
                            <th className="p-3">Day</th>
                            <th className="p-3">Focus</th>
                            <th className="p-3">Practice</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-3">1-2</td>
                            <td className="p-3">Foundations of Yoga</td>
                            <td className="p-3">Yama, Niyama, posture training</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">3-4</td>
                            <td className="p-3">Breath Awareness</td>
                            <td className="p-3">Pranayama, Nadi Shuddhi</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">5-6</td>
                            <td className="p-3">Concentration</td>
                            <td className="p-3">Trataka, Dharana techniques</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">7-8</td>
                            <td className="p-3">Meditation</td>
                            <td className="p-3">Guided Dhyana, mindfulness</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">9</td>
                            <td className="p-3">Silence Day</td>
                            <td className="p-3">Mauna (silence) practice</td>
                          </tr>
                          <tr>
                            <td className="p-3">10</td>
                            <td className="p-3">Samarpan</td>
                            <td className="p-3">Closing meditation and reflection</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* 30-Day Programme */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">30-Day Programme: "Path of Stillness"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="font-semibold text-xl mb-4">Modules:</h3>
                      <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                        <li>Ashtanga Yoga Overview</li>
                        <li>Posture & Pranayama mastery</li>
                        <li>Meditation techniques (Mantra, Breath, Visualization)</li>
                        <li>Yogic diet and lifestyle</li>
                        <li>Psychological training & focus development</li>
                      </ol>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-4">Daily Schedule:</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b">
                              <th className="p-3">Time</th>
                              <th className="p-3">Activity</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b"><td className="p-3">4:30 AM</td><td className="p-3">Pranayama & Meditation</td></tr>
                            <tr className="border-b"><td className="p-3">6:30 AM</td><td className="p-3">Yoga Asanas</td></tr>
                            <tr className="border-b"><td className="p-3">8:00 AM</td><td className="p-3">Breakfast</td></tr>
                            <tr className="border-b"><td className="p-3">10:00 AM</td><td className="p-3">Lecture – Yoga Sutras</td></tr>
                            <tr className="border-b"><td className="p-3">2:00 PM</td><td className="p-3">Self-Practice</td></tr>
                            <tr className="border-b"><td className="p-3">5:00 PM</td><td className="p-3">Evening Meditation</td></tr>
                            <tr><td className="p-3">8:00 PM</td><td className="p-3">Reflection / Silence</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 6-Month Programme */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">6-Month Programme: "Mastery of Mind"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-semibold text-xl mb-4">Curriculum:</h3>
                      <ul className="space-y-2 text-foreground/90">
                        <li>• Study of Patanjali Yoga Sutras</li>
                        <li>• Intensive asana, pranayama, and meditation training</li>
                        <li>• Silent retreats</li>
                        <li>• Psychology of Yoga & ethics</li>
                        <li>• Teaching methodology</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="font-semibold text-lg">Outcome:</p>
                      <p className="text-foreground/90">Trained meditator with strong inner balance and self-control.</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Gurukulam Programme */}
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Gurukulam Programme (1–3 Years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-semibold text-xl mb-4">Training Includes:</h3>
                      <ul className="space-y-2 text-foreground/90">
                        <li>• Complete Ashtanga system with scripture study</li>
                        <li>• Sanskrit chanting of Yoga Sutras</li>
                        <li>• Daily 4–5 hours of practice</li>
                        <li>• Diet discipline, silence, and mindfulness training</li>
                        <li>• Advanced meditation (Samyama practice)</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="font-semibold text-lg">Lifestyle:</p>
                      <p className="text-foreground/90">Monastic routine: early meditation, simplicity, silence, and devotion.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

