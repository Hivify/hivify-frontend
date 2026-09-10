// src/components/landing/Features.tsx
import React from "react";

export default function Features() {
  const features = [
    {
      icon: "🏛️",
      title: "Skapa en kommitté",
      description:
        "Tilldela roller och ansvar, och ge medlemmar en tydlig översikt över vem som gör vad.",
    },
    {
      icon: "📅",
      title: "Schema & Kalender",
      description:
        "Lägg upp aktiviteter, återkommande träningar eller extrainsatta möten – med automatiska påminnelser.",
    },
    {
      icon: "📄",
      title: "Dokumenthantering",
      description:
        "Spara och dela styrelseprotokoll, årsredovisningar och andra viktiga dokument – alltid tillgängliga.",
    },
    {
      icon: "💬",
      title: "Förslagslåda",
      description:
        "Ge medlemmar en enkel väg att skicka in förslag och idéer – med tydlig statusuppföljning.",
    },
    {
      icon: "👥",
      title: "Medlemshantering",
      description:
        "Bjud in medlemmar, hantera roller och se aktivitet – allt på ett ställe.",
    },
    {
      icon: "📊",
      title: "Närvarohantering",
      description:
        "Håll koll på vem som kommer till träningar, möten och evenemang – med enkel anmälan.",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white to-amber-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Allt du behöver för din{" "}
            <span className="text-gold-gradient">community</span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            En komplett plattform för att samla, strukturera och dela
            information – utan krångel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/30 shadow-lg hover:shadow-xl transition-all duration-300 transparent hover:bg-white/90 hover:backdrop-blur-md"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
