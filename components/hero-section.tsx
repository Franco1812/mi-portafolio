"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("sobre-mi")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
              <img src="/PerfilPhoto.jpeg" alt="Foto de perfil" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 pb-2.5 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hola, soy Franco!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif">
              Software Developer especializado en el diseño e implementación de aplicaciones web escalables y de alto rendimiento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Conoce Más
            </Button>
            <Button
            onClick={() => {
              window.open('/cv_Franco_Pagano.pdf', '_blank');
            }}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
            >
              Descargar CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Franco1812"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-pagano66/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:franco.pagano66@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground hover:text-primary" />
          </button>
        </div>
      </div>
    </section>
  )
}
