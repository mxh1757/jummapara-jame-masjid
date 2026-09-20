import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 32 32" className="w-8 h-8">
                <path d="M16 4 L25 11 V27 H7 V11 Z" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-primary" />
                <circle cx="16" cy="10" r="2.2" className="fill-accent" />
              </svg>
              <span className="font-heading text-lg font-semibold text-foreground">Jummapara Central Mosque</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A place of worship and learning in Gopaljhar, Jaldhaka, Nilphamari — serving
              the community through prayer and education, with your support.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground font-medium mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#madrasa" className="text-muted-foreground hover:text-primary transition-colors">The Madrasa</a></li>
              <li><a href="#restoration" className="text-muted-foreground hover:text-primary transition-colors">Restoration Needs</a></li>
              <li><a href="#donate" className="text-muted-foreground hover:text-primary transition-colors">Donate</a></li>
              <li><a href="#committee" className="text-muted-foreground hover:text-primary transition-colors">Committee</a></li>
              <li><a href="#visit" className="text-muted-foreground hover:text-primary transition-colors">Visit Us</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground font-medium mb-4">Support</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Your sadaqah and donations sustain our mosque, our madrasa, and our community.
            </p>
            <a
              href="#donate"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Heart className="w-4 h-4" /> Give Now
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Jummapara Central Mosque. All rights reserved.</p>
          <p className="italic">“And establish prayer and give zakah.” — Qur'an 2:43</p>
        </div>
      </div>
    </footer>
  );
}