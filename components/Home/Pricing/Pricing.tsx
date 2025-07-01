import { montserrat } from '@/lib/font';
import React from 'react';
import { FaAngleRight, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

const standardFeatures = [
  "Unlimited requests",
  "~48 hour delivery",
  "Unlimited brands",
  "Weekly meetings",
  "Pause or cancel anytime",
  "Managed via Slack and Trello",
  "All services except Webflow",
];

const proFeatures = [
  "Unlimited requests",
  "~48 hour delivery",
  "Unlimited brands",
  "Weekly meetings",
  "Pause or cancel anytime",
  "Managed via Slack and Trello",
  "All services and Webflow",
];

const projectBased = [
  "Fixed scope of work",
  "Delivered in milestones",
];

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 md:px-8 bg-black text-white">
      <button className="w-[96px] h-[43px] px-[18px] py-[11px] rounded-full border border-[#363804] bg-[#171802] text-[#FFBE0D]">
        <p className={`font-normal text-[14px] leading-[20.3px] ${montserrat.className}`}>Pricing</p>
      </button>

      <div className="w-full max-w-[886px] text-center mt-6">
        <h2 className={`font-extralight text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-[1.3] ${montserrat.className}`}>
          Choose the relevant plan to build, grow and fasten your team
        </h2>
      </div>

      <div className="grid w-full sm:grid-cols-3 gap-6 mt-10 max-w-7xl">
        <div className="bg-[#141414] border border-[#313131] rounded-3xl p-6">
          <p className={`text-[#a6a6a6] text-[16px] font-normal ${montserrat.className}`}>STANDARD</p>
          <h4 className={`text-[48px] text-white font-normal ${montserrat.className}`}>
            $2,150 <span className="text-[22px] font-normal">/month</span>
          </h4>
          <div className="w-fit border-b border-white mb-4">
            <p className={`text-[16px] text-white font-normal ${montserrat.className}`}>One request at a time</p>
          </div>
          <div className="grid grid-rows-2">
            <div></div>
            <div>
              <p className={`text-[#a6a6a6] text-[16px] font-normal ${montserrat.className}`}>{"What's included:"}</p>
            </div>
          </div>
          <ul className="space-y-3 py-2">
            {standardFeatures.map((feature, index) => (
              <li key={index} className={`flex items-start gap-4 text-[16px] font-normal ${montserrat.className}`}>
                <FaCheck className="mt-1 text-[#FFBE0D]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="w-full gap-4">
            <button className={`w-full h-[58px] group mt-4 flex items-center gap-2 bg-[#FFBE0D] text-black font-medium text-[16px] px-6 py-2 rounded-full transition justify-center ${montserrat.className}`}>
              Subscribe
              <FaAngleRight className="text-black text-lg group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`w-full h-[58px] group mt-2 flex items-center gap-2 bg-transparent border border-[#313131] text-white font-medium text-[16px] px-6 py-2 rounded-full justify-center ${montserrat.className}`}>
              Book a demo
            </button>
          </div>
        </div>

        <div className="bg-[#141414] border border-[#313131] rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-6 bg-[#F3FF11]/20 px-4 py-2 rounded-b-lg z-10 shadow-md flex items-center gap-2">
            <p className={`text-[#FFBE0D] font-normal text-sm ${montserrat.className}`}>Faster</p>
            <Image src="/images/Bolt.png" alt="Bolt Icon" className="h-[14px]" />
          </div>

          <p className={`text-[#a6a6a6] text-[16px] font-normal ${montserrat.className}`}>PRO</p>
          <h4 className={`text-[48px] text-white font-normal ${montserrat.className}`}>
            $3,150 <span className="text-[22px] font-normal">/month</span>
          </h4>
          <div className="w-fit border-b border-white mb-4">
            <p className={`text-[16px] text-white font-normal ${montserrat.className}`}>Double the requests</p>
          </div>
          <div className="grid grid-rows-2">
            <div></div>
            <div>
              <p className={`text-[#a6a6a6] text-[16px] font-normal ${montserrat.className}`}>{"What's included:"}</p>
            </div>
          </div>
          <ul className="space-y-3 py-2">
            {proFeatures.map((feature, index) => (
              <li key={index} className={`flex items-start gap-4 text-[16px] font-normal ${montserrat.className}`}>
                <FaCheck className="mt-1 text-[#FFBE0D]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="w-full gap-4">
            <button className={`w-full h-[58px] group mt-4 flex items-center gap-2 bg-[#FFBE0D] text-black font-medium text-[16px] px-6 py-2 rounded-full transition justify-center ${montserrat.className}`}>
              Subscribe
              <FaAngleRight className="text-black text-lg group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`w-full h-[58px] group mt-2 flex items-center gap-2 bg-transparent border border-[#313131] text-white font-medium text-[16px] px-6 py-2 rounded-full justify-center ${montserrat.className}`}>
              Book a demo
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="bg-[#141414] border border-[#313131] rounded-3xl p-6 flex flex-col w-full">
            <p className={`text-[#a6a6a6] text-[16px] font-normal ${montserrat.className}`}>PROJECT-BASED</p>
            <div className="pt-3 w-full">
              <p className={`text-[16px] text-left text-white font-normal leading-[23.2px] ${montserrat.className}`}>
                For a custom fee delivered in milestones. Ideal for specific goals. Custom project scope.
              </p>
            </div>
            <div className="grid grid-rows-3">
              <div></div>
              <div></div>
              <div>
                <p className={`text-[#a6a6a6] text-[16px] font-normal ${montserrat.className}`}>{"What's included:"}</p>
              </div>
            </div>
            <ul className="space-y-3 py-2">
              {projectBased.map((feature, index) => (
                <li key={index} className={`flex items-start gap-4 text-[16px] font-normal ${montserrat.className}`}>
                  <FaCheck className="mt-1 text-[#FFBE0D]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-auto bg-transparent text-white font-medium py-2 px-4 pt-[48px] pb-[18px] rounded-3xl border border-[#313131] ${montserrat.className}`}>
              Send email
            </button>
          </div>

          <div className="bg-[#141414] border border-[#313131] rounded-3xl p-6 flex flex-col">
            <h4 className={`text-[36px] text-white font-normal ${montserrat.className}`}>Refer & earn</h4>
            <p className={`text-[16px] text-left text-white font-normal leading-[23.2px] ${montserrat.className}`}>
              Receive $150 for each referral!
            </p>
            <div className="w-full pt-[18px]">
              <button className={`w-full mt-auto h-[60px] bg-transparent text-white font-medium py-2 px-4 rounded-3xl border border-[#313131] ${montserrat.className}`}>
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing