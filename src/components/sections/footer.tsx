import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Información */}
          <div>
            <h3 className="text-lg font-bold mb-4">Latin Angels For Homecare LLC</h3>
            <p className="mb-4">
              Brindamos cuidado profesional y compasivo en la comodidad de su
              hogar.
            </p>
            <div className="flex space-x-4">
              <Link href={"/"} className="hover:text-blue-200 transition">
                <span className="sr-only">Facebook</span>
                <i></i>
                <Facebook className="text-2xl" />
              </Link>
              <Link href="#" className="hover:text-blue-200 transition">
                <span className="sr-only">Twitter</span>
                <Twitter className=" text-2xl" />
              </Link>
              <Link href="#" className="hover:text-blue-200 transition">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </Link>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href={"/"} className="hover:text-blue-200 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-200 transition"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-200 transition">
                  Sobre Nosotros
                </Link>
              </li>
              {/* <li>
                <a href="#" className="hover:text-blue-200 transition">
                  Testimonios
                </a>
              </li> */}
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-blue-200 transition"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-200 transition">
                  Terapia Individual
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200 transition">
                  Terapia de Grupo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200 transition">
                  Terapia de Pareja
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200 transition">
                  Terapia de Familia
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <address className="not-italic">
              <p className="mb-2 flex gap-1">
                {/* <i className="fas fa-map-marker-alt mr-2"></i> */}
                <MapPin />
                7619 Coot St, Orlando, FL 32822
              </p>
              <p className="mb-2 flex gap-1">
                {/* <i className="fas fa-phone mr-2"></i> */}
                <Phone />
                (407) 385 3470
              </p>
              <p className="mb-2 flex gap-1">
                {/* <i className="fas fa-phone mr-2"></i> */}
                <Phone />
                (786) 238-5632
              </p>
              <p className="mb-2 flex gap-1">
                {/* <i className="fas fa-envelope mr-2"></i>
                 */}
                <Mail />
                latinangelshomecare@gmail.com
              </p>
              <p className="mb-2 flex gap-1">
                {/* <i className="fas fa-clock mr-2"></i> */}
                <Clock />                
                  Lunes a Viernes:
                  <br></br>
                   9:00 AM - 4:00 PM 
                  <br></br>
                  {/* Sábados: 
                  <br></br>
                  9:00 AM - 2:00 PM */}
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p>
            &copy; {currentYear} <span className="italic">Latin Angels For HomeCare LLC.</span> Todos los derechos
            reservados.
          </p>
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
