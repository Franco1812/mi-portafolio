import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building2, Briefcase, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "IT ANLIS (Instituto Dr. Carlos Malbrán)",
    position: "Software Developer SSR",
    period: "Noviembre 2025 – Actualidad · 3 meses",
    location: "Ciudad Autónoma de Buenos Aires · Presencial",
    website: "https://trazabilidad.anlis.gob.ar/",
    responsibilities: [
      "Brindo soporte y mantenimiento a un sistema de trazabilidad utilizado dentro del Instituto Dr. Carlos Malbrán, orientado a la gestión y seguimiento de paquetes de muestras para estudios de laboratorio.",
      "Trabajo sobre la plataforma realizando diagnóstico y resolución de incidencias, mejoras funcionales, análisis de datos y aseguramiento de la integridad del flujo operativo.",
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "MariaDB"],
  },
  {
    company: "Phinx Lab",
    position: "Full-stack Developer",
    period: "Noviembre 2024 – Octubre 2025",
    responsibilities: [
      "Me desempeñé como desarrollador Full-Stack, construyendo aplicaciones web escalables utilizando React.js en el frontend y Node.js en el backend.",
      "Mis responsabilidades incluyeron la implementación de nuevas funcionalidades, el mantenimiento de la calidad del código, la integración de APIs y la entrega de experiencias de usuario fluidas.",
      "Participé activamente en metodologías ágiles, colaborando en reuniones de planificación y revisiones de código para garantizar la mejora continua y la alineación con los objetivos del proyecto.",
      "Proyecto Aprende BA: Desarrollo de plataforma educativa para +200.000 alumnos y 50.000 docentes del GCBA.",
      "Proyecto PipeStore: Desarrollo de marketplace e-commerce con expansión regional.",
    ],
    technologies: ["TypeScript", "Node.js", "Java", "SQL", "Docker"],
  },
  {
    company: "Developfit",
    position: "Developer",
    period: "Febrero 2023 – Noviembre 2024 · 1 año 10 meses",
    location: "Provincia de Buenos Aires, Argentina · Híbrido",
    responsibilities: [
      "Desarrollo de interfaces de usuario modernas y responsivas utilizando React.js.",
      "Implementación de lógica de negocio y servicios RESTful en el backend con Java Spring Boot.",
      "Diseño y mantenimiento de bases de datos relacionales con MySQL.",
      "Participación en múltiples proyectos, aplicando buenas prácticas de desarrollo y control de versiones con GitHub.",
      "Enfoque en la eficiencia técnica y la calidad del código en todo el ciclo de desarrollo.",
    ],
    technologies: ["React.js", "Java", "MySQL", "Docker", "GitHub", "Spring Boot"],
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
                      {exp.location && (
                        <div className="flex items-center gap-2 text-muted-foreground mt-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      )}
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
                  {exp.website && (
                    <div className="mb-4">
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 flex items-center gap-2 text-sm font-medium transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver sitio web
                      </a>
                    </div>
                  )}
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

