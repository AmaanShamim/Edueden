import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Playpaths from "./components/Playpaths";
import Courses from "./components/Courses";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import DemoBooking from "./components/DemoBooking";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LegalModal from "./components/LegalModal";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [legalDoc, setLegalDoc] = useState(null); // "privacy" | "safety" | "pedagogy" | null

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#privacy") {
        setLegalDoc("privacy");
      } else if (
        hash === "#safety" ||
        hash === "#safety-charter" ||
        hash === "#terms"
      ) {
        setLegalDoc("safety");
      } else if (
        hash === "#pedagogy" ||
        hash === "#pedagogy-standards" ||
        hash === "#code"
      ) {
        setLegalDoc("pedagogy");
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const handleOpenLegal = (type) => {
    setLegalDoc(type);
    const hash =
      type === "privacy"
        ? "#privacy"
        : type === "safety"
        ? "#safety-charter"
        : "#pedagogy-standards";
    window.history.replaceState(null, "", hash);
  };

  const handleCloseLegal = () => {
    setLegalDoc(null);
    if (
      [
        "#privacy",
        "#safety",
        "#safety-charter",
        "#terms",
        "#pedagogy",
        "#pedagogy-standards",
        "#code",
      ].includes(window.location.hash.toLowerCase())
    ) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfdf9] text-[#0e2a1d] font-sans antialiased selection:bg-emerald-200">
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <Playpaths />
        <Courses />
        <WhyUs />
        <Testimonials />
        <DemoBooking />
        <FAQ />
      </main>
      <Footer onOpenLegal={handleOpenLegal} />
      <WhatsAppButton />
      <LegalModal
        isOpen={Boolean(legalDoc)}
        activeTab={legalDoc || "privacy"}
        onClose={handleCloseLegal}
        onTabChange={(type) => handleOpenLegal(type)}
      />
      <Analytics />
    </div>
  );
}
