// import { ContactForm } from "@/components/sections/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-3xl font-bold mb-8">Contacto</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Información de Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <span>info@homecare.com</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <span>123 Calle Principal, Ciudad, País</span>
            </div>
          </CardContent>
        </Card>
        
        {/* <ContactForm /> */}
      </div>
    </div>
  )
}