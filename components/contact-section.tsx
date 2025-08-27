"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import emailjs from '@emailjs/browser'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const SERVICE_ID = "service_ivsjoga"
    const TEMPLATE_ID = "template_lw4kbdh"
    const USER_ID = "ICY_hiJFWuEK5Otaa"
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        alert("Correo enviado correctamente!")
        setFormData({ name: "", email: "", message: "" })
      })
      .catch((err) => {
        console.error(err)
        alert("Hubo un error al enviar el correo")
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 font-serif">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">franco.pagano66@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-muted-foreground">+54 11 2276 2306</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">¿Por qué trabajar conmigo?</h4>
                <ul className="text-sm text-muted-foreground space-y-1 font-serif">
                  <li>• Metodologías ágiles y gestión de proyectos: Experiencia en entornos corporativos siguiendo Scrum/Kanban para asegurar entregas eficientes.</li>
                  <li>• Calidad de código y buenas prácticas: Desarrollo de software con código limpio, modular y bien documentado, facilitando mantenibilidad y escalabilidad.</li>
                  <li>• Entrega puntual y cumplimiento de objetivos: Historial comprobado de finalización de proyectos dentro de plazos establecidos.</li>
                  <li>• Capacidad para implementar mejoras, solucionar bugs y optimizar aplicaciones después de su despliegue.</li>
                </ul>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Envíame un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
