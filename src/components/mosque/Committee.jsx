import React from "react";
import { Image } from "@/components/ui/image";
import { ShieldCheck, Mail, MessageCircle, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const IMG = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/89ef852fb_Media8.jpeg";

export default function Committee() {
  const { t } = useLanguage();
  const MEMBERS = t("committee.members");

  return (
    <section id="committee" className="relative py-24 sm:py-36 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
              <span className="h-px w-8 bg-primary" />
              {t("committee.label")}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
              {t("committee.heading")}
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed font-light">
              {t("committee.body")}
            </p>

            <div className="mt-8 relative overflow-hidden rounded-sm shadow-lg">
              <Image
                src={IMG}
                alt={t("committee.imgAlt")}
                fittingType="fill"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-sm bg-background border border-border p-5">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/75 leading-relaxed">
                {t("committee.transparencyText")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {Array.isArray(MEMBERS) && MEMBERS.map((m) => (
                <div
                  key={m.role}
                  className="rounded-sm bg-background border border-border p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">{m.role}</span>
                    {m.status === "Verified" ? (
                      <span className="inline-flex items-center gap-1 text-xs text-accent font-medium">
                        <BadgeCheck className="w-4 h-4" /> {t("committee.verified")}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-destructive font-medium">
                        {t("committee.needed")}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{m.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{m.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-sm bg-foreground text-background p-7">
              <h3 className="font-heading text-2xl font-semibold mb-2">{t("committee.speak")}</h3>
              <p className="text-background/70 text-sm leading-relaxed mb-5">
                {t("committee.speakBody")}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#visit"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-foreground px-5 py-2.5 text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> {t("committee.whatsapp")}
                </a>
                <a
                  href="#visit"
                  className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-2.5 text-sm font-medium hover:bg-background/10 transition-colors"
                >
                  <Mail className="w-4 h-4" /> {t("committee.email")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}