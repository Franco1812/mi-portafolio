import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Moderno",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Dashboard interactivo para visualización de datos con gráficos en tiempo real y métricas de rendimiento.",
    image: "/analytics-dashboard.png",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto",
  },
  {
    title: "App de Gestión de Tareas",
    description:
      "Aplicación colaborativa para gestión de proyectos con funcionalidades de equipo y seguimiento de progreso.",
    image: "/project2.png",
    technologies: ["Vue.js", "Express", "MySQL", "JWT", "Tailwind CSS"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto",
  },
  {
    title: "API REST Escalable",
    description: "API REST robusta con autenticación, rate limiting, documentación automática y tests completos.",
    image: "/api-documentation-interface.png",
    technologies: ["Node.js", "Express", "MongoDB", "Swagger", "Jest"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto",
  },
  {
    title: "Plataforma de Aprendizaje",
    description: "Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones y seguimiento de progreso.",
    image: "/online-learning-platform-with-course-interface.png",
    technologies: ["React", "Firebase", "Stripe", "Material-UI", "PWA"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto",
  },
  {
    title: "Chat en Tiempo Real",
    description: "Aplicación de mensajería instantánea con salas, notificaciones push y compartir archivos.",
    image: "/real-time-chat-application-interface.png",
    technologies: ["React", "Socket.io", "Node.js", "Redis", "AWS S3"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Mis Proyectos</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 font-serif">
            Una selección de mis trabajos más destacados
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed font-serif">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
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
