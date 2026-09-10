"use client";
import { useState } from "react";
import Link from "next/link";
import HexagonOrb from "./HexagonOrb";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Funktioner", href: "/features" },
    { label: "Priser", href: "/pricing" },
    { label: "Om oss", href: "/about" },
    { label: "Kontakt", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="bg-black py-2.5 text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/90 text-sm font-medium">
            🐝 Surra igång din community med Hivefy –{" "}
            <span className="text-amber-400 font-bold">gratis i 30 dagar!</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-10 h-10">
              <HexagonOrb />
            </div>
            <span className="text-xl font-bold text-gray-900">Hivefy</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:inline-block text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Logga in
            </Link>

            <Link
              href="/register"
              className="hidden md:inline-block btn btn-primary text-sm px-5 py-2.5"
            >
              Kom igång gratis
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 my-2 pt-4 flex flex-col gap-2">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Logga in
              </Link>
              <Link
                href="/register"
                className="btn btn-primary text-center py-2.5"
                onClick={() => setIsMenuOpen(false)}
              >
                Kom igång gratis
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
