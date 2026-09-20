import React, { useState } from "react";
import { Copy, Check, Landmark, Smartphone, Globe, ShieldCheck } from "lucide-react";

const METHODS = [
  {
    id: "bank",
    icon: Landmark,
    label: "Bank Transfer",
    color: "text-primary",
    details: [
      { k: "Account Name", v: "Jummapara Central Mosque Committee" },
      { k: "Bank", v: "[Bank Name — to be confirmed]" },
      { k: "Account Number", v: "[Account Number — to be confirmed]" },
      { k: "Branch", v: "Jaldhaka, Nilphamari, Bangladesh" },
      { k: "SWIFT / Routing", v: "[To be confirmed]" },
    ],
    note: "For international transfers, please use the SWIFT code. Contact us to confirm details.",
  },
  {
    id: "mobile",
    icon: Smartphone,
    label: "Mobile Money (bKash / Nagad)",
    color: "text-accent",
    details: [
      { k: "bKash Number", v: "[To be confirmed]" },
      { k: "Nagad Number", v: "[To be confirmed]" },
      { k: "Account Type", v: "Merchant / Personal" },
      { k: "Reference", v: "Sadaqah / Mosque Fund" },
    ],
    note: "Available across Bangladesh. Send with the reference 'Mosque Fund' so we can thank you.",
  },
  {
    id: "committee",
    icon: ShieldCheck,
    label: "Direct to Committee Member",
    color: "text-primary",
    details: [
      { k: "Imam / Committee Contact", v: "[Name — to be confirmed]" },
      { k: "WhatsApp", v: "[+880 — to be confirmed]" },
      { k: "Email", v: "[to be confirmed]" },
    ],
    note: "Reach out directly and we will guide you through the safest way to contribute.",
  },
];

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
  const [active, setActive] = useState("bank");
  const method = METHODS.find((m) => m.id === active);

  return (
    <section id="donate" className="relative py-24 sm:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
            <span className="h-px w-8 bg-primary" />
            Support the Mosque
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
            Your generosity restores a house of God.
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed font-light">
            Every gift — great or small — is an <span className="italic">amānah</span> (a trust).
            It goes toward repairing the walls, building proper wudu and toilet facilities,
            sustaining the madrasa, and bringing a trained Imam to our community.
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
                    <p className="text-xs text-muted-foreground mt-0.5">{m.details.length} details</p>
                  </div>
                </button>
              );
            })}

            <div className="hidden lg:block mt-4 rounded-sm bg-secondary/60 border border-border p-5">
              <Globe className="w-5 h-5 text-accent mb-2" strokeWidth={1.5} />
              <p className="text-sm text-foreground/70 leading-relaxed">
                We welcome support from the Ummah worldwide. Please contact us if you need
                help arranging a transfer from your country.
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
                {method.details.map((d) => (
                  <CopyRow key={d.k} k={d.k} v={d.v} />
                ))}
              </div>

              <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {method.note}
              </p>

              <div className="mt-8 rounded-sm bg-primary/5 border border-primary/20 p-5">
                <p className="text-sm text-foreground/75 leading-relaxed">
                  <span className="font-semibold text-foreground">A note on transparency:</span> Some
                  account details are marked <em>[to be confirmed]</em> as we finalize them with our
                  committee. Please <a href="#committee" className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary">contact us</a> and we will provide verified, up-to-date information personally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verse */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="font-heading text-2xl sm:text-3xl italic text-foreground/80 leading-relaxed">
            “Whoever builds a mosque for Allah, Allah will build for him a house like it in Paradise.”
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">— Prophet Muhammad ﷺ (Bukhari & Muslim)</p>
        </div>
      </div>
    </section>
  );
}