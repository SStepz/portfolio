"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SIcon from "@/public/MyPic.jpg";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.7);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.2,
            }}
          >
            <Image
              src={SIcon}
              alt="My Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Chaitavat,</span> a soon-to-be
        graduate with experience in{" "}
        <span className="font-bold">full-stack development.</span> I've worked
        mainly on <span className="font-bold">front-end</span> using Flutter
        during internships and part-time jobs, while most of my personal
        projects focused on the <span className="font-bold">back-end</span>. My
        current stack includes{" "}
        <span className="italic">
          Flutter, Python, FastAPI, React, Next.js, and MongoDB
        </span>
        . I'm now diving deeper into <span className="underline">React</span>{" "}
        and learning <span className="underline">Go</span> to grow my skills.
        I'm currently looking for a <span className="font-bold">full-time</span>{" "}
        front-end role, with an interest in back-end opportunities as well.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-slate-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-900 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white text-slate-800 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white text-slate-700 p-4 hover:text-slate-900 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://linkedin.com/in/chaitavatseenumngurn/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-900 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/SStepz"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
