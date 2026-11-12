import { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";

export default function CookieBanner({ onOpenPrivacy }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("edueden_privacy_consent");
      if (!consent) {
        // Small delay so it doesn't jarringly pop up immediately on first paint
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage might be disabled in private browsing
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("edueden_privacy_consent", "accepted");
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-[#0c432d] text-white rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-emerald-400/40 animate-slideUp"
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-800/80 border border-emerald-400/30 flex items-center justify-center shrink-0 text-[#10b981]">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-serif-brand font-bold text-sm text-white flex items-center gap-1.5">
              <span>Kid-Safe &amp; Privacy First</span>
            </h4>
            <button
              type="button"
              onClick={handleAccept}
              aria-label="Dismiss privacy notice"
              className="text-emerald-300 hover:text-white transition-colors cursor-pointer p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-1 text-xs text-emerald-100/90 leading-relaxed">
            We use privacy-preserving telemetry to measure page speed. We{" "}
            <strong>never</strong> deploy third-party advertising cookies, cross-site trackers, or sell student information.
          </p>
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={handleAccept}
              className="bg-[#10b981] hover:bg-[#059669] text-[#0c432d] font-bold text-xs px-4 py-1.5 rounded-full shadow-sm transition-all cursor-pointer"
            >
              Got It
            </button>
            <button
              type="button"
              onClick={() => {
                if (onOpenPrivacy) onOpenPrivacy("privacy");
                else window.location.hash = "#privacy";
              }}
              className="text-xs text-emerald-200 hover:text-white underline transition-colors cursor-pointer"
            >
              Read Privacy Charter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
