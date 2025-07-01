import { montserrat } from '@/lib/font'
import React from 'react'

const benefitImages = [
  {
    image: "/images/benefit-img1.png",
    title: "Fast turnaround",
    description: "Slipery Expect the first draft within 48-72 hours, from Monday to Saturday.",
  },
  {
    image: "/images/benefit-img2.png",
    title: "Unlimited requests",
    description: "Hybrid capital - digital Enjoy the freedom of unlimited designs, tailored to meet your every need.",
  },
  {
    image: "/images/benefit-img3.png",
    title: "Always in sync",
    description: "Stay in sync with real-time updates and seamless communication, all via Slack.",
  },
  {
    image: "/images/benefit-img4.png",
    title: "Pause or cancel anytime",
    description: "Flexibility at your fingertips—pause or cancel your subscription anytime.",
  },
  {
    image: "/images/benefit-img5.png",
    title: "Trello task management",
    description: "Expertise in crafting designs that not only captivate but also drive results.",
  },
  {
    image: "/images/benefit-img6.png",
    title: "Worry free pricing",
    description: "Get all your design needs covered for just 2,150/month.",
  },
]

const Benefits = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 sm:px-6 md:px-8 bg-black">
  
      <button className="w-[96px] h-[43px] px-[18px] py-[11px] rounded-[30px] border border-[#363804] bg-[#171802] text-[#FFBE0D]">
        <p
          className={`font-normal text-[14px] leading-[20.3px] tracking-[0] align-middle ${montserrat.className}`}
        >
          Benefits
        </p>
      </button>

      
      <div className="w-full max-w-[652px] h-auto text-center mt-6">
        <h2
          className={`font-extralight text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-[1.3] tracking-[0] text-white ${montserrat.className}`}
        >
          Unlock a world of design potential with us
        </h2>
      </div>

      
      <section className="w-full bg-black py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitImages.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden text-white p-4 w-full h-auto flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] sm:h-[220px] md:h-[238px] rounded-lg mb-4"
              />
              <h3
                className={`font-normal text-[20px] leading-[29px] tracking-[0] align-middle mb-2 ${montserrat.className}`}
              >
                {item.title}
              </h3>
              <p
                className={`font-normal w-full text-[16px] leading-[23.2px] tracking-[0] align-middle text-gray-300 ${montserrat.className}`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Benefits