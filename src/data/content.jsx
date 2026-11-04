import React from "react";
import {
  Sprout,
  Rocket,
  Lightbulb,
  Gamepad2,
  Bot,
  Wand2,
  Puzzle,
  Sun,
  Laptop,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Playpaths", href: "#playpaths" },
  { label: "Why EduEden", href: "#why" },
  { label: "Parent Stories", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

export const playpaths = {
  sprouts: {
    badge: "Kindergarten to Grade 2 (Ages 5–7)",
    title: "Sprouts: Visual Logic & Story Play",
    icon: <Sprout className="w-8 h-8 text-[#16a34a]" />,
    summary:
      "A welcoming, screen-healthy playground where early learners discover sequencing, cause-and-effect, and simple algorithmic patterns.",
    skills: [
      "ScratchJr visual blocks",
      "Loop rhythms and directional logic",
      "Interactive digital storytelling",
      "Friendly AI sensory demos",
    ],
    project:
      'Build "The Dancing Jungle" — an interactive animated story where animals jump when clicked!',
  },
  explorers: {
    badge: "Grades 3 to 5 (Ages 8–10)",
    title: "Explorers: Scratch & Playful AI",
    icon: <Rocket className="w-8 h-8 text-[#0c432d]" />,
    summary:
      "Kids step into game designer shoes—programming full 2D arcade games, gravity physics, scoring loops, and smart interactive companions.",
    skills: [
      "Scratch 3.0 advanced blocks",
      "Variables, operators & collision logic",
      "Teachable Machine image recognition",
      "Creative debugging mindset",
    ],
    project:
      'Build "Eco-Trash Catcher" game with custom score counters, timer countdowns, and sound effects!',
  },
  innovators: {
    badge: "Grades 6 to 8 (Ages 11–14)",
    title: "Innovators: Python & Supervised AI",
    icon: <Lightbulb className="w-8 h-8 text-[#f59e0b]" />,
    summary:
      "Bridge the jump from visual blocks to modern text-based code. Students master real-world logic, build conversational bots, and solve algorithmic puzzles.",
    skills: [
      "Python syntax & data structures",
      "Functions, conditionals & loops",
      "Conversational AI bot scripting",
      "Responsible tech & ethics",
    ],
    project:
      'Develop a smart "Trivia Quest" chatbot and generative pixel art generator using Python!',
  },
};

export const playpathTabs = [
  {
    id: "sprouts",
    label: "🌱 Sprouts (K–2)",
    color: "border-emerald-300",
  },
  {
    id: "explorers",
    label: "🚀 Explorers (Grades 3–5)",
    color: "border-emerald-500",
  },
  {
    id: "innovators",
    label: "💡 Innovators (Grades 6–8)",
    color: "border-amber-400",
  },
];

export const courses = [
  {
    title: "Scratch Game Studio",
    icon: <Gamepad2 className="w-7 h-7 text-[#0c432d]" />,
    badge: "Most Popular",
    badgeColor: "bg-emerald-100 text-[#0c432d]",
    bg: "bg-[#f0fdf4]",
    border: "border-emerald-200",
    description:
      "Make platformers, maze games, and interactive stories while learning loops, variables, and game physics.",
  },
  {
    title: "AI Wonder Lab",
    icon: <Bot className="w-7 h-7 text-[#15803d]" />,
    badge: "Future Skills",
    badgeColor: "bg-amber-100 text-[#a16207]",
    bg: "bg-[#fefce8]",
    border: "border-amber-200",
    description:
      "Hands-on, kid-safe machine learning demos, vision recognition models, and conversational chatbot basics.",
  },
  {
    title: "Creative Code & Art",
    icon: <Wand2 className="w-7 h-7 text-[#0c432d]" />,
    badge: "Creative Focus",
    badgeColor: "bg-teal-100 text-[#115e59]",
    bg: "bg-[#f0fdfa]",
    border: "border-teal-200",
    description:
      "Design geometric digital art, musical synthesizer scripts, and interactive generative storybooks.",
  },
  {
    title: "Logic & Algorithmic Math",
    icon: <Puzzle className="w-7 h-7 text-[#166534]" />,
    badge: "Confidence Booster",
    badgeColor: "bg-emerald-100 text-[#0c432d]",
    bg: "bg-[#ecfdf5]",
    border: "border-emerald-200",
    description:
      "Strengthen pattern recognition, problem decomposition, and critical reasoning through playful challenges.",
  },
];

export const pillars = [
  {
    icon: <Sun className="w-8 h-8 text-[#f59e0b]" />,
    title: "Play-First Philosophy",
    desc: "We replace monotonous memorization with sandbox creation. Kids play games they built themselves.",
  },
  {
    icon: <Laptop className="w-8 h-8 text-[#10b981]" />,
    title: "Creators, Not Just Consumers",
    desc: "Transform passive screen time into constructive mastery by inspiring kids to architect software.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-[#0c432d]" />,
    title: "1:1 & Tiny Cohorts (Max 4)",
    desc: "Patient, certified educators tailor pace to each child’s natural curiosity and learning rhythm.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#15803d]" />,
    title: "Kid-Safe AI Explorations",
    desc: "Supervised, ethics-first curriculum teaching students how machine intelligence works under the hood.",
  },
];

export const faqs = [
  {
    q: "Does my child need prior coding experience?",
    a: "Not at all! Every EduEden journey begins with friendly drag-and-drop visual logic. We meet each child at their exact skill level.",
  },
  {
    q: "What age groups are accepted at EduEden?",
    a: "We welcome curious kids from Kindergarten through Grade 8 (ages 5 to 14), with distinct cohorts categorized by cognitive development.",
  },
  {
    q: "What equipment and setup is required?",
    a: "A desktop computer or laptop (Mac, Windows, or Chromebook) with a reliable internet connection, microphone, and Google Chrome.",
  },
  {
    q: "How does the Free Demo Class work?",
    a: "It is a live, fun 45-minute interactive class where your child builds a mini playable project from scratch with a dedicated mentor.",
  },
  {
    q: "How do you ensure safe exposure to Artificial Intelligence?",
    a: "All AI activities are completely age-appropriate, locally run, or mentor-supervised—focusing on pattern recognition, computer vision concepts, and ethical digital stewardship.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Anita Sharma",
    relation: "Mother of Rhea (Grade 3)",
    location: "San Jose, CA",
    track: "Explorers • Scratch & AI",
    rating: 5,
    highlight: "Transformed gaming screen time into real game building",
    quote:
      "My 8-year-old went from just watching video game streamers to coding her own puppy-chase game in Scratch within three sessions. The mentors at EduEden are remarkably patient and encouraging!",
    initials: "AS",
    avatarBg: "bg-emerald-100 text-[#0c432d]",
  },
  {
    id: 2,
    name: "David & Priya Chen",
    relation: "Parents of Marcus (Grade 1)",
    location: "Austin, TX",
    track: "Sprouts • Visual Logic",
    rating: 5,
    highlight: "Screen-healthy, playful & zero frustration",
    quote:
      "We were skeptical about coding for a 6-year-old, but EduEden’s visual block approach felt just like digital Lego. Marcus created an interactive talking dinosaur story and proudly presented it to his grandparents!",
    initials: "DC",
    avatarBg: "bg-amber-100 text-[#a16207]",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    relation: "Mother of Leo (Grade 7)",
    location: "Seattle, WA",
    track: "Innovators • Python & AI",
    rating: 5,
    highlight: "Seamless jump from visual blocks to Python",
    quote:
      "Leo was getting bored with drag-and-drop coding. EduEden transitioned him smoothly to real Python syntax. He just programmed a weather bot and his school math confidence has noticeably improved!",
    initials: "SJ",
    avatarBg: "bg-teal-100 text-[#115e59]",
  },
  {
    id: 4,
    name: "Dr. Vikram Patel",
    relation: "Father of Ananya (Grade 4)",
    location: "Chicago, IL",
    track: "Explorers • AI Wonder Lab",
    rating: 5,
    highlight: "Tiny 1:4 ratio where shy kids flourish",
    quote:
      "The 1:4 student-to-mentor ratio is unmatched. Ananya is usually shy in online groups, but her teacher created such a warm space where bugs were celebrated as learning puzzles.",
    initials: "VP",
    avatarBg: "bg-green-100 text-[#166534]",
  },
  {
    id: 5,
    name: "Elena Rostova",
    relation: "Mother of Misha (Grade 5)",
    location: "Toronto, ON",
    track: "Explorers • Game Studio",
    rating: 5,
    highlight: "Creators, not just passive consumers",
    quote:
      "Instead of passively consuming Roblox all weekend, Misha is now designing his own 2D obstacle courses with custom gravity physics and countdown timers. It's the best after-school program we've joined.",
    initials: "ER",
    avatarBg: "bg-emerald-100 text-[#0c432d]",
  },
  {
    id: 6,
    name: "Marcus Bennett",
    relation: "Father of Maya (Grade 2)",
    location: "New York, NY",
    track: "Sprouts • Story Play",
    rating: 5,
    highlight: "Joyful learning that kids genuinely look forward to",
    quote:
      "EduEden teaches algorithmic problem solving disguised as pure play. Maya counts down the hours until her Saturday coding session with her mentor Coach Jenny!",
    initials: "MB",
    avatarBg: "bg-amber-100 text-[#a16207]",
  },
];


