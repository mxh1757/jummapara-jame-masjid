import React, { useState } from "react";
import { Copy, Check, Landmark, Smartphone, Globe, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

function CopyRow({ k, v }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(v).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-border/60 last:border-0">
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{k}</p>
        <p className="text-sm font-medium text-foreground break-words">{v}</p>
      </div>
      <button
        onClick={copy}
        className="shrink-0 mt-3 text-muted-foreground hover:text-primary transition-colors"
        aria-label={`Copy ${k}`}
      >
        {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}

export default function Donate() {
  const { t } = useLanguage();
  const [active, setActive] = useState("bank");

  const METHODS = [
    { id: "bank", icon: Landmark, label: t("donate.bank"), color: "text-primary", details: t("donate.bankDetails"), note: t("donate.bankNote") },
    { id: "mobile", icon: Smartphone, label: t("donate.mobile"), color: "text-accent", details: t("donate.mobileDetails"), note: t("donate.mobileNote") },
    { id: "committee", icon: ShieldCheck, label: t("donate.committee"), color: "text-primary", details: t("donate.committeeDetails"), note: t("donate.committeeNote") },
    { id: "overseas", icon: Globe, label: t("donate.overseas"), color: "text-accent", details: t("donate.overseasDetails"), note: t("donate.overseasNote") },
  ];
  const method = METHODS.find((m) => m.id === active);

  return (
    <section id="donate" className="relative py-24 sm:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
            <span className="h-px w-8 bg-primary" />
            {t("donate.label")}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
            {t("donate.heading")}
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed font-light">
            {t("donate.body")}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Method tabs */}
          <div className="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {METHODS.map((m) => {
              const isActive = m.id === active;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  className={`flex items-center gap-4 rounded-sm border p-5 text-left transition-all shrink-0 lg:w-full ${
                    isActive
                      ? "border-primary bg-secondary shadow-sm"
                      : "border-border bg-background hover:border-primary/40"
                  }`}
                >
                  <m.icon className={`w-6 h-6 shrink-0 ${isActive ? m.color : "text-muted-foreground"}`} strokeWidth={1.5} />
                  <div>
                    <p className={`font-heading text-lg font-semibold ${isActive ? "text-foreground" : "text-foreground/80"}`}>{m.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{Array.isArray(m.details) ? m.details.length : 0} {t("donate.details")}</p>
                  </div>
                </button>
              );
            })}

            <div className="hidden lg:block mt-4 rounded-sm bg-secondary/60 border border-border p-5">
              <Globe className="w-5 h-5 text-accent mb-2" strokeWidth={1.5} />
              <p className="text-sm text-foreground/70 leading-relaxed">
                {t("donate.globalText")}
              </p>
            </div>
          </div>

          {/* Active method details */}
          <div className="lg:col-span-8">
            <div className="rounded-sm border border-border bg-card shadow-sm p-7 sm:p-10">
              <div className="flex items-center gap-3 mb-7">
                <method.icon className={`w-7 h-7 ${method.color}`} strokeWidth={1.5} />
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">{method.label}</h3>
              </div>

              <div className="rounded-sm bg-secondary/40 border border-border/60 px-5">
                {Array.isArray(method.details) && method.details.map((d) => (
                  <CopyRow key={d.k} k={d.k} v={d.v} />
                ))}
              </div>

              <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {method.note}
              </p>

              <div className="mt-8 rounded-sm bg-primary/5 border border-primary/20 p-5">
                <p className="text-sm text-foreground/75 leading-relaxed">
                  <span className="font-semibold text-foreground">{t("donate.transparency")}</span>{" "}
                  {t("donate.transparencyBefore")}
                  <a href="#committee" className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary">{t("donate.contactUs")}</a>
                  {t("donate.transparencyAfter")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verse */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="font-heading text-2xl sm:text-3xl italic text-foreground/80 leading-relaxed">
            {t("donate.verse")}
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">{t("donate.attribution")}</p>
        </div>
      </div>
    </section>
  );
}