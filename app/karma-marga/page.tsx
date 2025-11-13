import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function KarmaMargaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Banner Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/2151544419.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Karma Marga
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
              कर्मर्ार्म | Path of Selfless Action
            </p>
            <p className="text-lg md:text-xl text-white/80 italic mt-2">
              "Work is Worship."
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
                    Karma Marga teaches liberation through selfless action — performing one's duties and 
                    responsibilities without attachment to the results. It purifies the heart by removing ego and 
                    selfish desires.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Key Teachings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/90">
                    • Perform your dharma (duty) sincerely but surrender the fruits of your actions to God.
                  </p>
                  <p className="text-foreground/90 italic">
                    • "Karmanye vadhikaraste, ma phaleshu kadachana" — You have the right to action, not 
                    to its fruits. (Bhagavad Gita 2.47)
                  </p>
                  <p className="text-foreground/90">
                    • Actions done with the spirit of seva (service) and yajna (sacrifice) lead to inner 
                    purification.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Suitable For</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      People who are active, duty-bound, and socially responsible — those who prefer to serve 
                      through work and dedication rather than contemplation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Goal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Purification of mind and ego → Realization of the Divine through detachment and service.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Practices Include</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/90">
                    <li>• Serving others selflessly (Seva)</li>
                    <li>• Doing one's job with integrity and devotion</li>
                    <li>• Charity and humanitarian work</li>
                    <li>• Performing rituals with sincerity, not for reward</li>
                  </ul>
                </CardContent>
              </Card>
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
                    "Work done with detachment purifies the heart and leads to liberation." — Bhagavad Gita, Ch.3
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    Karma Yoga is taught as a discipline of selfless service, emphasizing Nishkama Karma — action 
                    without attachment to results. Training focuses on cultivating humility, discipline, duty, and 
                    service.
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
                      <li>• Gurukula system: Students serve the teacher (Guru-seva) as part of spiritual education.</li>
                      <li>• Temple and ashram service: Cleaning, cooking, and organizing rituals as acts of devotion.</li>
                      <li>• Seva projects: Community service, charity, environmental work, feeding the needy (Anna Dānam).</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Modern Institutional Programmes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-foreground/90">
                      <li>• Ramakrishna Mission & Chinmaya Mission: Offer structured Karma Yoga seva opportunities through rural development, hospital and school services.</li>
                      <li>• ISKCON and Art of Living Foundation: Conduct Seva-based training — involving youth camps, rural outreach, and volunteerism with a spiritual focus.</li>
                      <li>• University courses: Some Indian universities include "Ethics and Karma Yoga" as part of religious or leadership programs.</li>
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
                    <li>Understanding Karma and Dharma</li>
                    <li>The Spirit of Seva (Service to Humanity = Service to God)</li>
                    <li>Detachment and Non-egoistic Work</li>
                    <li>Balancing Action, Duty, and Spiritual Growth</li>
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
                    <CardTitle className="text-2xl font-bold">10-Day Programme: "Service as Worship"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b">
                            <th className="p-3">Day</th>
                            <th className="p-3">Focus</th>
                            <th className="p-3">Activities & Training</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-3">Day 1-2</td>
                            <td className="p-3">Introduction to Karma Yoga</td>
                            <td className="p-3">Teach Gita concepts (Ch. 3, 5, 18), role of duty, discipline</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">Day 3-4</td>
                            <td className="p-3">Selfless Service</td>
                            <td className="p-3">Morning meditation, seva in kitchen, garden, or local outreach</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">Day 5-6</td>
                            <td className="p-3">Balancing Work & Detachment</td>
                            <td className="p-3">Practice of Nishkama Karma, reflective journaling</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">Day 7-8</td>
                            <td className="p-3">Group Projects</td>
                            <td className="p-3">Team seva (cleaning temple, environmental service)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">Day 9</td>
                            <td className="p-3">Integration & Reflection</td>
                            <td className="p-3">Evening satsang on ego, humility, teamwork</td>
                          </tr>
                          <tr>
                            <td className="p-3">Day 10</td>
                            <td className="p-3">Gratitude Ceremony</td>
                            <td className="p-3">Offering prayers and collective reflection session</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* 30-Day Programme */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">30-Day Programme: "Yajna of Work"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="font-semibold text-xl mb-4">Modules:</h3>
                      <ol className="space-y-2 text-foreground/90 list-decimal list-inside">
                        <li>Spiritual Foundations – Understanding Karma, Dharma & Detachment</li>
                        <li>Daily Seva Projects – Community cleaning, food distribution, helping elderly</li>
                        <li>Ethics in Action – Talks on discipline, truthfulness, and integrity</li>
                        <li>Mindful Work Practice – Meditation before and after work</li>
                        <li>Reflection Circles – Daily group sharing and gratitude practice</li>
                      </ol>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-4">Daily Schedule Example:</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b">
                              <th className="p-3">Time</th>
                              <th className="p-3">Activity</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b"><td className="p-3">5:00 AM</td><td className="p-3">Prayers & Meditation</td></tr>
                            <tr className="border-b"><td className="p-3">6:00–8:00 AM</td><td className="p-3">Seva (gardening, cleaning, cooking)</td></tr>
                            <tr className="border-b"><td className="p-3">9:00 AM</td><td className="p-3">Breakfast & rest</td></tr>
                            <tr className="border-b"><td className="p-3">10:30 AM</td><td className="p-3">Lecture / Study of Gita</td></tr>
                            <tr className="border-b"><td className="p-3">1:00 PM</td><td className="p-3">Lunch & rest</td></tr>
                            <tr className="border-b"><td className="p-3">3:00–5:00 PM</td><td className="p-3">Community Service</td></tr>
                            <tr className="border-b"><td className="p-3">6:00 PM</td><td className="p-3">Evening Satsang</td></tr>
                            <tr><td className="p-3">8:00 PM</td><td className="p-3">Silent Reflection</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 6-Month Programme */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">6-Month Programme: "Living the Gita"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-semibold text-xl mb-4">Curriculum:</h3>
                      <ul className="space-y-2 text-foreground/90">
                        <li>• Study of Bhagavad Gita (Ch. 3, 5, 12, 18)</li>
                        <li>• 2 hours daily Seva (temple or social work)</li>
                        <li>• Weekly lectures on Karma philosophy</li>
                        <li>• Weekly Seva Yatras (service visits to villages, schools)</li>
                        <li>• Monthly reflection essays or group discussions</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="font-semibold text-lg">Outcome:</p>
                      <p className="text-foreground/90">Students develop humility, discipline, and balanced action without ego.</p>
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
                      <h3 className="font-semibold text-xl mb-4">Structure:</h3>
                      <ul className="space-y-2 text-foreground/90">
                        <li>• Morning Seva: Ashram duties (cleaning, maintenance)</li>
                        <li>• Midday Study: Scriptures on Karma Yoga</li>
                        <li>• Evening Reflection: Group discussions, meditation</li>
                        <li>• Special Focus: Practical leadership, dharmic action in modern life</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="font-semibold text-lg">Graduation:</p>
                      <p className="text-foreground/90">Seva project in community welfare or temple service as final offering.</p>
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

