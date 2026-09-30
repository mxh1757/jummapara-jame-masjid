import React from "react";
import { Image } from "@/components/ui/image";
import { AlertTriangle, Users, HardHat, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const PHOTOS = [
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/051e31aa2_Media.jpeg",
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/a7ac21fb0_Media2.jpeg",
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/2b249c625_Media3.jpeg",
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/aceb15b21_Media4.jpeg",
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/a32152b14_Media5.jpeg",
];

const FACTS = [
  { icon: Users, title: "fact1Title", text: "fact1Text" },
  { icon: HardHat, title: "fact2Title", text: "fact2Text" },
  { icon: AlertTriangle, title: "fact3Title", text: "fact3Text" },
];

export default function Infrastructure() {
  const { t } = useLanguage();
  const captions = t("infrastructure.captions");
  const caption = (i) => (Array.isArray(captions) ? captions[i] : "");

  return (
    <section id="infrastructure" className="relative scroll-mt-20 bg-foreground text-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-medium mb-5">
            <span className="h-px w-8 bg-accent" />
            {t("infrastructure.label")}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-medium leading-tight text-balance">
            {t("infrastructure.heading")}
          </h2>
          <p className="mt-6 text-lg text-background/70 leading-relaxed font-light">
            {t("infrastructure.body")}
          </p>
          <p className="mt-6 font-heading text-xl sm:text-2xl italic text-accent leading-relaxed text-balance">
            {t("infrastructure.quote")}
          </p>
        </div>

        <div className="mt-14 space-y-5">
          <figure className="group">
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src={PHOTOS[0]}
                alt={caption(0)}
                fittingType="fill"
                className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-3 text-sm text-background/60 italic">{caption(0)}</figcaption>
          </figure>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {PHOTOS.slice(1).map((src, i) => (
              <figure key={src} className="group">
                <div className="relative overflow-hidden rounded-sm">
                  <Image
                    src={src}
                    alt={caption(i + 1)}
                    fittingType="fill"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-background/60 italic leading-snug">
                  {caption(i + 1)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-background/15 rounded-sm overflow-hidden">
          {FACTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-foreground p-7">
              <Icon className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold mb-2">{t(`infrastructure.${title}`)}</h3>
              <p className="text-sm text-background/65 leading-relaxed">{t(`infrastructure.${text}`)}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-sm bg-accent text-accent-foreground p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="flex-1">
            <p className="font-heading text-2xl sm:text-3xl font-semibold leading-snug text-balance">
              {t("infrastructure.urgentHeading")}
            </p>
            <p className="mt-3 text-sm sm:text-base text-accent-foreground/80 leading-relaxed">
              {t("infrastructure.urgentBody")}
            </p>
          </div>
          <a
            href="#donate"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
          >
            <Heart className="w-4 h-4" /> {t("infrastructure.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}