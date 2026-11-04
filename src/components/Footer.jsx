import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import eduedenLogo from "../assets/Logo.png";
import { navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[#0c432d] text-emerald-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <a
            href="#home"
            className="inline-flex items-center bg-white rounded-2xl px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
            aria-label="EduEden Home"
          >
            <img
              src={eduedenLogo}
              alt="EduEden - Play & Grow K-8 Coding Academy"
              width="140"
              height="44"
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </a>
          <p className="mt-4 text-emerald-200/90 text-sm leading-relaxed max-w-sm">
            EduEden nurtures digital explorers through creative block
            programming, playful artificial intelligence experiments, and
            joyful algorithmic thinking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-base font-serif-brand text-white uppercase tracking-wider mb-4">
            Explore EduEden
          </h4>
          <nav className="flex flex-col gap-2.5 text-sm text-emerald-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#f59e0b] transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="font-bold text-base font-serif-brand text-white uppercase tracking-wider mb-4">
            Connect With Us
          </h4>
          <ul className="space-y-3 text-sm text-emerald-200">
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#f59e0b]" />
              <span>WhatsApp: +91-9153573335</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#f59e0b]" />
              <span>support@edueden.online</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#f59e0b]" />
              <span>Global Live Virtual Classrooms</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-14 pt-8 border-t border-emerald-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300 gap-4">
        <p>
          © {new Date().getFullYear()} EduEden: Play &amp; Grow K-8. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:underline">
            Student Safety Charter
          </a>
          <a href="#code" className="hover:underline">
            Pedagogy Standards
          </a>
        </div>
      </div>
    </footer>
  );
}

