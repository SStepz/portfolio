import Image from 'next/image'
import React from 'react'
import sicon from '@/public/SStepz.png'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div>
          <Image
            src={sicon}
            alt='My Icon'
            width='192'
            height='192'
            quality='95'
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}