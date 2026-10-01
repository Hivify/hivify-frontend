"use client";

import GetStartedHero from "./GetStartedHero";
import GetStartedSteps from "./GetStartedSteps";
import GetStartedWhy from "./GetStartedWhy";
import GetStartedCTA from "./GetStartedCTA";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <GetStartedHero />
      <GetStartedWhy />
      <GetStartedSteps />
      <GetStartedCTA />
    </div>
  );
}
