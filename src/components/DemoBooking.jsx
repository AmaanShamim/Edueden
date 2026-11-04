import React, { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function DemoBooking() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childGrade: "",
    parentPhone: "",
    focusTopic: "Scratch Game Development",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      parentName: "",
      childName: "",
      childGrade: "",
      parentPhone: "",
      focusTopic: "Scratch Game Development",
    });
  };

  return (
    <section
      id="free-demo"
      className="py-20 lg:py-28 bg-[#f0fdf4] border-t border-emerald-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-[#a16207] font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-amber-100/70 border border-amber-300 px-3.5 py-1 rounded-full">
            Zero Cost • 100% Free Demo
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-3 tracking-tight">
            Watch Your Child Code Their First Project!
          </h2>
          <p className="font-body mt-4 text-[#1e4635] leading-relaxed text-base sm:text-lg">
            Join a complimentary 45-minute interactive class. Your child
            will work 1-on-1 or in a tiny cohort with our teacher to create
            an animated game they can proudly share with friends.
          </p>

          <div className="mt-8 space-y-3.5 font-body">
            <div className="flex items-center gap-3 text-sm text-[#0c432d] font-semibold">
              <div className="w-7 h-7 rounded-full bg-emerald-200 grid place-items-center text-[#0c432d] font-bold">
                ✓
              </div>
              <span>
                No credit card required &amp; no pressure commitment
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#0c432d] font-semibold">
              <div className="w-7 h-7 rounded-full bg-emerald-200 grid place-items-center text-[#0c432d] font-bold">
                ✓
              </div>
              <span>
                Receive an instant Personalized Readiness Evaluation
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#0c432d] font-semibold">
              <div className="w-7 h-7 rounded-full bg-emerald-200 grid place-items-center text-[#0c432d] font-bold">
                ✓
              </div>
              <span>
                Includes project access link to play at home forever
              </span>
            </div>
          </div>
        </div>

        {/* Right form card */}
        <div className="bg-white rounded-[36px] p-7 sm:p-10 shadow-xl border-2 border-emerald-100">
          {formSubmitted ? (
            <div className="text-center py-10 font-body">
              <div className="w-16 h-16 bg-emerald-100 text-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif-brand text-2xl font-bold text-[#0c432d]">
                Demo Class Requested!
              </h3>
              <p className="text-[#1e4635] mt-3 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you,{" "}
                <span className="font-bold text-[#0c432d]">
                  {formData.parentName || "Parent"}
                </span>
                ! We can't wait to meet{" "}
                <span className="font-bold text-[#0c432d]">
                  {formData.childName || "your child"}
                </span>
                . Our academic coordinator will contact your WhatsApp at{" "}
                <span className="font-bold text-[#0c432d]">
                  {formData.parentPhone || "your number"}
                </span>{" "}
                to schedule your free session.
              </p>

              <button
                onClick={handleReset}
                type="button"
                className="mt-6 text-sm font-bold text-[#10b981] hover:text-[#0c432d] underline cursor-pointer"
              >
                Submit another child's enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="font-body">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif-brand text-2xl font-bold text-[#0c432d]">
                  Book a Free Trial Session
                </h3>
                <span className="text-xs font-bold text-[#f59e0b] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  ⚡ 4 Slots Left Today
                </span>
              </div>

              <div className="space-y-4">
                {/* Parent Name & Child Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-[#0c432d] mb-1.5"
                      htmlFor="parentName"
                    >
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="parentName"
                      name="parentName"
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="e.g., Sarah Parker"
                      className="w-full bg-[#fbfdf9] border-2 border-emerald-100 focus:border-[#10b981] focus:bg-white rounded-2xl px-4 py-3 text-slate-800 placeholder-slate-400 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-[#0c432d] mb-1.5"
                      htmlFor="childName"
                    >
                      Child's Name *
                    </label>
                    <input
                      id="childName"
                      name="childName"
                      type="text"
                      required
                      value={formData.childName}
                      onChange={handleInputChange}
                      placeholder="e.g., Leo Parker"
                      className="w-full bg-[#fbfdf9] border-2 border-emerald-100 focus:border-[#10b981] focus:bg-white rounded-2xl px-4 py-3 text-slate-800 placeholder-slate-400 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Child Grade & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-[#0c432d] mb-1.5"
                      htmlFor="childGrade"
                    >
                      Child's Grade / Age *
                    </label>
                    <select
                      id="childGrade"
                      name="childGrade"
                      required
                      value={formData.childGrade}
                      onChange={handleInputChange}
                      className="w-full bg-[#fbfdf9] border-2 border-emerald-100 focus:border-[#10b981] focus:bg-white rounded-2xl px-4 py-3 text-slate-800 outline-none text-sm transition-all"
                    >
                      <option value="">Select Grade Level...</option>
                      <option value="k2">
                        Sprouts: Kindergarten - Grade 2 (Age 5-7)
                      </option>
                      <option value="g35">
                        Explorers: Grades 3 - 5 (Age 8-10)
                      </option>
                      <option value="g68">
                        Innovators: Grades 6 - 8 (Age 11-14)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-[#0c432d] mb-1.5"
                      htmlFor="parentPhone"
                    >
                      WhatsApp / Phone *
                    </label>
                    <input
                      id="parentPhone"
                      name="parentPhone"
                      type="tel"
                      required
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#fbfdf9] border-2 border-emerald-100 focus:border-[#10b981] focus:bg-white rounded-2xl px-4 py-3 text-slate-800 placeholder-slate-400 outline-none text-sm transition-all"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-[#0c432d] hover:bg-[#15803d] text-white font-extrabold py-4 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Free Demo Class</span>
                <Sparkles className="w-4 h-4 text-[#f59e0b]" />
              </button>

              <p className="text-center mt-3 text-xs text-[#166534]">
                🔒 Guaranteed spam-free. We only coordinate class timing via
                WhatsApp or email.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
