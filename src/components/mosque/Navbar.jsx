import React, { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Madrasa", href: "#madrasa" },
  { label: "Restoration", href: "#restoration" },
  { label: "Donate", href: "#donate" },
  { label: "Committee", href: "#committee" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-9 h-9">
              <path d="M16 4 L25 11 V27 H7 V11 Z" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-primary group-hover:text-accent transition-colors" />
              <path d="M16 4 V27" stroke="currentColor" strokeWidth="0.9" className="text-primary/50" />
              <circle cx="16" cy="10" r="2.2" className="fill-accent" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-lg sm:text-xl font-semibold text-foreground">Jummapara Central Mosque</span>
            <span className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">Nilphamari · Bangladesh</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#donate"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
          >
            <Heart className="w-4 h-4" />
            Support Us
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Heart className="w-4 h-4" />
              Support Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}