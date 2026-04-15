import { Code2, Rocket, Palette, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Front-End",
    description: "Expertise React, TypeScript et Tailwind CSS pour des interfaces ultra-fluides.",
  },
  {
    icon: Rocket,
    title: "Back-End",
    description: "Développement robuste avec PHP (Laravel) et Java (Spring Boot).",
  },
  {
    icon: Palette,
    title: "Architecture",
    description: "Conception de bases de données et APIs RESTful performantes.",
  },
  {
    icon: Smartphone,
    title: "Mobile & PWA",
    description: "Applications progressives et designs centrés sur l'expérience mobile.",
  },
];

const stack = [
  "React 18", "TypeScript", "Tailwind CSS",
  "Spring Boot", "Laravel", "PHP",
  "PostgreSQL", "MySQL", "REST APIs", "Git",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Patterned break above */}
      <div className="patterned-break mb-20" />

      {/* Section header */}
      <div className="flex items-baseline gap-4 mb-16 overflow-hidden">
        <span className="text-eyebrow text-[#944a00] whitespace-nowrap">Expertise</span>
        <div className="section-rule" />
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter shrink-0 text-[#1a1c1c]">
          Compétences
        </h2>
      </div>

      {/* Skills grid — no borders, tonal separation via bg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-20">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={i}
              className="group space-y-4"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Icon tray */}
              <div className="w-12 h-12 rounded-lg bg-[#ffdad5] flex items-center justify-center group-hover:bg-[#ad2b1f] transition-colors duration-300">
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#ad2b1f] group-hover:text-white transition-colors duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="font-headline text-xl font-bold text-[#1a1c1c] group-hover:text-[#ad2b1f] transition-colors">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-[#594238] leading-relaxed">
                {skill.description}
              </p>

              {/* Animated underline */}
              <div className="w-0 group-hover:w-8 h-0.5 bg-[#944a00] transition-all duration-500 ease-out" />
            </div>
          );
        })}
      </div>

      {/* Stack tags — chip style, warm accent */}
      <div className="pt-10 border-t border-[#e0c0b2]/40">
        <p className="text-eyebrow text-[0.6rem] text-[#594238] mb-5">Stack maîtrisée</p>
        <div className="flex flex-wrap gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-[#f4f3f2] border border-[#e0c0b2]/50 text-eyebrow text-[0.65rem] text-[#594238] hover:text-[#ad2b1f] hover:border-[#ad2b1f]/40 hover:bg-[#ffdad5] transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Patterned break below */}
      <div className="patterned-break mt-20" />

    </section>
  );
};

export default Skills;