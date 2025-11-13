import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BhaktiMargaPage() {
  const navavidhaBhakti = [
    "Śravaṇam – Listening to divine stories",
    "Kīrtanam – Singing or chanting the name of God",
    "Smaranam – Remembering the Lord",
    "Pāda-sevanam – Serving the Lord's feet (symbolically service to all beings)",
    "Arcanam – Worship",
    "Vandanam – Prayers",
    "Dāsyam – Seeing oneself as servant of God",
    "Sākhyam – Friendship with God",
    "Ātma-nivedanam – Complete self-surrender",
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
              Bhakti Marga
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
              भक्तिर्ार्म | Path of Devotion
            </p>
            <p className="text-lg md:text-xl text-white/80 italic mt-2">
              "Love is God, God is Love."
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
                    Bhakti Marga emphasizes complete surrender and loving devotion to God. It is based on 
                    emotional connection and heartfelt love for the Divine in any form — Krishna, Shiva, Devi, 
                    Rama, etc.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Key Teachings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/90">
                    • Devotion (Bhakti) transforms the heart and destroys the ego.
                  </p>
                  <p className="text-foreground/90">
                    • The devotee surrenders to God's will, trusting divine grace over personal effort.
                  </p>
                  <p className="text-foreground/90">
                    • Emotions like love, surrender, and gratitude become spiritual tools.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Forms of Bhakti</CardTitle>
                  <CardDescription>
                    As taught by Sage Narada and the Bhagavata Purana — nine forms of devotion (Navavidha Bhakti)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                    {navavidhaBhakti.map((form, index) => (
                      <li key={index}>{form}</li>
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
                      Emotionally inclined, loving, and compassionate people who find joy in prayer, music, and 
                      worship.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Goal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Union with God through love and surrender, leading to Moksha by Divine Grace.
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
                    "By love alone can God be realized." — Narada Bhakti Sutra
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    Bhakti Marga is taught as the cultivation of pure, unconditional devotion (Prema Bhakti) 
                    toward the Divine, through singing, worship, storytelling, and community worship.
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
                      <li>• Bhajana and Kirtana: Regular devotional singing and chanting under a Guru.</li>
                      <li>• Scriptural study: Bhagavad Gita, Bhagavata Purana, Ramayana, and Narada Bhakti Sutras.</li>
                      <li>• Temple training: Learning Puja vidhi (rituals), archana, and parayana (recitation).</li>
                      <li>• Pilgrimages: Participation in yatras (e.g., Vaishnava, Shaiva, Shakti traditions).</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Modern Institutional Programmes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-foreground/90">
                      <li>• Bhakti Marga Organization (founded by Paramahamsa Vishwananda): Offers global training on chanting, kirtan, meditation, and seva.</li>
                      <li>• ISKCON (International Society for Krishna Consciousness): Structured courses like Bhakti-shastri and Bhakti-vaibhava (scriptural certification).</li>
                      <li>• Chinmaya Mission & Satsang groups: Conduct devotional camps, study circles, and Jnana Yajnas focused on Bhakti.</li>
                      <li>• Music-based programmes: Classical training in bhajans and kirtans in music academies.</li>
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
                    <li>Foundations of Bhakti — Love, Surrender, and Faith</li>
                    <li>Daily Devotional Practices — Japa, Kirtan, Archana</li>
                    <li>Study of Bhakti Scriptures</li>
                    <li>Devotional Music and Chanting Techniques</li>
                    <li>Pilgrimage and Group Satsangs</li>
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
                    <CardTitle className="text-2xl font-bold">10-Day Programme: "Journey into Devotion"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b">
                            <th className="p-3">Day</th>
                            <th className="p-3">Focus</th>
                            <th className="p-3">Practices</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-3">1-2</td>
                            <td className="p-3">Understanding Bhakti</td>
                            <td className="p-3">Teach Navavidha Bhakti (9 forms), chanting basics</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">3-4</td>
                            <td className="p-3">Mantra Sadhana</td>
                            <td className="p-3">Daily Japa & meditation</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">5-6</td>
                            <td className="p-3">Music & Devotion</td>
                            <td className="p-3">Kirtan, bhajan training, temple rituals</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">7-8</td>
                            <td className="p-3">Service in Love</td>
                            <td className="p-3">Flower offering, deity service</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">9</td>
                            <td className="p-3">Pilgrimage visit</td>
                            <td className="p-3">Short temple yatra</td>
                          </tr>
                          <tr>
                            <td className="p-3">10</td>
                            <td className="p-3">Bhakti Utsav</td>
                            <td className="p-3">Group singing, prayer & offering ceremony</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* 30-Day Programme */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">30-Day Programme: "Heart of Love"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="font-semibold text-xl mb-4">Modules:</h3>
                      <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                        <li>Study of Bhagavata Purana and Gita (Ch. 12)</li>
                        <li>Daily Japa & Kirtan practice (2 hrs/day)</li>
                        <li>Bhajan and devotional music training</li>
                        <li>Learning Puja, Archana, Arati</li>
                        <li>Weekly Satsangs and storytelling sessions</li>
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
                            <tr className="border-b"><td className="p-3">5:00 AM</td><td className="p-3">Meditation, Japa</td></tr>
                            <tr className="border-b"><td className="p-3">7:00 AM</td><td className="p-3">Temple Puja & Chanting</td></tr>
                            <tr className="border-b"><td className="p-3">9:00 AM</td><td className="p-3">Class: Foundations of Bhakti</td></tr>
                            <tr className="border-b"><td className="p-3">12:00 PM</td><td className="p-3">Seva / Lunch</td></tr>
                            <tr className="border-b"><td className="p-3">4:00 PM</td><td className="p-3">Bhajan & Music Session</td></tr>
                            <tr className="border-b"><td className="p-3">6:00 PM</td><td className="p-3">Evening Arati</td></tr>
                            <tr><td className="p-3">8:00 PM</td><td className="p-3">Storytelling or Discourse</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 6-Month Programme */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">6-Month Programme: "Devotion in Action"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-semibold text-xl mb-4">Curriculum Highlights:</h3>
                      <ul className="space-y-2 text-foreground/90">
                        <li>• Study of Bhagavata Purana, Narada Bhakti Sutra</li>
                        <li>• Training in chanting (Nama Japa, Kirtan)</li>
                        <li>• Devotional arts — singing, painting, temple décor</li>
                        <li>• Temple management and community worship</li>
                        <li>• Bhakti leadership and emotional transformation</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="font-semibold text-lg">Outcome:</p>
                      <p className="text-foreground/90">Cultivation of deep love, surrender, and divine awareness in everyday life.</p>
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
                      <h3 className="font-semibold text-xl mb-4">Training Areas:</h3>
                      <ul className="space-y-2 text-foreground/90">
                        <li>• Temple rituals and Agamic traditions</li>
                        <li>• Sanskrit hymns and chanting</li>
                        <li>• Devotional art, dance, and storytelling (Harikatha)</li>
                        <li>• Scriptural study (Gita, Ramayana, Puranas)</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="font-semibold text-lg">Daily Life:</p>
                      <p className="text-foreground/90">Ritual discipline, kirtan, seva, and scriptural recitation in a traditional temple/ashram setting.</p>
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

