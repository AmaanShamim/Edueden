import React from "react";
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

export default function App() {
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
      <Footer />
      <Analytics />
    </div>
  );
}
