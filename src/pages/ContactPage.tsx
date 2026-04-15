import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-4 space-y-3 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <p className="text-eyebrow text-[0.65rem] text-[hsl(var(--primary))] mt-8">Parlons</p>
          <h1 className="text-display-lg text-[hsl(var(--on-surface))]">
            TRAVAILLONS <span className="gradient-primary">ENSEMBLE</span>
          </h1>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;