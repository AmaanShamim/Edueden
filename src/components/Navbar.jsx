import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  Sparkles,
  Home,
  Gamepad2,
  HeartHandshake,
  Star,
  HelpCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import eduedenLogo from "../assets/Logo.png";
import { navLinks } from "../data/content";

const mobileNavLinks = [
  {
    label: "Home",
    href: "#home",
    desc: "Start from the beginning",
    icon: <Home className="w-5 h-5" />,
  },
  {
    label: "Playpaths",
    href: "#playpaths",
    desc: "K–8 Scratch, Python & AI pathways",
    icon: <Gamepad2 className="w-5 h-5" />,
  },
  {
    label: "Why EduEden",
    href: "#why",
    desc: "Our 1:4 mentor philosophy & safety",
    icon: <HeartHandshake className="w-5 h-5" />,
  },
  {
    label: "Parent Stories",
    href: "#testimonials",
    desc: "650+ verified family reviews",
    icon: <Star className="w-5 h-5 fill-amber-400 text-amber-500" />,
  },
  {
    label: "FAQs",
    href: "#faqs",
    desc: "Curriculum, tools & demo answers",
    icon: <HelpCircle className="w-5 h-5" />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = useCallback(() => {
    if (!isOpen || isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  }, [isOpen, isClosing]);

  const openMenu = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const isMenuExpanded = isOpen && !isClosing;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setIsClosing(false);
      }
    };

    if (isOpen && !isClosing) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("resize", handleResize);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, isClosing, closeMenu]);

  return (
    <header className="sticky top-0 z-50 bg-[#fbfdf9]/95 backdrop-blur-md border-b border-emerald-100/80 shadow-xs">
      <div className="relative z-50 max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Logo with Brand Tree */}
        <a href="#home" className="inline-flex items-center group py-1" aria-label="EduEden Home">
          <img
            src={eduedenLogo}
            alt="EduEden - Play & Grow K-8 Coding Academy"
            width="168"
            height="56"
            className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-[15px]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#0e2a1d] hover:text-[#10b981] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#free-demo"
            className="bg-[#0c432d] hover:bg-[#15803d] text-white rounded-full px-5 py-2.5 text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-1.5"
          >
            <span>Book Free Demo</span>
            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
          </a>
        </nav>

        {/* Modern Animated Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className={`md:hidden relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ${
            isMenuExpanded
              ? "bg-emerald-100/90 border-2 border-emerald-300 text-[#0c432d] shadow-xs"
              : "bg-white/90 border border-emerald-200/90 text-[#0c432d] shadow-2xs hover:bg-emerald-50 active:scale-95"
          }`}
          aria-expanded={isMenuExpanded}
          aria-label={isMenuExpanded ? "Close navigation menu" : "Open navigation menu"}
        >
          <div className="w-5 h-4 flex flex-col justify-between items-center relative pointer-events-none">
            {/* Top Bar */}
            <span
              className={`h-[2.5px] w-5 bg-[#0c432d] rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                isMenuExpanded ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            {/* Middle Bar with brand emerald accent */}
            <span
              className={`h-[2.5px] w-3.5 self-start bg-[#10b981] rounded-full transition-all duration-200 ease-in-out ${
                isMenuExpanded ? "opacity-0 -translate-x-3 scale-x-0" : "opacity-100"
              }`}
            />
            {/* Bottom Bar */}
            <span
              className={`h-[2.5px] w-5 bg-[#0c432d] rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                isMenuExpanded ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Floating Overlay & Dropdown Menu */}
      {isOpen && (
        <>
          {/* Full viewport backdrop overlay portaled to document.body so it blurs the entire webpage behind it */}
          {typeof document !== "undefined" &&
            createPortal(
              <div
                className={`fixed inset-0 z-40 bg-[#042114]/55 backdrop-blur-md md:hidden cursor-pointer ${
                  isClosing ? "animate-backdropOut" : "animate-backdropIn"
                }`}
                onClick={closeMenu}
                aria-hidden="true"
              />,
              document.body
            )}

          {/* Floating Dropdown Card (absolutely positioned to hover over webpage without pushing content) */}
          <nav
            aria-label="Mobile navigation"
            className={`absolute top-full left-0 right-0 z-50 md:hidden px-4 pt-3 pb-6 pointer-events-auto max-h-[calc(100vh-80px)] overflow-y-auto ${
              isClosing ? "animate-menuSlideUp" : "animate-menuSlideDown"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="max-w-md mx-auto bg-white/95 backdrop-blur-2xl border-2 border-emerald-100/90 rounded-3xl p-4 sm:p-5 shadow-[0_25px_60px_-15px_rgba(12,67,45,0.25)] flex flex-col gap-2 ring-1 ring-emerald-900/5">
              {/* Header inside card */}
              <div className="flex items-center justify-between px-1.5 pb-2.5 border-b border-emerald-100/70">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#15803d] bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3 text-[#f59e0b]" />
                  <span>Explore EduEden</span>
                </span>
                <span className="text-[11px] font-semibold text-[#1e4635]/70">
                  Ages 5–14 • K–8
                </span>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col gap-1.5 pt-1">
                {mobileNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-emerald-50/40 hover:bg-emerald-50/90 border border-emerald-100/60 hover:border-emerald-200 transition-all duration-200 active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 shadow-2xs flex items-center justify-center text-[#15803d] group-hover:scale-105 group-hover:bg-[#0c432d] group-hover:text-emerald-300 transition-all duration-200">
                        {link.icon}
                      </div>
                      <div>
                        <div className="font-bold text-sm sm:text-[15px] text-[#0c432d] group-hover:text-[#15803d] transition-colors">
                          {link.label}
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#1e4635]/75 font-medium">
                          {link.desc}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:text-[#10b981] group-hover:translate-x-0.5 transition-all duration-200" />
                  </a>
                ))}
              </div>

              {/* Book Demo CTA Button */}
              <div className="pt-2">
                <a
                  href="#free-demo"
                  onClick={closeMenu}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#0c432d] via-[#0e4e35] to-[#15803d] text-white rounded-2xl p-3.5 sm:p-4 font-bold shadow-lg shadow-emerald-900/15 flex items-center justify-between hover:shadow-xl active:scale-[0.99] transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-[#f59e0b] shadow-2xs">
                      <Sparkles className="w-5 h-5 fill-[#f59e0b]" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-extrabold tracking-wide flex items-center gap-1.5">
                        <span>Book Free Demo Class</span>
                      </div>
                      <div className="text-[11px] sm:text-xs text-emerald-200 font-medium">
                        1:4 live session • 100% free • 45 mins
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

