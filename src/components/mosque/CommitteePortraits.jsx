import React from "react";
import { Image } from "@/components/ui/image";
import { useLanguage } from "@/lib/i18n";

export default function CommitteePortraits({ members }) {
  const { t } = useLanguage();
  const portraits = Array.isArray(members) ? members.filter((m) => m.img) : [];

  if (!portraits.length) return null;

  return (
    <div className="mb-6">
      <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
        {t("committee.featured")}
      </p>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
        {t("committee.featuredBody")}
      </p>

      <div className="mt-5 grid sm:grid-cols-2 gap-5">
        {portraits.map((m) => (
          <figure key={m.name} className="overflow-hidden rounded-sm bg-background border border-border">
            <Image
              src={m.img}
              alt={m.name}
              fittingType="fill"
              focalPointY={0.3}
              className="w-full aspect-[4/5] object-cover"
            />
            <figcaption className="p-5">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">{m.role}</span>
              <h3 className="font-heading text-xl font-semibold text-foreground mt-1.5">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}