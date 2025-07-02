import React from 'react'
import { NavLinks } from '@/constant/constant'
import { inter, montserrat } from '@/lib/font'
import { FaAngleRight, FaStar } from 'react-icons/fa'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="bg-[url(/images/HeroBg.jpg)] bg-cover bg-center px-4 sm:px-8 lg:px-14 pt-14 pb-0 min-w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className={`text-white text-[36px] sm:text-[40px] font-semibold leading-[100%] tracking-[0] ${inter.className}`}>
          LOGO
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-white hover:text-[#FFBE0D] transition"
            >
              <p className={`text-[12px] sm:text-[14px] leading-[20px] font-normal ${montserrat.className}`}>
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        <div>
          <button
            className={`group whitespace-nowrap bg-transparent border border-[#FFBE0D] text-white text-[14px] sm:text-[16px] leading-[23px] font-medium px-5 sm:px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#FFBE0D] hover:text-black transition ${montserrat.className}`}
          >
            Book a demo
            <FaAngleRight className="text-[#FFBE0D] text-lg group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
        <button
          className={`text-white flex items-center gap-2 text-[14px] font-normal leading-none tracking-[0] align-middle rounded-3xl border border-[#313131] px-4 sm:px-5 sm:py-3 ${montserrat.className}`}
        >
          <span>5.0</span>
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="text-[#FFBE0D]" />
          ))}
          <span>11 reviews</span>
        </button>
      </div>
    </div>
  )
}

export default Nav