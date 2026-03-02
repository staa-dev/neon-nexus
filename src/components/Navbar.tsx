import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "ARENA", href: "#hero" },
  { label: "STATS", href: "#about" },
  { label: "MISSIONS", href: "#projects" },
  { label: "ABILITIES", href: "#abilities" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="font-heading font-bold text-lg text-primary tracking-widest">
          STAA<span className="text-foreground">DEV</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs text-foreground px-3 py-2 hover:bg-primary hover:text-primary-foreground transition-colors tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t-2 border-foreground bg-background">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-mono text-sm text-foreground px-6 py-3 border-b-2 border-muted hover:bg-primary hover:text-primary-foreground transition-colors tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
