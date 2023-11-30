"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import SIcon from '@/public/MyOldPic.jpg'

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

      <motion.p 
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hi, My name is Chaitavat Seenumngurn</span>. I'm a{" "}
        <span className='font-bold'>university student</span> looking forward to be a{" "}
        <span className='font-bold'>backend developer</span>. I enjoy building{" "}
        <span className='italic'>apps & sites</span>. My focus at the moment is{" "}
        <span className='underline'>Python (FastAPI)</span> but I'm looking forward to learn many other stuff in the future.
      </motion.p>
    </section>
  )
}