import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const demoElement = document.getElementById("free-demo");

      // Show after scrolling 360px down from Hero
      if (scrollY < 360) {
        setIsVisible(false);
        return;
      }

      // Hide if the demo booking section is currently visible on screen
      if (demoElement) {
        const rect = demoElement.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          setIsVisible(false);
          return;
        }
      }

      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-emerald-200/80 shadow-[0_-8px_25px_rgba(12,67,45,0.12)] px-4 py-2.5 transition-all duration-300 animate-slideUp"
      role="region"
      aria-label="Quick Demo Booking Bar"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Micro Value Proposition */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#15803d]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
            <span className="truncate">Free 45-Min Demo</span>
          </div>
          <span className="text-[11px] font-bold text-[#0c432d] truncate">
            1:4 Ratio • Zero Prep Needed
          </span>
        </div>

        {/* CTA Button */}
        <a
          href="#free-demo"
          className="shrink-0 bg-[#0c432d] hover:bg-[#15803d] active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-md flex items-center gap-1.5 transition-all"
        >
          <span>Claim Spot</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
