import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BusinessSectors from "@/components/business-sectors"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <BusinessSectors />
      <ContactSection />
      <Footer />
    </main>
  )
}
