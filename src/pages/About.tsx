import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Développement Front-End",
      description: "Expert en React, TypeScript et technologies web modernes pour créer des interfaces performantes et réactives.",
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Création d'expériences utilisateur intuitives avec un sens aigu du détail et de l'esthétique.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimisation des applications pour une rapidité et une fluidité maximales.",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              À propos
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Développeur passionné par la création d'expériences web exceptionnelles
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-8 mb-12 border-border/50">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Bonjour ! Je suis un développeur web front-end passionné par la création d'interfaces 
              modernes et performantes. Mon expertise se concentre sur React et l'écosystème JavaScript 
              moderne.
            </p>
            <p>
              J'aime transformer des idées complexes en expériences utilisateur simples et élégantes. 
              Chaque projet est une opportunité d'apprendre et de repousser les limites du développement web.
            </p>
            <p>
              Mon approche combine rigueur technique et créativité pour livrer des solutions qui 
              dépassent les attentes, tout en maintenant un code propre et maintenable.
            </p>
          </div>
        </Card>

        {/* Skills */}
        <div className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground">Compétences</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <Card key={skill.title} className="p-6 border-border/50 hover:border-primary/50 transition-all">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technologies */}
        <Card className="p-8 mb-12 border-border/50">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Git", "Node.js", "REST APIs", "Responsive Design"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Intéressé par une collaboration ?</h2>
          <p className="text-muted-foreground">
            N'hésitez pas à me contacter pour discuter de votre projet
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Me contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
