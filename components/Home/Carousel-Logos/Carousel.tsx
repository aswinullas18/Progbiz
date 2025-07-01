import React from 'react'
import { montserrat } from '@/app/layout'
import Image from 'next/image';
const logos = [
  '/images/dribble.png',
  '/images/awwwards.png',
  '/images/behance.png',
  '/images/css-design.png',
];
const Carousel = () => {
  return (
   <div className="w-full flex flex-col  items-center justify-center relative z-[10005] py-10">
  <p
    className={`text-[16px] leading-[23.2px] font-normal tracking-[0] text-center align-middle text-[#A6A6A6] ${montserrat.className}`}
  >
    As seen and loved on:
  </p>

<div className="w-full relative z-[10005] py-10  px-4 sm:px-10">
  <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6">

    <div className="sm:col-span-12 overflow-hidden">
      <div className="flex w-max scroll-loop">
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className="w-[20vw] flex justify-center items-center px-4">
            <Image
              src={src}
              alt="Logo"
              className="h-14 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Carousel