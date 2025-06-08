import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BrainCircuit, BookOpen, HeartPulse, Pill } from "lucide-react"
import Image from "next/image"

const services = {
  evaluation: {
    title: "Evaluación Clínica de Salud Mental",
    description:
      "Diagnósticos precisos realizados por psiquiatras certificados para identificar condiciones de salud mental y establecer planes de tratamiento personalizados.",
    features: [
      "Evaluación psiquiátrica completa",
      "Diagnóstico diferencial",
      "Plan de tratamiento integrado",
      "Recomendaciones terapéuticas",
      "Seguimiento inicial",
    ],
    image: "/images/imagen1.jpg",
    icon: <BrainCircuit className="w-8 h-8 text-purple-600" />,
    cta: "Agendar Evaluación",
  },
  coaching: {
    title: "Coaching en Salud Mental",
    description:
      "Programas estructurados para desarrollar habilidades de manejo emocional, reducir el estrés y mejorar el bienestar psicológico en la vida diaria.",
    features: [
      "Sesiones semanales personalizadas",
      "Herramientas para manejo de ansiedad",
      "Estrategias de regulación emocional",
      "Desarrollo de resiliencia",
      "Planes de acción prácticos",
    ],
    image: "/images/imagen2.jpg",
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    cta: "Iniciar Coaching",
  },
  counseling: {
    title: "Terapia y Counseling",
    description:
      "Intervenciones terapéuticas basadas en evidencia para tratar condiciones emocionales y promover el crecimiento personal en un ambiente confidencial.",
    features: [
      "Terapia cognitivo-conductual (TCC)",
      "Terapia centrada en soluciones",
      "Counseling para crisis",
      "Terapia de pareja/familiar",
      "Grupos de apoyo",
    ],
    image: "/images/imagen3.jpg",
    icon: <HeartPulse className="w-8 h-8 text-teal-600" />,
    cta: "Reservar Consulta",
  },
  medication: {
    title: "Manejo de Medicación",
    description:
      "Supervisión farmacológica especializada para optimizar tratamientos psicotrópicos y minimizar efectos secundarios.",
    features: [
      "Evaluación de medicación actual",
      "Ajuste de dosis personalizado",
      "Manejo de efectos secundarios",
      "Coordinación con terapeutas",
      "Monitorización continua",
    ],
    image: "/images/imagen4.jpg",
    icon: <Pill className="w-8 h-8 text-indigo-600" />,
    cta: "Consultar Psiquiatra",
  },
}

export default function MentalHealthServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios de Salud Mental</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ofrecemos una gama completa de servicios profesionales para apoyar tu bienestar mental y emocional
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(services).map(([key, service]) => (
          <Card key={key} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>

            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                {service.icon}
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </div>
              <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
            </CardHeader>

            <CardContent className="pb-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 mb-3">Incluye:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full font-medium">{service.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
