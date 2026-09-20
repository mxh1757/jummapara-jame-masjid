import React from "react";
import PrayerBar from "@/components/mosque/PrayerBar";
import Navbar from "@/components/mosque/Navbar";
import Hero from "@/components/mosque/Hero";
import About from "@/components/mosque/About";
import Madrasa from "@/components/mosque/Madrasa";
import Restoration from "@/components/mosque/Restoration";
import Donate from "@/components/mosque/Donate";
import Committee from "@/components/mosque/Committee";
import Visit from "@/components/mosque/Visit";
import Footer from "@/components/mosque/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PrayerBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Madrasa />
        <Restoration />
        <Donate />
        <Committee />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}