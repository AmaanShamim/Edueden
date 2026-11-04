import React, { useState } from "react";
import { ChevronDown, Sparkles, MessageCircle, HelpCircle, CheckCircle2 } from "lucide-react";
import { faqs, faqCategories } from "../data/content";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = faqs.filter((faq) => {
    if (activeCategory === "all") return true;
    return faq.category === activeCategory;
  });

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#fbfdf9] border-t border-emerald-100/80">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-[#15803d] font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Got Questions? We Have Answers</span>
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body mt-3 text-[#1e4635] text-base sm:text-lg">
            Everything you need to know about our K-8 playful curriculum, mentor matching, kid-safe AI, and flexible scheduling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
              className={`font-serif-brand px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0c432d] text-white shadow-sm scale-105"
                  : "bg-white text-[#0c432d] border border-emerald-200 hover:bg-emerald-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#f0fdf4] border-emerald-300 shadow-sm ring-1 ring-emerald-200/60"
                    : "bg-white border-emerald-100 hover:border-emerald-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-brand font-semibold text-lg sm:text-xl text-[#0c432d] leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 shadow-xs ${
                      isOpen
                        ? "bg-[#10b981] text-white shadow-emerald-200"
                        : "bg-emerald-50 text-[#0c432d] border border-emerald-200/80"
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
                  <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-emerald-200/60 font-body animate-fadeIn">
                    {faq.takeaway && (
                      <div className="mb-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0c432d] bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                        <span>{faq.takeaway}</span>
                      </div>
                    )}
                    <div className="text-[#1e4635] text-sm sm:text-[15px] leading-relaxed space-y-2 whitespace-pre-line font-normal">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help / Contact Card */}
        <div className="mt-14 bg-gradient-to-br from-emerald-50 to-[#f0fdf4] border-2 border-emerald-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#0c432d] text-white flex items-center justify-center shrink-0 shadow-xs">
              <MessageCircle className="w-6 h-6 text-[#f59e0b]" />
            </div>
            <div>
              <h4 className="font-serif-brand font-bold text-lg text-[#0c432d]">
                Still have questions about your child's age group?
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#1e4635] mt-0.5">
                Our academic coordinators are here to assist with curriculum guidance and timing.
              </p>
            </div>
          </div>
          <a
            href="#free-demo"
            className="font-serif-brand font-bold text-sm bg-[#0c432d] hover:bg-[#15803d] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 shrink-0 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Book 1-on-1 Free Demo</span>
            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
          </a>
        </div>
      </div>
    </section>
  );
}
