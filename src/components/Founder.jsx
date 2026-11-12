import { Quote, Sparkles, Heart } from "lucide-react";

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-12 sm:py-16 lg:py-20 bg-[#fbfdf9] text-[#0c432d] relative overflow-hidden border-t border-emerald-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
          <span className="inline-flex items-center gap-1.5 text-[#15803d] font-extrabold uppercase tracking-widest text-xs bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Founder's Vision</span>
          </span>
          <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c432d] mt-3 tracking-tight">
            A Note From Our Founder
          </h2>
          <p className="mt-2 text-[#1e4635] text-sm sm:text-base">
            Reimagining learning so young minds build real creative confidence without academic burnout.
          </p>
        </div>

        {/* Featured Founder Showcase Card */}
        <div className="bg-gradient-to-br from-[#0c432d] via-[#0e3b28] to-[#15803d] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 lg:p-9 xl:p-10 shadow-[0_25px_60px_-15px_rgba(12,67,45,0.32)] relative overflow-hidden border-2 border-emerald-600/30">
          {/* Ambient Glow Accents */}
          <div
            className="absolute -top-24 -left-24 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center relative z-10">
            {/* Left Column: Shivani Gupta Portrait (Full Uncropped Photo) */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-center items-center">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-200/40 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none group bg-emerald-950/20">
                <img
                  src="/founder/shivani-gupta.jpg"
                  alt="Shivani Gupta - Founder & CEO of EduEden"
                  width="480"
                  height="695"
                  loading="lazy"
                  className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right Column: Floating White Quote Card */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 xl:p-9 shadow-2xl border border-emerald-100 flex flex-col justify-between text-[#0c432d]">
                <div>
                  {/* Top Badge Strip */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#15803d] shadow-2xs">
                      <Quote className="w-5 h-5 fill-[#15803d]" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#15803d] bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full">
                      <Heart className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
                      <span>Child-First Pedagogy</span>
                    </span>
                  </div>

                  {/* Core Brand Tagline Quote */}
                  <blockquote className="font-serif-brand font-bold text-lg sm:text-xl lg:text-[23px] xl:text-[25px] text-[#0c432d] leading-snug tracking-tight">
                    “My mission is to transform screen time from passive consumption into a creative superpower — so every child learns to build the future, not just scroll through it.”
                  </blockquote>

                  {/* Brand Philosophy */}
                  <p className="mt-3.5 text-[#1e4635]/90 text-xs sm:text-[13.5px] lg:text-sm leading-relaxed font-normal">
                    We founded EduEden with a simple conviction: childhood should be filled with joyful curiosity, not exhausting academic drills. When children learn algorithmic problem-solving through hands-on game design and supervised AI, they unlock lifelong cognitive confidence — while having the time of their lives.
                  </p>
                </div>

                {/* Founder Attribution */}
                <div className="mt-5 pt-4 sm:mt-6 sm:pt-4 border-t border-emerald-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-base text-[#0c432d] tracking-tight">
                      Shivani Gupta
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#15803d]">
                      Founder &amp; CEO • EduEden
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
