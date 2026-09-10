import HexagonOrb from "./HexagonOrb";

export default function Hero() {
  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden sm:pt-0">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-amber-400/5 rounded-full blur-3xl pointer-events-none overflow-hidden" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-50 h-50 bg-amber-300/5 rounded-full blur-3xl pointer-events-none overflow-hidden" />

      <div className="container mx-auto px-4 relative z-10 my-20">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-left max-w-2xl">
            <h1 className="text-7xl md:text-9xl lg:text-9xl xl:text-7xl font-bold tracking-tighter leading-[1.1]">
              <span className="text-gold-gradient drop-shadow-[0_0_30px_rgba(245,158,11,0.15)]">
                Community skapande
              </span>
              <br />
              <span className="text-gray-900 relative text-left max-w-2xl">
                enkelt
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-linear-to-r from-amber-400 to-transparent rounded-full opacity-50 py-10" />
              </span>
            </h1>

            <p className="md:py-5 text-left max-w-lg md:max-w-xl text-xl md:text-3xl text-amber-700/80 mt-6  leading-relaxed">
              Surra igång din community idag –
              <span className="text-amber-600 font-medium"> på 5 minuter</span>,
              helt utan krångel.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
              <button className="btn btn-primary group relative overflow-hidden">
                <span className="absolute inset-0 bg-linear-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  Kom igång gratis
                  <svg
                    className="ml-2 w-5 h-5 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform duration-200"
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
              <button className="btn btn-secondary hover:shadow-lg hover:shadow-amber-200/30 transition-all duration-300">
                Läs mer
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-6 justify-center md:justify-start text-sm text-gray-500">
              <span className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/30">
                <span className="text-amber-500 text-lg">✓</span> Gratis i 30
                dagar
              </span>
              <span className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/30">
                <span className="text-amber-500 text-lg">✓</span> Inga
                kortuppgifter
              </span>
              <span className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/30">
                <span className="text-amber-500 text-lg">✓</span> Avsluta när du
                vill
              </span>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end lg:justify-center">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl scale-125 animate-pulse" />
              <div
                className="absolute inset-0 bg-amber-500/10 rounded-full blur-2xl scale-150 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <HexagonOrb />
            </div>
          </div>
        </div>
      </div>

      {/* Dekorativa partiklar */}
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-amber-300 rounded-full opacity-30 animate-float-slow hidden lg:block" />
      <div className="absolute top-32 right-20 w-3 h-3 bg-amber-400 rounded-full opacity-20 animate-float-medium hidden lg:block" />
      <div className="absolute bottom-40 right-1/4 w-1.5 h-1.5 bg-amber-300 rounded-full opacity-40 animate-float-fast hidden lg:block" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-25 animate-float-slow hidden lg:block" />
    </div>
  );
}
