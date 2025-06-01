// import { Button } from "../ui/button";
// import { ArrowRight } from "lucide-react"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "../ui/card";

export function Hero() {
  return (
    // <section className="relative py-20 md:py-28 lg:py-32">
    //   <div className="container flex flex-col items-center text-center gap-6">
    //     {/* <div className="w-full flex justify-center">
    //       <Carousel
    //         className="w-full max-w-xs"
    //         // plugins={[Autoplay({delay:1000})]}
    //         autoplay={1000}
    //       >
    //         <CarouselContent>
    //           {Array.from({ length: 5 }).map((_, index) => (
    //             <CarouselItem key={index}>
    //               <div className="p-1">
    //                 <Card>
    //                   <CardContent className="flex aspect-square items-center justify-center p-6">
    //                     <span className="text-4xl font-semibold">
    //                       {index + 1}
    //                     </span>
    //                   </CardContent>
    //                 </Card>
    //               </div>
    //             </CarouselItem>
    //           ))}
    //         </CarouselContent>
    //         <CarouselPrevious className="hidden sm:flex justify-center items-center" />
    //         <CarouselNext className="hidden sm:flex justify-center items-center" />
    //       </Carousel>
    //     </div> */}
    //     <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
    //       Cuidado profesional <br className="hidden sm:inline" />
    //       en la comodidad de tu hogar
    //     </h1>
    //     <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
    //       Ofrecemos servicios de atención domiciliaria personalizados para
    //       adultos mayores y personas que necesitan asistencia.
    //     </p>
    //     <div className="flex gap-4">
    //       <Button size="lg" asChild>
    //         <a href="#services">Nuestros Servicios</a>
    //       </Button>
    //       <Button size="lg" variant="outline" asChild>
    //         <a href="/contact">Contactar Ahora</a>
    //       </Button>
    //     </div>
    //   </div>
    // </section>

    <section className="relative bg-blue-50">
      {/* Fondo con imagen (opcional) */}
      <div className="absolute inset-0 bg-blue-900 opacity-10"></div>

      <div className="container mx-auto px-4 py-24 md:py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Cuidado Profesional{" "}
              <span className="text-blue-600">en tu Hogar</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              Brindamos atención médica y acompañamiento personalizado en la
              comodidad de tu hogar. Nuestro equipo de profesionales está
              comprometido con tu bienestar y el de tu familia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
                Solicitar Servicio
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Conoce más
              </button>
            </div>

            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/women/${
                      item + 40
                    }.jpg`}
                    alt={`Cuidadora ${item}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-blue-600">
                    50+ Profesionales
                  </span>{" "}
                  disponibles
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    5.0 (200+ reseñas)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen del hero */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Enfermera cuidando a una persona mayor en casa"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    Disponibilidad 24/7
                  </p>
                  <p className="text-sm text-gray-600">
                    Servicio de emergencia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8 z-0"></div>
    </section>
  );
}
