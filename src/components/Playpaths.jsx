import { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { playpaths, playpathTabs } from "../data/content";

export default function Playpaths() {
  const [activeTab, setActiveTab] = useState("explorers");
  const currentPath = playpaths[activeTab];

  return (
    <section id="playpaths" className="py-20 lg:py-28 bg-[#fbfdf9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#15803d] font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
            Curriculum Designed For Growing Minds
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-4 tracking-tight">
            Choose Your Child's Learning Playpath
          </h2>
          <p className="mt-3 text-[#1e4635] text-base sm:text-lg">
            Structured in progressive stages so children build confidence,
            creative thinking, and technical fluency naturally.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {playpathTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              className={`px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#0c432d] text-white shadow-md scale-105"
                  : "bg-white text-[#0c432d] border border-emerald-200 hover:bg-emerald-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Playpath Detail Card */}
        <div className="mt-8 max-w-4xl mx-auto bg-white rounded-[32px] sm:rounded-[36px] border-2 border-emerald-100 p-6 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <span className="inline-block bg-emerald-100 text-[#0c432d] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                {currentPath.badge}
              </span>
              <h3 className="font-serif-brand font-bold text-2xl sm:text-3xl text-[#0c432d]">
                {currentPath.title}
              </h3>
              <p className="mt-4 text-[#1e4635] leading-relaxed text-[15px]">
                {currentPath.summary}
              </p>

              <h4 className="font-bold text-sm text-[#0c432d] uppercase tracking-wider mt-6 mb-3">
                Core Skills Acquired:
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {currentPath.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-[#166534] font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#free-demo"
                  className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all"
                >
                  <span>Book Trial for This Level</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Showcase Project Box */}
            <div className="bg-[#f0fdf4] rounded-[28px] p-6 border border-emerald-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#15803d] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-[#f59e0b]" />
                  <span>Featured Capstone</span>
                </div>
                <h5 className="font-serif-brand font-bold text-lg text-[#0c432d] mb-2">
                  Hands-on Graduation Build
                </h5>
                <p className="text-sm text-[#1e4635] leading-relaxed">
                  {currentPath.project}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-200/60 flex items-center justify-between text-xs font-semibold text-[#0c432d]">
                <span>Cohort Size: 4 Students</span>
                <span className="text-[#f59e0b] font-bold">
                  100% Mentored
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

