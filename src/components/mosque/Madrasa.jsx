import React from "react";
import { Image } from "@/components/ui/image";
import { BookOpen, GraduationCap, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const IMAGES = [
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/7cdf5ff9b_Media1.jpeg",
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/18c3a6361_Media4.jpeg",
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/f3a79e699_Media2.jpeg",
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/d66dd1150_Media3.jpeg",
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/48a346129_Media10.jpeg",
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/86a22a5ea_Media2.jpeg",
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/6c2f04ecc_Media1.jpeg",
];

export default function Madrasa() {
  const { t } = useLanguage();
  const captions = t("madrasa.imgs");

  return (
    <section id="madrasa" className="relative py-24 sm:py-36 bg-secondary/40">
      <div className="absolute inset-0 grain opacity-[0.04] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
            <span className="h-px w-8 bg-primary" />
            {t("madrasa.label")}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
            {t("madrasa.heading")}
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed font-light">
            {t("madrasa.body")}
          </p>
        </div>

        {/* Horizontal scroll gallery */}
        <div className="flex gap-5 overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory">
          {IMAGES.map((src, i) => (
            <figure
              key={i}
              className="snap-center shrink-0 w-[85%] sm:w-[60%] lg:w-[42%] group"
            >
              <div className="relative overflow-hidden rounded-sm shadow-lg">
                <Image
                  src={src}
                  alt={Array.isArray(captions) ? captions[i] : ""}
                  fittingType="fill"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-60" />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground italic">
                {Array.isArray(captions) ? captions[i] : ""}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Needs */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="rounded-sm bg-background border border-border p-7">
            <GraduationCap className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{t("madrasa.need1Title")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("madrasa.need1Text")}</p>
          </div>
          <div className="rounded-sm bg-background border border-border p-7">
            <BookOpen className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{t("madrasa.need2Title")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("madrasa.need2Text")}</p>
          </div>
          <div className="rounded-sm bg-primary text-primary-foreground p-7">
            <Heart className="w-7 h-7 mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-2xl font-semibold mb-2">{t("madrasa.need3Title")}</h3>
            <p className="text-sm text-primary-foreground/85 leading-relaxed">{t("madrasa.need3Text")}</p>
            <a
              href="#donate"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 decoration-accent"
            >
              {t("madrasa.becomeSupporter")} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}