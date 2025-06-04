"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Evaluación Clínica Profesional de Salud Mental",
      subtitle: "Obtén un diagnóstico preciso y un plan de tratamiento personalizado desde la comodidad de tu hogar",
      cta: "Agendar Evaluación",
      link: "/evaluacion-clinica",
      image: "/images/mental-evaluation.jpg",
      bgColor: "bg-blue-50",
      hook: "¿Preocupado por tu bienestar emocional? Nuestros psiquiatras certificados te ayudarán a entender lo que sucede."
    },
    {
      id: 2,
      title: "Coaching Especializado en Salud Mental",
      subtitle: "Desarrolla herramientas prácticas para manejar el estrés, ansiedad y mejorar tu productividad",
      cta: "Explorar Coaching",
      link: "/coaching-salud-mental",
      image: "/images/mental-coaching.jpg",
      bgColor: "bg-blue-50",
      hook: "Transforma tus desafíos emocionales en crecimiento personal con nuestro programa de 8 semanas."
    },
    {
      id: 3,
      title: "Terapia y Counseling Profesional",
      subtitle: "Sesiones privadas con terapeutas licenciados para trabajar en tus retos emocionales",
      cta: "Iniciar Terapia",
      link: "/counseling",
      image: "/images/mental-counseling.jpg",
      bgColor: "bg-blue-50",
      hook: "Hablar ayuda. Nuestro enfoque compasivo te brindará claridad y estrategias para sentirte mejor."
    },
    {
      id: 4,
      title: "Manejo de Medicación Supervisado",
      subtitle: "Seguimiento farmacológico personalizado por psiquiatras expertos",
      cta: "Consultar Opciones",
      link: "/manejo-medicacion",
      image: "/images/medication-mgmt.jpg",
      bgColor: "bg-blue-50",
      hook: "¿Medicación que no funciona o efectos secundarios? Optimizamos tu tratamiento para mejores resultados."
    }
  ];

  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={`relative h-[calc(100vh-4rem)] max-h-[700px] overflow-hidden ${slides[currentSlide].bgColor} transition-colors duration-1000`}>
      {/* Carrusel */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-16 transition-opacity duration-1000 flex items-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Contenido de texto */}
                <div className="text-center md:text-left">
                  <div className="max-w-2xl mx-auto md:mx-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-gray-700 mb-6">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg font-medium text-gray-800 mb-8 px-4 py-3 bg-white/70 rounded-lg">
                      {slide.hook}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      {/* <Link 
                        href={slide.link}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
                      >
                        {slide.cta}
                      </Link>
                      <Link 
                        href="/contacto"
                        className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300"
                      >
                        Hablar con un especialista
                      </Link> */}
                    </div>
                  </div>
                </div>

                {/* Imagen */}
                <div className="relative h-72 md:h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="rounded-lg shadow-xl w-auto h-auto object-cover"
                    priority={index === currentSlide}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 hover:bg-white shadow-md focus:outline-none transition"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 hover:bg-white shadow-md focus:outline-none transition"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Indicadores de paginación */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600 w-6' : 'bg-white/80 hover:bg-white'}`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Efecto decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8 z-10"></div>
    </section>
  );
};

export default HeroCarousel;
