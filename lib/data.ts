// ---------------------------------------------------------------------------
// Centralized copy & structured content for the JuaraKu landing page.
// Keeping content here (instead of hard-coded in components) makes the page
// easy to update and keeps section components focused on presentation.
// ---------------------------------------------------------------------------

export const industries = [
  {
    icon: "stethoscope",
    title: "Healthcare",
    description: "Doctors use AI to detect diseases earlier.",
  },
  {
    icon: "line-chart",
    title: "Finance",
    description: "AI detects fraud and automates financial analysis.",
  },
  {
    icon: "graduation-cap",
    title: "Education",
    description: "AI personalizes learning for every student.",
  },
  {
    icon: "factory",
    title: "Manufacturing",
    description: "Smart factories use AI automation.",
  },
  {
    icon: "gamepad-2",
    title: "Game Development",
    description: "AI helps developers create games faster.",
  },
  {
    icon: "code-2",
    title: "Software Development",
    description: "Developers build applications together with AI.",
  },
  {
    icon: "palette",
    title: "Creative Industry",
    description: "Artists and designers use AI every day.",
  },
] as const;

export const flagshipPrograms = [
  {
    id: "vibecoder-app",
    name: "VibeCoder App",
    tag: "App Track",
    description:
      "Learn to build real-world web and mobile applications while understanding programming fundamentals and using AI as a productivity tool.",
    projects: [
      "Task Manager",
      "School Website",
      "Portfolio",
      "Chat Application",
      "AI Dashboard",
    ],
    accent: "blue",
  },
  {
    id: "vibecoder-game",
    name: "VibeCoder Game",
    tag: "Game Track",
    description:
      "Design games, create mechanics, and build interactive worlds while learning Scratch, game logic, and AI-assisted workflows.",
    projects: ["Platformer", "Racing Game", "Adventure", "Puzzle", "Multiplayer Prototype"],
    accent: "gold",
  },
] as const;

export const roadmapSteps = [
  {
    step: 1,
    title: "Code Fundamental",
    skills: ["Logic", "Algorithms", "Problem Solving", "Programming Basics"],
    isChoice: false,
  },
  {
    step: 2,
    title: "Code Explorer",
    skills: ["Scratch", "Python", "Web Development", "Interactive Projects"],
    isChoice: false,
  },
  {
    step: 3,
    title: "AI Explorer",
    skills: [
      "Prompt Engineering",
      "Responsible AI",
      "AI Productivity",
      "Image Generation",
      "Coding with AI",
    ],
    isChoice: false,
  },
  {
    step: 4,
    title: "Choose Your Specialization",
    skills: ["App Fundamental", "Game Fundamental"],
    isChoice: true,
  },
  {
    step: 5,
    title: "Flagship Program",
    skills: ["VibeCoder App", "VibeCoder Game"],
    isChoice: true,
  },
] as const;

export const graduateOutcomes = [
  "Portfolio",
  "Competitions",
  "Hackathons",
  "Internship Preparation",
  "Freelance Readiness",
];

export const parentFeatures = [
  {
    icon: "hammer",
    title: "Project-Based Learning",
    description: "Every module ends in something real your child can show off and be proud of.",
  },
  {
    icon: "users",
    title: "Small Class Size",
    description: "Focused groups mean every student gets real attention from their mentor.",
  },
  {
    icon: "graduation-cap",
    title: "Experienced Mentors",
    description: "Learn from mentors who build software and games professionally.",
  },
  {
    icon: "rocket",
    title: "Future Ready Curriculum",
    description: "A curriculum built around where technology and AI are actually heading.",
  },
  {
    icon: "sparkles",
    title: "AI Integrated Learning",
    description: "Students learn to build with AI, not just about it.",
  },
  {
    icon: "layout-grid",
    title: "Portfolio Driven",
    description: "Every student graduates with real, shareable proof of their skills.",
  },
  {
    icon: "trophy",
    title: "Competition Preparation",
    description: "Hands-on prep for coding competitions and hackathons.",
  },
  {
    icon: "award",
    title: "Certificate",
    description: "Recognized certification for every completed milestone.",
  },
];

export const studentProjects = [
  {
    category: "Scratch Games",
    level: "Beginner",
    tech: "Scratch",
    color: "gold",
  },
  {
    category: "Python Applications",
    level: "Intermediate",
    tech: "Python",
    color: "blue",
  },
  {
    category: "Websites",
    level: "Intermediate",
    tech: "HTML · CSS · JS",
    color: "blue",
  },
  {
    category: "AI Projects",
    level: "Advanced",
    tech: "AI Tools · Python",
    color: "gold",
  },
  {
    category: "Games",
    level: "Advanced",
    tech: "Scratch · Game Logic",
    color: "blue",
  },
  {
    category: "Robotics",
    level: "Advanced",
    tech: "Sensors · Code",
    color: "gold",
  },
];

export const testimonials = [
  {
    name: "Ibu Sarah W.",
    role: "Parent of a JuaraKu student, age 10",
    quote:
      "My son used to only play games — now he builds them. JuaraKu turned his screen time into real, structured learning.",
    rating: 5,
  },
  {
    name: "Raka, age 12",
    role: "VibeCoder App student",
    quote:
      "I built a chat app with my mentor and showed it to my whole class. I want to build an AI app next!",
    rating: 5,
  },
  {
    name: "Bapak Andre P.",
    role: "Parent of two JuaraKu students",
    quote:
      "The mentors are patient and clearly love teaching. My kids ask to log in early — that says everything.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "What age is suitable?",
    answer:
      "JuaraKu is designed for children and pre-teens roughly aged 7–15. Our curriculum adapts in pace and complexity depending on age and prior experience.",
  },
  {
    question: "Does my child need prior coding experience?",
    answer:
      "Not at all. Most students start with zero experience. Our Code Fundamental stage is built specifically to introduce logic and problem solving from scratch.",
  },
  {
    question: "Are classes online?",
    answer:
      "Yes, classes are conducted live online with a real mentor, giving your child flexibility while still getting hands-on, human guidance.",
  },
  {
    question: "How many students per class?",
    answer:
      "We intentionally keep class sizes small so every student gets individual attention and meaningful feedback on their projects.",
  },
  {
    question: "Will students receive certificates?",
    answer:
      "Yes. Students receive a certificate at the completion of each major milestone, culminating in a flagship program certificate and portfolio.",
  },
  {
    question: "What devices are needed?",
    answer:
      "A laptop or desktop computer with a stable internet connection is recommended. Specific software requirements are shared with parents before class starts.",
  },
];

export const navLinks = [
  { label: "About", href: "#why-ai" },
  { label: "Programs", href: "#programs" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

export const footerLinks = {
  company: [
    { label: "About", href: "#why-ai" },
    { label: "Programs", href: "#programs" },
    { label: "Learning Roadmap", href: "#roadmap" },
    { label: "FAQ", href: "#faq" },
  ],
  contact: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "WhatsApp", href: "https://wa.me/" },
    { label: "Email", href: "mailto:hello@juaraku.id" },
  ],
};

import { Brain, BookOpen, Bot, Trophy } from "lucide-react";

export const highlights = [
  { icon: BookOpen, title: "Future-Ready Curriculum" },
  { icon: Brain, title: "Expert\nMentors" },
  { icon: Bot, title: "AI-Native Learning" },
  { icon: Trophy, title: "Future Innovators" },
];
