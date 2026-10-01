// src/components/get-started/GetStartedSteps.tsx
"use client";
import React from "react";

export default function GetStartedSteps() {
  const steps = [
    {
      number: "1",
      icon: "📝",
      title: "Skapa konto",
      description:
        "Fyll i dina uppgifter och din förenings namn. Klart på under en minut.",
    },
    {
      number: "2",
      icon: "⚙️",
      title: "Anpassa",
      description:
        "Skapa roller, bjud in medlemmar och lägg upp information – helt efter era behov.",
    },
    {
      number: "3",
      icon: "🚀",
      title: "Kom igång",
      description:
        "Allt är klart! Dina medlemmar kan logga in och börja använda Hivefy direkt.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">
            Kom igång med Hivefy i <span className="text-amber-500">tre enkla steg</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Linje mellan stegen (endast desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200" />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Steg-cirkel */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-amber-300 shadow-lg mb-6 z-10">
                <span className="text-3xl">{step.icon}</span>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-500 text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
