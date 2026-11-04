import React, { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import eduedenLogo from "../assets/Logo.png";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fbfdf9]/90 backdrop-blur-md border-b border-emerald-100/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4">
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

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-2xl border border-emerald-200 text-[#0c432d] hover:bg-emerald-50 transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#fbfdf9] border-b border-emerald-100 px-6 py-4 flex flex-col gap-3 font-bold shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#0c432d] hover:text-[#10b981] border-b border-emerald-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#free-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-[#0c432d] text-white rounded-full py-3 font-extrabold shadow-md flex items-center justify-center gap-2"
          >
            <span>Book Free Demo Class</span>
            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
          </a>
        </nav>
      )}
    </header>
  );
}

