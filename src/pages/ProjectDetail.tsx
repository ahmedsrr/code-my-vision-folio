import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Projet non trouvé</h1>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux projets
          </Link>
        </Button>

        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground">{project.subtitle}</p>
              </div>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-secondary rounded-full text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <Card className="overflow-hidden border-border/50">
            <div className="aspect-video bg-secondary/50 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <p className="text-muted-foreground">Image du projet</p>
              </div>
            </div>
          </Card>

          {/* Description */}
          <Card className="p-8 border-border/50">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">À propos du projet</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-secondary/50 rounded-md text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="flex gap-4">
            <Button asChild size="lg" className="flex-1">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visiter le site
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
