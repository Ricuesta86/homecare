"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Cuidado Profesional en tu Hogar",
      subtitle:
        "Brindamos atención médica especializada en la comodidad de tu casa",
      cta: "Solicitar Servicio",
      image: "/images/hero-1.jpg", // Reemplaza con tus imágenes
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "Atención 24/7 para Adultos Mayores",
      subtitle: "Equipo especializado en geriatría y cuidado paliativo",
      cta: "Conocer más",
      image: "/images/hero-2.jpg",
      bgColor: "bg-indigo-50",
    },
    {
      id: 3,
      title: "Recuperación Postoperatoria",
      subtitle: "Acompañamiento profesional después de cirugías",
      cta: "Ver servicios",
      image: "/images/hero-3.jpg",
      bgColor: "bg-teal-50",
    },
  ];

  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
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
    <section
      className={`relative h-screen max-h-[800px] overflow-hidden ${slides[currentSlide].bgColor} transition-colors duration-1000`}
    >
      {/* Carrusel */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Contenido de texto */}
                <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-700 mb-8 animate-fadeIn delay-100">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg animate-fadeIn delay-200">
                    {slide.cta}
                  </button>
                </div>

                {/* Imagen */}
                <div className="relative h-80 md:h-full animate-fadeIn delay-300">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    // height={"300"}
                    // width={300}
                    // className="object-contain object-center"
                    className="rounded-lg shadow-xl w-full h-auto"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md focus:outline-none transition"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md focus:outline-none transition"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Indicadores de paginación */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-blue-600 w-6"
                : "bg-white/80 hover:bg-white"
            }`}
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
