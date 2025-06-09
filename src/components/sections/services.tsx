'use client';

import { Home, Heart, Users, Shield, ShoppingBag, Dog, BookOpen, Utensils } from 'lucide-react';

const HomeCareServices = () => {
  const services = [
    {
      title: "Servicio de Ama de Casa",
      icon: <Home className="w-8 h-8 text-blue-600" />,
      description: "Ofrecemos un hogar coordinado y limpio, garantizando un ambiente agradable y organizado.",
      features: [
        "Limpieza ligera del hogar",
        "Lavandería y planchado",
        "Cambios de ropa de cama",
        "Paseo de mascotas",
        "Organización de correspondencia",
        "Preparación y organización de habitaciones",
        "Compras y recados"
      ],
      benefits: "Previene el aislamiento que sienten muchas personas mayores que viven solas."
    },
    {
      title: "Compañerismo",
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      description: "Conversación y compañía significativa para mejorar el bienestar emocional y cognitivo.",
      features: [
        "Conversación estimulante",
        "Juegos de mesa (cartas, bingo)",
        "Lectura en voz alta",
        "Acompañamiento en paseos",
        "Asistencia a eventos sociales",
        "Actividades artísticas",
        "Acompañamiento a restaurantes"
      ],
      benefits: "Estimula el bienestar cerebral y emocional a través de interacciones significativas."
    },
    {
      title: "Apoyos Personales",
      icon: <Users className="w-8 h-8 text-teal-600" />,
      description: "Asistencia profesional en actividades de la vida diaria para mayor independencia.",
      features: [
        "Asistencia con baño y aseo",
        "Ayuda para vestirse",
        "Preparación de comidas",
        "Supervisión de medicamentos",
        "Asistencia con movilidad",
        "Acompañamiento médico",
        "Controles de seguridad en el hogar"
      ],
      benefits: "Permite a los adultos mayores y personas con discapacidad permanecer en sus hogares con seguridad."
    },
    {
      title: "Cuidado Especializado",
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      description: "Atención profesional para necesidades específicas de salud.",
      features: [
        "Cuidado de Alzheimer/Demencia",
        "Cuidado de relevo (para familiares)",
        "Monitoreo de salud continuo",
        "Gestión de medicamentos",
        "Atención post-hospitalización",
        "Cuidado paliativo",
        "Asistencia con terapias"
      ],
      benefits: "Proporciona tranquilidad a familias y cuidado especializado cuando más se necesita."
    }
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
            Atención Integral desde el Hogar <span className="text-blue-600">en Orlando, FL</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Latin Angels for Homecare Inc. brinda servicios personalizados que permiten a los adultos mayores vivir con seguridad y comodidad en sus hogares.
          </p>
        </div>

        {/* Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="p-6 flex-grow">
                <div className="bg-blue-50 p-3 rounded-full inline-flex mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <h4 className="font-semibold text-gray-800 mb-2">Incluye:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  <span className="font-semibold">Beneficio clave:</span> {service.benefits}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Área de servicio */}
        <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Servimos en Orlando, FL y áreas cercanas</h3>
              <p className="text-gray-600 mb-6">
                Nuestros servicios están diseñados para brindar apoyo a familias y permitir que sus seres queridos envejezcan con dignidad en el lugar que más aman: su hogar.
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
                <ShoppingBag className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-medium">Compras y Recados</span>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg flex items-center">
                <Dog className="w-6 h-6 text-purple-600 mr-3" />
                <span className="font-medium">Cuidado de Mascotas</span>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                <BookOpen className="w-6 h-6 text-teal-600 mr-3" />
                <span className="font-medium">Compañía y Lectura</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg flex items-center">
                <Utensils className="w-6 h-6 text-orange-600 mr-3" />
                <span className="font-medium">Preparación de Comidas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareServices;