export function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Información */}
          <div>
            <h3 className="text-xl font-bold mb-4">HomeCare</h3>
            <p className="mb-4">
              Brindamos cuidado profesional y compasivo en la comodidad de su
              hogar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="hover:text-blue-200 transition">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-blue-200 transition">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Cuidado de Ancianos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Asistencia Médica
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Cuidado Postoperatorio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Acompañamiento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Servicios de Enfermería
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <address className="not-italic">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Calle Cuidado, Ciudad Hogar
              </p>
              <p className="mb-2">
                <i className="fas fa-phone mr-2"></i>
                (123) 456-7890
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope mr-2"></i>
                info@homecare.com
              </p>
              <p>
                <i className="fas fa-clock mr-2"></i>
                24/7 Disponible
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} HomeCare. Todos los derechos reservados.</p>
          <div className="mt-2 text-sm">
            <a href="#" className="hover:text-blue-200 transition mx-2">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-blue-200 transition mx-2">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
