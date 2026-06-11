// Central place for all portfolio content.
// Keeping the data here makes the components small and easy to read.

// Tech skills shown as small pills in the Skills section
export const skills = [
  "MySQL",
  "Postgresql",
  "HTML / CSS",
  "Javascript",
  "Tailwind CSS",
  "Git",
  "Chrome Extensions",
  "Node.js",
  "next.js",
  "Bun"
]

// Spoken-language proficiency bars
export const languages = [
  { name: "Gujrati", level: 99 },
  { name: "Hindi",   level: 92 },
  { name: "English", level: 70 },
]

// Work history shown in the "My Experiences" timeline
export const experiences = [
  {
    period: "jan 2026 - Present",
    title: "Frontend Developer - LD college",
    points: [
      "Selected as a part of new team to develop and maintain the college's official website admin panel", 
      "working on the frontend to manage institutional data and operations"
    ],
  },
  {
    period: "Oct 2026 - Present",
    title: "Tech Team member - GDG onCampus",
    points: [
      "Part of the technical team at GDG On Campus", 
      "working alongside fellow developers to foster a thriving tech community at LDCE."
    ],
  }
]

// Personal projects shown as cards in the "What have I created?" section
export const projects = [
  {
    name: "Perplexity clone",
    address: `https://github.com/kdpatel110/Perplexity`,
    description:
      "Perplexity is a public full-stack AI-powered search platform built using TypeScript, React 19, and Express 5.It leverages Bun as its runtime, Prisma/PostgreSQL for database management, and Supabase for user authentication. The application integrates OpenAI, OpenRouter, and Tavily Search APIs to deliver real-time, intelligent query results.",
  },
  
  
]

// Client / company projects shown in the "Every Project Has a Story" grid
export const portfolio = [
  { name: "Dastyar", role: "Full Stack Developer" },
  { name: "Deeze", role: "Full Stack Developer" },
  { name: "Dast E Aval", role: "Full Stack Developer" },
  { name: "Dastgire", role: "Full Stack Developer" },
  { name: "Unite", role: "Backend Developer" },
  { name: "HMenu", role: "Backend Developer" },
  { name: "Proganic Market", role: "Backend Developer" },
  { name: "Farakh", role: "Backend Developer" },
  { name: "Rahmani Gallery", role: "Backend Developer" },
  { name: "Barsaland", role: "Backend Developer" },
  { name: "Tap Security", role: "Backend Developer" },
  { name: "Soka", role: "Backend Developer" },
]
