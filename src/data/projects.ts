export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  tags: string[];
  images: string[];
  year: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "mp3-cutter",
    title: "MP3 Cutter",
    subtitle: "Éditeur audio en ligne",
    description: "Application web pour découper et éditer des fichiers audio MP3 avec une interface intuitive et moderne.",
    fullDescription: "MP3 Cutter est une application web complète permettant de découper, éditer et manipuler des fichiers audio MP3 directement dans le navigateur. L'interface moderne et intuitive facilite l'édition audio pour tous les utilisateurs, qu'ils soient débutants ou professionnels.",
    tags: ["React", "Audio API", "Web App"],
    images: ["/src/assets/project-mp3-cutter.jpg"],
    year: "2024",
    link: "https://mp3cutter-tau.vercel.app/",
  },
  {
    id: "thioubene-multishop",
    title: "Thioubene Multishop",
    subtitle: "Plateforme e-commerce",
    description: "Plateforme e-commerce complète avec gestion de produits, panier d'achat et système de paiement intégré.",
    fullDescription: "Thioubene Multishop est une solution e-commerce complète offrant une expérience d'achat fluide et moderne. La plateforme comprend une gestion avancée des produits, un système de panier intelligent, et un processus de paiement sécurisé et simplifié.",
    tags: ["E-commerce", "React", "Full Stack"],
    images: ["/src/assets/project-thioubene-multishop.jpg"],
    year: "2024",
    link: "https://thioubene-multishop.com/",
  },
  {
    id: "e-poubelle",
    title: "E-Poubelle",
    subtitle: "Gestion intelligente des déchets",
    description: "Solution innovante de gestion des déchets avec géolocalisation et système de collecte intelligent.",
    fullDescription: "E-Poubelle révolutionne la gestion des déchets grâce à la technologie. Cette application combine géolocalisation, intelligence artificielle et système de collecte pour optimiser le recyclage et la gestion des déchets urbains de manière écologique et efficace.",
    tags: ["React", "Geolocation", "Green Tech"],
    images: ["/src/assets/project-e-poubelle.jpg"],
    year: "2024",
    link: "https://e-poubelle1.vercel.app/",
  },
];
