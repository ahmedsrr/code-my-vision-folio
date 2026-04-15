import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="mb-24 flex flex-col md:flex-row items-end gap-8 md:gap-12 px-6 md:px-12 pt-12 md:pt-20 max-w-7xl mx-auto">

      {/* Left — main headline (2/3 width) */}
      <div className="w-full md:w-2/3 animate-fade-up">
        {/* Eyebrow */}
        <span className="text-eyebrow text-[#944a00] font-semibold mb-6 block">
          DÉVELOPPEUR &amp; ARCHITECTE WEB
        </span>

        {/* Hero headline — editorial extreme scale */}
        <h1 className="font-headline text-display-xl text-[#1a1c1c] mb-6">
          CRÉER DES <br />
          <span className="text-[#ad2b1f] italic">EXPÉRIENCES</span> <br />
          NUMÉRIQUES.
        </h1>

        {/* Warm accent rule */}
        <div className="h-2 w-32 bg-[#944a00] mb-8 rounded-sm" />

        {/* Subtext */}
        <p className="font-body text-lg text-[#594238] max-w-md leading-relaxed">
          Je transforme vos visions les plus complexes en interfaces haut de gamme —
          fluides, rapides, mémorables.
        </p>
      </div>

      {/* Right — portrait / stat block (1/3 width) */}
      <div className="w-full md:w-1/3 flex flex-col gap-8 animate-fade-up" style={{ animationDelay: "200ms" }}>

        {/* Stats editorial block */}
        <div className="bg-[#f4f3f2] rounded-xl p-8 space-y-6">
          {[
            { value: "4+", label: "Projets livrés" },
            { value: "2+", label: "Années d'expérience" },
            { value: "100%", label: "Full Stack" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-headline text-4xl font-black text-[#ad2b1f]">{stat.value}</div>
              <div className="text-eyebrow text-[#594238]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3">
          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-primary font-label text-sm uppercase tracking-widest font-bold"
          >
            Voir mes projets
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-8 py-4 font-headline font-bold text-[#1a1c1c] border-b-2 border-[#ad2b1f] hover:opacity-60 transition-opacity"
          >
            Ma philosophie
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;