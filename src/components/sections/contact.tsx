"use client";

import { MapPin, FileText, Phone, Mail, Clock, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message:
            "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
        });
        reset();
      } else {
        setSubmitStatus({
          success: false,
          message:
            result.message ||
            "Error al enviar el mensaje. Por favor intenta nuevamente.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          `Error de conexión. Por favor verifica tu conexión e intenta nuevamente. ${error}`,
          
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white" id="contacto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contáctenos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para
              más información sobre nuestros servicios de cuidado en el hogar.
            </p>

            <div className="space-y-6">
              {/* Dirección */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Dirección
                  </h3>
                  <p className="text-gray-600">
                    7619 Coot St, Orlando, FL 32822
                  </p>
                </div>
              </div>

              {/* Licencias */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Licencias y Certificaciones
                  </h3>
                  <p className="text-gray-600 mb-1">Archivo: 39975098</p>
                  <p className="text-gray-600">Licencia: 239234</p>
                  <p className="text-gray-600 mt-2">
                    Tipo de Proveedor: Homemaker and Companion
                  </p>
                </div>
              </div>

              {/* Teléfonos */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Teléfonos
                  </h3>
                  <p className="text-gray-600 mb-1">(786) 238-5632</p>
                  <p className="text-gray-600">(689) 302-5799</p>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Correo Electrónico
                  </h3>
                  <p className="text-gray-600">latinangelshomecare@gmail.com</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Horario de Atención
                  </h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Emergencias: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un mensaje
            </h3>

            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    {...register("name", {
                      required: "Este campo es requerido",
                    })}
                    className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                    placeholder="Tu nombre"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Este campo es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Correo electrónico no válido",
                      },
                    })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  {...register("service")}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="homemaker">Ama de Casa</option>
                  <option value="companion">Compañerismo</option>
                  <option value="personal-care">Apoyos Personales</option>
                  <option value="specialized">Cuidado Especializado</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", {
                    required: "Este campo es requerido",
                  })}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                  placeholder="Cuéntanos cómo podemos ayudarte"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mapa (opcional) */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.715067667111!2d-81.3032239240334!3d28.52089208765047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7645a61e6141d%3A0x1a7b0e8a9e6a1b0d!2s7619%20Coot%20St%2C%20Orlando%2C%20FL%2032822!5e0!3m2!1sen!2sus!4v1712345678901"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Latin Angels Homecare"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
