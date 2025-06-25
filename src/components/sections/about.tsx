"use client";

import Image from "next/image";
import {
  HeartHandshake,
  Heart,
  Target,
  Users,
  ShieldCheck,
  Star,
  Eye,
  Rocket,
  ScanHeart,
  Handshake,
} from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Nuestra Misión
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            En Latín Àngels For Homecare LLC, nuestra misión es brindar
            servicios de salud mental Domiciliaria, en la oficina o Telesalud,
            con compasión, dignidad y respeto, enfocados en mejorar la calidad
            de vida de cada individuo, grupo, pareja y familia.
          </h2>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Nos comprometemos a ofrecer atención personalizada, culturalmente
            sensible y basada en evidencia adaptada a las necesidades únicas de
            cada cliente y en el entorno familiar. Nuestro proceso es aportar la
            estabilidad emocional, la autonomía y el bienestar de nuestros
            clientes.
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Un líder inigualable en la mejora de la calidad de los servicios de
            atención domiciliaria para todos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Imagen */}
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/about.jpg" // Reemplaza con tu imagen
              alt="Equipo de atención médica a domicilio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent flex items-end p-6">
              <div className="text-white">
                <Heart className="w-10 h-10 mb-3" />
                <h3 className="text-2xl font-bold">
                  Cuidado profesional con corazón
                </h3>
              </div>
            </div>
          </div>

          {/* Nuestro compromiso */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 text-blue-600 mr-2" />
              Nuestro compromiso diario
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Proporcionar lo mejor de la administración con una fuerza de
                  trabajo confiable y afectuosa
                </span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Ser receptivos y adaptar las administraciones para abordar los
                  problemas de todos
                </span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Mantener un activo constante para dar una fuerte consideración
                  a la persona y sus seres queridos
                </span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Esperar y satisfacer las necesidades personales y sociales de
                  los clientes
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Nuestra Esencia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cuidado Compasivo en la Comodidad de tu Hogar
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            En Latin Angels for Homecare LLC, combinamos profesionalismo con
            calidez humana para transformar vidas.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 bg-purple-50 p-6 rounded-full flex items-center justify-center">
              <Eye className="w-12 h-12 text-blue-600" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Rocket className="w-8 h-8 text-blue-600 mr-3" />
                Nuestra Visión
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  En <strong>Latin Angels for Homecare LLC</strong>, aspiramos a
                  ser líderes reconocidos en la provisión de servicios de salud
                  mental en el hogar y telesalud, destacándonos por la calidad
                  humana, la innovación terapéutica y el impacto positivo en la
                  vida de nuestros clientes.
                </p>
                <p>
                  Transformamos el concepto de atención domiciliaria y telesalud
                  en salud mental, utilizando modelos de intervención
                  terapéuticos y holísticos que empoderan a los clientes para
                  vivir con estabilidad emocional, funcionalidad e inclusión
                  social.
                </p>
                <p>
                  Buscamos expandir nuestra presencia para fortalecer a más
                  familias, grupos, parejas e individuos, promoviendo
                  comunidades más sanas, resilientes y solidarias en el ámbito
                  de la salud mental.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Nuestros valores */}
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <HeartHandshake className="w-8 h-8 text-blue-600 mr-3" />
              Nuestros Valores Fundamentales
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Con increíble confiabilidad y amor aceptamos nuestra obligación de
              co-crear una realidad donde cada uno de nosotros pueda prosperar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Respetabilidad */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Empatia</h4>
              </div>
              <p className="text-gray-600">
                Escuchamos y respondemos con sensibilidad a las experiencias
                emocionales de nuestros clientes.
              </p>
            </div>

            {/* Respeto */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Respeto</h4>
              </div>
              <p className="text-gray-600">
                Valoramos la dignidad de cada persona honrando sus derechos,
                decisiones y contexto cultural.
              </p>
            </div>

            {/* Compromiso */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">
                  Compromiso
                </h4>
              </div>
              <p className="text-gray-600">
                Nos dedicamos a brindar atención de alta calidad basada en el
                profesionalismo y la responsabilidad ética y moral.
              </p>
            </div>

            {/* Integridad */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">
                  Integridad
                </h4>
              </div>
              <p className="text-gray-600">
                Actuamos con honestidad, transparencia y coherencia en todas las
                acciones y relaciones.
              </p>
            </div>

            {/* Excelencia */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">
                  Excelencia
                </h4>
              </div>
              <p className="text-gray-600">
                Buscamos la mejora continua en nuestros servicios, apoyándonos en la evidencia científica y la formación constante.
              </p>
            </div>

            {/* Inclusión */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <ScanHeart className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">
                  Inclusión
                </h4>
              </div>
              <p className="text-gray-600">
                Promovemos entornos seguros y equitativos, donde todas las personas sean valoradas y apoyadas sin discriminación
              </p>
            </div>

            {/* Colaboración */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Handshake className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">
                  Colaboración
                </h4>
              </div>
              <p className="text-gray-600">
                Fomentamos el trabajo en equipo entre profesionales, familias y comunidades para lograr mejores resultados, equilibrando la esencia personal.
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para experimentar nuestra atención?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctenos hoy mismo para conocer cómo podemos apoyar las
            necesidades de salud en su hogar.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg">
            Contactar Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
