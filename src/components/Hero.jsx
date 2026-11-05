import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-eden-gradient relative py-12 md:py-20 lg:py-24 border-b border-emerald-100/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headlines & CTA */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 border border-emerald-300 px-4 py-1.5 font-bold text-[#0c432d] text-xs sm:text-sm tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span>K-8 Scratch Programming + Creative AI Playground</span>
          </div>

          <h1 className="font-serif-brand font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0c432d] tracking-tight leading-[1.1]">
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

        {/* Right Column: Custom Nature & Coding Illustration */}
        <div className="relative filter drop-shadow-2xl">
          <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-emerald-200/40 blur-xl pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-amber-200/50 blur-2xl pointer-events-none" />

          <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-[36px] border-2 border-emerald-100 shadow-xl relative overflow-hidden">
            {/* Floating micro-badge */}
            <div className="absolute top-4 right-4 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 flex items-center gap-1.5 text-xs font-bold text-[#0c432d]">
              <Star className="w-3.5 h-3.5 text-[#f59e0b] fill-[#f59e0b]" />
              <span>Rated 4.9/5 by 650+ Parents</span>
            </div>

            <svg
              viewBox="0 0 540 400"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="EduEden playful learning illustration"
            >
              {/* Ground Mound */}
              <ellipse cx="270" cy="360" rx="240" ry="32" fill="#dcfce7" />
              <ellipse cx="270" cy="360" rx="190" ry="20" fill="#bbf7d0" />

              {/* EduEden Center Tree Mascot */}
              <g transform="translate(225, 120)">
                <path
                  d="M45 70V160C45 180 32 195 24 195C16 195 14 180 17 165C20 150 30 135 45 120Z"
                  fill="#0c432d"
                />
                <circle cx="20" cy="80" r="28" fill="#16a34a" />
                <circle cx="48" cy="50" r="32" fill="#22c55e" />
                <circle cx="75" cy="80" r="28" fill="#86efac" />
                <circle cx="68" cy="115" r="20" fill="#f59e0b" />
                <circle cx="30" cy="110" r="18" fill="#10b981" />
                {/* Happy face on tree */}
                <circle cx="42" cy="74" r="3.5" fill="#ffffff" />
                <circle cx="56" cy="74" r="3.5" fill="#ffffff" />
                <path
                  d="M44 84Q49 89 54 84"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>

              {/* Left Student Coding Sprite */}
              <g transform="translate(60, 180)">
                {/* Kid Body */}
                <rect
                  x="35"
                  y="80"
                  width="50"
                  height="70"
                  rx="18"
                  fill="#10b981"
                />
                {/* Kid Head */}
                <circle cx="60" cy="52" r="26" fill="#fde047" />
                <circle cx="60" cy="48" r="24" fill="#fed7aa" />
                <path d="M40 38Q60 20 80 38" fill="#451a03" />
                <circle cx="53" cy="48" r="3" fill="#1e293b" />
                <circle cx="67" cy="48" r="3" fill="#1e293b" />
                <path
                  d="M56 56Q60 60 64 56"
                  stroke="#451a03"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Laptop with Scratch Blocks */}
                <rect
                  x="70"
                  y="105"
                  width="50"
                  height="34"
                  rx="4"
                  fill="#0c432d"
                />
                <rect
                  x="74"
                  y="109"
                  width="42"
                  height="26"
                  rx="2"
                  fill="#ecfdf5"
                />
                <rect
                  x="78"
                  y="114"
                  width="22"
                  height="4"
                  rx="2"
                  fill="#f59e0b"
                />
                <rect
                  x="78"
                  y="122"
                  width="30"
                  height="4"
                  rx="2"
                  fill="#10b981"
                />
                <rect
                  x="78"
                  y="129"
                  width="16"
                  height="4"
                  rx="2"
                  fill="#0284c7"
                />
                <path d="M60 140H130L125 146H65Z" fill="#94a3b8" />
              </g>

              {/* Right Student Coding Sprite */}
              <g transform="translate(360, 180)">
                <rect
                  x="35"
                  y="80"
                  width="50"
                  height="70"
                  rx="18"
                  fill="#f59e0b"
                />
                <circle cx="60" cy="48" r="24" fill="#fbcfe8" />
                <path d="M38 40Q60 18 82 40" fill="#312e81" />
                <circle cx="53" cy="48" r="3" fill="#1e293b" />
                <circle cx="67" cy="48" r="3" fill="#1e293b" />
                <path
                  d="M56 56Q60 60 64 56"
                  stroke="#312e81"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Laptop */}
                <rect
                  x="0"
                  y="105"
                  width="50"
                  height="34"
                  rx="4"
                  fill="#0c432d"
                />
                <rect
                  x="4"
                  y="109"
                  width="42"
                  height="26"
                  rx="2"
                  fill="#fefce8"
                />
                <path
                  d="M12 118L18 123L12 128"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <rect
                  x="22"
                  y="120"
                  width="18"
                  height="3.5"
                  rx="1.5"
                  fill="#f59e0b"
                />
                <path d="M-10 140H60L55 146H-5Z" fill="#94a3b8" />
              </g>

              {/* Mini AI Robot Companion */}
              <g transform="translate(190, 240)">
                <rect
                  x="0"
                  y="10"
                  width="36"
                  height="30"
                  rx="10"
                  fill="#ffffff"
                  stroke="#0c432d"
                  strokeWidth="3"
                />
                <rect
                  x="6"
                  y="17"
                  width="24"
                  height="14"
                  rx="5"
                  fill="#0c432d"
                />
                <circle cx="13" cy="24" r="2.5" fill="#4ade80" />
                <circle cx="23" cy="24" r="2.5" fill="#4ade80" />
                <path
                  d="M18 10V3"
                  stroke="#0c432d"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="18" cy="2" r="3.5" fill="#f59e0b" />
              </g>

              {/* Sprouts and floating flowers */}
              <path
                d="M130 330Q135 310 145 315Q140 330 130 330Z"
                fill="#22c55e"
              />
              <path
                d="M420 330Q425 310 435 315Q430 330 420 330Z"
                fill="#16a34a"
              />
              <circle cx="110" cy="140" r="5" fill="#f59e0b" />
              <circle cx="440" cy="130" r="4" fill="#10b981" />
              <circle cx="470" cy="160" r="6" fill="#86efac" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

