import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#faf9f8] flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <h1 className="font-headline text-4xl font-bold text-[#1a1c1c]">Projet non trouvé</h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl btn-primary font-label text-xs uppercase tracking-widest font-bold"
          >
            <ArrowLeft size={13} />
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f8] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* ── Back link ── */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-[#594238] hover:text-[#ad2b1f] transition-colors mb-14"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Retour aux projets
        </Link>

        {/* ── Header ── */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#ffdad5] font-label text-[0.6rem] uppercase tracking-widest text-[#ad2b1f] font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="font-headline text-display-lg text-[#1a1c1c]">{project.title}</h1>
              <p className="text-eyebrow text-[#594238] mt-2">{project.subtitle}</p>
            </div>
            <span className="text-eyebrow text-[#594238] flex-shrink-0 pt-3">{project.year}</span>
          </div>
          {/* Warm accent rule */}
          <div className="h-1.5 w-24 bg-[#944a00] rounded-sm mt-6" />
        </div>

        {/* ── Hero image — editorial bleed feel ── */}
        <div className="rounded-xl overflow-hidden mb-12 aspect-video relative bg-[#e9e8e7]">
          <img
            src={projectImages[project.id]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── Content grid ── */}
        <div className="grid md:grid-cols-[1fr_260px] gap-8">

          {/* Description tray */}
          <div className="bg-[#f4f3f2] rounded-xl p-8 md:p-10 space-y-6">
            <h2 className="font-headline text-xl font-bold text-[#1a1c1c] tracking-tight">
              À propos du projet
            </h2>
            <div className="h-0.5 w-10 bg-[#ad2b1f]" />
            <p className="font-body text-sm text-[#594238] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Tech stack */}
            <div className="bg-[#f4f3f2] rounded-xl p-6 space-y-4">
              <h3 className="text-eyebrow text-[0.6rem] text-[#594238]">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-[#e9e8e7] font-label text-[0.6rem] uppercase tracking-widest text-[#594238] hover:text-[#ad2b1f] hover:bg-[#ffdad5] transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visit CTA */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full py-5 rounded-xl btn-primary font-label text-xs uppercase tracking-widest font-bold"
            >
              Visiter le site
              <ExternalLink size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;