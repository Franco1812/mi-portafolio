import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Calendar } from "lucide-react"

const education = [
  {
    institution: "Universidad Tecnológica Nacional (UTN)",
    degree: "Tecnicatura Universitaria en Programación",
    period: "2025 – 2027",
    status: "En curso",
    description: "Formación en desarrollo de software con base sólida en programación, algoritmos y estructuras de datos, análisis y diseño de sistemas y bases de datos relacionales. Enfoque en la resolución de problemas, buenas prácticas de desarrollo y uso de herramientas fundamentales como Git y entornos Linux.",
    skills: [
      "Análisis y diseño de sistemas",
      "Programación orientada a objetos (POO)",
      "Algoritmos y estructuras de datos",
      "Resolución de problemas",
      "C++",
      "Desarrollo de Software",
      "Buenas prácticas de programación",
      "TypeScript",
      "Administración de sistemas",
      "Java",
      "SQL y bases de datos relacionales",
    ],
  },
]

const certifications = [
  {
    institution: "DevTalles",
    title: "Especializaciones Técnicas",
    courses: [
      {
        name: "Nest: Desarrollo backend escalable con Node",
        description: "Especialización técnica centrada en la creación de aplicaciones de servidor altamente escalables y eficientes utilizando el framework NestJS. El programa profundiza en la arquitectura modular, el uso de decoradores, la inyección de dependencias y la integración con bases de datos. Se abarca el desarrollo de REST APIs robustas, la implementación de seguridad, validación de datos y las mejores prácticas de Node.js para entornos de producción profesional.",
        period: "Marzo 2024",
        skills: ["NestJS", "Node.js", "Desarrollo Backend", "TypeScript", "Arquitectura Modular"],
      },
      {
        name: "Next.js: Desarrollo de Aplicaciones Modernas y Escalables",
        description: "Esta especialización se enfoca en el uso de Next.js (App Router) para la creación de aplicaciones web de alto rendimiento, optimizando tanto la experiencia del usuario como el posicionamiento en buscadores (SEO).",
        period: "Septiembre 2023",
        skills: ["Next.js", "React.js", "Server-Side Rendering (SSR) y Static Site Generation (SSG)", "Arquitectura de software"],
      },
      {
        name: "React PRO",
        description: "Formación avanzada en React, abordando hooks, gestión de estado, composición de componentes, patrones de diseño y optimización de aplicaciones web modernas.",
        period: "Abril 2023",
        skills: ["React.js", "React Hooks", "Patrones de diseño", "Arquitectura de Componentes"],
      },
      {
        name: "Java",
        description: "Formación técnica enfocada en el dominio del lenguaje Java y los principios de la Programación Orientada a Objetos (POO). El programa abarca la implementación de clases, herencia, polimorfismo e interfaces. Se profundiza en el manejo de estructuras de datos, control de excepciones y lógica de programación estructurada, estableciendo una base firme para el desarrollo de aplicaciones robustas y escalables en entornos backend.",
        skills: ["Java", "Programación Orientada a Objetos (POO)", "Programación lógica", "Spring Boot"],
      },
    ],
  },
  {
    institution: "Udemy",
    title: "Especializaciones Técnicas",
    courses: [
      {
        name: "Domina Kotlin desde Cero: Software con Estándares de Calidad",
        description: "Capacitación técnica en el lenguaje Kotlin enfocada en el desarrollo de software bajo estándares de calidad. El programa abarca desde los fundamentos de la sintaxis y tipos de datos hasta conceptos avanzados de la Programación Orientada a Objetos (POO). Se profundiza en el manejo de colecciones, funciones de orden superior, nulabilidad (null safety) y las mejores prácticas para escribir código limpio, eficiente y mantenible siguiendo estándares profesionales de la industria.",
        period: "Septiembre 2025",
        skills: ["Kotlin", "Desarrollo de Software", "Clean Code", "Programación Orientada a Objetos (POO)"],
      },
    ],
  },
  {
    institution: "Coderhouse",
    title: "Especializaciones Técnicas",
    courses: [
      {
        name: "JavaScript Programmer",
        description: "Formación en programación con JavaScript, incluyendo desarrollo frontend con tecnologías modernas y frameworks.",
        period: "Septiembre 2022 - Diciembre 2022",
        skills: ["AJAX", "Bootstrap", "JavaScript", "CSS3"],
      },
    ],
  },
]

export function EducationSection() {
  return (
    <section id="educacion" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Educación</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 font-serif">
            Formación académica y especializaciones técnicas
          </p>

          <div className="space-y-8 mb-12">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-6 w-6 text-primary mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.institution}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <BookOpen className="h-4 w-4" />
                        <span className="font-medium">{edu.degree}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{edu.period}</span>
                        <Badge variant="outline" className="ml-2">
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-serif mb-4">{edu.description}</p>
                  {edu.skills && (
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Aptitudes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Especializaciones Técnicas</h3>
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-6 w-6 text-accent mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-4">{cert.institution}</CardTitle>
                      <div className="space-y-4">
                        {cert.courses.map((course, courseIndex) => (
                          <div key={courseIndex} className="border-l-2 border-primary pl-4">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{course.name}</h4>
                              {course.period && (
                                <span className="text-xs text-muted-foreground">({course.period})</span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground font-serif mb-2">{course.description}</p>
                            {course.skills && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                {course.skills.map((skill, skillIndex) => (
                                  <Badge key={skillIndex} variant="secondary" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

