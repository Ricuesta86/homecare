
'use client';
import { MapPin, Phone, Car } from 'lucide-react';

const CoverageArea = () => {
  // Ciudades principales en Polk County
  const cities = [
    "Lakeland",
    "Winter Haven",
    "Bartow",
    "Auburndale",
    "Haines City",
    "Lake Wales",
    "Davenport",
    "Mulberry",
    "Fort Meade",
    "Frostproof"
  ];

  return (
    <section className="py-16 bg-gray-50" id="coverage">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Nuestra Cobertura
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servimos a <span className="text-blue-600">Todo Polk County, FL</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Brindamos nuestros servicios de atención domiciliaria en todas las ciudades del condado de Polk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mapa interactivo */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56234.10292065033!2d-81.9502036!3d27.9944027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3f8b6f6a33a5%3A0x5f9e4ec61e266f9d!2sPolk%20County%2C%20FL%2C%20USA!5e0!3m2!1sen!2sus!4v1712345678901"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Área de cobertura - Polk County, FL"
            ></iframe>
          </div>

          {/* Lista de ciudades y detalles */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                Ciudades que servimos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cities.map((city, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Car className="w-6 h-6 text-blue-600 mr-2" />
                Zona de servicio
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Toda el área del condado de Polk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Radio de 50 millas alrededor de Lakeland</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Servicio prioritario en áreas urbanas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Disponibilidad en zonas rurales con cita previa</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold text-blue-800">¿No estás seguro si cubrimos tu área?</p>
                <a href="tel:7862385632" className="text-blue-600 hover:text-blue-800 text-lg font-medium">
                  (786) 238-5632
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;