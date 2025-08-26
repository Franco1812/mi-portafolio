import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Mí</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-serif">
                Soy un desarrollador full stack apasionado por crear soluciones digitales innovadoras. Con más de 3 años
                de experiencia, me especializo en tecnologías modernas como React, Next.js, Node.js y bases de datos
                tanto SQL como NoSQL.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-serif">
                Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre buscando las mejores
                prácticas y las últimas tendencias en desarrollo web.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-serif">
                Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, contribuyendo a proyectos open
                source y compartiendo conocimientos con la comunidad de desarrolladores.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/developer-working-on-computer-setup.png"
                alt="Desarrollador trabajando"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Desarrollo Frontend</h3>
                <p className="text-muted-foreground font-serif">
                  Interfaces modernas y responsivas con React, Next.js y Tailwind CSS
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Palette className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Diseño UI/UX</h3>
                <p className="text-muted-foreground font-serif">
                  Experiencias de usuario intuitivas y diseños atractivos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Desarrollo Backend</h3>
                <p className="text-muted-foreground font-serif">
                  APIs robustas y escalables con Node.js, Express y bases de datos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
