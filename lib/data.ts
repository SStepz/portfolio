import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    title: "T.C.C. Technology Co., Ltd.",
    role: "Full Stack Developer (Intern & Part-time)",
    description:
      "Contributed to the frontend development of an in-store sales management mobile application using Flutter and Dart with the MVVM (Model-View-ViewModel) design pattern. Worked in an Agile environment, participating in daily stand-up meetings and sprint planning sessions.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 - Nov 2024",
  },
  {
    title: "Kasetsart University",
    role: "Computer Engineering Student",
    description:
      "Completed coursework for a Bachelor's degree in Computer Engineering with a GPA of 3.43 (Second Class Honors). Currently in the process of graduating.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Watcher Web App",
    description:
      "Web application for tracking entertainment media and delivering recommendations. I worked as a backend developer on this project and assisted in UI design.",
    tags: ["Python", "FastAPI", "MongoDB", "Docker", "Figma", "DigitalOcean"],
    imageUrl: watcherImg,
  },
  {
    title: "E-Lite Mobile App",
    description:
      "Mobile application serving as an intermediary platform connecting part-time job seekers and recruiters. I worked as a backend developer on this project for 5 months.",
    tags: ["FastAPI", "MongoDB", "Figma"],
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
