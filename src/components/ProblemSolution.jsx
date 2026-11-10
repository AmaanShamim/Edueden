import { ArrowRight, XCircle, CheckCircle2, Sparkles, Smartphone, Cpu, Users, Trophy } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    {
      title: "Mindless Dopamine Loops",
      desc: "Endless short-form videos and hyper-stimulating games that deplete attention spans and create post-screen crankiness.",
    },
    {
      title: "Passive Consumer Mindset",
      desc: "Consuming games and apps engineered to keep kids hooked, without ever understanding the algorithms running behind the glass.",
    },
    {
      title: "Daily Screen-Time Friction",
      desc: "Guilt-ridden parental battles over screen limits, leading to tension rather than constructive digital exploration.",
    },
    {
      title: "Black-Box AI Dependency",
      desc: "Growing up in an AI-driven era without learning the fundamentals of how neural networks, prompts, and code actually work.",
    },
  ];

  const solutions = [
    {
      title: "Active Game Architecture",
      desc: "Kids design the rules, gravity, player physics, and scoring loops—turning gaming curiosity into software craftsmanship.",
    },
    {
      title: "Algorithmic Problem-Solving",
      desc: "Visual logic blocks, conditionals, and sequencing teach systematic reasoning that boosts school math and science.",
    },
    {
      title: "Joyful Screen-Healthy Pride",
      desc: "Screen time becomes purposeful. Children finish every session with a playable project they proudly share with family.",
    },
    {
      title: "Kid-Safe AI Demystification",
      desc: "Students train visual machine learning models and conversational bots in an ethics-first, safe sandbox.",
    },
  ];

  return (
    <section
      id="transformation"
      className="py-20 lg:py-28 bg-[#fbfdf9] relative overflow-hidden border-b border-emerald-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <span className="inline-flex items-center gap-1.5 text-[#15803d] font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Screen Time Transformation</span>
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-4 tracking-tight leading-tight">
            Don't Fight Screen Time.{" "}
            <span className="text-[#10b981]">Transform It.</span>
          </h2>
          <p className="mt-4 text-[#1e4635] text-base sm:text-lg leading-relaxed">
            Children don't need less curiosity about technology—they need a healthier relationship with it. Here is how EduEden turns passive digital consumption into cognitive superpower.
          </p>
        </div>

        {/* Comparison Grid: Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Problem Card (Passive Consumption) */}
          <div className="bg-gradient-to-b from-rose-50/60 to-orange-50/40 rounded-[32px] sm:rounded-[36px] p-6 sm:p-9 border-2 border-rose-200/70 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-rose-300">
                  <Smartphone className="w-3.5 h-3.5 text-rose-600" />
                  <span>The Typical Screen Trap</span>
                </span>
                <span className="text-xs font-bold text-rose-600/90">Passive Consumer</span>
              </div>

              <h3 className="font-serif-brand font-bold text-xl sm:text-2xl text-slate-800 mb-6">
                Hours spent scrolling &amp; playing repetitive games
              </h3>

              <div className="space-y-4">
                {problems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-rose-100 shadow-2xs">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-slate-900">{item.title}</div>
                      <div className="text-xs sm:text-[13px] text-slate-600 mt-0.5 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-rose-200/60 flex items-center justify-between text-xs font-semibold text-rose-800">
              <span>Outcome: Dopamine fatigue &amp; creative stagnation</span>
              <span className="text-rose-600 font-bold">Drain</span>
            </div>
          </div>

          {/* Solution Card (The EduEden Way) */}
          <div className="bg-gradient-to-b from-emerald-50/90 to-[#f0fdf4] rounded-[32px] sm:rounded-[36px] p-6 sm:p-9 border-2 border-emerald-300 shadow-md flex flex-col justify-between relative overflow-hidden ring-1 ring-emerald-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 bg-emerald-100 text-[#0c432d] font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-2xs">
                  <Cpu className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>The EduEden Transformation</span>
                </span>
                <span className="text-xs font-bold text-[#15803d]">Creative Creator</span>
              </div>

              <h3 className="font-serif-brand font-bold text-xl sm:text-2xl text-[#0c432d] mb-6">
                Building, coding &amp; inventing real digital projects
              </h3>

              <div className="space-y-4">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-emerald-200/80 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-[#0c432d]">{item.title}</div>
                      <div className="text-xs sm:text-[13px] text-[#1e4635] mt-0.5 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-emerald-200 flex items-center justify-between text-xs font-semibold text-[#0c432d]">
              <span>Outcome: Creative confidence &amp; computational fluency</span>
              <span className="text-[#10b981] font-bold">Growth 🌱</span>
            </div>
          </div>
        </div>

        {/* Transformation Highlights Strip */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 shadow-sm grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10b981] mx-auto flex items-center justify-center mb-2.5">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="font-serif-brand font-bold text-2xl sm:text-3xl text-[#0c432d]">94%</div>
            <div className="font-semibold text-xs sm:text-sm text-[#1e4635] mt-1">
              Parents report excitement to share weekly projects
            </div>
          </div>

          <div className="p-2 sm:border-x sm:border-emerald-100">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#f59e0b] mx-auto flex items-center justify-center mb-2.5">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="font-serif-brand font-bold text-2xl sm:text-3xl text-[#0c432d]">100%</div>
            <div className="font-semibold text-xs sm:text-sm text-[#1e4635] mt-1">
              Active build time (zero passive lecture slides)
            </div>
          </div>

          <div className="p-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#15803d] mx-auto flex items-center justify-center mb-2.5">
              <Users className="w-5 h-5" />
            </div>
            <div className="font-serif-brand font-bold text-2xl sm:text-3xl text-[#0c432d]">1 : 4</div>
            <div className="font-semibold text-xs sm:text-sm text-[#1e4635] mt-1">
              Small cohort ratio for personal mentor attention
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-10 text-center px-2">
          <a
            href="#free-demo"
            className="inline-flex items-center justify-center text-center gap-2 bg-[#0c432d] hover:bg-[#15803d] text-white font-extrabold px-5 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all group max-w-full"
          >
            <span>Experience The Transformation (Free 45-Min Class)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#f59e0b] shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
