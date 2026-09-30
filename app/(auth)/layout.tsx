import Link from "next/link";
import HexagonOrb from "@/src/components/landingpage/top/HexagonOrb";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-white to-amber-100 flex flex-col">
      {/* Header */}
      <header className="p-6">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="relative w-10 h-10">
            <HexagonOrb />
          </div>
          <span className="text-xl font-bold text-gray-900">Hivefy</span>
        </Link>
      </header>

      {/* Innehåll */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">{children}</div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hivefy ·{" "}
        <Link href="/privacy" className="hover:text-amber-600">
          Integritetspolicy
        </Link>{" "}
        ·{" "}
        <Link href="/terms" className="hover:text-amber-600">
          Användarvillkor
        </Link>
      </footer>
    </div>
  );
}
