import React from "react";
import {
  Clock, CalendarDays, BookOpen, GraduationCap, Moon, Star,
  Heart, Leaf, Wallet, Compass, Users, Home,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const ICONS = [Clock, CalendarDays, BookOpen, GraduationCap, Moon, Star, Heart, Leaf, Wallet, Compass, Users, Home];

export default function Services() {
  const { t } = useLanguage();
  const items = t("services.items");

  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
            <span className="h-px w-8 bg-primary" />
            {t("services.label")}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-medium leading-tight text-foreground text-balance">
            {t("services.heading")}
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed font-light">
            {t("services.body")}
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {Array.isArray(items) && items.map((item, i) => {
            const Icon = ICONS[i] || Star;
            return (
              <div key={item.title} className="group bg-background p-7 transition-colors hover:bg-secondary/50">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary mb-5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}