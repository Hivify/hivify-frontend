// src/components/nav-pages/ContactPage.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section className="relative overflow-hidden py-24 md:py-32 bg-linear-to-br from-amber-50 via-white to-amber-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-amber-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-300/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">
              Hör av dig till <span className="text-gold-gradient">oss</span>
            </h1>

            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Har du frågor om Hivefy? Vill du veta mer om hur vi kan hjälpa
              just din förening? Vi svarar inom 24 timmar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8 rounded-2xl p-8 md:p-10  shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kontaktinformation
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Vi finns här för att hjälpa dig – oavsett om du är nyfiken på
                  Hivefy eller behöver support.
                </p>
              </div>

              <div className="flex items-start gap-4 hover:shadow-lg transition-shadow p-4 rounded-xl ">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">E-post</h3>
                  <a
                    href="mailto:hello@hivefy.com"
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    hello@hivefy.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Vi svarar inom 24 timmar
                  </p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start gap-4 hover:shadow-lg transition-shadow p-4 rounded-xl ">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefon</h3>
                  <a
                    href="tel:+46701234567"
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    +46 70 123 45 67
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Vardagar 09:00–17:00
                  </p>
                </div>
              </div>

              {/* Adress */}
              <div className="flex items-start gap-4 hover:shadow-lg transition-shadow p-4 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Adress</h3>
                  <p className="text-gray-600">
                    Hivefy AB
                    <br />
                    Storgatan 1
                    <br />
                    123 45 Stockholm
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Tack för ditt meddelande!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Vi återkommer till dig inom 24 timmar.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          organization: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="btn btn-secondary"
                    >
                      Skicka ett nytt meddelande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Skicka ett meddelande
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Namn *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                          placeholder="Ditt namn"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          E-post *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                          placeholder="din@epost.se"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Förening / Organisation
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="Namn på din förening"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Ämne *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                      >
                        <option value="">Välj ett ämne</option>
                        <option value="sales">
                          Jag vill veta mer om Hivefy
                        </option>
                        <option value="support">Support / teknisk fråga</option>
                        <option value="billing">Fakturering / betalning</option>
                        <option value="partnership">Samarbete / partner</option>
                        <option value="other">Övrigt</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Meddelande *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                        placeholder="Berätta vad vi kan hjälpa dig med..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Skickar...
                        </span>
                      ) : (
                        "Skicka meddelande"
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Genom att skicka godkänner du vår{" "}
                      <Link
                        href="/privacy"
                        className="text-amber-600 hover:underline"
                      >
                        integritetspolicy
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Vanliga <span className="text-gold-gradient">frågor</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Kanske har du redan fått svar på din fråga?
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Hur snabbt får jag svar?",
                  a: "Vi svarar normalt inom 24 timmar på vardagar. Vid akuta ärenden, ring oss gärna.",
                },
                {
                  q: "Erbjuder ni support på svenska?",
                  a: "Ja, all vår support sker på svenska. Vi finns här för att hjälpa dig på ditt språk.",
                },
                {
                  q: "Kan jag boka en demo?",
                  a: "Absolut! Skicka ett meddelande med ämnet 'Jag vill veta mer' så bokar vi in en tid som passar dig.",
                },
                {
                  q: "Har ni någon telefonlinje?",
                  a: "Ja, du når oss på telefon vardagar 09:00–17:00. Se numret ovan.",
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {item.q}
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100/70">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900">
              Redo att <span className="text-gold-gradient">surra igång</span>?
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Prova Hivefy gratis i 30 dagar. Ingen bindningstid, ingen
              kortuppgift.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/register"
                className="btn btn-primary group relative overflow-hidden text-lg px-10 py-4"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                href="/pricing"
                className="btn btn-secondary text-lg px-10 py-4"
              >
                Se priser
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
