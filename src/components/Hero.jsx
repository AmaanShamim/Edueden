import { ArrowRight, CheckCircle2, Star, Sparkles, Gamepad2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-eden-gradient relative py-12 md:py-20 lg:py-24 border-b border-emerald-100/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        {/* Left Column: Headlines & CTA */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 border border-emerald-300 px-3.5 sm:px-4 py-1.5 font-bold text-[#0c432d] text-[11px] sm:text-sm tracking-wide mb-6 max-w-full shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0 animate-pulse" />
            <span className="truncate sm:whitespace-normal">K-8 Scratch Programming + Creative AI Playground</span>
          </div>

          <h1 className="font-serif-brand font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0c432d] tracking-tight leading-[1.15] sm:leading-[1.1]">
            Where Young Minds{" "}
            <span className="text-[#10b981]">Play, Code</span> &amp;{" "}
            <span className="text-[#f59e0b]">Grow!</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-medium text-[#1e4635] leading-relaxed">
            Empower your child to create real games, animated stories, and
            supervised AI inventions in a warm, encouraging ecosystem.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#free-demo"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-slate-900 font-extrabold px-8 py-4 rounded-full text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group text-base"
            >
              <span>Book Free Trial Class</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#playpaths"
              className="bg-white hover:bg-emerald-50 text-[#0c432d] border-2 border-emerald-200 font-bold px-7 py-4 rounded-full text-center shadow-xs transition-all"
            >
              Explore Playpaths
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-emerald-200/60 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-[#166534]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>Zero Prior Coding Needed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>Small Groups (1:4 Ratio)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>Safe Child-First Pedagogy</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Res Lifestyle Hero Photography with Themed Floating Cards */}
        <div className="relative pt-4 sm:pt-6 lg:pt-0 pb-6 sm:pb-8 lg:pb-0">
          {/* Ambient Glow Bubbles */}
          <div
            className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-emerald-400/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-amber-400/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Main Showcase Image Card */}
          <div className="relative group">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-2 border-emerald-200/90 bg-white p-2 sm:p-2.5">
              <img
                src="/hero/edueden-hero.jpg"
                alt="EduEden young students joyfully collaborating and coding games on a laptop in a sunlit botanical studio"
                width="1376"
                height="768"
                priority="true"
                className="w-full h-auto object-cover rounded-[20px] sm:rounded-[28px] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Top-Right Trust Badge */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md border border-emerald-200/90 rounded-full px-3 sm:px-3.5 py-1 sm:py-1.5 flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#0c432d] shadow-md">
                <Star className="w-3.5 h-3.5 text-[#f59e0b] fill-[#f59e0b]" />
                <span>Rated 4.9/5 by 650+ Parents</span>
              </div>
            </div>

            {/* Top-Left Floating Live Pill */}
            <div className="hidden sm:inline-flex absolute -top-3 -left-3 bg-[#0c432d] text-white rounded-full px-4 py-1.5 text-xs font-extrabold shadow-lg items-center gap-2 border border-emerald-400/40">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>Live 1:4 Mentorship</span>
            </div>

            {/* Bottom-Left Floating Milestone Card */}
            <div className="absolute -bottom-5 -left-2 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-4 border-2 border-emerald-100 shadow-xl flex items-center gap-3 max-w-[240px] sm:max-w-[270px]">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#15803d] shrink-0 shadow-2xs">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-[#f59e0b] mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
                  ))}
                </div>
                <div className="font-serif-brand font-bold text-xs sm:text-sm text-[#0c432d] truncate">
                  "I coded my first game!"
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#1e4635]/80 font-medium truncate">
                  Rhea, Grade 3 • Explorers
                </div>
              </div>
            </div>

            {/* Bottom-Right Floating Feature Pill */}
            <div className="hidden md:inline-flex absolute -bottom-3 right-6 bg-emerald-50/95 backdrop-blur-md border border-emerald-200/90 text-[#0c432d] rounded-full px-3.5 py-1 text-[11px] font-extrabold items-center gap-1.5 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Kid-Safe AI Wonder Lab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
