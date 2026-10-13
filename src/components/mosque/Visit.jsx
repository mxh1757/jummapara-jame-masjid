import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Visit() {
  const { t } = useLanguage();
  return (
    <section id="visit" className="relative bg-foreground text-background">
      <div className="grid lg:grid-cols-2">
        {/* Map / location visual */}
        <div className="relative min-h-[360px] lg:min-h-[520px] bg-foreground/90">
          <iframe
            title={t("visit.mapTitle")}
            src="https://www.google.com/maps?q=26.0235493,89.0839648&z=17&hl=en&output=embed"
            className="absolute inset-0 w-full h-full opacity-90 grayscale lg:opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent pointer-events-none lg:from-foreground/60" />
          <div className="relative z-10 p-8 sm:p-12 flex flex-col justify-end h-full">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">
              <MapPin className="w-4 h-4" /> {t("visit.findUs")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium leading-tight max-w-md text-balance">
              {t("visit.heading")}
            </h2>
          </div>
        </div>

        {/* Contact details */}
        <div className="p-8 sm:p-12 lg:p-16">
          <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-8">{t("visit.title")}</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium">{t("visit.address")}</p>
                <p className="text-background/70 text-sm leading-relaxed mt-1">
                  {t("visit.addressLine1")}<br />
                  {t("visit.addressLine2")}<br />
                  {t("visit.addressLine3")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium">{t("visit.openPrayer")}</p>
                <p className="text-background/70 text-sm leading-relaxed mt-1">
                  {t("visit.openPrayerText")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium">{t("visit.phone")}</p>
                <p className="text-background/70 text-sm leading-relaxed mt-1">{t("visit.phoneValue")}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium">{t("visit.email")}</p>
                <p className="text-background/70 text-sm leading-relaxed mt-1">{t("visit.emailValue")}</p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=26.0235493,89.0839648"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent text-foreground px-6 py-3 text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            <Navigation className="w-4 h-4" /> {t("visit.openMaps")}
          </a>
        </div>
      </div>
    </section>
  );
}