"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import SIcon from '@/public/MyOldPic.jpg'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[55rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2
            }}
          >
            <Image
              src={SIcon}
              alt='My Picture'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl shadow-white/[0.15]'
            />
          </motion.div>
        </div>
      </div>

      <motion.h1 
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hi, My name is Chaitavat Seenumngurn</span>. I'm a{" "}
        <span className='font-bold'>university student</span> looking forward to be a{" "}
        <span className='font-bold'>backend developer</span>. I enjoy building{" "}
        <span className='italic'>apps & sites</span>. My focus at the moment is{" "}
        <span className='underline'>Python (FastAPI)</span>.
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay:0.1
        }}
      >
        <Link
          href='#contact'
          className='group text-slate-800 bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-100 active:scale-105 transition'
        >
          Contact me here{" "}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white text-slate-800 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'
          href='/CV.pdf'
          download
        >
          Download CV{" "}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        
        {/* <a 
          className='bg-white text-slate-700 p-4 hover:text-slate-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10'
          href='https://linkedin.com'
          target='_blank'
        >
          <BsLinkedin />
        </a> */}
        
        <a
          className='bg-white text-slate-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition cursor-pointer border border-black/10'
          href='https://github.com/SStepz'
          target='_blank'
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  )
}