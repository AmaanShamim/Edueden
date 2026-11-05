export default function TopBanner() {
  return (
    <aside aria-label="Announcement" className="relative z-50 bg-[#0c432d] text-emerald-100 text-xs sm:text-sm font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping shrink-0" />
      <span>
        🌱 Winter 2026 Admissions Open! Free 1-on-1 demo classes available
        this week.
      </span>
    </aside>
  );
}

