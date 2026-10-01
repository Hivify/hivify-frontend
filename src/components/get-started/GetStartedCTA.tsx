// src/components/get-started/GetStartedCTA.tsx
"use client";
import React from "react";
import Link from "next/link";

export default function GetStartedCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100/70">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🐝</div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900">
            Redo att ta{" "}
            <span className="text-gold-gradient">första steget</span>?
          </h2>

          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Det tar bara 5 minuter – och du kan ångra dig när som helst.
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
              href="/contact"
              className="btn btn-secondary text-lg px-10 py-4"
            >
              Boka demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
