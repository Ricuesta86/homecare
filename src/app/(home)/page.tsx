import AboutSection from "@/components/sections/about"
import ContactSection from "@/components/sections/contact"
// import { Hero } from "@/components/sections/hero"
import HeroCarousel from "@/components/sections/hero-carrusel"
import HomeCareServices from "@/components/sections/services"
// import Servi from "@/components/sections/services"
// import { Testimonials } from "@/components/sections/testimonials"
// import { CtaSection } from "@/components/sections/cta"

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <HeroCarousel />
      <HomeCareServices />
      <AboutSection />
      <ContactSection />
      {/* <Testimonials />
      <CtaSection /> */}
    </main>
  )
}