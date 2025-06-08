'use client';

import Image from 'next/image';
import { HeartHandshake, Heart, Target, Users, ShieldCheck, Star } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Nuestra Misión
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Estamos resueltos a brindar un servicio organizado y confiable
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Un líder inigualable en la mejora de la calidad de los servicios de atención domiciliaria para todos.
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
                <h3 className="text-2xl font-bold">Cuidado profesional con corazón</h3>
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
                <span className="text-gray-700">Proporcionar lo mejor de la administración con una fuerza de trabajo confiable y afectuosa</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Ser receptivos y adaptar las administraciones para abordar los problemas de todos</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Mantener un activo constante para dar una fuerte consideración a la persona y sus seres queridos</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Esperar y satisfacer las necesidades personales y sociales de los clientes</span>
              </li>
            </ul>
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
              Con increíble confiabilidad y amor aceptamos nuestra obligación de co-crear una realidad donde cada uno de nosotros pueda prosperar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Respetabilidad */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Respetabilidad</h4>
              </div>
              <p className="text-gray-600">
                Hacer lo mejor de manera confiable, manteniendo los más altos estándares en cada interacción.
              </p>
            </div>

            {/* Propiedad */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Propiedad</h4>
              </div>
              <p className="text-gray-600">
                Considerar a los individuos como si fueran propios, con el mismo cuidado y dedicación que daríamos a nuestra familia.
              </p>
            </div>

            {/* Iniciativa */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Iniciativa</h4>
              </div>
              <p className="text-gray-600">
                Si va a ser, en última instancia, depende de mí. Tomamos responsabilidad personal por los resultados.
              </p>
            </div>

            {/* Entusiasmo */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Entusiasmo</h4>
              </div>
              <p className="text-gray-600">
                Comprometidos en un nivel básico para superar expectativas y brindar un servicio excepcional.
              </p>
            </div>

            {/* Respeto */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Respeto</h4>
              </div>
              <p className="text-gray-600">
                Construyendo conexiones que generan resultados poderosos, basados en la dignidad de cada persona.
              </p>
            </div>

            {/* Responsabilidad */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Responsabilidad</h4>
              </div>
              <p className="text-gray-600">
                Perseguir el desarrollo y descubrir cómo aceptar el cambio por la calidad y la idealidad de los resultados.
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para experimentar nuestra atención?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctenos hoy mismo para conocer cómo podemos apoyar las necesidades de salud en su hogar.
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