import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutGurukulam } from "@/components/about-gurukulam"
import { TeachingsSection } from "@/components/teachings-section"
import { AboutEasanamma } from "@/components/about-easanamma"
import { PracticesSection } from "@/components/practices-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div className="bg-gray-50">
          <AboutGurukulam />
        </div>
        <div className="bg-gray-50">
          <TeachingsSection />
        </div>
        <div className="bg-gray-50">
          <AboutEasanamma />
        </div>
        <div className="bg-white">
          <PracticesSection />
        </div>
        <div className="bg-gray-50">
          <TestimonialsSection />
        </div>
        <div className="bg-white">
          <GallerySection />
        </div>
        <div className="bg-gray-50">
          <ContactSection />
        </div>
        <div className="bg-white">
          <NewsletterSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
