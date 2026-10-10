import React from "react";
import { Image } from "@/components/ui/image";
import { useLanguage } from "@/lib/i18n";

const STORY_IMG =
  "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/89ef852fb_Media8.jpeg";

export default function About() {
  const { t } = useLanguage();

  const PILLARS = [
    { badge: "01", title: t("about.pillar1Title"), text: t("about.pillar1Text") },
    { badge: "02", title: t("about.pillar2Title"), text: t("about.pillar2Text") },
    { badge: "03", title: t("about.pillar3Title"), text: t("about.pillar3Text") },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#FBF9F5] font-sans pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-[76px] lg:pb-[72px]"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9 px-4 sm:px-6 lg:px-8">
        {/* Photograph + headline */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[72px]">
          <div className="relative pt-[18px] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[#C9BFB3] after:pointer-events-none after:absolute after:-bottom-px after:-left-px after:h-[58px] after:w-[58px] after:border-b-[8px] after:border-l-[8px] after:border-[#C05621]">
            <Image
              src={STORY_IMG}
              alt={t("about.imgAlt")}
              fittingType="fill"
              className="block w-full aspect-[16/10] object-cover border border-[#E6DFD5] shadow-[0_14px_32px_rgba(48,41,29,0.10)]"
            />
          </div>

          <div className="lg:py-4 lg:pr-5">
            <p className="relative mb-[23px] pl-[51px] text-[13px] font-semibold uppercase tracking-[0.28em] text-[#C05621] before:absolute before:left-0 before:top-1/2 before:h-px before:w-[38px] before:-translate-y-1/2 before:bg-[#C05621]">
              {t("about.label")}
            </p>
            <h2 className="font-sans text-[36px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#232B2B] sm:text-[44px] lg:text-[56px]">
              {t("about.heading")}
            </h2>
          </div>
        </div>

        {/* Story copy */}
        <div className="mx-0.5 grid gap-6 md:grid-cols-2 md:gap-[52px]">
          <p className="text-[17px] leading-[1.72] text-[#454B49] lg:text-[18px]">{t("about.p1")}</p>
          <p className="text-[17px] leading-[1.72] text-[#454B49] lg:text-[18px]">{t("about.p2")}</p>
        </div>

        {/* Pillars */}
        <div className="grid gap-5 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <article
              key={p.badge}
              className="min-h-[202px] border border-[#E6DFD5] bg-[#fffdfa] px-6 py-6 shadow-[0_4px_12px_rgba(51,41,28,0.03)] lg:px-7 lg:py-[25px]"
            >
              <span className="mb-[15px] grid h-10 w-10 place-items-center rounded-full bg-[rgba(217,119,6,0.09)] text-[17px] font-bold text-[#D97706]">
                {p.badge}
              </span>
              <h3 className="font-sans mb-[9px] text-[21px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#232B2B] lg:text-[23px]">
                {p.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#555B58]">{p.text}</p>
            </article>
          ))}
        </div>

        {/* Registered note */}
        <div className="flex items-start gap-[15px] border border-[#E6DFD5] bg-[#F5F1EA] px-6 py-5 text-[15px] leading-[1.65] text-[#414845]">
          <span aria-hidden className="flex-none text-[19px] leading-[1.4] text-[#D97706]">
            ✳
          </span>
          <p>
            <strong className="font-bold text-[#232B2B]">{t("about.registered")}</strong>{" "}
            {t("about.registeredText")}
          </p>
        </div>
      </div>
    </section>
  );
}