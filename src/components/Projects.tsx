import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MP3 Cutter",
    description: "Application web pour découper et éditer des fichiers audio MP3 avec une interface intuitive et moderne.",
    link: "https://mp3cutter-tau.vercel.app/",
    tags: ["React", "Audio API", "Web App"],
  },
  {
    title: "Thioubene Multishop",
    description: "Plateforme e-commerce complète avec gestion de produits, panier d'achat et système de paiement intégré.",
    link: "https://thioubene-multishop.com/",
    tags: ["E-commerce", "React", "Full Stack"],
  },
  {
    title: "E-Poubelle",
    description: "Solution innovante de gestion des déchets avec géolocalisation et système de collecte intelligent.",
    link: "https://e-poubelle1.vercel.app/",
    tags: ["React", "Geolocation", "Green Tech"],
  },
];

const Projects = () => {
  return (
    <section id="projets" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary/10"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visiter le projet
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
