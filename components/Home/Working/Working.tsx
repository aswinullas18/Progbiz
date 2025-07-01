import React from 'react'
import { montserrat } from '@/app/layout'

const steps = [
  {
    number: '1',
    title: 'Subscribe to a plan',
    description: 'Select a plan that fits your needs and jump on an onboarding call.',
  },
  {
    number: '2',
    title: 'Add a task',
    description: 'List your first task on our shared Trello board by specifying the requirements.',
  },
  {
    number: '3',
    title: 'Enjoy results',
    description: 'Receive your completed tasks in 2–4 business days.',
  },
]

const Working = () => {
  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center text-center w-full gap-6 max-w-[90%] md:max-w-3xl">
        <button
          className={`group flex items-center gap-2 border border-[#363804] bg-[#171802] 
            text-white font-medium text-[14px] sm:text-[16px] leading-[23.2px] 
            px-[18px] py-[11px] rounded-full hover:bg-[#363804] hover:text-black 
            transition ${montserrat.className}`}
          style={{ width: '135px', height: '43px' }}
        >
          <span
            className={`font-normal text-[14px] leading-[20.3px] text-[#FFBE0D] 
              text-center align-middle inline-block w-[99px] h-[21px] ${montserrat.className}`}
          >
            How it works
          </span>
        </button>

        <h2
          className={`text-[32px] sm:text-[44px] md:text-[54px] lg:text-[60px] 
            leading-[1.1] font-extralight text-center ${montserrat.className}`}
        >
          Pay and get started the same day
        </h2>

        <p
          className={`text-[16px] leading-[23.2px] font-normal text-center 
            text-gray-300 max-w-[90%] sm:max-w-[522px] ${montserrat.className}`}
        >
          No unnecessary bureaucracy. We focus on getting your ideas and problems solved.
        </p>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl justify-items-center">
          {steps.map((step) => (
            <div
              key={step.number}
              className="w-full max-w-[398px] h-[209.31px] rounded-3xl p-4 border bg-[#141414] border-[#363804]"
            >
              <div className="flex flex-col items-start gap-3 mb-2">
                <div className="w-[47px]">
                  <button
                    className={`w-[47px] h-[47px] rounded-full text-[16px] leading-[23.2px] 
                      font-normal text-[#FFBE0D] align-middle flex items-center justify-center 
                      border border-[#FFBE0D] bg-transparent ${montserrat.className}`}
                  >
                    {step.number}
                  </button>
                </div>
                <h4
                  className={`text-[22px] leading-[27.94px] pt-3 font-normal text-white align-middle ${montserrat.className}`}
                  style={{ width: '211px', height: '27.94px', maxHeight: '27.94px' }}
                >
                  {step.title}
                </h4>
              </div>
              <div className="pt-4">
                <p
                  className={`text-[16px] leading-[23.2px] font-normal text-gray-300 align-middle ${montserrat.className}`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Working