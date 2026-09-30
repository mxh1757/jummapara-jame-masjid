import React from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useLanguage } from "@/lib/i18n";

const HERO_IMG = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/71f39f2cc_Media.jpeg";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt={t("hero.imgAlt")}
          fittingType="fill"
          focalPointY={0.45}
          quality={95}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/45 via-transparent to-transparent" />
      </div>

      {/* Unfinished arch motif */}
      <svg
        className="absolute right-6 sm:right-16 top-24 sm:top-32 w-40 sm:w-64 h-64 sm:h-96 text-accent/30 pointer-events-none"
        viewBox="0 0 200 300"
        fill="none"
        aria-hidden
      >
        <path
          d="M100 20 C40 20 20 80 20 140 L20 300 M100 20 C160 20 180 80 180 140 L180 300"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-28 pt-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-accent font-medium mb-6">
            <span className="h-px w-8 bg-accent" />
            {t("hero.bismillah")}
          </p>
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-medium leading-[0.95] text-foreground text-balance">
            {t("hero.title1")}
            <br />
            <span className="italic text-primary">{t("hero.title2")}</span> {t("hero.title3")}
          </h1>
          <p className="mt-7 max-w-xl text-lg sm:text-xl text-foreground/75 leading-relaxed font-light">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all"
            >
              {t("hero.ourStory")}
              <ArrowDown className="w-5 h-5" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 px-7 py-4 text-base font-medium text-foreground hover:bg-foreground/5 transition-all"
            >
              <MapPin className="w-4 h-4" />
              {t("hero.visitCta")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-foreground/50">
        <span className="text-[10px] uppercase tracking-[0.3em]">{t("hero.scroll")}</span>
        <span className="h-10 w-px bg-foreground/30 animate-pulse" />
      </div>
    </section>
  );
}