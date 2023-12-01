"use client"

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After studying in{" "}
        <span className="font-medium">Computer Engineering</span> for 3 years, I decided to pursue my passion for software engineering. I'm currently improving my{" "}
        <span className="font-medium">backend development</span> skills.{" "}
        <span className="italic">My favorite part of programming</span> is the problem-solving part. The feeling of finally figuring out a solution to a problem after you've been struggling with it for a long time is the best. My core stack is{" "}
        <span className="font-medium">
          Python, FastAPI, and MongoDB
        </span>
        . I am also familiar with C, C++ and C#. I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">intern position</span> as a backend developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games and watching various entertainments such as movies, series, and anime. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning how to play{" "}
        <span className="font-medium">guitar and piano</span>.
      </p>
    </motion.section>
  )
}