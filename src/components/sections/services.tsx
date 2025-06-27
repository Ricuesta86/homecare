"use client";

import {
  Home,
  Heart,
  Users,
  Shield,
  MessageCircleWarning,
  HandHeart,
  FilePenLine,
  TextSearch,
} from "lucide-react";

const HomeCareServices = () => {
  const services = [
    {
      title: "Terapia Individual",
      icon: <Home className="w-8 h-8 text-blue-600" />,
      description: `Ofrecemos el servicio vía Telesalud en casa y oficina.`,
      features: [
        "Atención personalizada",
        "Espacio seguro y confidencial",
        "Apoyo y enfoque en objetivos específicos",
      ],
      benefits: [
        "Mejora la salud mental",
        "Mayor autoconciencia",
        "Resolución de conflictos emocionales",
      ],
    },
    {
      title: "Terapia de Grupo",
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      description: `Ofrecemos el servicio vía Telesalud en casa, comunidad y oficina.
        `,
      features: [
        "Interacción grupal",
        "Apoyo social",
        "Diversidad de perspectiva",
        "Desarrollo de habilidades sociales.",
      ],
      benefits: [
        "Mejora de la motivación y constancia.",
        "Sentimiento de pertenencia social.",
        "Reduccion de estrés y ansiedad.",
      ],
    },
    {
      title: "Terapia de Pareja",
      icon: <Users className="w-8 h-8 text-teal-600" />,
      description:
        "Ofrecemos el servicio vía Telesalud en casa, comunidad y oficina.",
      features: [
        "Identificación de patrones disfuncionales.",
        "Resolución de Conflictos",
        "Fomento de la Empatia y la comprensión mutua.",
      ],
      benefits: [
        "Mejora la comunicación",
        "Fortalece la intimidad",
        "Prevee problemas futuros",
        "Aumenta la satisfacción de la relación",
      ],
    },
    {
      title: "Terapia de Familia",
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      description:
        "Ofrecemos el servicio vía Telesalud en casa, comunidad y oficina.",
      features: [
        "Identificación de patrones disfuncionales.",
        "Resolución de Conflictos",
        "Fomento de la Empatia y la comprensión mutua.",
      ],
      benefits: [
        "Mejora la comunicación",
        "Reduce estrés",
        "Apoya bienestar emocional",
        "Fomenta Resiliencia",
        "Ambiente familiar mas agradable.",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Atencion integral desde la Oficina, Telesalud o en el Hogar{" "}
            <span className="text-blue-600">
              en Polk County, FL, Orlando, Fl, Hillsborough, Fl
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Latin Angels For Homecare LLC. Brinda servicios personalizados que
            permiten a los niños de 6-18 años, jóvenes de 19-35 años, adultos
            jóvenes de 36-55 años y a los adultos mayores a vivir con seguridad,
            con buena salud mental en sus hogares.
          </p>
        </div>

        {/* Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="bg-blue-50 p-3 rounded-full inline-flex mb-4">
                  {service.icon}
                </div>
                {/* <h3 className="text-xl font-bold text-gray-900 mb-3 md:h-8 lg:h-14"> */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 lg:h-20">
                  {service.description}
                </p>

                <div className="lg:h-40">
                  <h4 className="font-semibold text-gray-800 mb-2">Incluye:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 md:h-48 lg:h-55">
                <p className="text-sm font-medium text-gray-700">
                  <span className="font-semibold">Beneficio clave:</span>{" "}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Área de servicio */}
        <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Servimos en Polk Country FL y áreas cercanas
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestros servicios están diseñados para brindar apoyo emocional
                para que cuiden su mente y su vida, a individuos, parejas,
                grupos y familia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Contactar Ahora
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Ver Áreas de Cobertura
                </button>
              </div>
            </div>

            <div className="md:w-1/2 grid lg:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                <MessageCircleWarning className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-medium">Atención personalizada</span>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg flex items-center">
                <HandHeart className="w-6 h-6 text-purple-600 mr-3" />
                <span className="font-medium">Apoyo social</span>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                <FilePenLine className="w-6 h-6 text-teal-600 mr-3" />
                <span className="font-medium">Resolución de Conflictos</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg flex items-center">
                <TextSearch className="w-6 h-6 text-orange-600 mr-3" />
                <span className="font-medium">Identificación de patrones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareServices;
