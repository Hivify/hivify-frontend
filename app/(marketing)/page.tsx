"use client";

import CTA from "@/src/components/landingpage/body/CTA";
import Features from "@/src/components/landingpage/body/Features";
import Pricing from "@/src/components/landingpage/body/Pricing";
import Hero from "@/src/components/landingpage/top/Hero";

export default function MarketingPage() {
  return (
    <main className="relative z-10">
      <Hero />
      <Features />
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
          Prislista
        </h2>
        <p className="text-xl text-gray-600 mt-4">
          Hitta prispaketet som passar din communitys behov
        </p>
      </div>
      <Pricing />
      <CTA />
    </main>
  );
}
