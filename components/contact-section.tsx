import { MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            Visit the Gurukulam
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Location</h3>
                      <p className="text-foreground/80 text-pretty">
                        Kotravail (Shivan Kovil), Muthandipatti
                        <br />
                        Near Sengipatti, Thanjavur
                        <br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Phone</h3>
                      <p className="text-foreground/80">+91 63823 15818</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Email</h3>
                      <p className="text-foreground/80">info@easanamma.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden divine-glow border-2 border-primary/20">
              <iframe
                src="https://www.google.com/maps?q=Shree+Easanamma+Gurukulam,+Kotravail+Shivan+Kovil,+Muthandipatti,+Near+Sengipatti,+Thanjavur&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Shree Easanamma Gurukulam Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
