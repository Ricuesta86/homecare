"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
const HeroCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const slides = [
    {
      id: 1,
      title: "Evaluación Clínica Profesional de Salud Mental",
      subtitle:
        "Diagnóstico preciso y plan de tratamiento personalizado desde la comodidad de tu hogar",
      cta: "Agendar Evaluación",
      link: "/evaluacion-clinica",
      image: "/images/mental-evaluation.jpg",
      bgColor: "bg-blue-50",
      hook: "¿Preocupado por tu bienestar emocional? Nuestros terapeutas certificados te ayudarán a entender lo que sucede.",
    },
    {
      id: 2,
      title: "Coaching Especializado en Salud Mental",
      subtitle:
        "Desarrolla herramientas prácticas para manejar el estrés, ansiedad y mejorar tu productividad",
      cta: "Explorar Coaching",
      link: "/coaching-salud-mental",
      image: "/images/mental-coaching.jpg",
      bgColor: "bg-blue-50",
      hook: "Transforma tus desafíos emocionales en crecimiento personal con nuestro programa de 8 semanas.",
    },
    {
      id: 3,
      title: "Terapia y Counseling Profesional",
      subtitle:
        "Sesiones privadas con terapeutas licenciados para trabajar en tus retos emocionales",
      cta: "Iniciar Terapia",
      link: "/counseling",
      image: "/images/mental-counseling.jpg",
      bgColor: "bg-blue-50",
      hook: "Hablar ayuda. Nuestro enfoque compasivo te brindará claridad y estrategias para sentirte mejor.",
    },
    {
      id: 4,
      title: "Manejo de Medicación Supervisado",
      subtitle:
        "Seguimiento farmacológico personalizado por psiquiatras expertos",
      cta: "Consultar Opciones",
      link: "/manejo-medicacion",
      image: "/images/medication-mgmt.jpg",
      bgColor: "bg-blue-50",
      hook: "¿Medicación que no funciona o efectos secundarios? Optimizamos tu tratamiento para mejores resultados.",
    },
  ];

  return (
    <section className="relative">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[70vh] min-h-[500px]">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                />
                <div className="absolute inset-0  bg-opacity-50" />

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-black max-w-4xl mx-auto px-4 bg-[rgba(255,255,255,0.25)] md:bg-[rgba(255,255,255,0.45)] rounded-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 mt-4 animate-fade-in">
                      {slide.title}
                    </h2>
                    <div className="bg-[rgba(255,255,255,0.25)] md:bg-[rgba(255,255,255,0.45)] rounded-2xl">
                      <p className="text-xl md:text-2xl mb-6 text-black  px-5 ">
                        {slide.subtitle}
                      </p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.25)] md:bg-[rgba(255,255,255,0.45)] rounded-2xl">
                      <p className="text-lg mb-8 max-w-2xl mx-auto text-black">
                        {slide.hook}
                      </p>
                    </div>
                    {/* <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                    >
                      {slide.cta}
                    </Button> */}
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
  );
};

export default HeroCarousel;
