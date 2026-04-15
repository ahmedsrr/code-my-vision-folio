import { Code2, Palette, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Code2,   title: "Vision Technique",   description: "Maîtrise de l'écosystème React & TypeScript pour des architectures robustes." },
  { icon: Palette, title: "Expertise Back-End",  description: "Construction de systèmes scalables avec PHP/Laravel et Spring Boot." },
  { icon: Zap,     title: "Optimisation Pure",   description: "Chaque milliseconde compte : performance et SEO au cœur du code." },
];

const stack = ["React 18", "TypeScript", "Spring Boot", "Laravel", "PHP", "Tailwind CSS", "PostgreSQL", "MySQL", "REST APIs"];

const About = () => {
  return (
    <div className="min-h-screen bg-[#faf9f8] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial bio block — "Less Interface, More Impact" */}
        <div className="flex flex-col md:flex-row items-start gap-16 mb-24 pb-24 border-b border-[#e0c0b2]/30">
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#1a1c1c] leading-[0.9]">
              Transformer les idées
              <br />
              <span className="text-[#ad2b1f] italic">en réalités</span>
              <br />
              numériques.
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6 pt-2">
            <p className="font-body text-xl text-[#1a1c1c] leading-relaxed">
              Je crois au pouvoir du design invisible. En supprimant le superflu, je laisse
              le contenu parler avec autorité. Mon travail est un mariage entre précision
              géométrique et interaction fluide.
            </p>
            <p className="font-body text-[#594238] leading-relaxed">
              Basé au Sénégal, je suis un développeur web full stack spécialisé dans la
              création d'écosystèmes numériques complets et haut de gamme. Je ne me contente
              pas de coder — je conçois des expériences mémorables.
            </p>

            {/* Warm accent rule */}
            <div className="h-2 w-24 bg-[#944a00] rounded-sm mt-2" />
          </div>
        </div>

        {/* ── Highlights — no borders, tonal via bg ── */}
        <div className="mb-24">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-eyebrow text-[#944a00] whitespace-nowrap">Expertise</span>
            <div className="section-rule" />
            <h2 className="font-headline text-3xl font-bold tracking-tighter shrink-0 text-[#1a1c1c]">
              Ce que je fais
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-[#f4f3f2] rounded-xl p-8 hover:bg-[#e9e8e7] transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#ffdad5] flex items-center justify-center mb-6 group-hover:bg-[#ad2b1f] transition-colors duration-300">
                    <Icon size={20} strokeWidth={1.5} className="text-[#ad2b1f] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-[#1a1c1c] mb-3 group-hover:text-[#ad2b1f] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[#594238] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Patterned break */}
        <div className="patterned-break mb-24" />

        {/* ── Stack ── */}
        <div className="mb-24">
          <div className="flex items-baseline gap-4 mb-10">
            <h2 className="font-headline text-3xl font-bold tracking-tighter shrink-0 text-[#1a1c1c]">
              La Stack
            </h2>
            <div className="section-rule" />
          </div>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full bg-[#f4f3f2] border border-[#e0c0b2]/50 font-label text-[0.65rem] tracking-widest uppercase text-[#594238] hover:text-[#ad2b1f] hover:border-[#ad2b1f]/40 hover:bg-[#ffdad5] transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA — primary bg block ── */}
        <div className="relative rounded-xl overflow-hidden bg-[#ad2b1f] p-12 md:p-20 text-center">
          <div className="relative z-10 space-y-6">
            <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
              Prêt à donner
              <br />
              <span className="italic opacity-80">vie</span> à votre projet ?
            </h2>
            <p className="font-body text-white/75 max-w-md mx-auto leading-relaxed">
              Chaque grande aventure commence par un simple échange.
              Discutons de la manière dont nous pouvons élever votre présence en ligne.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-white text-[#ad2b1f] px-10 py-5 rounded-xl font-label font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl shadow-black/20"
            >
              Me contacter
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;