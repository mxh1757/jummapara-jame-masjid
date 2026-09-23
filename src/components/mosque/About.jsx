import React from "react";
import { Image } from "@/components/ui/image";
import { CheckCircle2, BookOpen, Users, HandHeart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const IMG_MAIN = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/5a79a0c87_Media12.jpeg";
const IMG_SIDE = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/b2574b4a7_Media13.jpeg";

export default function About() {
  const { t } = useLanguage();

  const PILLARS = [
    { icon: Users, title: t("about.pillar1Title"), text: t("about.pillar1Text") },
    { icon: BookOpen, title: t("about.pillar2Title"), text: t("about.pillar2Text") },
    { icon: HandHeart, title: t("about.pillar3Title"), text: t("about.pillar3Text") },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Images — asymmetric */}
          <div className="lg:col-span-6 grid grid-cols-5 gap-4">
            <div className="col-span-3 mt-12">
              <div className="relative overflow-hidden rounded-sm shadow-md">
                <Image
                  src={IMG_MAIN}
                  alt={t("about.imgMainAlt")}
                  fittingType="fill"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative overflow-hidden rounded-sm shadow-md">
                <Image
                  src={IMG_SIDE}
                  alt={t("about.imgSideAlt")}
                  fittingType="fill"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic leading-relaxed">
                {t("about.imgCaption")}
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:pt-12">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
              <span className="h-px w-8 bg-primary" />
              {t("about.label")}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
              {t("about.heading")}
            </h2>
            <div className="mt-6 space-y-5 text-lg text-foreground/70 leading-relaxed font-light">
              <p>{t("about.p1")}</p>
              <p>
                {t("about.p2")}
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {PILLARS.map((p) => (
                <div key={p.title} className="border-t border-border pt-4">
                  <p.icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-start gap-3 rounded-sm bg-secondary/60 border border-border p-5">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/75 leading-relaxed">
                <span className="font-semibold text-foreground">{t("about.registered")}</span>{" "}
                {t("about.registeredText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}