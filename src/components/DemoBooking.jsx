import { useState, useRef, useEffect } from "react";
import {
  CheckCircle2,
  Sparkles,
  Loader2,
  AlertCircle,
  ChevronDown,
  Check,
} from "lucide-react";

// Supported Country Codes with dial codes and digit limits
const COUNTRY_CODES = [
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India (+91)", maxDigits: 10, placeholder: "98765 43210" },
  { code: "+1", country: "US", flag: "🇺🇸", name: "USA / Canada (+1)", maxDigits: 10, placeholder: "555 123 4567" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "UK (+44)", maxDigits: 10, placeholder: "7911 123456" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE (+971)", maxDigits: 9, placeholder: "50 123 4567" },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore (+65)", maxDigits: 8, placeholder: "8123 4567" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia (+61)", maxDigits: 9, placeholder: "412 345 678" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia (+966)", maxDigits: 9, placeholder: "50 123 4567" },
  { code: "+974", country: "QA", flag: "🇶🇦", name: "Qatar (+974)", maxDigits: 8, placeholder: "3312 3456" },
  { code: "+968", country: "OM", flag: "🇴🇲", name: "Oman (+968)", maxDigits: 8, placeholder: "9123 4567" },
  { code: "+965", country: "KW", flag: "🇰🇼", name: "Kuwait (+965)", maxDigits: 8, placeholder: "5123 4567" },
  { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia (+60)", maxDigits: 10, placeholder: "12 345 6789" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany (+49)", maxDigits: 11, placeholder: "151 12345678" },
];

const GRADE_OPTIONS = [
  {
    value: "Sprouts: Kindergarten - Grade 2 (Age 5-7)",
    title: "Sprouts (K–2)",
    subtitle: "Ages 5–7 • ScratchJr & Story Play",
    icon: "🌱",
    badge: "Beginner Friendly",
    badgeColor: "bg-emerald-100 text-emerald-800",
  },
  {
    value: "Explorers: Grades 3 - 5 (Age 8-10)",
    title: "Explorers (Grades 3–5)",
    subtitle: "Ages 8–10 • Scratch 3.0 & Playful AI",
    icon: "🚀",
    badge: "Most Popular",
    badgeColor: "bg-amber-100 text-amber-900",
  },
  {
    value: "Innovators: Grades 6 - 8 (Age 11-14)",
    title: "Innovators (Grades 6–8)",
    subtitle: "Ages 11–14 • Real Python & Smart Bots",
    icon: "💡",
    badge: "Text Code & AI",
    badgeColor: "bg-teal-100 text-teal-800",
  },
];

// Google Apps Script Web App Endpoint (configured via .env or hosting environment variables)
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || "";

export default function DemoBooking() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidField, setInvalidField] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isGradeOpen, setIsGradeOpen] = useState(false);

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phoneNumber: "",
    childGrade: "",
    websiteUrl: "", // Anti-bot honeypot
  });

  const countryRef = useRef(null);
  const gradeRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
      if (gradeRef.current && !gradeRef.current.contains(event.target)) {
        setIsGradeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
    if (invalidField === name) setInvalidField("");
  };

  const handlePhoneChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    if (onlyNums.length <= selectedCountry.maxDigits) {
      setFormData((prev) => ({ ...prev, phoneNumber: onlyNums }));
      if (errorMessage) setErrorMessage("");
      if (invalidField === "phoneNumber") setInvalidField("");
    }
  };

  const handleCountrySelect = (chosen) => {
    setSelectedCountry(chosen);
    setIsCountryOpen(false);
    setFormData((prev) => ({
      ...prev,
      phoneNumber: prev.phoneNumber.slice(0, chosen.maxDigits),
    }));
    if (invalidField === "phoneNumber") setInvalidField("");
  };

  const handleGradeSelect = (val) => {
    setFormData((prev) => ({ ...prev, childGrade: val }));
    setIsGradeOpen(false);
    if (errorMessage) setErrorMessage("");
    if (invalidField === "childGrade") setInvalidField("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validate Parent Name
    if (!formData.parentName.trim()) {
      setErrorMessage("Please enter the Parent or Guardian Name.");
      setInvalidField("parentName");
      return;
    }

    // 2. Validate Child Name
    if (!formData.childName.trim()) {
      setErrorMessage("Please enter your Child's Name.");
      setInvalidField("childName");
      return;
    }

    // 3. Validate Email
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your Email Address.");
      setInvalidField("email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address (e.g., name@example.com).");
      setInvalidField("email");
      return;
    }

    // 4. Validate Phone Number
    if (!formData.phoneNumber.trim()) {
      setErrorMessage(`Please enter your WhatsApp/Phone number.`);
      setInvalidField("phoneNumber");
      return;
    }

    if (formData.phoneNumber.length < selectedCountry.maxDigits) {
      setErrorMessage(
        `Please enter a full ${selectedCountry.maxDigits}-digit phone number for ${selectedCountry.name}.`
      );
      setInvalidField("phoneNumber");
      return;
    }

    // 5. Validate Grade Level
    if (!formData.childGrade) {
      setErrorMessage("Please select your child's Grade Level or Learning Track.");
      setInvalidField("childGrade");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setInvalidField("");

    // Prefix with single quote (') so Google Sheets stores international numbers (+91 ...) as text instead of throwing a "#ERROR! Formula parse error"
    const formattedPhoneForSheet = `'${selectedCountry.code} ${formData.phoneNumber}`;

    const payload = {
      parent_name: formData.parentName.trim(),
      child_name: formData.childName.trim(),
      email: formData.email.trim(),
      grade_level: formData.childGrade,
      phone: formattedPhoneForSheet,
      country_code: selectedCountry.code,
      phone_number: formData.phoneNumber,
      website_url: formData.websiteUrl,
    };

    try {
      if (
        GOOGLE_SCRIPT_URL &&
        GOOGLE_SCRIPT_URL !== "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
      ) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(payload),
        });
      } else {
        console.warn(
          "Google Apps Script URL is not configured yet. Set VITE_GOOGLE_APPS_SCRIPT_URL in your .env file."
        );
      }
      setFormSubmitted(true);
    } catch (err) {
      console.error("Failed to submit demo booking:", err);
      setErrorMessage(
        "Could not submit enquiry. Please check your connection or contact us directly on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setIsSubmitting(false);
    setErrorMessage("");
    setInvalidField("");
    setSelectedCountry(COUNTRY_CODES[0]);
    setIsCountryOpen(false);
    setIsGradeOpen(false);
    setFormData({
      parentName: "",
      childName: "",
      email: "",
      phoneNumber: "",
      childGrade: "",
      websiteUrl: "",
    });
  };

  const selectedGradeObj = GRADE_OPTIONS.find((g) => g.value === formData.childGrade);
  const isPhoneComplete = formData.phoneNumber.length === selectedCountry.maxDigits;

  return (
    <section
      id="free-demo"
      className="py-20 lg:py-28 bg-[#f0fdf4] border-t border-emerald-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 items-center">
        {/* Left text */}
        <div className="min-w-0">
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
        <div className="min-w-0 bg-white rounded-[36px] p-7 sm:p-10 shadow-xl border-2 border-emerald-100">
          {formSubmitted ? (
            <div className="text-center py-10 font-body animate-fadeIn">
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
                . Our academic coordinator will reach out to you via WhatsApp at{" "}
                <span className="font-bold text-[#0c432d]">
                  {selectedCountry.code} {formData.phoneNumber}
                </span>
                {formData.email ? (
                  <>
                    {" "}and email at{" "}
                    <span className="font-bold text-[#0c432d]">{formData.email}</span>
                  </>
                ) : null}{" "}
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

              {errorMessage && (
                <div className="mb-4 p-3.5 bg-red-50 border border-red-300 rounded-2xl flex items-center gap-2.5 text-xs text-red-700 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span className="font-semibold">{errorMessage}</span>
                </div>
              )}

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
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="e.g., Sarah Parker"
                      className={`w-full h-12 bg-[#fbfdf9] border-2 rounded-2xl px-4 text-slate-800 placeholder-slate-400 outline-none text-sm transition-all ${
                        invalidField === "parentName"
                          ? "border-red-400 bg-red-50/40 ring-2 ring-red-100"
                          : "border-emerald-100 hover:border-emerald-200 focus:border-[#10b981] focus:bg-white"
                      }`}
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
                      value={formData.childName}
                      onChange={handleInputChange}
                      placeholder="e.g., Leo Parker"
                      className={`w-full h-12 bg-[#fbfdf9] border-2 rounded-2xl px-4 text-slate-800 placeholder-slate-400 outline-none text-sm transition-all ${
                        invalidField === "childName"
                          ? "border-red-400 bg-red-50/40 ring-2 ring-red-100"
                          : "border-emerald-100 hover:border-emerald-200 focus:border-[#10b981] focus:bg-white"
                      }`}
                    />
                  </div>
                </div>

                {/* Email Address & WhatsApp / Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-[#0c432d] mb-1.5"
                      htmlFor="email"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., sarah@example.com"
                      className={`w-full h-12 bg-[#fbfdf9] border-2 rounded-2xl px-4 text-slate-800 placeholder-slate-400 outline-none text-sm transition-all ${
                        invalidField === "email"
                          ? "border-red-400 bg-red-50/40 ring-2 ring-red-100"
                          : "border-emerald-100 hover:border-emerald-200 focus:border-[#10b981] focus:bg-white"
                      }`}
                    />
                  </div>

                  {/* Redesigned Themed Phone Input */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        className="block text-xs font-bold uppercase tracking-wider text-[#0c432d]"
                        htmlFor="phoneNumber"
                      >
                        WhatsApp / Phone *
                      </label>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                          isPhoneComplete
                            ? "bg-emerald-100 text-[#0c432d]"
                            : "bg-emerald-50 text-[#166534]"
                        }`}
                      >
                        {formData.phoneNumber.length}/{selectedCountry.maxDigits} digits
                      </span>
                    </div>

                    <div
                      ref={countryRef}
                      className={`relative flex items-center h-12 rounded-2xl border-2 transition-all shadow-2xs ${
                        invalidField === "phoneNumber"
                          ? "border-red-400 bg-red-50/40 ring-2 ring-red-100"
                          : "border-emerald-100 hover:border-emerald-200 bg-[#fbfdf9] focus-within:border-[#10b981] focus-within:bg-white"
                      }`}
                    >
                      {/* Themed Country Code Selector Trigger */}
                      <button
                        type="button"
                        onClick={() => setIsCountryOpen(!isCountryOpen)}
                        className="h-full flex items-center gap-1.5 px-3 bg-emerald-50/70 hover:bg-emerald-100/70 border-r-2 border-emerald-100 transition-colors cursor-pointer select-none rounded-l-[14px] shrink-0"
                        aria-expanded={isCountryOpen}
                        aria-label="Select Country Code"
                      >
                        <span className="text-base sm:text-lg leading-none">{selectedCountry.flag}</span>
                        <span className="font-bold text-xs sm:text-sm text-[#0c432d]">
                          {selectedCountry.code}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-[#15803d] transition-transform duration-200 ${
                            isCountryOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Custom Country Code Dropdown Popover */}
                      {isCountryOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 max-h-64 overflow-y-auto slim-scrollbar bg-white rounded-2xl border-2 border-emerald-100 shadow-2xl p-2 z-50 animate-fadeIn">
                          <div className="text-[10px] uppercase font-bold text-[#15803d] px-2.5 py-1 tracking-wider">
                            Select Country Code
                          </div>
                          <div className="space-y-1 mt-1">
                            {COUNTRY_CODES.map((c) => {
                              const isSelected = c.code === selectedCountry.code;
                              return (
                                <button
                                  key={c.code + c.country}
                                  type="button"
                                  onClick={() => handleCountrySelect(c)}
                                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs sm:text-sm transition-all cursor-pointer ${
                                    isSelected
                                      ? "bg-[#0c432d] text-white font-bold"
                                      : "text-[#0c432d] hover:bg-emerald-50 font-medium"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5">
                                    <span className="text-base">{c.flag}</span>
                                    <span>{c.name}</span>
                                  </div>
                                  <span
                                    className={`text-xs font-semibold ${
                                      isSelected ? "text-emerald-200" : "text-emerald-700"
                                    }`}
                                  >
                                    {c.code}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Clean Phone Digits Input */}
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}
                        placeholder={selectedCountry.placeholder}
                        maxLength={selectedCountry.maxDigits}
                        className="w-full h-full bg-transparent px-3.5 text-slate-800 placeholder-slate-400 outline-none text-sm font-medium tracking-wide"
                      />
                    </div>
                  </div>
                </div>

                {/* Redesigned Themed Grade Level Dropdown */}
                <div ref={gradeRef} className="relative">
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-[#0c432d] mb-1.5"
                    htmlFor="childGradeBtn"
                  >
                    Child's Grade / Age *
                  </label>

                  {/* Dropdown Trigger */}
                  <button
                    id="childGradeBtn"
                    type="button"
                    onClick={() => setIsGradeOpen(!isGradeOpen)}
                    className={`w-full h-12 flex items-center justify-between gap-2 border-2 rounded-2xl px-4 text-left transition-all cursor-pointer shadow-2xs ${
                      invalidField === "childGrade"
                        ? "border-red-400 bg-red-50/40 ring-2 ring-red-100"
                        : "bg-[#fbfdf9] border-emerald-100 hover:border-emerald-200 focus:border-[#10b981] focus:bg-white"
                    }`}
                    aria-expanded={isGradeOpen}
                  >
                    {selectedGradeObj ? (
                      <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                        <span className="text-lg shrink-0 leading-none">{selectedGradeObj.icon}</span>
                        <span className="font-bold text-sm text-[#0c432d] truncate">
                          {selectedGradeObj.title}
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-slate-400 truncate">
                        Select your child's age or grade level...
                      </span>
                    )}

                    <div className="flex items-center gap-2 shrink-0">
                      {selectedGradeObj && (
                        <span
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap uppercase tracking-wider shrink-0 ${selectedGradeObj.badgeColor}`}
                        >
                          {selectedGradeObj.badge}
                        </span>
                      )}
                      <ChevronDown
                        className={`w-4 h-4 text-[#15803d] shrink-0 transition-transform duration-200 ${
                          isGradeOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Themed Grade Level Options Dropdown */}
                  {isGradeOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border-2 border-emerald-100 shadow-2xl p-2 z-40 animate-fadeIn space-y-1.5">
                      <div className="text-[10px] uppercase font-bold text-[#15803d] px-3 py-1 tracking-wider">
                        Select Learning Track
                      </div>
                      {GRADE_OPTIONS.map((g) => {
                        const isSelected = formData.childGrade === g.value;
                        return (
                          <button
                            key={g.value}
                            type="button"
                            onClick={() => handleGradeSelect(g.value)}
                            className={`w-full flex items-center justify-between gap-3 p-3 rounded-xl text-left transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#0c432d] text-white shadow-xs"
                                : "hover:bg-emerald-50 text-[#0c432d]"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="text-2xl leading-none shrink-0">{g.icon}</span>
                              <div className="min-w-0">
                                <div
                                  className={`font-bold text-sm truncate ${
                                    isSelected ? "text-white" : "text-[#0c432d]"
                                  }`}
                                >
                                  {g.title}
                                </div>
                                <div
                                  className={`text-xs truncate ${
                                    isSelected ? "text-emerald-200" : "text-[#1e4635]"
                                  }`}
                                >
                                  {g.subtitle}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span
                                className={`text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap uppercase tracking-wider shrink-0 ${
                                  isSelected
                                    ? "bg-emerald-800 text-emerald-100 border border-emerald-600"
                                    : g.badgeColor
                                }`}
                              >
                                {g.badge}
                              </span>
                              {isSelected && <Check className="w-4 h-4 text-[#10b981] shrink-0" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Anti-bot honeypot: hidden from real users */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <label htmlFor="websiteUrl">Leave this field blank</label>
                  <input
                    id="websiteUrl"
                    name="websiteUrl"
                    type="text"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-[#0c432d] hover:bg-[#15803d] disabled:bg-emerald-800/70 disabled:cursor-not-allowed text-white font-extrabold py-4 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-[#f59e0b]" />
                    <span>Reserving Slot...</span>
                  </>
                ) : (
                  <>
                    <span>Reserve Free Demo Class</span>
                    <Sparkles className="w-4 h-4 text-[#f59e0b]" />
                  </>
                )}
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
