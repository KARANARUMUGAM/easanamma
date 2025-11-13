import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function JnanaMargaPage() {
  const mainPractices = [
    "Śravaṇa – Listening to the teachings of the scriptures",
    "Manana – Reflecting deeply upon them",
    "Nididhyāsana – Meditating on the truth until realization dawns",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Banner Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/2151544419.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Jnana Marga
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
              ज्ञानर्ार्म | Path of Knowledge
            </p>
            <p className="text-lg md:text-xl text-white/80 italic mt-2">
              "Know Thyself to know God."
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
                    Jnana Marga is the path of wisdom and introspection — realizing the Self (Ātman) as one with 
                    Brahman (the Absolute Reality). It focuses on discrimination between the real (Satya) and the 
                    unreal (Mithya).
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Key Teachings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/90">
                    • Liberation comes from knowledge of the Self: "Aham Brahmasmi" — I am Brahman.
                  </p>
                  <p className="text-foreground/90">
                    • Ignorance (Avidyā) causes bondage; Knowledge (Vidya) brings liberation.
                  </p>
                  <p className="text-foreground/90">
                    • Involves deep inquiry into "Who am I?" and reflection on the nature of existence.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Main Practices</CardTitle>
                  <CardDescription>As per Vedanta</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-foreground/90 list-decimal list-inside">
                    {mainPractices.map((practice, index) => (
                      <li key={index}>{practice}</li>
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
                      Intellectuals, philosophers, seekers of truth who love analysis, reasoning, and contemplation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Goal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Self-realization — understanding that the individual soul (Ātman) and the Supreme (Brahman) 
                      are one.
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
                    "Liberation comes through the knowledge of the Self as Brahman." — Upanishads
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    Jnana Marga emphasizes self-inquiry (Ātma-vichāra) and scriptural study under a realized 
                    teacher. It is more intellectual and contemplative, designed for those who seek truth through 
                    reasoning and knowledge.
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
                      <li>• Guru-disciple transmission: Guru imparts Vedantic teachings orally (śravaṇa-manana-nididhyāsana).</li>
                      <li>• Scriptural learning: Deep study of the Upanishads, Brahma Sutras, and Advaita texts.</li>
                      <li>• Meditative reflection: Silent contemplation and discussion in Satsanga (company of the wise).</li>
                      <li>• Question–Answer sessions: Encouraging rational inquiry and inner investigation.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Modern Institutional Programmes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-foreground/90">
                      <li>• Arsha Vidya Gurukulam (Swami Dayananda Saraswati): Offers advanced Vedanta and Sanskrit training.</li>
                      <li>• Chinmaya Mission & Ramakrishna Math: Vedanta courses, study groups, and online certification programmes.</li>
                      <li>• Sri Aurobindo Ashram, Pondicherry: Integral Yoga studies blending Jnana with Karma and Bhakti.</li>
                      <li>• University departments: Departments of Philosophy and Indian Studies offer Jnana Yoga-based courses.</li>
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
                    <li>Vedantic Foundation — Atman & Brahman</li>
                    <li>The Four Means of Attainment (Sādhana Chatushtaya)</li>
                    <li>Study of Prasthana Trayi (Upanishads, Gita, Brahma Sutras)</li>
                    <li>Self-Inquiry: "Who am I?"</li>
                    <li>Contemplative Meditation and Non-duality Practice</li>
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
                    <CardTitle className="text-2xl font-bold">10-Day Programme: "Know Thyself"</CardTitle>
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
                            <td className="p-3">Basics of Vedanta</td>
                            <td className="p-3">Overview of Atman, Brahman</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">3-4</td>
                            <td className="p-3">Inquiry: Who am I?</td>
                            <td className="p-3">Guided reflection, silence periods</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">5-6</td>
                            <td className="p-3">Discrimination</td>
                            <td className="p-3">Teaching: Neti Neti (Not this, Not that)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">7-8</td>
                            <td className="p-3">Meditation & Study</td>
                            <td className="p-3">Upanishad readings</td>
                          </tr>
                          <tr>
                            <td className="p-3">9-10</td>
                            <td className="p-3">Integration</td>
                            <td className="p-3">Satsang, summary, vow of awareness</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* 30-Day Programme */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">30-Day Programme: "Path of Self-Enquiry"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="font-semibold text-xl mb-4">Modules:</h3>
                      <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                        <li>Fundamentals of Advaita Vedanta</li>
                        <li>Meditation and contemplation practices</li>
                        <li>Scriptural study: Gita, Mandukya Upanishad</li>
                        <li>Group discussions and debates</li>
                        <li>Daily silence and reflection</li>
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
                            <tr className="border-b"><td className="p-3">5:00 AM</td><td className="p-3">Silent Meditation</td></tr>
                            <tr className="border-b"><td className="p-3">7:00 AM</td><td className="p-3">Study – Upanishad concepts</td></tr>
                            <tr className="border-b"><td className="p-3">9:00 AM</td><td className="p-3">Breakfast</td></tr>
                            <tr className="border-b"><td className="p-3">10:00 AM</td><td className="p-3">Lecture – Non-duality</td></tr>
                            <tr className="border-b"><td className="p-3">2:00 PM</td><td className="p-3">Contemplation / Writing</td></tr>
                            <tr className="border-b"><td className="p-3">5:00 PM</td><td className="p-3">Guided Meditation</td></tr>
                            <tr><td className="p-3">7:00 PM</td><td className="p-3">Q&A / Satsang</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 6-Month Programme */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">6-Month Programme: "Jnana Deepa – Light of Knowledge"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-semibold text-xl mb-4">Curriculum:</h3>
                      <ul className="space-y-2 text-foreground/90">
                        <li>• Detailed study of Prasthana Trayi (Upanishads, Gita, Brahma Sutras)</li>
                        <li>• Sanskrit basics</li>
                        <li>• Meditation and Atma Vichara practice</li>
                        <li>• Teaching skills for future instructors</li>
                        <li>• Spiritual diary and self-assessment</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="font-semibold text-lg">Outcome:</p>
                      <p className="text-foreground/90">Clarity of Self-awareness and intellectual-spiritual integration.</p>
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
                      <h3 className="font-semibold text-xl mb-4">Methodology:</h3>
                      <ul className="space-y-2 text-foreground/90">
                        <li>• Full-time residential study with Acharya</li>
                        <li>• Texts: Upanishads, Shankara Bhashya, Vivekachudamani</li>
                        <li>• Satsanga, debate, teaching practice</li>
                        <li>• Daily meditation and silence periods</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="font-semibold text-lg">Daily Life:</p>
                      <p className="text-foreground/90">Half-day study, half-day meditation and reflection — traditional Advaitic training.</p>
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

