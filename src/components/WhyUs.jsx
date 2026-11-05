import { pillars } from "../data/content";

export default function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-[#fbfdf9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#15803d] font-extrabold uppercase tracking-widest text-xs sm:text-sm">
            The EduEden Difference
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-2 tracking-tight">
            Nurturing Tech Creators With Joy &amp; Care
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[30px] p-8 border border-emerald-100 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#f0fdf4] grid place-items-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="font-serif-brand font-bold text-xl text-[#0c432d]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[#1e4635] text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
