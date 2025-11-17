import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Développement Front-End",
    description: "React, TypeScript, JavaScript, HTML5, CSS3",
  },
  {
    icon: Palette,
    title: "Design & UI/UX",
    description: "Tailwind CSS, Responsive Design, Animations",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimisation, SEO, Accessibilité",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Applications web responsive et PWA",
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies et expertises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="group bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] p-6 text-center"
              >
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
