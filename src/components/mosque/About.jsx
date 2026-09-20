import React from "react";
import { Image } from "@/components/ui/image";
import { CheckCircle2, BookOpen, Users, HandHeart } from "lucide-react";

const IMG_MAIN = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/5a79a0c87_Media12.jpeg";
const IMG_SIDE = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/b2574b4a7_Media13.jpeg";

const PILLARS = [
  {
    icon: Users,
    title: "Five Daily Prayers",
    text: "A gathering place for the congregation, from Fajr to Isha, uniting the community in worship.",
  },
  {
    icon: BookOpen,
    title: "Madrasa for All Ages",
    text: "Quranic and Islamic education for children and adults, taught in the prayer hall itself.",
  },
  {
    icon: HandHeart,
    title: "Community Care",
    text: "A humble refuge open to the people of Jaldhaka — for learning, solace, and togetherness.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Images — asymmetric */}
          <div className="lg:col-span-6 grid grid-cols-5 gap-4">
            <div className="col-span-3 mt-12">
              <div className="relative overflow-hidden rounded-sm shadow-md">
                <Image
                  src={IMG_MAIN}
                  alt="Exterior of Jummapara Central Mosque"
                  fittingType="fill"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative overflow-hidden rounded-sm shadow-md">
                <Image
                  src={IMG_SIDE}
                  alt="Weathered wall of the mosque showing its need for restoration"
                  fittingType="fill"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic leading-relaxed">
                The weathered walls carry decades of prayer — and a visible need for care.
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:pt-12">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
              <span className="h-px w-8 bg-primary" />
              Our Story
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
              A house of worship, built on faith and community.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-foreground/70 leading-relaxed font-light">
              <p>
                Jummapara Central Mosque stands in the village of Gopaljhar, in Jaldhaka,
                Nilphamari — a quiet corner of northern Bangladesh. For the families who
                live here, the mosque is more than a building. It is the heart of the
                community: a place to pray five times a day, to learn the Quran, and to
                gather in times of joy and hardship.
              </p>
              <p>
                The mosque also serves as a <span className="text-foreground font-medium">madrasa</span>,
                where young and old come to study. Nearby rooms host children for their
                lessons. But the walls are old and faded, the surroundings need cleaning,
                and essential facilities — wudu (ablution), toilets, and a trained Imam —
                remain out of reach without support.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {PILLARS.map((p) => (
                <div key={p.title} className="border-t border-border pt-4">
                  <p.icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-start gap-3 rounded-sm bg-secondary/60 border border-border p-5">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/75 leading-relaxed">
                <span className="font-semibold text-foreground">A registered community institution.</span>{" "}
                Run by a local committee, accountable to the people it serves — and now
                reaching out to the global Ummah for the support it needs to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}