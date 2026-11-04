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

export const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "curriculum", label: "Curriculum & Tools" },
  { id: "classes", label: "Classes & Mentors" },
  { id: "safety", label: "Kid-Safe AI & Ethics" },
  { id: "booking", label: "Free Demo & Setup" },
];

export const faqs = [
  {
    id: 1,
    category: "curriculum",
    q: "Does my child need prior coding, typing, or math experience?",
    takeaway: "Zero experience needed. We start with friendly drag-and-drop visual logic.",
    a: "Not at all! Every EduEden journey begins with zero prerequisites. For our Sprouts (K–2) and early Explorers (Grades 3–5), we use intuitive visual block coding (ScratchJr and Scratch 3.0). Children don't even need keyboard typing fluency to begin creating animations and games. Our certified mentors meet each child at their current cognitive level and gently introduce loops, coordinates, and sequencing through playful stories.",
  },
  {
    id: 2,
    category: "curriculum",
    q: "What coding languages and platforms will my child master?",
    takeaway: "Smooth progression from Scratch visual blocks to real Python syntax & AI models.",
    a: "We follow an age-progressive roadmap tailored to cognitive developmental milestones:\n• Kindergarten to Grade 2 (Ages 5–7): ScratchJr, visual pattern sequencing, directional algorithms, and animated digital storytelling.\n• Grades 3 to 5 (Ages 8–10): Scratch 3.0 advanced blocks, coordinate physics, collision algorithms, score variables, and Google Teachable Machine image recognition.\n• Grades 6 to 8 (Ages 11–14): Real-world Python syntax, data structures, conditional algorithms, automated bot scripting, and supervised machine learning concepts.",
  },
  {
    id: 3,
    category: "curriculum",
    q: "How is EduEden different from free YouTube tutorials or coding apps?",
    takeaway: "Live interactive mentorship, computational thinking, and custom project building.",
    a: "While recorded videos and free coding apps teach children to copy code without understanding, EduEden emphasizes computational problem-solving and creative independence:\n• Small 1:4 Cohorts: Dedicated mentors engage with your child live, asking Socratic questions to encourage self-debugging.\n• Custom Capstones: Instead of cookie-cutter templates, students build games and chatbots around their personal passions—from pet simulators to space arcade platformers.\n• Active Feedback: Mentors provide live encouragement, review code structure, and foster genuine confidence.",
  },
  {
    id: 4,
    category: "safety",
    q: "How do you ensure safe, age-appropriate exposure to Artificial Intelligence?",
    takeaway: "Supervised, localized models teaching ethics and digital stewardship.",
    a: "Child safety and responsible digital citizenship are our highest priorities. We do not expose young learners to unfiltered open-web generative chatbots or unmonitored interfaces. All AI explorations use mentor-supervised sandbox tools—such as kid-safe computer vision classifiers, audio recognition models, and rule-based decision trees. Students learn how machine intelligence works under the hood, how bias affects models, and why human ethics remain indispensable.",
  },
  {
    id: 5,
    category: "safety",
    q: "How does EduEden support healthy screen time for kids?",
    takeaway: "Turning passive consumption into creative mastery with scheduled breaks.",
    a: "We believe screen time should be active, creative, and purposeful rather than passive consumption. All sessions are capped at 45 to 55 minutes, with built-in visual rest breaks, posture check-ins, and collaborative discussions. Students spend class time architecting software and explaining their reasoning, turning screen time into a constructive, pride-building activity.",
  },
  {
    id: 6,
    category: "classes",
    q: "What is the cohort size and who are the EduEden mentors?",
    takeaway: "Maximum 1:4 student-to-mentor ratio led by vetted STEM educators.",
    a: "To ensure every child receives personalized attention, our group classes never exceed 4 students (1:4 ratio). We also offer 1-on-1 private mentoring. Every EduEden instructor is a vetted computer science or STEM educator who undergoes background verification and intensive training in positive child pedagogy, empathy-driven instruction, and inquiry-based learning.",
  },
  {
    id: 7,
    category: "classes",
    q: "Can my child keep, share, and play their projects after class?",
    takeaway: "Forever access to full project links to share with family and friends.",
    a: "Yes! Every single game, animation, and Python script created during class belongs entirely to your child. We provide permanent web links and portfolio access so they can proudly play their creations on any computer or tablet, share them with friends, and continue building on them at home anytime.",
  },
  {
    id: 8,
    category: "booking",
    q: "What equipment and setup does my child need for online classes?",
    takeaway: "Just a laptop or computer with Google Chrome, internet, and webcam.",
    a: "Getting started is effortless:\n1. A laptop or desktop computer (Mac, Windows, or Chromebook) with a reliable internet connection.\n2. A working webcam and microphone for live interaction with their mentor.\n3. The Google Chrome browser.\nNo paid software licenses, complex installations, or high-end graphics cards are required. For Sprouts (K–2), an iPad or tablet can also be used for ScratchJr sessions.",
  },
  {
    id: 9,
    category: "booking",
    q: "How does the Free 45-Minute Demo Class work?",
    takeaway: "Live hands-on class where your child codes a real project from scratch.",
    a: "Our free demo is a real, live interactive workshop—not a pre-recorded presentation or sales pitch. Your child will pair up with a certified mentor, explore visual logic, and build a working mini-game within 45 minutes. Following the session, the mentor provides parents with a personalized Cognitive Readiness & Milestone Evaluation to help you plan next steps.",
  },
  {
    id: 10,
    category: "booking",
    q: "What if we need to reschedule or miss a scheduled class?",
    takeaway: "Flexible rescheduling with 24 hours notice plus session recordings.",
    a: "We understand that family schedules can change. We offer flexible class rescheduling with 24 hours notice. If an unexpected emergency occurs, every session includes mentor recap notes, milestone checkpoint reviews, and project cloud saves so your child never falls behind.",
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


