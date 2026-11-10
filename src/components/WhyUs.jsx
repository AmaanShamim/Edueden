import { Sparkles } from "lucide-react";
import { pillars } from "../data/content";

export default function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-[#fbfdf9] border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-[#15803d] font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>The EduEden Method</span>
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-3 tracking-tight">
            Nurturing Tech Creators With Joy &amp; Care
          </h2>
          <p className="mt-3 text-[#1e4635] text-sm sm:text-base leading-relaxed">
            Our four foundational pillars that protect childhood joy while building real computational fluency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] sm:rounded-[30px] p-6 sm:p-8 border-2 border-emerald-100 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f0fdf4] border border-emerald-200/80 flex items-center justify-center mb-6 shadow-2xs">
                  {pillar.icon}
                </div>
                <h3 className="font-serif-brand font-bold text-xl text-[#0c432d]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[#1e4635] text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
