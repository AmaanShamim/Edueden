import { ArrowRight } from "lucide-react";
import { courses } from "../data/content";

export default function Courses() {
  return (
    <section
      id="courses"
      className="py-20 lg:py-24 bg-[#f0fdf4] border-y border-emerald-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[#15803d] font-extrabold uppercase tracking-widest text-xs sm:text-sm">
              Our Evergreen Studios
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-2 tracking-tight">
              Popular Studio Tracks
            </h2>
          </div>
          <p className="text-[#1e4635] max-w-md text-sm sm:text-base">
            Each module blends playful engineering, creative arts, and
            foundational computer science principles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`${course.bg} rounded-[28px] p-7 border ${course.border} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs grid place-items-center">
                    {course.icon}
                  </div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${course.badgeColor}`}
                  >
                    {course.badge}
                  </span>
                </div>
                <h3 className="font-serif-brand font-bold text-xl text-[#0c432d]">
                  {course.title}
                </h3>
                <p className="mt-3 text-[#1e4635] text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-200/40">
                <a
                  href="#free-demo"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c432d] hover:text-[#10b981]"
                >
                  <span>Check Demo Slots</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

