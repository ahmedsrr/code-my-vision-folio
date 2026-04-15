import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import mp3CutterImg from "@/assets/project-mp3-cutter.jpg";
import thioubeneImg from "@/assets/project-thioubene-multishop.jpg";
import ePoubelleImg from "@/assets/project-e-poubelle.jpg";
import capture3Img from "@/assets/Capture3.PNG";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const projectImages: Record<string, string> = {
  "mp3-cutter": mp3CutterImg,
  "thioubene-multishop": thioubeneImg,
  "vitrine-blue": capture3Img,
  "e-poubelle": ePoubelleImg,
};

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#faf9f8]">

      {/* ── Hero ── */}
      <Hero />

      {/* ── Bio editorial block ── */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 bg-[#f4f3f2] rounded-xl p-10 md:p-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 text-[#1a1c1c]">
              Moins d'interface,<br />
              <span className="text-[#ad2b1f] italic">Plus d'impact.</span>
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className="font-body text-lg text-[#1a1c1c] leading-relaxed">
              Je crois au pouvoir du design invisible. En supprimant le superflu,
              je laisse le contenu parler avec autorité.
            </p>
            <p className="font-body text-[#594238] leading-relaxed">
              Basé au Sénégal, je me spécialise dans la création d'interfaces modernes
              et performantes — à l'intersection du code et de l'art.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 font-headline font-bold text-[#1a1c1c] border-b-2 border-[#ad2b1f] pb-1 w-fit hover:opacity-60 transition-opacity"
            >
              En savoir plus
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <Skills />

      {/* ── Featured projects ── */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-eyebrow text-[#944a00] mb-3 block">Portfolio</span>
            <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-[#1a1c1c]">
              Projets récents
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-[#594238] hover:text-[#ad2b1f] transition-colors font-bold"
          >
            Voir tout
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grille symétrique avec boîtes égales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <div key={project.id} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#e9e8e7] mb-6 relative">
                <img
                  src={projectImages[project.id]}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#faf9f8]/80 backdrop-blur-sm rounded-full">
                  <span className="text-eyebrow text-[0.55rem] text-[#1a1c1c]">{project.year}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-eyebrow text-[10px] text-[#ad2b1f] tracking-[0.2em] font-bold block">
                  0{i + 1} / {project.tags[0]?.toUpperCase()}
                </span>
                <Link
                  to={`/projects/${project.id}`}
                  className="font-headline text-2xl font-bold tracking-tight text-[#1a1c1c] group-hover:text-[#ad2b1f] transition-colors"
                >
                  {project.title}
                </Link>
                <p className="font-body text-sm text-[#594238] leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Primary CTA block ── */}
      <section className="py-24 md:py-32 px-6 md:px-24 bg-[#ad2b1f] text-center mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter text-white mb-10 uppercase leading-none">
            Construisons<br />votre futur<br />
            <span className="italic opacity-80">ensemble.</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 bg-white text-[#ad2b1f] px-10 py-5 font-label font-bold uppercase tracking-widest text-sm rounded-xl hover:scale-105 transition-transform shadow-xl shadow-black/20"
          >
            Démarrer une conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ── Contact ── */}
      <Contact />
    </div>
  );
};

export default Home;