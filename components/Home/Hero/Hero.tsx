import { montserrat } from '@/lib/font';
import { FaAngleRight } from 'react-icons/fa';

const Hero = () => {
  return (
    
    <div className="relative w-full h-screen flex items-center  bg-black justify-center text-center -mt-34 z-1 px-4 overflow-visible">
      <div className="w-full sm:w-[90%] md:w-[80%] max-w-screen-xl mx-auto flex flex-col items-center space-y-4">
        <h1
          className={`text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-medium leading-[110%] sm:leading-[72px] md:leading-[77.7px] tracking-[0] text-center align-middle text-white ${montserrat.className}`}
        >
          Partner with a Full-Service <br />
          Design Team for All Your <br />
          Creative Needs
        </h1>

        <p
          className={`text-center align-middle text-[14px] sm:text-[16px] leading-[20px] sm:leading-[23.2px] text-white font-normal ${montserrat.className}`}
        >
          Skip the hassle of finding the perfect full-time designer or studio
        </p>

        <button className={`group mt-2 sm:mt-4 flex items-center gap-2 bg-transparent border border-[#FFBE0D] text-white font-medium text-[14px] sm:text-[16px] leading-[23.2px] px-5 sm:px-6 py-2 rounded-full hover:bg-[#FFBE0D] hover:text-black transition ${montserrat.className}`}>
          Connect-us
          <FaAngleRight className="text-[#FFBE0D] text-lg group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Hero;