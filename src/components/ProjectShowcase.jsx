import { useState, useEffect, useRef } from "react";
import {
  Gamepad2,
  Bot,
  Wand2,
  Terminal,
  Sparkles,
  ArrowRight,
  Code2,
  CheckCircle2,
  Trophy,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const PROJECTS = [
  {
    id: "galaxy-dodger",
    category: "games",
    title: "Galaxy Asteroid Dodger",
    track: "Explorers (Grades 3–5)",
    tool: "Scratch 3.0",
    fullTool: "Scratch 3.0 Game Engine",
    image: "/projects/galaxy-dodger.jpg",
    badgeColor: "bg-emerald-100 text-[#0c432d] border-emerald-300",
    summary:
      "A fast-paced 2D arcade shooter with smooth spaceship acceleration, random asteroid spawning, and high-score cloud leaderboards.",
    mechanics: ["Velocity physics", "Collision detection", "Cloud variables", "Particle trail effects"],
    student: "Aarav S., Age 9",
    story: "Coded after 4 sessions. Aarav shared the project link with his classmates to compete for highest score!",
    icon: <Gamepad2 className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: "eco-sorter",
    category: "ai",
    title: "Eco-Sorter Smart Vision AI",
    track: "Explorers (Grades 3–5)",
    tool: "AI Vision (Scratch)",
    fullTool: "Google Teachable Machine + Scratch 3.0",
    image: "/projects/eco-sorter.jpg",
    badgeColor: "bg-amber-100 text-[#a16207] border-amber-300",
    summary:
      "A real-time webcam computer vision model that classifies household recyclables vs compost and automatically opens the matching bin.",
    mechanics: ["Dataset capture & labeling", "Training neural epochs", "Confidence threshold conditionals", "Motor servo simulation"],
    student: "Rhea M., Age 10",
    story: "Trained on 120 webcam snapshots of real objects. Rhea presented this at her school science showcase!",
    icon: <Bot className="w-6 h-6 text-amber-400" />,
  },
  {
    id: "dancing-jungle",
    category: "stories",
    title: "The Dancing Jungle Storybook",
    track: "Sprouts (K–Grade 2)",
    tool: "ScratchJr",
    fullTool: "ScratchJr Visual Story Blocks",
    image: "/projects/dancing-jungle.jpg",
    badgeColor: "bg-teal-100 text-[#115e59] border-teal-300",
    summary:
      "An interactive tap-and-play animated jungle where children code animals to dance, sing musical notes, and respond to voice prompts.",
    mechanics: ["Directional sequences", "Event triggers (on-tap)", "Loop rhythms", "Custom voice audio recording"],
    student: "Liam T., Age 6",
    story: "Built during Liam's first 2 weeks. He recorded his own animal sound effects using his laptop microphone!",
    icon: <Wand2 className="w-6 h-6 text-teal-300" />,
  },
  {
    id: "trivia-quest",
    category: "python",
    title: "Trivia Quest AI Companion",
    track: "Innovators (Grades 6–8)",
    tool: "Python 3",
    fullTool: "Python 3 Syntax & Logic",
    image: "/projects/trivia-quest.jpg",
    badgeColor: "bg-amber-100 text-[#a16207] border-amber-300",
    summary:
      "A text-based algorithmic adventure bot featuring randomized questions, hint engines, score multipliers, and smart error handling.",
    mechanics: ["Python data structures (dict & lists)", "Conditionals (if/elif/else)", "While loops & counters", "String sanitization"],
    student: "Ananya K., Age 12",
    story: "Wrote 120 lines of clean Python code. Ananya incorporated questions about astronomy and wildlife biology.",
    icon: <Terminal className="w-6 h-6 text-amber-400" />,
  },
  {
    id: "retro-platformer",
    category: "games",
    title: "Super Dino Pixel Run",
    track: "Explorers (Grades 3–5)",
    tool: "Scratch 3.0",
    fullTool: "Scratch 3.0 Game Engine",
    image: "/projects/retro-platformer.jpg",
    badgeColor: "bg-emerald-100 text-[#0c432d] border-emerald-300",
    summary:
      "A classic platformer featuring moving platforms, coin collection physics, double jumps, and multiple handcrafted levels.",
    mechanics: ["Gravity & jump curves", "Platform boundary sensing", "Sprite costume state loops", "Checkpoint restarts"],
    student: "Dev P., Age 9",
    story: "Dev drew all his custom sprites in the built-in Scratch editor, then programmed the physics from scratch.",
    icon: <Gamepad2 className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: "synth-art",
    category: "art",
    title: "Harmonic Spiral Synth",
    track: "Innovators (Grades 6–8)",
    tool: "Creative Python",
    fullTool: "Creative Python / Visual Math",
    image: "/projects/synth-art.jpg",
    badgeColor: "bg-teal-100 text-[#115e59] border-teal-300",
    summary:
      "Generative visual algorithmic spirograph that draws hypnotic geometric blooms while synthesizing pentatonic audio chords.",
    mechanics: ["Trigonometric angles (sin/cos)", "Algorithmic color cycles", "Audio frequency oscillators", "Interactive mouse response"],
    student: "Zoe L., Age 13",
    story: "Zoe merged her love for playing the violin with mathematical code, creating art that sounds as beautiful as it looks.",
    icon: <Wand2 className="w-6 h-6 text-purple-300" />,
  },
];

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
  };

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector("[data-project-card]");
    const step = card ? card.offsetWidth + 20 : 320;
    container.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const categories = [
    { id: "all", label: "All Creations" },
    { id: "games", label: "🎮 Arcade & Physics Games" },
    { id: "ai", label: "🤖 Smart AI Inventions" },
    { id: "stories", label: "🎨 Animated Stories (K–2)" },
    { id: "python", label: "🐍 Real Python Scripting" },
  ];

  const filteredProjects = PROJECTS.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    const timer = setTimeout(updateScrollState, 100);
    return () => clearTimeout(timer);
  }, [activeTab, filteredProjects.length]);

  useEffect(() => {
    updateScrollState();
    const handleResize = () => updateScrollState();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-[#f0fdf4] border-b border-emerald-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-[#15803d] font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full shadow-2xs">
            <Trophy className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Tangible Student Deliverables</span>
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c432d] mt-4 tracking-tight leading-tight">
            What Your Child Will <span className="text-[#10b981]">Actually Build &amp; Play</span>
          </h2>
          <p className="mt-4 text-[#1e4635] text-base sm:text-lg leading-relaxed">
            No abstract lectures or memorization. In every single module, students design, code, and publish a real, playable digital creation to showcase to friends and family.
          </p>
        </div>

        {/* Category Filters + Mobile Navigation Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                type="button"
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-[#0c432d] text-white shadow-md scale-105"
                    : "bg-white text-[#0c432d] border border-emerald-200 hover:bg-emerald-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Navigation Arrows for Mobile (visible when scrollable on mobile) */}
          <div className="flex md:hidden items-center gap-2 shrink-0 self-end sm:self-auto">
            <span className="text-[11px] font-bold text-[#15803d] uppercase tracking-wider mr-1">
              Swipe or Tap
            </span>
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left to previous projects"
              className={`w-9 h-9 rounded-full border-2 border-emerald-200 bg-white text-[#0c432d] flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                canScrollLeft
                  ? "hover:bg-[#0c432d] hover:text-white hover:border-[#0c432d]"
                  : "opacity-35 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right to next projects"
              className={`w-9 h-9 rounded-full border-2 border-emerald-200 bg-white text-[#0c432d] flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                canScrollRight
                  ? "hover:bg-[#0c432d] hover:text-white hover:border-[#0c432d]"
                  : "opacity-35 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Projects Viewport: Mobile Horizontal Snap Scroll (like reviews) | Desktop 3-col Grid */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollState}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory py-4 px-1 -mx-5 px-5 md:mx-0 md:px-0 no-scrollbar [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                data-project-card
                className="w-[86%] sm:w-[350px] md:w-auto shrink-0 md:shrink snap-start snap-always bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border-2 border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
              <div>
                {/* Real-Life Project Photography Showcase with Overlay Badges */}
                <div className="relative mb-5 h-44 sm:h-48 rounded-2xl overflow-hidden shadow-md border border-emerald-100/90 bg-slate-900 group/img">
                  <img
                    src={project.image}
                    alt={project.title}
                    width="800"
                    height="480"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 pointer-events-none" />

                  {/* Top-Right Grade Track Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
                    <span>{project.track}</span>
                  </div>

                  {/* Bottom-Left Live Project Status */}
                  <div className="absolute bottom-2.5 left-2.5 text-white text-[11px] font-semibold bg-[#0c432d]/85 backdrop-blur-md border border-emerald-400/40 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#f59e0b]" />
                    <span>Real Student Build</span>
                  </div>
                </div>

                {/* Metadata Tool Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                    <span>{project.tool}</span>
                  </span>
                  <span className="text-xs text-[#1e4635]/80 font-medium">
                    • Capstone Project
                  </span>
                </div>

                <h3 className="font-serif-brand font-bold text-xl text-[#0c432d] group-hover:text-[#10b981] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-[#1e4635] text-xs sm:text-sm leading-relaxed">
                  {project.summary}
                </p>

                {/* Core Skills Tags */}
                <div className="mt-4 pt-3.5 border-t border-emerald-100">
                  <div className="text-[10px] font-bold text-[#15803d] uppercase tracking-wider mb-2">
                    Mechanics Mastered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.mechanics.map((m, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-emerald-50 text-[#0c432d] border border-emerald-200 px-2 py-0.5 rounded-md"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Student Attribution & Inspect Button */}
              <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0c432d]">
                    {project.student}
                  </div>
                  <div className="text-[10px] text-[#15803d] font-medium">
                    Verified EduEden Project
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c432d] bg-emerald-50 hover:bg-[#0c432d] hover:text-white px-3 py-1.5 rounded-xl border border-emerald-200 transition-all cursor-pointer"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Inspect Build</span>
                </button>
              </div>
            </div>
          ))}
          </div>

          {/* Mobile Swipe Hint */}
          {filteredProjects.length > 1 && (
            <div className="md:hidden flex items-center justify-center gap-1.5 mt-2 text-xs font-semibold text-[#15803d]">
              <span>← Swipe to explore more projects →</span>
            </div>
          )}
        </div>

        {/* Bottom Banner Reassurance */}
        <div className="mt-14 bg-gradient-to-r from-[#0c432d] to-[#15803d] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-500/30">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-emerald-300/30 flex items-center justify-center shrink-0">
              <Play className="w-6 h-6 text-[#f59e0b] fill-[#f59e0b]" />
            </div>
            <div>
              <h4 className="font-serif-brand font-bold text-lg sm:text-xl">
                Your child codes their first playable game in their trial session
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200 mt-0.5">
                No credit card required. Receive a permanent link to test and play their creation at home.
              </p>
            </div>
          </div>

          <a
            href="#free-demo"
            className="w-full sm:w-auto justify-center bg-[#f59e0b] hover:bg-[#d97706] text-slate-900 font-extrabold px-6 py-3.5 rounded-full text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 group whitespace-nowrap"
          >
            <span>Book Free Project Class</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Inspect Project Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
        >
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setSelectedProject(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-2 border-emerald-100 p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-slideUp text-[#0c432d]">
            <div className="flex items-center justify-between pb-4 border-b border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#15803d]">
                  Project Blueprint &amp; Pedagogy Breakdown
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-[#0c432d] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold bg-emerald-100 text-[#0c432d] px-3 py-1 rounded-full border border-emerald-200">
                  {selectedProject.fullTool || selectedProject.tool}
                </span>
                <span className="text-xs font-semibold text-[#15803d]">
                  {selectedProject.track}
                </span>
              </div>

              <h3 className="font-serif-brand font-bold text-2xl text-[#0c432d] mt-2">
                {selectedProject.title}
              </h3>
              <p className="mt-2 text-sm text-[#1e4635] leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="relative my-5 h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md border border-emerald-100 bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width="800"
                  height="450"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-[#0c432d]/90 backdrop-blur-md border border-emerald-400/40 px-3 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>Real Project Screenshot &amp; Build</span>
                </div>
              </div>

              <div className="bg-[#f0fdf4] rounded-2xl p-4 border border-emerald-200/80 mb-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0c432d] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#f59e0b]" />
                  <span>Student Success Story</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#1e4635] leading-relaxed italic">
                  "{selectedProject.story}"
                </p>
                <div className="text-xs font-bold text-[#15803d] mt-2">
                  — {selectedProject.student}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0c432d]">
                  Algorithmic Concepts Taught in This Build:
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.mechanics.map((m, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#1e4635]">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#15803d] font-semibold">
                  Zero setup needed • Mentor guides live on screen
                </span>
                <a
                  href="#free-demo"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto bg-[#0c432d] hover:bg-[#15803d] text-white font-bold px-6 py-2.5 rounded-full text-xs shadow-md transition-all text-center"
                >
                  Book Demo For This Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
