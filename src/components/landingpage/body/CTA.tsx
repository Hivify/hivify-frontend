// src/components/landing/CTA.tsx
import React from "react";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-amber-50 via-white to-amber-100/70">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-300/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="badge-gold inline-flex mb-6">
            <span className="inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            Redo att börja?
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">
            Starta din community{" "}
            <span className="text-gold-gradient">idag</span>
          </h2>

          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Ingen bindningstid. Avsluta när du vill. Kom igång gratis i 30 dagar
            – inget kort krävs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="btn btn-primary group relative overflow-hidden text-lg px-10 py-4">
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
            </button>
            <button className="btn btn-secondary text-lg px-10 py-4">
              Kontakta oss
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="text-amber-500">✓</span> 30 dagar gratis
            </span>
            <span className="flex items-center gap-2">
              <span className="text-amber-500">✓</span> Ingen kortuppgift
            </span>
            <span className="flex items-center gap-2">
              <span className="text-amber-500">✓</span> Avsluta när du vill
            </span>
            <span className="flex items-center gap-2">
              <span className="text-amber-500">✓</span> Svensk support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
