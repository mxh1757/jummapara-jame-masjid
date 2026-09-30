import React, { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LINKS = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.madrasa"), href: "#madrasa" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.restoration"), href: "#restoration" },
    { label: t("nav.ramadan"), href: "#ramadan" },
    { label: t("nav.donate"), href: "#donate" },
    { label: t("nav.committee"), href: "#committee" },
    { label: t("nav.volunteers"), href: "#volunteers" },
    { label: t("nav.visit"), href: "#visit" },
  ];

  const LangToggle = ({ className = "" }) => (
    <div className={`inline-flex items-center rounded-full border border-border bg-background/70 p-0.5 text-xs font-medium ${className}`}>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-full transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("bn")}
        className={`px-2.5 py-1 rounded-full transition-colors ${lang === "bn" ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"}`}
        aria-pressed={lang === "bn"}
      >
        বাংলা
      </button>
    </div>
  );

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
            <span className="block font-heading text-lg sm:text-xl font-semibold text-foreground">Jummapara Jame Masjid</span>
            <span className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("nav.brandSub")}</span>
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[13px] font-medium text-foreground/70 hover:text-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <LangToggle />
          <a
            href="#donate"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
          >
            <Heart className="w-4 h-4" />
            {t("nav.supportUs")}
          </a>
        </div>

        <div className="xl:hidden flex items-center gap-2">
          <LangToggle />
          <button
            className="p-2 -mr-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("nav.toggleMenu")}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="xl:hidden bg-background border-b border-border">
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
              {t("nav.supportUs")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}