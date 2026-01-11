import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Mí</h2>

          <div className="mb-16">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-serif">
              Soy estudiante de la Tecnicatura Universitaria en Programación en la UTN. Tengo un gran interés por la tecnología 
              y experiencia en el desarrollo de software, tanto en el front-end como en el back-end.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-serif">
              He trabajado como desarrollador FullStack en proyectos variados, utilizando diferentes tecnologías y metodologías 
              ágiles como Scrum y Kanban. Esa experiencia me permitió colaborar con equipos multidisciplinarios y enriquecerme 
              del intercambio con profesionales de distintas áreas.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-serif">
              Me caracterizo por ser proactivo, adaptable y con una gran capacidad de aprendizaje. Tengo un fuerte compromiso 
              con el trabajo y disfruto asumir nuevos desafíos que me permitan seguir creciendo profesionalmente.
            </p>
            
            <div className="mt-8 p-6 bg-card rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Experiencia Destacada</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Sistemas Críticos y Alto Tráfico</h4>
                  <p className="text-muted-foreground font-serif">
                    Actualmente trabajo en el Instituto Dr. Carlos Malbrán gestionando el sistema nacional de trazabilidad para 
                    muestras de laboratorio, donde me especializo en el soporte y mantenimiento de sistemas críticos, resolución 
                    de incidencias técnicas y aseguramiento de la integridad del flujo de información en entornos estatales.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Proyectos de Gran Escala</h4>
                  <p className="text-muted-foreground font-serif">
                    En Phinx Lab participé en el desarrollo de Aprende BA, una plataforma educativa que atiende a más de 200.000 
                    alumnos y 50.000 docentes del Gobierno de la Ciudad de Buenos Aires. También desarrollé PipeStore, un 
                    marketplace e-commerce con expansión regional, trabajando con tecnologías modernas como TypeScript, Node.js 
                    y Docker.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Arquitectura y Buenas Prácticas</h4>
                  <p className="text-muted-foreground font-serif">
                    En Developfit me especialicé en el diseño de arquitecturas frontend escalables y el desarrollo de interfaces 
                    responsivas con React.js, así como en la implementación de servicios RESTful y lógica de negocio robusta con 
                    Java Spring Boot, aplicando metodologías ágiles para asegurar entregas eficientes.
                  </p>
                </div>
              </div>
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
