"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [subdomain, setSubdomain] = useState("ansjons-brf");

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
      {/* Rubrik */}
      <div className="text-center mb-8">
        <div className="badge-gold inline-flex mb-4">
          <span className="inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          Starta din community
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Skapa ditt konto
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Gratis i 30 dagar – ingen kortuppgift krävs
        </p>
      </div>

      <form className="space-y-5">
        {/* Namn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Förnamn *
            </label>
            <input
              type="text"
              placeholder="Anna"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Efternamn *
            </label>
            <input
              type="text"
              placeholder="Andersson"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            />
          </div>
        </div>

        {/* E-post */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-post *
          </label>
          <input
            type="email"
            placeholder="anna@exempel.se"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
          />
        </div>

        {/* Lösenord */}
        
          <div className="grid grid-cols-1 md:grid-rows-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lösenord *
              </label>
              <input
                type="password"
                placeholder="Minst 8 tecken"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upprepa lösenord *
              </label>
              <input
                type="password"
                placeholder="Upprepa lösenordet"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              />
            </div>
          </div>
      

        {/* Separator */}
        <div className="border-t border-gray-100 pt-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Din förening
          </p>
        </div>

        {/* Föreningens namn */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Föreningens namn *
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
          />
        </div>

        {/* Subdomain */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Er unika adress
          </label>
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200/50">
            <span className="text-amber-700 font-medium text-sm">
              hivefy"[domain]".com
            </span>
            <span className="ml-auto text-green-500 text-xs font-medium">
              ✓ Ledig
            </span>
          </div>
        </div>

        {/* Typ av förening + Antal medlemmar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Typ av förening *
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white">
              <option>Bostadsrättsförening</option>
              <option>Idrottsförening</option>
              <option>Bokcirkel</option>
              <option>Studieförbund</option>
              <option>Annat</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Antal medlemmar *
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white">
              <option>1–20 medlemmar</option>
              <option>21–60 medlemmar</option>
              <option>61–150 medlemmar</option>
              <option>150+ medlemmar</option>
            </select>
          </div>
        </div>

        {/* Villkor */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1 w-4 h-4 accent-amber-500" />
          <span className="text-sm text-gray-600">
            Jag godkänner{" "}
            <Link href="/terms" className="text-amber-600 hover:underline">
              användarvillkoren
            </Link>{" "}
            och{" "}
            <Link href="/privacy" className="text-amber-600 hover:underline">
              integritetspolicyn
            </Link>
          </span>
        </label>

        {/* Skicka */}
        <button type="submit" className="btn btn-primary w-full py-4 text-lg">
          Skapa konto och starta
        </button>

        {/* Länk till login */}
        <p className="text-center text-sm text-gray-500">
          Har du redan ett en aktiv community?{" "}
          <Link
            href="/login"
            className="text-amber-600 hover:underline font-medium"
          >
            Logga in
          </Link>
        </p>
      </form>
    </div>
  );
}
