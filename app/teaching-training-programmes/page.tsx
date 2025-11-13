import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles, Heart, Brain, Mountain } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function TeachingTrainingProgrammesPage() {
  const margas = [
    {
      name: "Karma Marga",
      sanskrit: "कर्मर्ार्म",
      subtitle: "Path of Selfless Action",
      href: "/karma-marga",
      description: "Liberation through selfless action — performing one's duties and responsibilities without attachment to the results.",
      essence: "Work is Worship.",
      color: "from-blue-500 to-cyan-500",
      icon: Sparkles,
      bgPattern: "bg-blue-50",
    },
    {
      name: "Bhakti Marga",
      sanskrit: "भक्तिर्ार्म",
      subtitle: "Path of Devotion",
      href: "/bhakti-marga",
      description: "Complete surrender and loving devotion to God. Based on emotional connection and heartfelt love for the Divine.",
      essence: "Love is God, God is Love.",
      color: "from-pink-500 to-rose-500",
      icon: Heart,
      bgPattern: "bg-pink-50",
    },
    {
      name: "Jnana Marga",
      sanskrit: "ज्ञानर्ार्म",
      subtitle: "Path of Knowledge",
      href: "/jnana-marga",
      description: "The path of wisdom and introspection — realizing the Self (Ātman) as one with Brahman (the Absolute Reality).",
      essence: "Know Thyself to know God.",
      color: "from-purple-500 to-indigo-500",
      icon: Brain,
      bgPattern: "bg-purple-50",
    },
    {
      name: "Raja Marga",
      sanskrit: "राजर्ार्म",
      subtitle: "Path of Meditation and Discipline",
      href: "/raja-marga",
      description: "The royal path of meditation, discipline, and control of mind and body to experience the Divine within.",
      essence: "Mastery of Mind leads to Mastery of Self.",
      color: "from-orange-500 to-amber-500",
      icon: Mountain,
      bgPattern: "bg-orange-50",
    },
  ]

  const durations = [
    {
      period: "10 Days",
      description: "Intensive introduction to each path with daily practices and teachings",
      icon: "🌱",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      period: "30 Days",
      description: "Deep immersion with structured modules and daily routines",
      icon: "🌿",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      period: "6 Months",
      description: "Comprehensive study and practice with scriptural mastery",
      icon: "🌳",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      period: "1-3 Years",
      description: "Traditional Gurukulam programme for complete transformation",
      icon: "🏛️",
      gradient: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Banner Section */}
        <section className="relative h-[450px] md:h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/2151544419.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                Teaching & Training Programmes
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"></div>
            </div>
            <p className="text-2xl md:text-3xl text-white/95 drop-shadow-lg font-light mb-2">
              The Four Paths to Liberation
            </p>
            <p className="text-lg md:text-xl text-white/80 drop-shadow-md italic">
              Choose your journey to Moksha
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-5 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-5 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <div className="inline-block mb-6">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Sacred Paths</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                The Four Margas
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                All four margas lead to the same goal — liberation (Moksha), but through different temperaments. 
                In the Bhagavad Gita, Lord Krishna beautifully integrates all four, suggesting that a balanced 
                combination — action with detachment, devotion with love, knowledge with humility, and meditation 
                with focus — leads to the highest realization.
              </p>
            </div>

            {/* Margas Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {margas.map((marga, index) => {
                const Icon = marga.icon
                return (
                  <Link key={marga.name} href={marga.href} className="group">
                    <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 border-transparent hover:border-primary/30 overflow-hidden relative bg-white">
                      {/* Decorative gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${marga.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <CardHeader className={`relative bg-gradient-to-r ${marga.color} text-white p-8`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <CardTitle className="text-3xl font-bold mb-3">{marga.name}</CardTitle>
                            <CardDescription className="text-white/95 text-xl font-medium mb-2">{marga.sanskrit}</CardDescription>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <p className="text-white/95 text-lg italic font-light">"{marga.essence}"</p>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-8 relative">
                        <h3 className="font-semibold text-2xl mb-4 text-primary">{marga.subtitle}</h3>
                        <p className="text-foreground/90 leading-relaxed text-lg mb-6">{marga.description}</p>
                        <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          <span>Explore this path</span>
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Programme Overview Section */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/bg-1.png')] bg-repeat opacity-[0.02]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">Choose Your Journey</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  Programme Durations
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {durations.map((duration, index) => (
                  <Card 
                    key={duration.period} 
                    className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-primary/30 overflow-hidden relative bg-white"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${duration.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <CardHeader className="pb-4 pt-8">
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {duration.icon}
                      </div>
                      <CardTitle className={`text-3xl font-bold bg-gradient-to-r ${duration.gradient} bg-clip-text text-transparent`}>
                        {duration.period}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-8">
                      <p className="text-foreground/80 leading-relaxed">
                        {duration.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 12-Year Programme Section */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-white to-primary/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Ultimate Journey</span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
                  Complete Transformation
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>
              
              <Card className="border-2 border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/95 backdrop-blur-sm overflow-hidden">
                <CardHeader className="relative bg-gradient-to-r from-primary via-primary/90 to-primary text-white p-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                  <div className="relative z-10">
                    <CardTitle className="text-4xl md:text-5xl font-bold mb-4">12-Year Gurukulam Programme</CardTitle>
                    <CardDescription className="text-white/95 text-xl font-medium">
                      Integrative Traditional Curriculum – Karma, Bhakti, Jnana, Raja
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-10">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-2xl text-primary">Vision</h3>
                    </div>
                    <p className="text-xl text-foreground/90 leading-relaxed pl-16">
                      To shape a complete spiritual being — wise in knowledge (Jnana), pure in service (Karma), 
                      loving in devotion (Bhakti), and disciplined in meditation (Raja).
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {[
                      { stage: "Stage 1", title: "Brahmacharya Shiksha", years: "Years 1-3", desc: "Foundation and Discipline", color: "from-blue-500 to-cyan-500" },
                      { stage: "Stage 2", title: "Sadhana Vidya", years: "Years 4-6", desc: "Deep Sādhanā & Yogic Training", color: "from-purple-500 to-pink-500" },
                      { stage: "Stage 3", title: "Jnana Vidya", years: "Years 7-9", desc: "Scriptural Study & Self-Realization", color: "from-indigo-500 to-purple-500" },
                      { stage: "Stage 4", title: "Acharya Seva", years: "Years 10-12", desc: "Teaching, Seva & Integration", color: "from-orange-500 to-amber-500" },
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="group p-6 rounded-xl border-2 border-transparent hover:border-primary/30 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300"
                      >
                        <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold mb-3`}>
                          {item.stage}
                        </div>
                        <h4 className="font-bold text-xl mb-2 text-foreground">{item.title}</h4>
                        <p className="text-primary font-medium mb-2">{item.years}</p>
                        <p className="text-foreground/80">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-5 bg-contain bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/bg-1.png')" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-5 bg-contain bg-no-repeat bg-left-bottom" style={{ backgroundImage: "url('/bg-2.png')" }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">Sacred Moments</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  Gallery
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
                <p className="text-lg text-foreground/80 mt-6 max-w-2xl mx-auto">
                  Glimpses of our spiritual journey, teachings, and sacred spaces
                </p>
              </div>

              <div className="relative">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {[
                      { src: "/2.jpg", alt: "Sacred Meditation Space" },
                      { src: "/39.jpg", alt: "Tranquil Gardens" },
                      { src: "/18.jpg", alt: "Divine Ceremonies" },
                      { src: "/46.jpg", alt: "Divine Altar" },
                      { src: "/49.jpg", alt: "Spiritual Gathering" },
                      { src: "/50.jpg", alt: "Teaching Session" },
                      { src: "/53.jpg", alt: "Sacred Ritual" },
                    ].map((image, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                        <div className="group relative overflow-hidden rounded-xl border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-2xl">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white font-medium text-lg">{image.alt}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white border-2 shadow-lg" />
                  <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white border-2 shadow-lg" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

