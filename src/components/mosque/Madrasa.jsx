import React from "react";
import { Image } from "@/components/ui/image";
import { BookOpen, GraduationCap, Heart } from "lucide-react";

const IMAGES = [
  {
    src: "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/1bff4ca4f_Media3.jpeg",
    alt: "Adult learners studying and reflecting together inside the prayer hall",
  },
  {
    src: "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/48a346129_Media10.jpeg",
    alt: "Madrasa students holding their wooden rehal book stands outside the mosque",
  },
  {
    src: "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/2303a1a9f_Media.jpeg",
    alt: "Young boys holding Quranic study frames in front of the mosque",
  },
  {
    src: "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/86a22a5ea_Media2.jpeg",
    alt: "A group of madrasa students posing with their books outside the mosque",
  },
  {
    src: "https://media.base44.com/images/public/6aaf5461faad2f0a73293d44/6c2f04ecc_Media1.jpeg",
    alt: "The mosque building where the madrasa lessons take place",
  },
];

export default function Madrasa() {
  return (
    <section id="madrasa" className="relative py-24 sm:py-36 bg-secondary/40">
      <div className="absolute inset-0 grain opacity-[0.04] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">
            <span className="h-px w-8 bg-primary" />
            The Madrasa
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
            Young hearts learning the Word of God.
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed font-light">
            Inside the prayer hall, both children and elders gather each day with their
            wooden <em>rehal</em> book stands to study the Quran and Islamic teachings —
            a madrasa for the young and the old alike. This is the soul of our mosque,
            and it needs your help to continue.
          </p>
        </div>

        {/* Horizontal scroll gallery */}
        <div className="flex gap-5 overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory">
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              className="snap-center shrink-0 w-[85%] sm:w-[60%] lg:w-[42%] group"
            >
              <div className="relative overflow-hidden rounded-sm shadow-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fittingType="fill"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-60" />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground italic">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Needs */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="rounded-sm bg-background border border-border p-7">
            <GraduationCap className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">A Trained Imam</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We lack a well-trained, educated Imam to lead prayers and deliver the Friday
              khutbah. Without adequate funds, we cannot afford to bring one to our community.
            </p>
          </div>
          <div className="rounded-sm bg-background border border-border p-7">
            <BookOpen className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">A Working Academy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nearby rooms host children for their studies, but insufficient financial
              support has left the academy struggling to operate and serve its students.
            </p>
          </div>
          <div className="rounded-sm bg-primary text-primary-foreground p-7">
            <Heart className="w-7 h-7 mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-2xl font-semibold mb-2">Sponsor a Student</h3>
            <p className="text-sm text-primary-foreground/85 leading-relaxed">
              Your support sustains a child's religious education and keeps the light of
              learning alive in our village.
            </p>
            <a
              href="#donate"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 decoration-accent"
            >
              Become a supporter →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}