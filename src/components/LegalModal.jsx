import { useEffect } from "react";
import {
  X,
  Printer,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Phone,
  Mail,
} from "lucide-react";
import { legalDocuments } from "../data/legalContent";

export default function LegalModal({ isOpen, activeTab, onClose, onTabChange }) {
  // Close on ESC key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDoc = legalDocuments[activeTab] || legalDocuments.privacy;

  const tabs = [
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: <ShieldCheck className="w-4 h-4 text-[#10b981]" />,
    },
    {
      id: "safety",
      label: "Student Safety Charter",
      icon: <HeartHandshake className="w-4 h-4 text-[#f59e0b]" />,
    },
    {
      id: "pedagogy",
      label: "Pedagogy Standards",
      icon: <BookOpen className="w-4 h-4 text-[#15803d]" />,
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-doc-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
    >
      {/* Click outside backdrop to close */}
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl border-2 border-emerald-100 flex flex-col overflow-hidden animate-slideUp">
        {/* Sticky Header */}
        <div className="bg-[#fbfdf9] border-b border-emerald-100 px-5 sm:px-8 py-4 sm:py-5 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0c432d]">
              EduEden Official Governance &amp; Standards
            </span>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handlePrint}
              type="button"
              title="Print document or Save as PDF"
              aria-label="Print document"
              className="px-3 py-1.5 rounded-xl border border-emerald-200 bg-white text-[#0c432d] hover:bg-emerald-50 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              aria-label="Close document modal"
              className="w-9 h-9 rounded-full bg-emerald-50 hover:bg-emerald-100 text-[#0c432d] flex items-center justify-center transition-colors cursor-pointer border border-emerald-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher Pills */}
        <div className="bg-emerald-50/60 px-5 sm:px-8 py-2.5 border-b border-emerald-100 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                type="button"
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0c432d] text-white shadow-xs"
                    : "bg-white/80 text-[#0c432d] hover:bg-white border border-emerald-200/80"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto slim-scrollbar space-y-8 font-body text-[#1e4635] text-sm sm:text-base leading-relaxed">
          {/* Header Banner */}
          <div className="border-b border-emerald-100 pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#15803d] bg-emerald-100/70 border border-emerald-300 px-3 py-0.5 rounded-full">
                Verified Compliance
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Last Updated: {currentDoc.lastUpdated}
              </span>
            </div>
            <h1
              id="legal-doc-title"
              className="font-serif-brand text-2xl sm:text-4xl font-bold text-[#0c432d]"
            >
              {currentDoc.title}
            </h1>
            <p className="mt-2 text-[#1e4635] text-sm sm:text-base max-w-2xl">
              {currentDoc.subtitle}
            </p>
          </div>

          {/* Sections List */}
          <div className="space-y-8">
            {currentDoc.sections.map((sec, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="font-serif-brand text-lg sm:text-xl font-bold text-[#0c432d]">
                  {sec.heading}
                </h2>
                <div className="whitespace-pre-line text-[#1e4635] bg-[#fbfdf9] p-4 sm:p-5 rounded-2xl border border-emerald-100/80">
                  {sec.content}
                </div>
              </section>
            ))}
          </div>

          {/* Contact & Verification Card */}
          <div className="mt-10 p-6 bg-emerald-50/70 border-2 border-emerald-200 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h3 className="font-serif-brand font-bold text-base text-[#0c432d]">
                Have questions or need family record assistance?
              </h3>
              <p className="text-xs text-[#1e4635] mt-1">
                Our Academic Dean &amp; Privacy Compliance Officer are available 7 days a week.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-semibold text-[#0c432d]">
                <a
                  href="https://wa.me/919153573335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#10b981]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>WhatsApp: +91-9153573335</span>
                </a>
                <a
                  href="mailto:support@edueden.online"
                  className="flex items-center gap-1.5 hover:text-[#10b981]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>support@edueden.online</span>
                </a>
              </div>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0c432d] hover:bg-[#15803d] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer text-center"
            >
              Back to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

