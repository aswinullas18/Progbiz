import { montserrat } from '@/app/layout'
import React from 'react'

const serviceRow1 = ["UI/UX design", "Graphic design", "Logo design", "Branding", "Animation"]

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 md:px-8 w-full bg-black text-white">
      <button className="w-[96px] h-[43px] px-[18px] py-[11px] rounded-full border border-[#363804] bg-[#171802] text-[#FFBE0D]">
        <p className={`font-normal text-[14px] leading-[20.3px] ${montserrat.className}`}>Services</p>
      </button>

      <div className="w-full max-w-[652px] text-center mt-6">
        <h2 className={`font-extralight text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-[1.3] ${montserrat.className}`}>
          All you want, delivered on time
        </h2>
      </div>

      <div className="w-full max-w-[680px] mx-auto px-4 sm:px-0">
        <div className="relative w-full overflow-hidden mt-10">
          <div className="flex infinite-scroll gap-4 px-6 py-2 w-max">
            {[...serviceRow1, ...serviceRow1].map((tag, idx) => (
              <span
                key={`row1-${idx}`}
                className={`font-normal text-[16px] leading-[23.2px] tracking-[0] align-middle whitespace-nowrap border 
                  border-[#313131] bg-[#141414] rounded-full px-6 py-2 text-white text-sm sm:text-base ${montserrat.className}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-10" />
        </div>

        <div className="relative w-full overflow-hidden mt-4">
          <div className="flex infinite-scroll-reverse gap-4 px-6 py-2 w-max">
            {[...serviceRow1, ...serviceRow1].map((tag, idx) => (
              <span
                key={`row2-${idx}`}
                className={`font-normal text-[16px] leading-[23.2px] tracking-[0] align-middle whitespace-nowrap border 
                  border-[#313131] bg-[#141414] rounded-full px-6 py-2 text-white text-sm sm:text-base ${montserrat.className}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </div>
  )
}

export default Services