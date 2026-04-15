import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#faf9f8] text-[#1a1c1c]">
      <Navigation />

      <main className="pb-32 md:pb-0">{children}</main>

      {/* ── Footer ── */}
      <footer className="pb-32 md:pb-16 pt-16 px-6 md:px-12 border-t border-[#e0c0b2]/30 bg-[#faf9f8] mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Brand + tagline */}
          <div className="space-y-2">
            <span className="font-headline text-xl font-bold uppercase tracking-tighter text-[#ad2b1f]">
              SARR.DEV
            </span>
            <p className="font-label text-[11px] font-medium tracking-[0.05em] uppercase text-[#594238]">
              © {new Date().getFullYear()} — Propulsé par la créativité et le code
            </p>
          </div>

          {/* Tag */}
          <p className="font-headline text-sm tracking-widest text-[#8c7166] uppercase hidden md:block">
            Tradition technique · Esprit moderne
          </p>

          {/* Nav links */}
          <div className="flex gap-8">
            {[
              { label: "Projets",  to: "/projects" },
              { label: "À propos", to: "/about" },
              { label: "Contact",  to: "/contact" },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="font-label text-[11px] font-medium tracking-[0.05em] uppercase text-[#594238] hover:text-[#ad2b1f] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;