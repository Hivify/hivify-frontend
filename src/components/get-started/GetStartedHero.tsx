"use client";
import Link from "next/link";

export default function GetStartedHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Bakgrundsdekor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-300/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 leading-[1.1]">
            Ge liv åt din <span className="text-gold-gradient">community</span>
            <br />– på 5 minuter
          </h1>

          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Skapa ett konto, bjud in dina medlemmar och börja kommunicera
            direkt. Inget krångel, ingen teknisk kunskap krävs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/register"
              className="btn btn-primary group relative overflow-hidden text-lg px-10 py-4"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center">
                Skapa konto gratis
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

          {/* Förtroendemarkörer */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/30">
              <span className="text-amber-500">✓</span> 30 dagar gratis
            </span>
            <span className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/30">
              <span className="text-amber-500">✓</span> Ingen kortuppgift
            </span>
            <span className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/30">
              <span className="text-amber-500">✓</span> Avsluta när du vill
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
