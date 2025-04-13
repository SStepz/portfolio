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
        As I approach graduation in{" "}
        <span className="font-medium">Computer Engineering</span> at Kasetsart University, I've decided to pursue my passion for software engineering. I'm currently focused on improving my{" "}
        <span className="font-medium">full-stack development</span> skills.{" "}
        <span className="italic">My favorite part of programming</span> is the problem-solving. The satisfaction of finally cracking a tough problem after hours of thinking is unbeatable.
      </p>
      <p className='mb-3'>
        My core tech stack includes{" "}
        <span className="font-medium">
        Flutter, Python, FastAPI, React, Next.js, and MongoDB
        </span>
        . I'm also familiar with C, C++ and C#. I'm always eager to learn new technologies and improve my skills. Right now, I'm currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games and watching various kinds of entertainments such as movies, series, and anime. I also love{" "}
        <span className="font-medium">learning new things</span> and am currently
        teaching myself how to play the{" "}
        <span className="font-medium">guitar and piano</span>.
      </p>
    </motion.section>
  )
}