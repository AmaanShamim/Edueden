import { useState, useRef, useEffect } from "react";
import {
  Star,
  CheckCircle2,
  Quote,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

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

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
  };

  // Calculate the exact distance to slide precisely ONE review card (card width + gap)
  const getCardScrollStep = () => {
    if (!scrollContainerRef.current) return 380;
    const cards = scrollContainerRef.current.querySelectorAll("[data-testimonial-card]");
    if (cards.length >= 2) {
      const delta = cards[1].offsetLeft - cards[0].offsetLeft;
      if (delta > 0) return delta;
    }
    if (cards.length === 1) {
      return cards[0].offsetWidth + 24;
    }
    return 380;
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    const timer = setTimeout(updateScrollState, 100);
    return () => clearTimeout(timer);
  }, [activeFilter, filteredTestimonials.length]);

  useEffect(() => {
    updateScrollState();
    const handleResize = () => updateScrollState();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intercept horizontal scroll/wheel gestures so it slides strictly one review at a time
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isThrottled = false;

    const handleWheel = (e) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
      if (isHorizontal && (Math.abs(e.deltaX) > 8 || (e.shiftKey && Math.abs(e.deltaY) > 8))) {
        e.preventDefault();
        if (isThrottled) return;

        isThrottled = true;
        const step = getCardScrollStep();
        const direction = e.deltaX > 0 || (e.shiftKey && e.deltaY > 0) ? 1 : -1;

        container.scrollBy({
          left: direction * step,
          behavior: "smooth",
        });

        setTimeout(() => {
          isThrottled = false;
        }, 380);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const step = getCardScrollStep();
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

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

        {/* Category Filters + Navigation Arrows Toolbar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                type="button"
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-[#0c432d] text-white shadow-sm scale-105"
                    : "bg-white text-[#0c432d] border border-emerald-200 hover:bg-emerald-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left to previous reviews"
              className={`w-10 h-10 rounded-full border-2 border-emerald-200 bg-white text-[#0c432d] flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                canScrollLeft
                  ? "hover:bg-[#0c432d] hover:text-white hover:border-[#0c432d] hover:scale-105"
                  : "opacity-35 cursor-not-allowed hover:bg-white hover:text-[#0c432d]"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right to next reviews"
              className={`w-10 h-10 rounded-full border-2 border-emerald-200 bg-white text-[#0c432d] flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                canScrollRight
                  ? "hover:bg-[#0c432d] hover:text-white hover:border-[#0c432d] hover:scale-105"
                  : "opacity-35 cursor-not-allowed hover:bg-white hover:text-[#0c432d]"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport with Side Floating Arrows */}
        <div className="relative mt-8">
          {/* Left Floating Arrow (visible on md+) */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous reviews"
            className={`hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-emerald-200 text-[#0c432d] shadow-lg items-center justify-center transition-all cursor-pointer ${
              canScrollLeft
                ? "hover:bg-[#0c432d] hover:text-white hover:border-[#0c432d] hover:scale-105"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Single Row Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollState}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 no-scrollbar [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                data-testimonial-card
                className="w-[88%] sm:w-[360px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start snap-always bg-white rounded-[28px] p-7 border-2 border-emerald-100/90 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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
                    <div className="relative w-11 h-11 shrink-0">
                      {item.avatar && (
                        <img
                          src={item.avatar}
                          alt={item.name}
                          width="44"
                          height="44"
                          loading="lazy"
                          className="w-11 h-11 rounded-full object-cover border-2 border-emerald-200/90 shadow-2xs"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      )}
                      <div
                        className={`w-11 h-11 rounded-full ${item.avatarBg} font-bold text-sm flex items-center justify-center border-2 border-emerald-200/90 shadow-2xs absolute inset-0 -z-10`}
                      >
                        {item.initials}
                      </div>
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

          {/* Right Floating Arrow (visible on md+) */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next reviews"
            className={`hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-emerald-200 text-[#0c432d] shadow-lg items-center justify-center transition-all cursor-pointer ${
              canScrollRight
                ? "hover:bg-[#0c432d] hover:text-white hover:border-[#0c432d] hover:scale-105"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Swipe / Arrow Hint */}
        <p className="text-center text-xs text-[#166534]/70 mt-3 sm:hidden">
          Swipe or use arrows to view more parent stories
        </p>
      </div>
    </section>
  );
}
