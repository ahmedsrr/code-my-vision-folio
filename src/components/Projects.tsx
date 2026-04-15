import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "mp3-cutter",
    num: "01",
    category: "WEB APP",
    title: "MP3 Cutter",
    description: "Application web pour découper et éditer des fichiers audio MP3 avec une interface intuitive et moderne.",
    link: "https://mp3cutter-tau.vercel.app/",
    tags: ["React", "Audio API"],
    size: "large",
  },
  {
    id: "thioubene",
    num: "02",
    category: "E-COMMERCE",
    title: "Thioubene Multishop",
    description: "Plateforme e-commerce complète avec gestion de produits, panier et système de paiement intégré.",
    link: "https://thioubene-multishop.com/",
    tags: ["React", "Full Stack"],
    size: "small",
  },
  {
    id: "e-poubelle",
    num: "03",
    category: "GREEN TECH",
    title: "E-Poubelle",
    description: "Solution innovante de gestion des déchets avec géolocalisation et collecte intelligente.",
    link: "https://e-poubelle1.vercel.app/",
    tags: ["React", "Geolocation"],
    size: "small",
  },
];

const Projects = () => {
  return (
    <section id="projets" className="mb-32 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Section header — editorial style */}
      <div className="flex items-baseline gap-4 mb-16 overflow-hidden">
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter shrink-0 text-[#1a1c1c]">
          Mes Projets
        </h2>
        <div className="section-rule" />
        <span className="text-eyebrow text-[#944a00] whitespace-nowrap">
          Réalisations
        </span>
      </div>

      {/* Grille symétrique avec boîtes égales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={project.id} className="group">
            {/* Image avec aspect ratio fixe */}
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#e9e8e7] mb-6 relative">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e9e8e7] to-[#dadad9] group-hover:scale-105 transition-transform duration-700">
                <div className="text-center space-y-3 p-8">
                  <div className="text-6xl font-headline font-black text-[#ad2b1f] opacity-20">
                    {project.num}
                  </div>
                  <div className="text-xl font-headline font-bold text-[#1a1c1c]">
                    {project.title}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-eyebrow text-[10px] text-[#ad2b1f] tracking-[0.2em] font-bold block">
                {project.num} / {project.category}
              </span>
              <h3 className="font-headline text-2xl font-bold tracking-tight text-[#1a1c1c] group-hover:text-[#ad2b1f] transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-sm text-[#594238] leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 text-sm font-bold text-[#ad2b1f] hover:gap-3 transition-all"
              >
                Visiter <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
