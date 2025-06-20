"use client"; // Necesario para usar hooks y estados en Next.js 13+

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Efecto para cambiar el navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Links de navegación
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/services" },
    { name: "Nosotros", path: "/about" },
    // { name: "Testimonios", path: "/testimonios" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 py-4 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
              aria-label="HomeCare Logo"
            >
              <Image
                priority
                src={'/logo.png'}
                alt="Latin Angels"
                height={50}
                width={50}
                className="rounded-full"
              />
              <span className="ml-2 text-2xl font-bold text-blue-800">
                Latin Angels
              </span>
            </Link>
          </div>

          {/* Links de navegación (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative group ${
                  pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600 font-medium"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 ${
                    pathname === link.path
                      ? "w-full bg-blue-600"
                      : "w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Botones (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Contactar
            </Link>
          </div>

          {/* Botón móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {!isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-4 py-4 px-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`py-2 px-3 rounded transition-colors duration-200 ${
                    pathname === link.path
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Link
                  href="/login"
                  className="block text-center text-blue-600 hover:text-blue-800 font-medium py-2 px-3 rounded hover:bg-blue-50 transition-colors duration-200"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/contacto"
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
