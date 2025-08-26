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
                Desarrollador Full-Stack con más de 3 años de experiencia en el desarrollo de aplicaciones web escalables para 
                organismos públicos y empresas privadas. He participado en proyectos de gran impacto como plataformas educativas 
                y marketplaces de e-commerce, trabajando con tecnologías como React.js, Next.js, Node.js, Java y SQL.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-serif">
                Mi especialidad está en la implementación de arquitecturas robustas, el diseño de interfaces responsivas y la 
                optimización de procesos mediante buenas prácticas de desarrollo. Me enfoco en aportar valor al negocio a través 
                de soluciones eficientes, manteniendo un código limpio y escalable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-serif">
                Colaboro activamente en equipos multidisciplinarios bajo metodologías ágiles, integrando calidad técnica con 
                objetivos estratégicos. Busco seguir creciendo profesionalmente en entornos desafiantes e innovadores.
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
