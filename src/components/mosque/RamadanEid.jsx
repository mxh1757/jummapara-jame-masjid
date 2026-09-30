import React from "react";
import { Moon, Star, Utensils, Sparkles, Users, CalendarDays } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const RAMADAN_ICONS = [Moon, Utensils, Users, Sparkles, Star];

export default function RamadanEid() {
  const { t } = useLanguage();
  const ramadanItems = t("ramadan.ramadanItems");
  const eidItems = t("ramadan.eidItems");

  return (
    <section id="ramadan" className="relative scroll-mt-20 py-24 sm:py-32 bg-foreground text-background overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-medium mb-5">
            <span className="h-px w-8 bg-accent" />
            {t("ramadan.label")}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-medium leading-tight text-balance">
            {t("ramadan.heading")}
          </h2>
          <p className="mt-6 text-lg text-background/70 leading-relaxed font-light">
            {t("ramadan.body")}
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <div className="rounded-sm border border-background/15 bg-background/5 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Moon className="w-5 h-5" />
              </span>
              <h3 className="font-heading text-2xl font-semibold">{t("ramadan.ramadanTitle")}</h3>
            </div>
            <p className="text-background/60 text-sm mb-6">{t("ramadan.ramadanSub")}</p>
            <ul className="space-y-3">
              {Array.isArray(ramadanItems) && ramadanItems.map((item, i) => {
                const Icon = RAMADAN_ICONS[i] || Star;
                return (
                  <li key={item} className="flex items-start gap-3 text-sm text-background/80">
                    <Icon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-sm border border-background/15 bg-background/5 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
                <CalendarDays className="w-5 h-5" />
              </span>
              <h3 className="font-heading text-2xl font-semibold">{t("ramadan.eidTitle")}</h3>
            </div>
            <p className="text-background/60 text-sm mb-6">{t("ramadan.eidSub")}</p>
            <div className="space-y-4">
              {Array.isArray(eidItems) && eidItems.map((item) => (
                <div key={item.title} className="rounded-sm bg-background/5 border border-background/10 p-4">
                  <h4 className="font-heading text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-background/70 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 flex items-start gap-2 text-xs text-background/50 max-w-2xl">
          <Star className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          {t("ramadan.moonNote")}
        </p>
      </div>
    </section>
  );
}