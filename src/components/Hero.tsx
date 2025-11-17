import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Animated background circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="space-y-6 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Développeur Web
            </span>
            <br />
            <span className="text-foreground">Front-End</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Je suis un développeur web front-end curieux et motivé. Je suis prêt à tourner toutes vos idées en code.
          </p>
          
          <div className="flex gap-4 justify-center pt-8">
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              Voir mes projets
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
