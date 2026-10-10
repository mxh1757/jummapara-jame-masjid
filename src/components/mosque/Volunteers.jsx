import React from "react";
import { Users, Utensils, ClipboardList, Sparkles, Heart, Trash2, MessageCircle, Mail, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const ACTIVITY_ICONS = [Users, Utensils, Trash2, ClipboardList, Heart, Sparkles];

export default function Volunteers() {
  const { t } = useLanguage();
  const activities = t("volunteers.activities");
  const roles = t("volunteers.roles");

  return (
    <section id="volunteers" className="relative scroll-mt-20 py-24 sm:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
            <span className="h-px w-8 bg-primary" />
            {t("volunteers.label")}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-medium leading-tight text-foreground text-balance">
            {t("volunteers.heading")}
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed font-light">
            {t("volunteers.body")}
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              {t("volunteers.activitiesTitle")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {Array.isArray(activities) && activities.map((a, i) => {
                const Icon = ACTIVITY_ICONS[i] || Users;
                return (
                  <div key={a.title} className="rounded-sm bg-background border border-border p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1.5">{a.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-sm bg-foreground text-background p-8">
            <h3 className="font-heading text-2xl font-semibold mb-2">{t("volunteers.volunteerTitle")}</h3>
            <p className="text-background/70 text-sm leading-relaxed mb-6">{t("volunteers.volunteerText")}</p>
            <ul className="space-y-3 mb-7">
              {Array.isArray(roles) && roles.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-background/85">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/8801716457812"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-foreground px-5 py-2.5 text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> {t("volunteers.cta")}
              </a>
              <a
                href="mailto:jummaparajamemasjid@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-2.5 text-sm font-medium hover:bg-background/10 transition-colors"
              >
                <Mail className="w-4 h-4" /> {t("volunteers.emailCta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}