import React from "react";
import { Image } from "@/components/ui/image";
import { ShieldCheck, Mail, MessageCircle, BadgeCheck } from "lucide-react";

const IMG = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/89ef852fb_Media8.jpeg";

const MEMBERS = [
  {
    role: "Imam & Khateeb",
    name: "To be appointed",
    detail: "A trained, educated Imam is one of our greatest needs. Your support helps us bring one to Jummapara.",
    status: "Needed",
  },
  {
    role: "Committee President",
    name: "[To be confirmed]",
    detail: "Oversees the mosque's operations, finances, and community relations.",
    status: "Verified",
  },
  {
    role: "Treasurer",
    name: "[To be confirmed]",
    detail: "Manages all donations and expenditures with full accountability to the committee and community.",
    status: "Verified",
  },
  {
    role: "Madrasa Coordinator",
    name: "[To be confirmed]",
    detail: "Leads the daily Quran classes for children and adults in the prayer hall.",
    status: "Verified",
  },
];

export default function Committee() {
  return (
    <section id="committee" className="relative py-24 sm:py-36 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
              <span className="h-px w-8 bg-primary" />
              Trust & Legitimacy
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
              The people who steward your trust.
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed font-light">
              Jummapara Central Mosque is run by a local committee accountable to the
              community it serves. We invite you to reach out, ask questions, and verify
              before you give.
            </p>

            <div className="mt-8 relative overflow-hidden rounded-sm shadow-lg">
              <Image
                src={IMG}
                alt="The mosque building — a registered community institution"
                fittingType="fill"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-sm bg-background border border-border p-5">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/75 leading-relaxed">
                Every donation is recorded and reported to the committee. We are committed
                to radical transparency for every supporter, near and far.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {MEMBERS.map((m) => (
                <div
                  key={m.role}
                  className="rounded-sm bg-background border border-border p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">{m.role}</span>
                    {m.status === "Verified" ? (
                      <span className="inline-flex items-center gap-1 text-xs text-accent font-medium">
                        <BadgeCheck className="w-4 h-4" /> Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-destructive font-medium">
                        Needed
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{m.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{m.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-sm bg-foreground text-background p-7">
              <h3 className="font-heading text-2xl font-semibold mb-2">Speak with us directly</h3>
              <p className="text-background/70 text-sm leading-relaxed mb-5">
                We welcome questions from any brother or sister, anywhere in the world.
                Reach out and a committee member will respond.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#visit"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-foreground px-5 py-2.5 text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a
                  href="#visit"
                  className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-2.5 text-sm font-medium hover:bg-background/10 transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}