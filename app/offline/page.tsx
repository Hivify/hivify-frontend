"use client";

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-amber-50 via-white to-amber-100">
      <div className="text-center p-8">
        <div className="text-6xl mb-4">🐝</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Du är offline
        </h1>
        <p className="text-gray-600 mb-6">
          Det verkar som att du saknar en internetanslutning. Kontrollera din
          anslutning och försök igen.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary"
        >
          Försök igen
        </button>
      </div>
    </div>
  );
}
