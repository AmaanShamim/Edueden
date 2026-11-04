import React, { useState } from "react";
import { Star, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterCategories = [
    { id: "all", label: "All Stories" },
    { id: "sprouts", label: "🌱 Sprouts (K–2)" },
    { id: "explorers", label: "🚀 Explorers (Gr. 3–5)" },
    { id: "innovators", label: "💡 Innovators (Gr. 6–8)" },
  ];

  const filteredTestimonials = testimonials.filter((t) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "sprouts") return t.track.toLowerCase().includes("sprouts");
    if (activeFilter === "explorers") return t.track.toLowerCase().includes("explorers");
    if (activeFilter === "innovators") return t.track.toLowerCase().includes("innovators");
    return true;
  });

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#fbfdf9] border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-[#15803d] font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Community Stories</span>
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-4 tracking-tight">
            Loved by Parents, Adored by Young Coders
          </h2>
          <p className="mt-3 text-[#1e4635] text-base sm:text-lg">
            Over 650+ children have created their first playable game or AI project with EduEden. Here is how their journeys began.
          </p>
        </div>

        {/* Trust Metric Strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-4 border border-emerald-100 text-center shadow-xs">
            <div className="flex items-center justify-center gap-1 text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
              ))}
            </div>
            <div className="mt-1.5 font-bold text-lg text-[#0c432d]">4.9 / 5.0</div>
            <div className="text-xs text-[#1e4635]">650+ Parent Reviews</div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-emerald-100 text-center shadow-xs">
            <div className="text-2xl font-serif-brand font-bold text-[#10b981]">100%</div>
            <div className="mt-0.5 font-bold text-sm text-[#0c432d]">Hands-on Projects</div>
            <div className="text-xs text-[#1e4635]">Builds Real Games</div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-emerald-100 text-center shadow-xs">
            <div className="text-2xl font-serif-brand font-bold text-[#f59e0b]">1 : 4</div>
            <div className="mt-0.5 font-bold text-sm text-[#0c432d]">Mentor Ratio</div>
            <div className="text-xs text-[#1e4635]">Personal Attention</div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-emerald-100 text-center shadow-xs">
            <div className="text-2xl font-serif-brand font-bold text-[#15803d]">K – 8</div>
            <div className="mt-0.5 font-bold text-sm text-[#0c432d]">Tailored Levels</div>
            <div className="text-xs text-[#1e4635]">Age-Optimized Flow</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              type="button"
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-[#0c432d] text-white shadow-sm scale-105"
                  : "bg-white text-[#0c432d] border border-emerald-200 hover:bg-emerald-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] p-7 border-2 border-emerald-100/90 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Track badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#15803d] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {item.track}
                  </span>
                </div>

                {/* Highlight tagline */}
                <h3 className="font-serif-brand font-bold text-base text-[#0c432d] mb-3">
                  "{item.highlight}"
                </h3>

                {/* Quote body */}
                <p className="text-[#1e4635] text-sm leading-relaxed relative">
                  <Quote className="w-6 h-6 text-emerald-200 absolute -top-2 -left-2 -z-0 opacity-40" />
                  <span className="relative z-10">{item.quote}</span>
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-5 border-t border-emerald-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${item.avatarBg} font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#0c432d] flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" title="Verified Parent" />
                    </div>
                    <div className="text-xs text-[#1e4635] font-medium">
                      {item.relation} • {item.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

