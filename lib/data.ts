import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import eliteImg from "@/public/ELite2.png"
import balloxImg from "@/public/Ballox.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-Lite App",
    description:
      "Mobile application serving as an intermediary platform connecting part-time job seekers and recruiters. I worked as a backend developer on this project for 5 months.",
    tags: ["FastAPI", "MongoDB"],
    imageUrl: eliteImg,
  },
  {
    title: "GasDetector App",
    description:
      "Web application designed to monitor indoor air quality for gas leaks. I worked as a backend developer on this project for a week.",
    tags: ["FastAPI", "MongoDB", "Postman"],
    imageUrl: rmtdevImg,
  },
  {
    title: "BlueCafeteria DB",
    description:
      "Microsoft Access database for cafeteria operations, enabling seamless customer preorders. I led the creation of data flow and E-R diagrams, and implemented normalization.",
    tags: ["Microsoft Access", "Miro"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "KU Feedback UI",
    description:
      "Mobile application UI aimed at assisting teachers in gauging student comprehension through a feedback mechanism and providing a calendar for tracking of assignments and exams.",
    tags: ["Figma", "Miro"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "BalloxAR Game",
    description:
      "Mobile AR game from Unity. The objective was to strategically throw balls to topple surrounding boxes for maximum points, with increasing difficulty levels.",
    tags: ["Unity"],
    imageUrl: balloxImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;