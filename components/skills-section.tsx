import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TechIcon } from "./tech-icons"

const skillCategories = [
  {
    title: "Lenguajes",
    skills: ["JavaScript", "TypeScript", "PHP", "Java", "SQL", "C++"],
  },
  {
    title: "Frameworks",
    skills: ["Laravel", "React.js", "Next.js", "NestJS", "Node.js", "Spring Boot"],
  },
  {
    title: "Herramientas",
    skills: ["Docker", "Git", "GitHub", "Linux", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Bases de Datos",
    skills: ["MySQL", "MariaDB", "PostgreSQL"],
  },
]

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Habilidades Técnicas</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 font-serif">
            Tecnologías y herramientas que domino
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default flex items-center gap-2"
                      >
                        <TechIcon tech={skill} />
                        {skill}
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
