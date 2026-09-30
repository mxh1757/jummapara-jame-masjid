import React from "react";
import { CheckCircle2, BookOpen, Users, HandHeart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

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
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
              <span className="h-px w-8 bg-primary" />
              {t("about.label")}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
              {t("about.heading")}
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5 text-lg text-foreground/70 leading-relaxed font-light">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
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