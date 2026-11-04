import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/content";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#fbfdf9]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <span className="text-[#15803d] font-extrabold uppercase tracking-widest text-xs sm:text-sm">
            Clear Answers
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#f0fdf4] border border-emerald-200/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#0c432d] text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 shadow-sm ${
                      isOpen
                        ? "bg-[#10b981] text-white"
                        : "bg-white text-[#0c432d] border border-emerald-200/80"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-white" : "text-[#0c432d]"
                      }`}
                    />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-[#1e4635] leading-relaxed text-sm sm:text-base border-t border-emerald-200/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
