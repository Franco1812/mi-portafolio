import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building2, Briefcase } from "lucide-react"

const experiences = [
  {
    company: "IT ANLIS (Instituto Dr. Carlos Malbrán)",
    position: "Software Developer SSR",
    period: "Noviembre 2025 – Actualidad",
    responsibilities: [
      "Gestión integral del soporte y mantenimiento evolutivo del sistema nacional de trazabilidad para muestras de laboratorio.",
      "Resolución de incidencias técnicas críticas y ejecución de mejoras funcionales para asegurar la continuidad operativa.",
      "Análisis de datos y aseguramiento de la integridad del flujo de información en entornos estatales.",
    ],
    technologies: ["PHP", "Laravel", "React", "MySQL", "MariaDB"],
  },
  {
    company: "Phinx Lab",
    position: "Full-stack Developer",
    period: "Noviembre 2024 – Octubre 2025",
    responsibilities: [
      "Proyecto Aprende BA: Desarrollo de plataforma educativa para +200.000 alumnos y 50.000 docentes del GCBA.",
      "Proyecto PipeStore: Desarrollo de marketplace e-commerce con expansión regional.",
      "Implementación de aplicaciones web escalables utilizando React.js y Node.js.",
    ],
    technologies: ["TypeScript", "Node.js", "Java", "SQL", "Docker"],
  },
  {
    company: "Developfit",
    position: "Developer",
    period: "Febrero 2023 – Noviembre 2024",
    responsibilities: [
      "Diseño de arquitecturas frontend y desarrollo de interfaces responsivas con React.js.",
      "Implementación de servicios RESTful y lógica de negocio con Java Spring Boot.",
    ],
    technologies: ["React.js", "Java", "MySQL", "Docker", "Metodologías Ágiles"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Experiencia Profesional</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 font-serif">
            Mi trayectoria profesional en desarrollo de software
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">{exp.company}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{exp.position}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-muted-foreground flex items-start gap-2 font-serif">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-sm font-semibold text-muted-foreground mr-2">Tecnologías:</span>
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

