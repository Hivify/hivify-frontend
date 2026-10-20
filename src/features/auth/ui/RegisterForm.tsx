"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registerAction } from "../actions/registerAction";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);

  // Samla alla fältfel till en array
  const allFieldErrors = state?.fieldErrors
    ? Object.values(state.fieldErrors).flat()
    : [];

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Skapa ditt konto
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Steg 1 av 2 – sedan sätter vi upp din community
        </p>
      </div>

      <form action={formAction} className="space-y-5">
        {/* --- FÄLT: Fullständigt namn --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fullständigt namn *
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Anna Andersson"
            required
            className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
              state?.fieldErrors?.fullName
                ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-200"
                : "border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            }`}
          />
        </div>

        {/* --- FÄLT: E-post --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-post *
          </label>
          <input
            type="email"
            name="email"
            placeholder="anna@exempel.se"
            required
            className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
              state?.fieldErrors?.email
                ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-200"
                : "border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            }`}
          />
        </div>

        {/* --- FÄLT: Lösenord --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lösenord *
            </label>
            <input
              type="password"
              name="password"
              placeholder="Minst 8 tecken"
              required
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                state?.fieldErrors?.password
                  ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-200"
                  : "border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upprepa lösenord *
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Upprepa lösenordet"
              required
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                state?.fieldErrors?.confirmPassword
                  ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-200"
                  : "border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
              }`}
            />
          </div>
        </div>

        {/* --- FÄLT: Villkor --- */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="terms"
            required
            className="mt-1 w-4 h-4 accent-amber-500"
          />
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

        {/* --- FELRUTA (Ovanför knappen) --- */}
        {(state?.error || allFieldErrors.length > 0) && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm space-y-1">
            {/* Generellt fel (t.ex. nätverk) */}
            {state?.error && <p className="font-medium">{state.error}</p>}

            {/* Alla fältfel listade */}
            {allFieldErrors.map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
        )}

        {/* --- SKICKA-KNAPP --- */}
        <button
          type="submit"
          disabled={isPending}
          className="btn btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Skapar konto..." : "Skapa konto"}
        </button>

        <p className="text-center text-sm text-gray-500">
          Har du redan ett konto?{" "}
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
