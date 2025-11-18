import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import mp3CutterImg from "@/assets/project-mp3-cutter.jpg";
import thioubeneImg from "@/assets/project-thioubene-multishop.jpg";
import ePoubelleImg from "@/assets/project-e-poubelle.jpg";

const Projects = () => {
  const projectImages: Record<string, string> = {
    "mp3-cutter": mp3CutterImg,
    "thioubene-multishop": thioubeneImg,
    "e-poubelle": ePoubelleImg
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une collection de projets web qui reflètent ma passion pour le développement front-end
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group bg-background border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                <img 
                  src={projectImages[project.id]} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-secondary rounded-md text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button asChild variant="ghost" size="sm" className="flex-1">
                    <Link to={`/projects/${project.id}`}>
                      Voir détails
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
