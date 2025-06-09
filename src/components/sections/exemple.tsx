
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Fixed */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Logo</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Servicios
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Acerca de
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contacto
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                  Inicio
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                  Servicios
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                  Acerca de
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contenido - Columna Izquierda */}
            <div className="space-y-6 lg:space-y-8">
              {/* Título */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforma tu <span className="text-blue-600">negocio</span> con soluciones digitales
              </h1>

              {/* Subtítulo */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Creamos experiencias digitales excepcionales que impulsan el crecimiento de tu empresa. Desde desarrollo
                web hasta estrategias de marketing digital.
              </p>

              {/* Gancho/Call-to-Action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
                  Comenzar Ahora
                </button>
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Ver Portafolio
                </button>
              </div>

              {/* Estadísticas o badges */}
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Años</div>
                </div>
              </div>
            </div>

            {/* Imagen - Columna Derecha */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Hero Image"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}




"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function HeroCarousel() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  const slides = [
    {
      id: 1,
      title: "Bienvenido a Nuestro Sitio",
      subtitle: "Descubre experiencias increíbles",
      description: "Ofrecemos las mejores soluciones para tu negocio con tecnología de vanguardia",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Explorar Servicios",
    },
    {
      id: 2,
      title: "Innovación y Calidad",
      subtitle: "Transformamos tus ideas en realidad",
      description: "Nuestro equipo de expertos está listo para llevar tu proyecto al siguiente nivel",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Conocer Más",
    },
    {
      id: 3,
      title: "Resultados Garantizados",
      subtitle: "Tu éxito es nuestra prioridad",
      description: "Más de 1000 clientes satisfechos confían en nuestros servicios profesionales",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Contactar Ahora",
    },
  ]

  return (
    <section className="relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[70vh] min-h-[500px]">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">{slide.title}</h2>
                    <p className="text-xl md:text-2xl mb-6 text-gray-200">{slide.subtitle}</p>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">{slide.description}</p>
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-colors duration-200"
          />
        ))}
      </div>
    </section>
  )
}
