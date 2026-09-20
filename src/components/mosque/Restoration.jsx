import React from "react";
import { Image } from "@/components/ui/image";
import { Check, X as XIcon } from "lucide-react";

const BEFORE_IMG = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/962764d98_Media9.jpeg";
const AFTER_IMG = "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/1bff4ca4f_Media3.jpeg";

const STATUS = [
  { label: "Wudu (Ablution) Facilities", done: false, note: "Incomplete — needed" },
  { label: "Toilet & Wash Facilities", done: false, note: "Needed for the community" },
  { label: "Trained, Educated Imam", done: false, note: "Cannot afford — funding needed" },
  { label: "Exterior Walls & Paint", done: false, note: "Old, faded, weather-damaged" },
  { label: "Surrounding Grounds", done: false, note: "Need cleaning & paving" },
  { label: "Madrasa Academy Operations", done: false, note: "Struggling without funds" },
  { label: "Five Daily Congregational Prayers", done: true, note: "Alhamdulillah, ongoing" },
  { label: "Quran Classes for Children", done: true, note: "Ongoing, modestly" },
];

export default function Restoration() {
  return (
    <section id="restoration" className="relative py-24 sm:py-36 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — facility status */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-medium mb-5">
              <span className="h-px w-8 bg-accent" />
              The Need
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-balance">
              From weathered walls to a renewed sanctuary.
            </h2>
            <p className="mt-6 text-lg text-background/70 leading-relaxed font-light">
              This is an honest account of where we stand today. With your support, every
              item below can move from <em>needed</em> to <em>complete</em>.
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
              <p className="text-xs uppercase tracking-[0.25em] text-background/50 mb-3">Today</p>
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src={BEFORE_IMG}
                  alt="Weathered exterior wall of the mosque today"
                  fittingType="fill"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-background/10" />
              </div>
              <p className="mt-3 text-sm text-background/60 italic">Faded, stained, in need of repair.</p>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">With Your Help</p>
              <div className="relative overflow-hidden rounded-sm shadow-2xl ring-1 ring-accent/40">
                <Image
                  src={AFTER_IMG}
                  alt="The prayer hall — the heart we aim to restore and sustain"
                  fittingType="fill"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-background/60 italic">A clean, dignified space for worship.</p>
            </div>
          </div>
        </div>

        {/* Goal bar */}
        <div className="mt-20 rounded-sm bg-background/5 border border-background/15 p-7 sm:p-9">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-2">Community Goal</p>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium">Restoration & Sustenance Fund</h3>
            </div>
            <p className="text-sm text-background/60">Every contribution moves us forward.</p>
          </div>
          <div className="relative h-3 w-full rounded-full bg-background/15 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent"
              style={{ width: "18%" }}
            />
          </div>
          <div className="mt-3 flex justify-between text-sm text-background/60">
            <span>Raised so far: <span className="text-background font-semibold">just beginning</span></span>
            <span>Goal: full restoration</span>
          </div>
        </div>
      </div>
    </section>
  );
}