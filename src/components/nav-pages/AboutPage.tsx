import Image from "next/image";

import Link from "next/link";
import HexagonOrb from "../landingpage/top/HexagonOrb";

export default function AboutPage() {
  const values = [
    {
      icon: "🤝",
      title: "Inkludering för alla",
      description:
        "Oavsett om du är tekniskt kunnig eller inte – Hivefy är designat för att vara enkelt och tillgängligt för alla medlemmar.",
    },
    {
      icon: "⚡",
      title: "Enkelhet som superkraft",
      description:
        "Vi tror att det bästa verktyget är det som inte kräver en manual. Hivefy är byggt för att fungera intuitivt – direkt.",
    },
    {
      icon: "🌱",
      title: "Gemeinschaft – gemenskap",
      description:
        "Vi bygger inte bara en plattform – vi bygger möjligheten för människor att samlas, dela och växa tillsammans.",
    },
    {
      icon: "🔒",
      title: "Trygghet och integritet",
      description:
        "Din förenings data är er egen. Vi tar säkerhet på största allvar och ger er full kontroll över er information.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32 bg-linear-to-br from-amber-50 via-white to-amber-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-amber-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-300/5 rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-amber-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Vänster – Text */}
            <div className="flex-1 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-gray-900 leading-[1.1]">
                Vi gör det enkelt för{" "}
                <span className="text-gold-gradient relative">
                  föreningar att blomstra
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4 text-amber-400/30"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M0 6 C30 12, 70 0, 100 6 C130 12, 170 0, 200 6"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Hivefy är byggt för att hjälpa föreningar och mindre
                organisationer att hålla medlemmarna engagerade, aktiva och
                informerade.
              </p>

              {/* Statistik */}
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-amber-500">
                    100+
                  </div>
                  <div className="text-sm text-gray-500">Aktiva föreningar</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-amber-500">
                    5 000+
                  </div>
                  <div className="text-sm text-gray-500">Medlemmar</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-amber-500">
                    98%
                  </div>
                  <div className="text-sm text-gray-500">Nöjda användare</div>
                </div>
              </div>
            </div>

            {/* Höger – Bild */}
            <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/community.jpg"
                  alt="En aktiv community samlas för att diskutera och planera"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Bildtext – overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4 md:p-6">
                  <p className="text-white/90 text-xs md:text-sm text-center">
                    Människor som möts, delar idéer och bygger gemenskap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-1/3 h-1/2 bg-amber-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-1/4 h-1/3 bg-amber-300/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400/10 to-amber-600/5 rounded-3xl blur-xl transition-all duration-500 group-hover:from-red-400/20 group-hover:to-red-600/10" />

              <div className="relative bg-white rounded-3xl p-8 md:p-10 lg:p-12 border border-gray-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_80px_-15px_rgba(220,38,38,0.15)] hover:-translate-y-2 hover:border-red-200/50 h-full flex flex-col">
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-linear-to-r from-transparent via-gray-300/40 to-transparent rounded-full transition-all duration-500 group-hover:via-red-400/60" />

                <div className="inline-flex items-center gap-2 bg-gray-100/80 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6 transition-all duration-500 group-hover:bg-red-50/80 group-hover:text-red-600">
                  <span className="text-lg">😰</span> Problemet
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Föreningar <span className="text-amber-600">drunknar</span> i
                  kaos
                </h2>

                <p className="text-gray-500 text-sm mb-6">
                  Det här är utmaningar vi ser om och om igen hos föreningar:
                </p>

                <ul className="space-y-3 text-gray-600 grow">
                  {[
                    "Medlemmar missar viktig information som hamnar i mejl som glöms bort",
                    "Styrelseprotokoll och dokument försvinner i olika kanaler",
                    "Schemaläggning sker via lappar, sms och Facebook-grupper",
                    "Förslag och idéer från medlemmar går förlorade",
                    "Ingen överblick över medlemsaktiviteter eller närvaro",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-2 rounded-lg transition-colors duration-200 group-hover:bg-red-50/30"
                    >
                      <span className="shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold mt-0.5 transition-all duration-300 group-hover:bg-red-100 group-hover:text-red-500">
                        ✕
                      </span>
                      <span className="leading-relaxed transition-colors duration-300 group-hover:text-red-700/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl transition-all duration-500 group-hover:bg-red-400/10" />
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400/10 to-amber-600/5 rounded-3xl blur-xl transition-all duration-500 group-hover:from-green-400/20 group-hover:to-green-600/10" />

              <div className="relative bg-white rounded-3xl p-8 md:p-10 lg:p-12 border border-gray-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_80px_-15px_rgba(34,197,94,0.15)] hover:-translate-y-2 hover:border-green-200/50 h-full flex flex-col">
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-linear-to-r from-transparent via-gray-300/40 to-transparent rounded-full transition-all duration-500 group-hover:via-green-400/60" />

                <div className="inline-flex items-center gap-2 bg-gray-100/80 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6 transition-all duration-500 group-hover:bg-green-50/80 group-hover:text-green-600">
                  <span className="text-lg">✨</span> Vår lösning
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Allt <span className="text-amber-600">samlat</span> på ett
                  ställe
                </h2>

                <p className="text-gray-500 text-sm mb-6">
                  Med Hivefy får ni en plattform som löser alla ovanstående
                  problem:
                </p>

                <ul className="space-y-3 text-gray-600 grow">
                  {[
                    "En tydlig kanal för all information – ingen missar något",
                    "Alla dokument samlade och sökbara – protokoll, årsredovisningar, mer",
                    "Schema och kalender med automatiska påminnelser",
                    "Enkel förslagslåda där medlemmar kan bidra med idéer",
                    "Översikt över medlemmar, roller och aktiviteter",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-2 rounded-lg transition-colors duration-200 group-hover:bg-green-50/30"
                    >
                      <span className="shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold mt-0.5 transition-all duration-300 group-hover:bg-green-100 group-hover:text-green-500">
                        ✓
                      </span>
                      <span className="font-medium leading-relaxed transition-colors duration-300 group-hover:text-green-700/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl transition-all duration-500 group-hover:bg-green-400/10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-linear-to-b from-white to-amber-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Det här <span className="text-gold-gradient">står vi för</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Våra värderingar genomsyrar allt vi gör – från design till
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-amber-200/30 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-amber-400/50 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden bg-linear-to-br from-amber-50 via-white to-amber-100/70">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-amber-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6 w-40 h-40 mx-auto flex items-center justify-center rounded-full bg-amber-400/10 text-amber-500">
              <HexagonOrb />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900">
              Redo att <span className="text-gold-gradient">surra igång</span>{" "}
              din förening?
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Hivefy är byggt för att göra din förenings administration enklare,
              tydligare och roligare. Börja med 30 dagar gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/register"
                className="btn btn-primary group relative overflow-hidden text-lg px-10 py-4"
              >
                <span className="absolute inset-0 bg-linear-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  Kom igång gratis
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
                href="/contact"
                className="btn btn-secondary text-lg px-10 py-4"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
