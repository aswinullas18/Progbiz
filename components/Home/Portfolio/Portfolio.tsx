import React from 'react'
import { montserrat } from '@/lib/font'
import { FaAngleRight } from 'react-icons/fa'
import Image from 'next/image'

const portfoliImages = [
  {
    image: "/images/Portfolio-img1.jpg",
    text: "Slipery moneys - e-commerce platform for high risk industries",
  },
  {
    image: "/images/Portfolio-img2.jpg",
    text: "Hybrid capital - digital currency",
  },
  {
    image: "/images/Portfolio-img3.jpg",
    text: "Betero - sports betting platform",
  },
  {
    image: "/images/Portfolio-img4.jpg",
    text: "Exec - employees financial wellness saas",
  },
  {
    image: "/images/Portfolio-img5.jpg",
    text: "Voltoge - accessible clean energy startup",
  },
  {
    image: "/images/Portfolio-img6.jpg",
    text: "Hyperbolic - a decentralized data transmission startup",
  },
]

export default function Portfolio() {
  return (
    <div className="bg-black text-white justify-center">
      {/* Hero Section */}
      <div className="m-4 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[181px]">
          {/* Left */}
          <div className="flex flex-col items-start space-y-4">
            <button className="w-[96px] h-[43px] px-[18px] py-[11px] rounded-[30px] border border-[#363804] bg-[#171802] text-[#FFBE0D]">
              <p
                className={`font-normal text-[14px] leading-[20.3px] tracking-[0] align-middle ${montserrat.className}`}
              >
                Portfolio
              </p>
            </button>

            <div className="pt-4 w-full max-w-[452px] h-[120px]">
              <h2
                className={`font-extralight text-[36px] sm:text-[48px] md:text-[54px] leading-[59.94px] tracking-[0] align-middle text-white ${montserrat.className}`}
              >
                Exceptional work you deserve
              </h2>
            </div>
          </div>

          {/* Right */}
          <div className="relative w-full min-h-[192px] sm:h-48">
            <p
              className={`absolute bottom-4 right-4 w-[280px] sm:w-[320px] md:w-[356px] h-[70px] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[23.2px] tracking-[0] align-middle text-white text-left ${montserrat.className}`}
            >
              From tech startups to healthcare giants, e-commerce pioneers to edtech, {'we&apos;ve'} left our mark on diverse domains.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Grid Section */}
      <section className=" m-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfoliImages.map((portfoliImages, index) => (
            <div key={index} className="relative rounded-3xl overflow-hidden">
              <Image
                src={portfoliImages.image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
             <div className={`absolute bottom-4 w-[314px] h-[84px]  left-4 text-white font-normal text-[22px] leading-[27.94px] tracking-[0] align-middle ${montserrat.className}`}>
                 {portfoliImages.text}
             </div>            
            </div>
          ))}
        </div>
      </section>
      <div className="flex items-center justify-center py-10">
        <button className={`group mt-2 sm:mt-4 flex justify-center items-center gap-2 text-black bg-[#FFBE0D] font-medium text-[14px] sm:text-[16px] leading-[23.2px] px-5 sm:px-6 py-2 rounded-full ${montserrat.className}`}>
                  See all works
                  <FaAngleRight className="text-black text-lg group-hover:translate-x-1 transition-transform" />
                </button>

</div>
    </div>
  )
}