import Link from "next/link";
import HexagonOrb from "../top/HexagonOrb";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <div>
                <span className="text-2xl font-bold text-white">Hivefy</span>
                <p className="text-sm text-white/50 max-w-xs">
                  Bygg din community på 5 minuter.
                </p>
              </div>
            </div>
            <p className="text-sm text-white/50 max-w-xs mt-2">
              Enkel, flexibel och utan krångel. Starta din community idag.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/features"
                  className="hover:text-white transition-colors"
                >
                  Funktioner
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Priser
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="hover:text-white transition-colors"
                >
                  Uppdateringar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Företag</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blogg
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@hivefy.com"
                  className="hover:text-white transition-colors"
                >
                  hello@hivefy.com
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/hivefy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/hivefy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0">
              <HexagonOrb />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {currentYear} Hivefy. Alla rättigheter förbehållna.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Integritetspolicy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Användarvillkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
