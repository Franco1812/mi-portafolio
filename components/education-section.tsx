import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Calendar } from "lucide-react"

const education = [
  {
    institution: "Universidad Tecnológica Nacional (UTN)",
    degree: "Tecnicatura Universitaria en Programación",
    period: "2025 – 2027",
    status: "En curso",
    description: "Formación en algoritmos, estructuras de datos, análisis de sistemas, POO y C++.",
  },
]

const certifications = [
  {
    institution: "DevTalles",
    title: "Especializaciones Técnicas",
    courses: [
      {
        name: "Nest: Desarrollo backend escalable con Node (2024)",
        description: "Arquitectura modular y REST APIs",
      },
      {
        name: "React PRO (2023)",
        description: "Hooks avanzados, gestión de estado y patrones de diseño",
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
                  <p className="text-muted-foreground font-serif">{edu.description}</p>
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
                            <h4 className="font-semibold mb-1">{course.name}</h4>
                            <p className="text-sm text-muted-foreground font-serif">{course.description}</p>
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

