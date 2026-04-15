import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import mp3CutterImg from "@/assets/project-mp3-cutter.jpg";
import thioubeneImg from "@/assets/project-thioubene-multishop.jpg";
import ePoubelleImg from "@/assets/project-e-poubelle.jpg";
import capture3Img from "@/assets/Capture3.PNG";

const projectImages: Record<string, string> = {
  "mp3-cutter": mp3CutterImg,
  "thioubene-multishop": thioubeneImg,
  "vitrine-blue": capture3Img,
  "e-poubelle": ePoubelleImg,
};

const nums = ["01", "02", "03", "04"];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9f8] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <div className="mb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="text-eyebrow text-[#944a00] mb-4 block">Portfolio</span>
          <h1 className="font-headline text-display-xl text-[#1a1c1c]">
            Mes <span className="text-[#ad2b1f] italic">projets</span>
          </h1>
          <p className="font-body text-lg text-[#594238] max-w-lg leading-relaxed mt-6">
            Une exploration de mes réalisations les plus marquantes, alliant
            innovation technique et excellence visuelle.
          </p>
        </div>

        {/* Grille symétrique avec boîtes égales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={project.id} className="group">
              {/* Image avec aspect ratio fixe */}
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#e9e8e7] mb-6 relative">
                <img
                  src={projectImages[project.id]}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Badge d'année */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#faf9f8]/85 backdrop-blur-sm rounded-full">
                  <span className="text-eyebrow text-[0.55rem] text-[#1a1c1c]">{project.year}</span>
                </div>
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-[#1a1c1c]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Link
                    to={`/projects/${project.id}`}
                    className="px-7 py-3 bg-white text-[#ad2b1f] font-label text-xs uppercase tracking-widest font-bold rounded-xl translate-y-3 group-hover:translate-y-0 transition-transform duration-400"
                  >
                    Voir le projet
                  </Link>
                </div>
              </div>

              {/* Contenu textuel */}
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
                <div className="flex gap-4 mt-2">
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-eyebrow text-[0.65rem] text-[#ad2b1f] hover:underline font-bold"
                  >
                    Détails
                  </Link>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-eyebrow text-[0.65rem] text-[#594238] hover:text-[#ad2b1f] font-bold"
                  >
                    Visiter le site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div className="mt-32 py-20 bg-[#ad2b1f] rounded-xl px-10 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-8 leading-none">
            Un projet en tête ?<br />
            <span className="italic opacity-80">Travaillons ensemble.</span>
          </h2>
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
  );
};

export default ProjectsPage;