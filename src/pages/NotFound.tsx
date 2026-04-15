import { Link } from "react-router-dom";
import { useLocation, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(203 100% 74% / 0.05) 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 text-center space-y-8">
        <p className="text-eyebrow text-[0.65rem] text-[hsl(var(--primary))]">Erreur 404</p>
        <h1 className="text-display-lg gradient-primary">PAGE<br />INTROUVABLE</h1>
        <p className="text-sm text-[hsl(var(--on-surface-variant))] max-w-xs mx-auto leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[var(--radius)] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-eyebrow text-[0.7rem] font-bold hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={13} />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;