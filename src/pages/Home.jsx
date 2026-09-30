import React from "react";
import PrayerBar from "@/components/mosque/PrayerBar";
import Navbar from "@/components/mosque/Navbar";
import Hero from "@/components/mosque/Hero";
import About from "@/components/mosque/About";
import Madrasa from "@/components/mosque/Madrasa";
import Services from "@/components/mosque/Services";
import Restoration from "@/components/mosque/Restoration";
import RamadanEid from "@/components/mosque/RamadanEid";
import Volunteers from "@/components/mosque/Volunteers";
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
        <Services />
        <Restoration />
        <RamadanEid />
        <Donate />
        <Committee />
        <Volunteers />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}