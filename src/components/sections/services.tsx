// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { Home, HeartPulse, UserRound, Soup } from "lucide-react";

export function Services() {
  // const services = [
  //   {
  //     title: "Cuidado Diario",
  //     description: "Asistencia con actividades cotidianas como baño, alimentación y movilidad.",
  //     icon: <Home className="w-8 h-8" />,
  //   },
  //   {
  //     title: "Cuidado Médico",
  //     description: "Atención especializada por profesionales de enfermería en casa.",
  //     icon: <HeartPulse className="w-8 h-8" />,
  //   },
  //   {
  //     title: "Acompañamiento",
  //     description: "Compañía y apoyo emocional para mejorar la calidad de vida.",
  //     icon: <UserRound className="w-8 h-8" />,
  //   },
  //   {
  //     title: "Asistencia Doméstica",
  //     description: "Ayuda con tareas del hogar, compras y preparación de alimentos.",
  //     icon: <Soup className="w-8 h-8" />,
  //   },
  // ]

  const services = [
    {
      id: 1,
      title: "Cuidado de Ancianos",
      description:
        "Atención especializada para adultos mayores, incluyendo asistencia en actividades diarias y acompañamiento.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      features: ["Asistencia 24/7", "Medicación controlada", "Acompañamiento"],
    },
    {
      id: 2,
      title: "Enfermería a Domicilio",
      description:
        "Servicios de enfermería profesional en tu hogar: curaciones, inyecciones, control de signos vitales.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      features: [
        "Curaciones avanzadas",
        "Terapia intravenosa",
        "Control postoperatorio",
      ],
    },
    {
      id: 3,
      title: "Asistencia Médica",
      description:
        "Visitas médicas domiciliarias para evaluación, diagnóstico y tratamiento de pacientes.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      features: [
        "Consultas programadas",
        "Emergencias médicas",
        "Coordinación con especialistas",
      ],
    },
    {
      id: 4,
      title: "Cuidado Postoperatorio",
      description:
        "Atención especializada para pacientes en recuperación después de cirugías o procedimientos.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      features: ["Monitoreo constante", "Rehabilitación", "Manejo del dolor"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Atención Personalizada{" "}
            <span className="text-blue-600">en tu Hogar</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios de salud domiciliarios
            adaptados a las necesidades individuales de cada paciente.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-blue-500 mr-2"
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
                  Más información
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner adicional */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-2">
                ¿Necesitas ayuda inmediata?
              </h3>
              <p className="opacity-90">
                Nuestro equipo está disponible las 24 horas para emergencias.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Llamar Ahora
              </button>
              <button className="border-2 border-white text-white hover:bg-blue-700 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
