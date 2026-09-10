import Image from "next/image";
import Link from "next/link";

export default function FeaturesPage() {
  const features = [
    {
      icon: "🏛️",
      title: "Anpassningsbara roller",
      description:
        "Skapa egna roller med precis de befogenheter som behövs. Ge medlemmar rätt tillgång – från tränare till styrelseledamot.",
      details: [
        "Skapa obegränsat antal roller",
        "Anpassa befogenheter per roll",
        "Tilldela flera roller till samma medlem",
        "Ändra roller när som helst",
      ],
      image: "/training.jpg",
    },
    {
      icon: "📅",
      title: "Schema & Kalender",
      description:
        "Planera aktiviteter, träningar och möten med enkelhet. Allt samlat i en överskådlig kalender med automatiska påminnelser.",
      details: [
        "Skapa återkommande aktiviteter",
        "Automatiska påminnelser via e-post",
        "Medlemmar kan anmäla närvaro",
        "Exportera till egen kalender (iCal)",
      ],
      image: "/kalender.jpg",
    },
    {
      icon: "📄",
      title: "Dokumenthantering",
      description:
        "Spara, organisera och dela viktiga dokument. Allt från styrelseprotokoll till årsredovisningar – alltid tillgängligt.",
      details: [
        "Ladda upp PDF, Word och Excel",
        "Kategorisera dokument",
        "Sök och filtrera",
        "Versionshantering",
      ],
      image: "/dokument.jpg",
    },
    {
      icon: "💬",
      title: "Förslagslåda & Feedback",
      description:
        "Ge medlemmar en enkel väg att bidra med idéer och förslag. Skapa engagemang och transparens i föreningen.",
      details: [
        "Skicka in förslag anonymt eller med namn",
        "Tydlig statusuppföljning",
        "Admin kan svara direkt i systemet",
        "Historik över alla förslag",
      ],
      image: "/suggestions.jpg",
    },
  ];

  const HeroSection = () => (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-amber-50 via-white to-amber-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-300/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">
            Allt du behöver för att{" "}
            <span className="text-gold-gradient">driva din förening</span>
          </h1>

          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            En komplett plattform med alla verktyg för att hålla medlemmar
            engagerade, informerade och aktiva.
          </p>
        </div>
      </div>
    </section>
  );

  const OverviewSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-amber-200/50"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <Link
                href={`#${feature.title.toLowerCase().replace(/\s/g, "-")}`}
                className="inline-flex items-center gap-2 text-amber-600 font-medium mt-4 hover:gap-3 transition-all duration-300"
              >
                Läs mer
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const DeepDiveSection = () => (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Djupt in i{" "}
              <span className="text-gold-gradient">funktionerna</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Här får du veta exakt vad varje funktion gör och hur den hjälper
              din förening.
            </p>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              id={feature.title.toLowerCase().replace(/\s/g, "-")}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 md:gap-12 items-center mb-20 scroll-mt-24`}
            >
              {/* Vänster/Höger – Text */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-amber-50/80 text-amber-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                  <span className="text-lg">{feature.icon}</span>
                  {feature.title}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Höger/Vänster – Bild placeholder */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-200/30 to-amber-400/10 border border-amber-200/30 flex items-center justify-center">
                  <span className="text-8xl opacity-20">{feature.icon}</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">
                      {feature.title} – illustration
                    </span>
                  </div>

                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ============================================================
  // KOMPONENT 4: CTA
  // ============================================================
  const CTASection = () => (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100/70">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900">
            Redo att <span className="text-gold-gradient">komma igång</span>?
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Prova Hivefy gratis i 30 dagar. Alla funktioner inkluderade – ingen
            bindningstid, ingen kortuppgift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/register"
              className="btn btn-primary group relative overflow-hidden text-lg px-10 py-4"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center">
                Starta gratis provperiod
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/pricing"
              className="btn btn-secondary text-lg px-10 py-4"
            >
              Se priser
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeroSection />
      <OverviewSection />
      <DeepDiveSection />
      <CTASection />
    </div>
  );
}
