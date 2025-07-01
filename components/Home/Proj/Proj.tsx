import React from 'react';
import { montserrat } from '@/app/layout';

const Proj = () => {
  return (
    <div className="m-4 grid grid-cols-1 gap-6 sm:grid-cols-12 z-[10003] p-5">
      
      <div className="sm:col-span-5 min-h-[323px] rounded-3xl p-1 border bg-[#141414] flex items-center justify-center">
        <video
          controls
          className="w-full h-full rounded-2xl object-cover"
          src="/images/Sample.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative sm:col-span-7 min-h-[323px] rounded-3xl bg-[#141414] border border-[#313131] flex items-center justify-center px-12 sm:px-20 text-white">
        <img
          src="/images/left-vector.png"
          alt="left quote"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-[37px] h-[82.75px]"
        />
        <img
          src="/images/right-vector.png"
          alt="right quote"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-[37px] h-[82.75px]"
        />
        <div className="max-w-[600px] w-full text-center">
          <p
            className={`text-white text-[16px] leading-[23.2px] font-normal text-center tracking-[0] align-middle max-w-[600px] ${montserrat.className}`}
          >
            An absolute professional who consistently delivers exceptional work, even under the most demanding deadlines. I appreciated the insightful feedback and innovative ideas introduced throughout the design process, which greatly enhanced the final product.
          </p>
          <p
            className={`text-[16px] leading-[23.2px] font-normal text-center tracking-[0] text-white mt-3 ${montserrat.className}`}
          >
            <span className="block">Wade Warren</span>
            <span className="block opacity-80">Founder @Lorem ipsum</span>
          </p>
        </div>
      </div>

      <div className="sm:col-span-12 bg-[#141414] border border-[#313131] rounded-3xl min-h-[323px] grid grid-cols-1 items-start">
        <div className="m-4 grid grid-cols-1 gap-6 sm:grid-cols-12 z-[10003] p-5">
          <div className="sm:col-span-5">
            <h2 className={`text-[40px] leading-[44.4px] font-extralight text-white ${montserrat.className}`}>
              Your dedicated <br /> in-house design <br /> team
            </h2>
          </div>
          <div className="sm:col-span-7 sm:ml-8">
            <div>
              <p className={`text-[16px] text-left leading-[23.2px] font-normal tracking-[0] text-white ${montserrat.className}`}>
                We are a global collective of diverse designers and developers, partnering with brands of all scales. What distinguishes us is our dedication to crafting memorable, user-friendly, and captivating experiences — it's what we excel at. The projects we deliver combine creative vision with practical execution, resulting in solutions that are both distinctive and impactful.
              </p>
            </div>
            <div className="flex items-center mt-14 relative">
              <div className="w-full h-[64px] border-l border-[#3A3A3A] pt-[6px] pr-[20px] pb-[6px] pl-[21px] flex flex-col gap-[4px] text-white">
                <p
                  className={`text-white text-[16px] leading-[23.2px] tracking-[0] align-middle font-normal w-[108px] h-[24px] ${montserrat.className}`}
                >
                  Lorem ipsum
                </p>
                <p
                  className={`w-[144px] h-[24px] text-[16px] leading-[23.2px] font-normal tracking-[0] align-middle text-[#AAAAAA] flex items-center ${montserrat.className}`}
                >
                  Founder and CEO
                </p>
              </div>
              <img
                src="/images/right-vector.png"
                alt="Right vector"
                className="w-[37px] h-[82.75px] ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proj;