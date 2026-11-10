import { Star, Users, ShieldCheck, Sparkles, Gamepad2 } from "lucide-react";

export default function TrustBar() {
  const trustMetrics = [
    {
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#f59e0b] fill-[#f59e0b]" />,
      stat: "4.9 / 5.0",
      label: "Rating (650+ Parents)",
      detail: "Google & Trust verified",
    },
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981]" />,
      stat: "1 : 4 Max",
      label: "Cohort Mentor Ratio",
      detail: "Live personal guidance",
    },
    {
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#f59e0b]" />,
      stat: "100% Free",
      label: "45-Min Trial Demo",
      detail: "No credit card needed",
    },
    {
      icon: <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#34d399]" />,
      stat: "Real Games",
      label: "Tangible Projects",
      detail: "Built from session one",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981]" />,
      stat: "Kid-Safe",
      label: "Supervised AI Lab",
      detail: "COPPA & ethics certified",
    },
  ];

  return (
    <section
      aria-label="Trust and Social Proof Metrics"
      className="bg-[#0c432d] text-white py-6 sm:py-7 border-y border-emerald-700/60 relative overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 items-stretch">
          {trustMetrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-emerald-500/20 hover:bg-white/10 hover:border-emerald-400/40 transition-all duration-200 group ${
                idx === 4 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="font-serif-brand font-bold text-sm sm:text-base text-white tracking-tight flex items-center gap-1.5 truncate">
                  <span>{item.stat}</span>
                </div>
                <div className="text-xs font-semibold text-emerald-200 truncate">
                  {item.label}
                </div>
                <div className="text-[10px] text-emerald-400/80 font-medium truncate hidden sm:block">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
