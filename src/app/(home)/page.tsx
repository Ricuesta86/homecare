import AboutSection from "@/components/sections/about"
import { Footer } from "@/components/sections/footer"
// import { Hero } from "@/components/sections/hero"
import HeroCarousel from "@/components/sections/hero-carrusel"
import { Services } from "@/components/sections/services"
// import { Testimonials } from "@/components/sections/testimonials"
// import { CtaSection } from "@/components/sections/cta"

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <HeroCarousel />
      <Services />
      <AboutSection />
      {/* <Testimonials />
      <CtaSection /> */}
      <Footer />
    </main>
  )
}