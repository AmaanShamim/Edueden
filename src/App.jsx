import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ProblemSolution from "./components/ProblemSolution";
import Playpaths from "./components/Playpaths";
import WhyUs from "./components/WhyUs";
import ProjectShowcase from "./components/ProjectShowcase";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import DemoBooking from "./components/DemoBooking";
import FAQ from "./components/FAQ";
import Founder from "./components/Founder";
import Footer from "./components/Footer";
import LegalModal from "./components/LegalModal";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyMobileCTA from "./components/StickyMobileCTA";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  const [legalDoc, setLegalDoc] = useState(null); // "terms" | "privacy" | "safety" | "pedagogy" | null

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#terms" || hash === "#terms-of-service") {
        setLegalDoc("terms");
      } else if (hash === "#privacy") {
        setLegalDoc("privacy");
      } else if (
        hash === "#safety" ||
        hash === "#safety-charter"
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
        <TrustBar />
        <ProblemSolution />
        <Playpaths />
        <WhyUs />
        <ProjectShowcase />
        <Testimonials />
        <HowItWorks />
        <DemoBooking />
        <Founder />
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
      <StickyMobileCTA />
      <CookieBanner onOpenPrivacy={handleOpenLegal} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
