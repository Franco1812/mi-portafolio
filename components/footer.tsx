import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
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

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground flex items-center justify-center gap-2 font-serif">
              Hecho con <Heart className="h-4 w-4 text-red-500 fill-current" /> por Franco Pagano.
            </p>
            <p className="text-sm text-muted-foreground mt-2">© 2025 Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
