import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { icon: Mail,     label: "Email",    value: "mohamedsarr97@gmail.com",  href: "mailto:mohamedsarr97@gmail.com" },
    { icon: Github,   label: "GitHub",   value: "github.com/ahmedsrr",      href: "https://github.com/ahmedsrr" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/profil",    href: "#" },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Section header */}
      <div className="flex items-baseline gap-4 mb-16 overflow-hidden">
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter shrink-0 text-[#1a1c1c]">
          Contact
        </h2>
        <div className="section-rule" />
        <span className="text-eyebrow text-[#944a00] whitespace-nowrap">
          Travaillons ensemble
        </span>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">

        {/* ── Form ── */}
        <div className="bg-[#f4f3f2] rounded-xl p-8 md:p-12">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-[#ffdad5] flex items-center justify-center">
                <ArrowRight size={22} className="text-[#ad2b1f]" strokeWidth={1.5} />
              </div>
              <p className="font-headline text-xl font-bold text-[#1a1c1c]">Message envoyé !</p>
              <p className="font-body text-sm text-[#594238]">Je vous répondrai très rapidement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { id: "name",  label: "Nom",   type: "text",  placeholder: "Votre nom" },
                { id: "email", label: "Email", type: "email", placeholder: "votre@email.com" },
              ].map((field) => (
                <div key={field.id} className="space-y-2">
                  <label
                    htmlFor={field.id}
                    className="block text-eyebrow text-[0.6rem] text-[#594238]"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as "name" | "email"]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    required
                    className="w-full bg-transparent text-sm text-[#1a1c1c] placeholder:text-[#594238]/40 border-0 border-b-2 border-[#e0c0b2]/50 focus:border-[#ad2b1f] outline-none px-0 py-3 transition-colors rounded-none font-body"
                  />
                </div>
              ))}

              <div className="space-y-2">
                <label htmlFor="message" className="block text-eyebrow text-[0.6rem] text-[#594238]">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Décrivez votre projet…"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-transparent text-sm text-[#1a1c1c] placeholder:text-[#594238]/40 border-0 border-b-2 border-[#e0c0b2]/50 focus:border-[#ad2b1f] outline-none px-0 py-3 transition-colors rounded-none resize-none font-body"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-primary font-label text-xs uppercase tracking-widest font-bold w-full justify-center"
              >
                Envoyer le message
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>

        {/* ── Socials sidebar ── */}
        <div className="flex flex-col gap-6">
          <p className="font-body text-[#594238] leading-relaxed">
            Chaque grande aventure commence par un simple échange.
            Discutons de la manière dont nous pouvons élever votre présence en ligne.
          </p>

          <div className="space-y-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 bg-[#f4f3f2] rounded-xl hover:bg-[#e9e8e7] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ffdad5] flex items-center justify-center group-hover:bg-[#ad2b1f] transition-colors flex-shrink-0">
                    <Icon size={16} strokeWidth={1.5} className="text-[#ad2b1f] group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-eyebrow text-[0.6rem] text-[#594238] mb-0.5">{s.label}</p>
                    <p className="font-body text-xs text-[#1a1c1c] font-medium truncate group-hover:text-[#ad2b1f] transition-colors">
                      {s.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;