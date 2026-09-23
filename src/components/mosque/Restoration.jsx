import React from "react";
import { Image } from "@/components/ui/image";
import { Check, X as XIcon } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const BEFORE_IMG = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/962764d98_Media9.jpeg";
const AFTER_IMG = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/1bff4ca4f_Media3.jpeg";

export default function Restoration() {
  const { t } = useLanguage();

  const STATUS = [
    { label: t("rest.s1"), note: t("rest.s1n"), done: false },
    { label: t("rest.s2"), note: t("rest.s2n"), done: false },
    { label: t("rest.s3"), note: t("rest.s3n"), done: false },
    { label: t("rest.s4"), note: t("rest.s4n"), done: false },
    { label: t("rest.s5"), note: t("rest.s5n"), done: false },
    { label: t("rest.s6"), note: t("rest.s6n"), done: false },
    { label: t("rest.s7"), note: t("rest.s7n"), done: true },
    { label: t("rest.s8"), note: t("rest.s8n"), done: true },
  ];

  return (
    <section id="restoration" className="relative py-24 sm:py-36 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — facility status */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-medium mb-5">
              <span className="h-px w-8 bg-accent" />
              {t("rest.label")}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-balance">
              {t("rest.heading")}
            </h2>
            <p className="mt-6 text-lg text-background/70 leading-relaxed font-light">
              {t("rest.body")}
            </p>

            <ul className="mt-10 divide-y divide-background/15">
              {STATUS.map((s) => (
                <li key={s.label} className="flex items-center gap-4 py-3.5">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      s.done ? "bg-accent text-foreground" : "border border-background/40 text-background/50"
                    }`}
                  >
                    {s.done ? <Check className="w-4 h-4" /> : <XIcon className="w-3.5 h-3.5" />}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium ${s.done ? "text-background" : "text-background/90"}`}>{s.label}</p>
                    <p className="text-sm text-background/55">{s.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — before/after contrast */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-background/50 mb-3">{t("rest.today")}</p>
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src={BEFORE_IMG}
                  alt={t("rest.beforeAlt")}
                  fittingType="fill"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-background/10" />
              </div>
              <p className="mt-3 text-sm text-background/60 italic">{t("rest.todayCaption")}</p>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">{t("rest.withHelp")}</p>
              <div className="relative overflow-hidden rounded-sm shadow-2xl ring-1 ring-accent/40">
                <Image
                  src={AFTER_IMG}
                  alt={t("rest.afterAlt")}
                  fittingType="fill"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-background/60 italic">{t("rest.afterCaption")}</p>
            </div>
          </div>
        </div>

        {/* Goal bar */}
        <div className="mt-20 rounded-sm bg-background/5 border border-background/15 p-7 sm:p-9">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-2">{t("rest.goalLabel")}</p>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium">{t("rest.goalTitle")}</h3>
            </div>
            <p className="text-sm text-background/60">{t("rest.goalSub")}</p>
          </div>
          <div className="relative h-3 w-full rounded-full bg-background/15 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent"
              style={{ width: "18%" }}
            />
          </div>
          <div className="mt-3 flex justify-between text-sm text-background/60">
            <span>{t("rest.raised")} <span className="text-background font-semibold">{t("rest.justBeginning")}</span></span>
            <span>{t("rest.goalEnd")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}