import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ChitaViruthiNirodhaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Banner Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/50.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Chita Viruthi Nirodha
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
                  src="/18 (1).jpg" 
                  alt="Meditation Practice" 
                  className="w-full h-full object-cover min-h-[400px] md:min-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                  Chita Viruthi Nirodha – The Siddhar&apos;s Flame of Inner Awakening
                </h2>
                <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                  <p className="text-xl font-semibold text-primary">
                    O Seeker! Come walk the silent path that the ancient Siddhars once tread.
                  </p>
                  <p>
                    Chita Viruthi Nirodha is an ancient Tamil Siddhar meditation technique that enables one to see things as they truly are—a direct path to self-purification through self-observation. The Siddhars taught this universal technique to awaken true awareness and inner peace.
                  </p>
                  <p>
                    It&apos;s not mere meditation—it is tapas, a fire of transformation handed down through the divine Tamil Siddhar lineage.
                  </p>
                  <p>
                    With the blessing of the Gnana Guru, this practice leads one inward to the cave of the heart, where the Self is revealed in silence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Path Section - Image with Text */}
        <section className="relative py-16 sm:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Home_Page-bg.jpeg')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/90"></div>
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-20 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-20 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                  It is the path of:
                </h2>
                <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                  <ul className="space-y-3 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-xl">•</span>
                      <span>Siddhar wisdom, Vasi Yoga, and inner alchemy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-xl">•</span>
                      <span>A way of purifying the Chita (mind-field) by watching the Viruthi (modifications) until Nirodha (cessation) dawns.</span>
                    </li>
                  </ul>
                  <p className="font-semibold text-xl">
                    Leave behind rituals, dogmas, and outer symbols. Enter the realm of direct experience.
                  </p>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg border-l-4 border-primary space-y-4">
                <p className="text-lg text-foreground/90 leading-relaxed font-semibold mb-4">
                  This is the path where:
                </p>
                <div className="space-y-3">
                  <p className="text-lg">
                    <span className="font-bold text-primary">Breath</span> becomes mantra,
                  </p>
                  <p className="text-lg">
                    <span className="font-bold text-primary">Awareness</span> becomes lamp,
                  </p>
                  <p className="text-lg">
                    <span className="font-bold text-primary">Silence</span> becomes scripture.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t-2 border-primary/20">
                  <p className="text-xl font-bold text-center text-primary">
                    You are not asked to believe.
                  </p>
                  <p className="text-lg text-center mt-2">
                    You are invited to see.
                  </p>
                  <p className="text-lg text-center">
                    To feel.
                  </p>
                  <p className="text-lg text-center">
                    To be free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Siddhar Quote Section - Image with Text */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              {/* Left Column - Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/spiritual-temple-meditation-hall.jpg" 
                  alt="Siddhar Wisdom" 
                  className="w-full h-full object-cover min-h-[400px] md:min-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6">
                  As Siddhar Thirumoolar said:
                </h2>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border-2 border-orange-200 shadow-lg">
                  <p className="text-3xl sm:text-4xl font-serif text-center mb-6 text-primary">
                    &quot;ஒன்றாய்ப் பத்து ஆறாய்ப் பறந்து அகண்டென வாழ்ந்திடுவோம்&quot;
                  </p>
                  <p className="text-lg text-center text-foreground/90">
                    Let the self burn in the fire of Awareness,
                  </p>
                  <p className="text-lg text-center text-foreground/90 mt-2">
                    Let the mind dissolve into the Stillness of the Siddhars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives and Details Section */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-15 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-15 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Objectives */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                  Objectives of the Practice
                </h2>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary">
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-xl">•</span>
                      <span className="text-lg">Eradication of mental defilements through insight.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-xl">•</span>
                      <span className="text-lg">Liberation from suffering (dukkha) and attainment of egolessness.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-xl">•</span>
                      <span className="text-lg">Cultivation of balanced equanimity and awareness in daily life.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* What This Practice Is Not */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-center text-red-600">
                  What This Practice Is Not
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 shadow-md">
                    <p className="text-lg">Not a ritual or act of blind devotion.</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 shadow-md">
                    <p className="text-lg">Not philosophy or intellectual exercise.</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 shadow-md">
                    <p className="text-lg">Not a rest cure, therapy session, or escape.</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 shadow-md">
                    <p className="text-lg">Not social or religious entertainment.</p>
                  </div>
                </div>
              </div>

              {/* What This Practice Is */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-center text-green-600">
                  What This Practice Is
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-md">
                    <p className="text-lg font-semibold">A technique to overcome suffering.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-md">
                    <p className="text-lg font-semibold">A tool for facing life&apos;s challenges with mental clarity.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-md">
                    <p className="text-lg font-semibold">A universal art of living beneficial to all, irrespective of background.</p>
                  </div>
                </div>
              </div>

              {/* Foundational Principles */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Foundational Principles
                </h3>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-200 shadow-lg">
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-xl">•</span>
                      <div>
                        <span className="text-lg font-semibold">Observation of Breath</span>
                        <span className="text-lg"> – As a means to sharpen the mind.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-xl">•</span>
                      <div>
                        <span className="text-lg font-semibold">Observation of Body-Mind Sensations</span>
                        <span className="text-lg"> – To understand impermanence and egolessness.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-xl">•</span>
                      <div>
                        <span className="text-lg font-semibold">Detoxifying Mind-Reactions</span>
                        <span className="text-lg"> – Releasing reactions rooted in craving, aversion, and ignorance.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Eligibility Criteria
                </h3>
                <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-primary/30">
                  <ul className="space-y-3 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Must be mentally stable and physically capable of maintaining discipline for 10 days.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Should not mix with other practices during the course (mantras, rituals, etc.).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Should commit to noble silence and personal effort.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Five Essential Qualities */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-center">
                  The Five Essential Qualities
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 shadow-md text-center">
                    <p className="font-semibold text-lg">Earnest Effort</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 shadow-md text-center">
                    <p className="font-semibold text-lg">Confidence in the Technique</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 shadow-md text-center">
                    <p className="font-semibold text-lg">Sincerity of Heart</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 shadow-md text-center">
                    <p className="font-semibold text-lg">Good Health</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 shadow-md text-center">
                    <p className="font-semibold text-lg">Wisdom in Application</p>
                  </div>
                </div>
              </div>

              {/* Code of Discipline */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Code of Discipline
                </h3>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border-l-4 border-primary shadow-lg">
                  <p className="text-xl text-center font-semibold text-foreground/90">
                    All students must commit to Noble Silence, complete segregation by gender, celibacy, and abstinence from intoxicants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Schedule Table Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-4xl mb-4 block">🕉️</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Daily Schedule – Chita Viruthi Nirodha Meditation Retreat
                </h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-primary/90 text-white">
                      <th className="border border-primary/20 px-6 py-4 text-left font-bold">Time</th>
                      <th className="border border-primary/20 px-6 py-4 text-left font-bold">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">4:00 am</td>
                      <td className="border border-gray-200 px-6 py-4">🔔 Morning Wake-Up Bell</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">4:30 – 6:30 am</td>
                      <td className="border border-gray-200 px-6 py-4">🧘‍♂️ Early Morning Meditation (Hall or Room)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">6:30 – 8:00 am</td>
                      <td className="border border-gray-200 px-6 py-4">🍵 Breakfast Break</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">8:00 – 9:00 am</td>
                      <td className="border border-gray-200 px-6 py-4">🧘‍♀️ Group Meditation in the Hall</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">9:00 – 11:00 am</td>
                      <td className="border border-gray-200 px-6 py-4">🧘 Meditation (Hall or Room, as per Teacher&apos;s Guidance)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">11:00 – 12:00 pm</td>
                      <td className="border border-gray-200 px-6 py-4">🍲 Lunch Break</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">12:00 – 1:00 pm</td>
                      <td className="border border-gray-200 px-6 py-4">🛌 Rest / 🔔 Interviews with the Teacher</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">1:00 – 2:30 pm</td>
                      <td className="border border-gray-200 px-6 py-4">🧘 Individual Meditation (Hall or Room)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">2:30 – 3:30 pm</td>
                      <td className="border border-gray-200 px-6 py-4">🧘‍♂️ Group Meditation in the Hall</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">3:30 – 5:00 pm</td>
                      <td className="border border-gray-200 px-6 py-4">🧘 Individual Meditation (Hall or Room, as per Teacher&apos;s Guidance)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">5:00 – 6:00 pm</td>
                      <td className="border border-gray-200 px-6 py-4">🍎 Tea Break (with fruit for new students)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">6:00 – 7:00 pm</td>
                      <td className="border border-gray-200 px-6 py-4">🧘 Group Meditation in the Hall</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">7:00 – 8:15 pm</td>
                      <td className="border border-gray-200 px-6 py-4">📖 Evening Discourse by the Teacher</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">8:15 – 9:00 pm</td>
                      <td className="border border-gray-200 px-6 py-4">🧘 Final Group Meditation</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">9:00 – 9:30 pm</td>
                      <td className="border border-gray-200 px-6 py-4">❓ Question &amp; Clarification Time with the Teacher</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold">9:30 pm</td>
                      <td className="border border-gray-200 px-6 py-4">🌙 Retire to Room – Lights Out</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

