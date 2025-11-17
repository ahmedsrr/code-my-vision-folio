import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 px-6 border-t border-border/50 text-center text-muted-foreground text-sm">
        <p>© 2024 Portfolio. Développé avec passion.</p>
      </footer>
    </div>
  );
};

export default Index;
