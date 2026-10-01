// src/components/get-started/GetStartedWhy.tsx
"use client";
import React from "react";

export default function GetStartedWhy() {
  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="text-lg">💡</span> Varför Hivefy?
          </div>

          {/* Rubrik */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Hivefy är skräddarsydd för att matcha din förening
          </h2>

          {/* P-tagg */}
          <p className="mt-4 mb-4 text-lg text-gray-600">
            Här kan du{" "}
            <span className="font-semibold text-gray-900">bland annat</span>:
          </p>

          {/* Lista – centrerad container, vänsterjusterad text */}
          <ul className="space-y-4 max-w-md mx-auto text-left">
            {[
              "Samla all information på ett ställe",
              "Skapa roller efter föreningens behov",
              "Skapa evenemang med påminnelser och närvaro",
              "Säkra dokument och protokoll",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-lg text-gray-700"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs font-bold mt-1">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Taggar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Strukturerat
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Sökbart
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Alltid tillgängligt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
