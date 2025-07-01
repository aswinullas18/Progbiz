import { montserrat } from '@/lib/font'
import React from 'react'
import { LuPlus } from 'react-icons/lu';


const questions = [
    "Is it really unlimited?",
    "Why wouldn't I just hire a freelancer?",
    "Why wouldn't I just hire a full-time designer?",
    "Can I pause, renew or cancel at any time?",
    "Are there any contracts?",
    "How do we communicate?",
    "What if I only have one design task?",
    "What is an active task?",
    "Who are the designers?",
    "How many designs can be done in a single month?",
    "Are there any refunds if I don't like the designs?"
];

const Insights = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 pt-56 sm:px-6 md:px-8  bg-black">
          <button className="w-[96px] h-[43px] px-[18px] py-[11px] rounded-[30px] border border-[#363804] bg-[#171802] text-[#FFBE0D]">
            <p
              className={`font-normal text-[14px] leading-[20.3px] tracking-[0] align-middle ${montserrat.className}`}
            >
              Insights
            </p>
          </button>
    
          
          <div className="w-full max-w-[652px] h-auto text-center mt-6">
            <h2
              className={`font-extralight text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-[1.3] tracking-[0] text-white ${montserrat.className}`}
            >
              Frequently asked questions
            </h2>
          </div>


                    <div className="w-full max-w-[880px] mx-auto px-4 sm:px-6 py-8">
      <div className="space-y-3">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-[23px] py-[21] bg-[#141414] border border-[#313131] text-white rounded-2xl`}
          >
            <div> <span className={`font-normal text-[20px] leading-[29px] ${montserrat.className}`}>{question}</span> </div>
            <div > <LuPlus className='w-[18px] h-[18px]'></LuPlus></div>
          </div>
        ))}
      </div>
    </div>


          </div>
  )
}

export default Insights