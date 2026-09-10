// src/app/pricing/page.tsx (eller src/pages/pricing.tsx beroende på din struktur)
import Link from "next/link";
import Pricing from "../landingpage/body/Pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-amber-50 via-white to-amber-100/70 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">
              Välj rätt paket för din{" "}
              <span className="text-gold-gradient">community</span>
            </h1>

            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Alla paket inkluderar 30 dagars gratis provperiod. Ingen
              bindningstid – avsluta när du vill.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/30">
                <span className="text-amber-500">✓</span> 30 dagar gratis
              </span>
              <span className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/30">
                <span className="text-amber-500">✓</span> Ingen kortuppgift
              </span>
              <span className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/30">
                <span className="text-amber-500">✓</span> Avsluta när du vill
              </span>
              <span className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/30">
                <span className="text-amber-500">✓</span> Svensk support
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Pricing />
        </div>
      </section>

      <section className="py-16 bg-linear-to-br from-amber-50 via-white to-amber-100/70">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Vanliga frågor om priser
            </h2>
            <div className="space-y-4  ">
              {[
                {
                  q: "Kan jag byta paket senare?",
                  a: "Ja, du kan när som helst uppgradera eller nedgradera ditt paket. Förändringen träder i kraft nästa faktureringsperiod.",
                },
                {
                  q: "Vad händer efter 30 dagars provperiod?",
                  a: "Efter 30 dagar väljer du ett betalpaket. Om du inte väljer ett paket blir ditt konto pausat tills du väljer ett.",
                },
                {
                  q: "Kan jag avsluta när som helst?",
                  a: "Ja, du kan avsluta din prenumeration när som helst. Ingen bindningstid, inga dolda avgifter.",
                },
                {
                  q: "Får jag hjälp med att komma igång?",
                  a: "Ja! Vi erbjuder guidad onboarding för alla nya användare. Kontakta oss så hjälper vi dig.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
