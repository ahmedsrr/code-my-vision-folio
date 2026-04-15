import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, Home, Grid2X2, User, Send } from "lucide-react";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "Projets", to: "/projects" },
  { label: "À propos", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const mobileNavItems = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Grid2X2, label: "Projets", to: "/projects" },
  { icon: User, label: "À propos", to: "/about" },
  { icon: Send, label: "Contact", to: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ── Top App Bar ── */}
      <header
        className={`sticky top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-300 ${
          isScrolled ? "glass shadow-[0_2px_16px_rgba(26,28,28,.06)]" : "bg-[#faf9f8]"
        }`}
      >
        {/* Left: hamburger + brand */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-[#ad2b1f] hover:opacity-70 transition-opacity active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
          <Link
            to="/"
            className="font-headline text-2xl font-bold uppercase tracking-tighter text-[#ad2b1f] hover:opacity-80 transition-opacity"
          >
            SARR.DEV
          </Link>
        </div>

        {/* Center: desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`font-label text-[12px] uppercase tracking-widest transition-opacity hover:opacity-70 ${
                  isActive
                    ? "text-[#ad2b1f] font-bold"
                    : "text-[#594238]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: empty or other elements */}
        <div className="hidden md:block w-32" />

        {/* Mobile: mail icon replacement */}
        <Link
          to="/contact"
          className="md:hidden text-[#ad2b1f] hover:opacity-70 transition-opacity"
          aria-label="Contact"
        >
          <Send size={20} strokeWidth={1.5} />
        </Link>
      </header>

      {/* Mobile dropdown overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] z-40 bg-[#faf9f8]/95 backdrop-blur-md p-6 space-y-2 animate-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`block w-full px-5 py-4 font-headline text-3xl font-bold uppercase tracking-tighter transition-colors ${
                  isActive
                    ? "text-[#ad2b1f]"
                    : "text-[#1a1c1c] hover:text-[#ad2b1f]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}

      {/* ── Mobile Bottom Navigation ── */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pt-3 pb-7 bg-[#faf9f8]/85 backdrop-blur-md rounded-t-3xl border-t border-[#e0c0b2]/30 shadow-[0_-8px_32px_rgba(26,28,28,.07)]">
        {mobileNavItems.map(({ icon: Icon, label, to }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center gap-0.5 transition-all active:translate-y-0.5 ${
                isActive
                  ? "text-[#ad2b1f] scale-110"
                  : "text-[#594238] hover:text-[#944a00]"
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2 : 1.5} />
              <span className="font-label text-[10px] uppercase tracking-widest font-bold">
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;