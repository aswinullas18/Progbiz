import { montserrat } from '@/lib/font';
import React from 'react';
import {
  FaAngleRight,
  FaLinkedin,
  FaInstagram,
  FaBehance,
  FaDribbble,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full text-white bg-black relative overflow-hidden pt-10">
      <h2
        className={`text-center font-light 
          text-[36px] leading-[42px] 
          sm:text-[48px] sm:leading-[54px] 
          md:text-[60px] md:leading-[68px] 
          lg:text-[70px] lg:leading-[77.7px] 
          ${montserrat.className}`}
      >
        Need more clarity? <br />
        Get in touch!
      </h2>

      <div className="flex justify-center mt-6">
        <button
          className={`group flex items-center gap-2 bg-[#FFBE0D] text-black 
            font-medium text-[14px] sm:text-[16px] leading-[23.2px] 
            px-5 sm:px-6 py-2 rounded-full ${montserrat.className}`}
        >
          Book a demo
          <FaAngleRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="w-full h-[300px] relative mt-10 bg-[url('/images/BgRotateed.png')] bg-cover bg-center">
        <div className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 md:px-20 py-4 text-sm backdrop-blur-sm bg-black/30">
          <p
            className={`text-neutral-400 font-normal text-[16px] leading-[23.2px] tracking-[0] align-middle ${montserrat.className}`}
          >
            © 2024 All Rights Reserved
          </p>

          <div className="flex gap-3 mt-4 sm:mt-0">
            {[FaLinkedin, FaInstagram, FaBehance, FaDribbble].map((Icon, i) => (
              <button
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#313131] hover:border-white transition"
              >
                <Icon className="text-white transition" />
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#313131] hover:border-white transition">
              <img
                src="/images/Logo-2.png"
                alt="Logo"
                className="w-[15px] h-[15px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;