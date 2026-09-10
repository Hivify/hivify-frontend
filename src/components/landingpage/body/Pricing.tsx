export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      size: "small",
      price: "99",
      period: "/mån",
      description: "Perfekt för små föreningar och grupper",
      members: "1–20 medlemmar",
      features: [
        "✅ 1 community",
        "✅ 20 medlemmar",
        "✅ Nyhetsflöde",
        "✅ Dokumenthantering",
        "✅ Grundläggande roller",
        "📧 E-postsupport",
      ],
      buttonText: "Kom igång",
    },
    {
      name: "Proffs",
      size: "medium",
      price: "299",
      period: "/mån",
      description: "För växande föreningar med mer behov",
      members: "21–100 medlemmar",
      features: [
        "✅ 1 community",
        "✅ 100 medlemmar",
        "✅ Nyhetsflöde",
        "✅ Dokumenthantering",
        "✅ Schema & kalender",
        "✅ Anpassningsbara roller",
        "✅ Förslagslåda",
        "✅ E-post & chattsupport",
      ],
      buttonText: "Välj Proffs",
      popular: true,
    },
    {
      name: "Premium",
      size: "large",
      price: "499",
      period: "/mån",
      description: "För stora föreningar med alla funktioner",
      members: "101–300 medlemmar",
      features: [
        "✅ 1 community",
        "✅ 300 medlemmar",
        "✅ Alla funktioner",
        "✅ Anpassningsbara roller",
        "✅ Schema & kalender",
        "✅ Dokumenthantering",
        "✅ Förslagslåda",
        "✅ Närvarohantering",
        "✅ API-åtkomst",
        "✅ Prioriterad support",
      ],
      buttonText: "Välj Premium",
    },
  ];

  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4">
      

        <div className="flex flex-col md:flex-row items-center md:items-end justify-around gap-6 py-10 hover:shadow-2xs">
          {plans.map((plan) => {
            let sizeClasses = "";
            if (plan.size === "small") {
              sizeClasses = "md:w-1/3 max-w-sm max-h-[600px]";
            } else if (plan.size === "medium") {
              sizeClasses = "md:w-1/3 max-w-sm max-h-[700px]";
            } else {
              sizeClasses = "md:w-1/3 max-w-sm max-h-[800px]";
            }

            return (
              <div
                key={plan.name}
                className={`
                  ${sizeClasses}
                  w-full
                  bg-black text-white rounded-2xl p-8
                  flex flex-col
                  transition-all duration-300 hover:scale-105 hover:shadow-2xl
                  ${plan.popular ? "ring-4 ring-amber-400 shadow-2xl" : "shadow-xl"}
                `}
              >
                {plan.popular && (
                  <div className="flex justify-between items-start mb-2">
                    <div />
                    <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Mest populär
                    </span>
                  </div>
                )}

                <div className="mb-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-5xl font-extrabold">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                <p className="text-amber-400 font-semibold text-sm mt-1">
                  {plan.members}
                </p>

                <ul className="mt-6 space-y-2 text-gray-300 text-sm grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-400 mr-2">
                        {feature.slice(0, 2)}
                      </span>
                      <span>{feature.slice(2)}</span>
                    </li>
                  ))}
                </ul>

                {/* Knapp */}
                <button
                  className={`
                    w-full mt-8 py-3 rounded-xl font-semibold transition-all duration-200
                    ${
                      plan.popular
                        ? "bg-amber-400 text-black hover:bg-amber-300"
                        : "bg-white text-black hover:bg-gray-100"
                    }
                  `}
                >
                  {plan.buttonText}
                </button>

                <p className="text-gray-500 text-xs text-center mt-3">
                  Ingen bindningstid • Avsluta när du vill
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
