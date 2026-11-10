import { Calendar, Laptop, Gamepad2, Award, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <Calendar className="w-6 h-6 text-[#10b981]" />,
      title: "Pick Your Free Demo Slot",
      desc: "Fill our simple 30-second form and pick an after-school or weekend time that fits your family routine. No credit card required.",
      tag: "Zero Cost • 30 Seconds",
    },
    {
      step: "02",
      icon: <Laptop className="w-6 h-6 text-[#f59e0b]" />,
      title: "Meet Your Dedicated Mentor",
      desc: "Join a live virtual classroom with a vetted, patient educator who explores your child's interests (gaming, art, space) and adapts to their pace.",
      tag: "Live 1:1 / 1:4 Ratio",
    },
    {
      step: "03",
      icon: <Gamepad2 className="w-6 h-6 text-[#15803d]" />,
      title: "Code & Play Their First Game",
      desc: "Your child writes real visual code, programs physics loops, and tests a working, playable game on their screen before the 45 minutes are up.",
      tag: "100% Tangible Output",
    },
    {
      step: "04",
      icon: <Award className="w-6 h-6 text-[#0c432d]" />,
      title: "Get Readiness Evaluation & Project Link",
      desc: "Receive a personalized cognitive readiness report, custom roadmap recommendations, and a permanent link to your child's game to play forever.",
      tag: "Custom Skill Assessment",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-[#fbfdf9] relative overflow-hidden border-t border-emerald-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <span className="inline-flex items-center gap-1.5 text-[#15803d] font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Zero-Friction Journey</span>
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-4 tracking-tight leading-tight">
            From First Click to Coded Game{" "}
            <span className="text-[#10b981]">in 4 Easy Steps</span>
          </h2>
          <p className="mt-4 text-[#1e4635] text-base sm:text-lg leading-relaxed">
            No complex installations, no technical jargon, and zero pressure. Here is how your child's creative adventure begins.
          </p>
        </div>

        {/* 4 Steps Grid with Progressive Connecting Line on Desktop */}
        <div className="relative">
          {/* Subtle Desktop Connector Bar */}
          <div
            className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-200 via-amber-200 to-emerald-300 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border-2 border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#f0fdf4] border border-emerald-200/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                      {item.icon}
                    </div>
                    <span className="font-serif-brand font-bold text-2xl sm:text-3xl text-emerald-300/80 group-hover:text-[#10b981] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-bold text-[#15803d] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                    {item.tag}
                  </span>

                  <h3 className="font-serif-brand font-bold text-lg sm:text-xl text-[#0c432d] leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[#1e4635] text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center gap-1.5 text-[11px] font-bold text-[#10b981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Safe &amp; Supervised</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confidence Assurance Strip */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 via-white to-amber-50/50 rounded-3xl p-6 sm:p-8 border-2 border-emerald-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-serif-brand font-bold text-lg text-[#0c432d]">
              Ready to witness your child's "aha!" moment?
            </div>
            <div className="text-xs sm:text-sm text-[#1e4635]">
              Slots for this week's 1-on-1 trial classes are filling up quickly.
            </div>
          </div>

          <a
            href="#free-demo"
            className="w-full sm:w-auto justify-center bg-[#0c432d] hover:bg-[#15803d] text-white font-extrabold px-7 py-3.5 rounded-full text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 group whitespace-nowrap"
          >
            <span>Book Free 45-Min Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#f59e0b] shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
