import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Chennai",
      text: "The teachings at Shree Easanamma Gurukulam have transformed my life completely. I found inner peace and purpose through their guidance.",
      image: "/indian-woman-spiritual-seeker.jpg",
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      text: "The depth of knowledge and the authentic spiritual practices here are unparalleled. This is truly a sacred space for seekers.",
      image: "/indian-man-meditation-practitioner.jpg",
    },
    {
      name: "Lakshmi Devi",
      location: "Coimbatore",
      text: "Easanamma's wisdom has illuminated my spiritual path. The community here is loving and supportive on this divine journey.",
      image: "/indian-woman-devotee.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Home_Page-bg.jpeg')" }}>
      <div className="absolute inset-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 h2-black">Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Hear from our spiritual community members</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
              <div className="relative z-10">
                <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
