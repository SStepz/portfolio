import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import watcherImg from "@/public/Watcher.png";
import eliteImg from "@/public/ELite2.png";
import gasDetectorImg from "@/public/GasDetector.png";
import kufeedbackImg from "@/public/KUFeedbackZoom.png";

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
    title: "Watcher Web App",
    description:
      "Web application for tracking entertainment media and delivering personalized recommendations. I worked as a backend developer on this project, assisted in UI design, and key feature structuring.",
    tags: ["FastAPI", "MongoDB"],
    imageUrl: watcherImg,
  },
  {
    title: "E-Lite Mobile App",
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
    imageUrl: gasDetectorImg,
  },
  {
    title: "KU Feedback UI",
    description:
      "I designed mobile application UI aimed at assisting teachers in gauging student comprehension through a feedback mechanism and a calendar for tracking.",
    tags: ["Figma", "Miro"],
    imageUrl: kufeedbackImg,
  },
] as const;

export const skillsData = [
  "Dart",
  "Flutter",
  "Python",
  "FastAPI",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Tailwind",
  "C",
  "C++",
  "C#",
  "Git",
  "Docker",
  "MongoDB",
  "Postman",
  "Unity",
  "Figma",
  "Trello",
  "ClickUp",
  "Miro",
] as const;