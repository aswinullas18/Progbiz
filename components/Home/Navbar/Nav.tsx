import React from 'react'
import { NavLinks } from '@/constant/constant'
import { inter,montserrat } from '@/app/layout'
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link'

const Nav = () => {
  return(
   <div className="bg-[url(/images/HeroBg.jpg)] max-w-full bg-cover bg-center py-14  h-[300px] sm:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Logo */}
       <div className={`text-white text-[40px] font-semibold leading-[100%] tracking-[0] align-middle ${inter.className}`}>
         LOGO
      </div>

        {/* Nav Links */}
        <div className="flex flex-wrap  justify-center gap-6 lg:gap-10">
  {NavLinks.map((link) => (
    <Link
      key={link.id}
      href={link.url}
      className={`text-white hover:text-[#FFBE0D] transition`}
    >
      <p
        className={`text-[14px] leading-[20.3px] tracking-[0] font-normal align-middle ${montserrat.className}`}
      >
        {link.label}
      </p>
    </Link>
  ))}
</div>

        {/* Button */}
        <div>
         <button className={`group whitespace-nowrap bg-transparent border border-[#FFBE0D] text-white text-[16px] leading-[23.2px] tracking-[0] font-medium align-middle px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#FFBE0D] hover:text-black transition ${montserrat.className}`}>
            Book a demo
             <FaAngleRight className="text-[#FFBE0D] text-lg group-hover:translate-x-1 transition-transform" />
        </button>
        </div>
      </div>
    </div>

  )
}

export default Nav
