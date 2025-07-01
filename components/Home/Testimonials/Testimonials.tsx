import { montserrat } from "@/app/layout";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time...",
      name: "Milosh Vukic",
      title: "CEO @goatmarketing",
      rating: 5,
      image: "/images/testi.png",
      brand: "goatmarketing",
    },
    {
      text: "Highly professional and versatile. He’s hard working and always open to feedback. I'd definitely work with him again.",
      name: "Chris Hjort",
      title: "PM @OnDeck",
      rating: 5,
      image: "/images/testi.png",
      brand: "OnDeck",
    },
    {
      text: "Truly professional and capable of delivering quality work on time. They helped us redesign and optimize our cutting-edge website.",
      name: "Borggi Erlendsson",
      title: "CEO @Kosmooz",
      rating: 5,
      image: "/images/testi.png",
      brand: "Kosmooz",
    },
    {
      text: "Was awesome to work with. He’s extremely fast and open to changes. Will definitely work with him again in the future.",
      name: "Rakesh Seth",
      title: "CEO @nexyn",
      rating: 5,
      image: "/images/testi.png",
      brand: "nexyn",
    },
    {
      text: "Working with Handmade on our website design was an exceptional experience. As an agency, they shared our philosophy and delivered on all fronts.",
      name: "Goran Markovic",
      title: "Founder @Kaya",
      rating: 5,
      image: "/images/testi.png",
      brand: "Kaya",
    },
    {
      text: "We were amazed by how seamlessly Handmade adapted to our workflows. The design precision and attention to user experience were top-tier.",
      name: "Jasmine Keller",
      title: "Design Lead @PixelCore",
      rating: 5,
      image: "/images/testi.png",
      brand: "PixelCore",
    },
    {
      text: "Handmade was instrumental in scaling our product launch. Their speed and quality helped us go live weeks ahead of schedule.",
      name: "Yuki Tanaka",
      title: "CTO @StartupBridge",
      rating: 5,
      image: "/images/testi.png",
      brand: "StartupBridge",
    },
    {
      text: "The UI was slick, the performance was optimized, and the results spoke for themselves. Handmade nailed it!",
      name: "Carlos Mendez",
      title: "Founder @Zentrix",
      rating: 5,
      image: "/images/testi.png",
      brand: "Zentrix",
    },
    {
      text: "They transformed our cluttered dashboard into a clean, intuitive interface. Our team productivity has never been better.",
      name: "Emily Du",
      title: "Product Manager @Fluxtech",
      rating: 5,
      image: "/images/testi.png",
      brand: "Fluxtech",
    },
    {
      text: "From branding to code, Handmade delivered with precision. They understood our goals better than we did ourselves.",
      name: "Aarav Shah",
      title: "Creative Director @DesignNest",
      rating: 5,
      image: "/images/testi.png",
      brand: "DesignNest",
    },
    {
      text: "Reliable, communicative, and always ahead of deadlines. You won’t regret collaborating with Handmade.",
      name: "Lina Novik",
      title: "COO @OrbitLab",
      rating: 5,
      image: "/images/testi.png",
      brand: "OrbitLab",
    },
    {
      text: "Their work elevated our mobile experience far beyond expectations. The app feels snappy and delightful to use.",
      name: "Matteo Rossi",
      title: "Tech Lead @SwipeFlow",
      rating: 5,
      image: "/images/testi.png",
      brand: "SwipeFlow",
    },
    {
      text: "Excellent partner for scaling our content strategy. Design consistency across platforms has finally been achieved.",
      name: "Fatima Alvi",
      title: "Marketing Head @Lumino",
      rating: 5,
      image: "/images/testi.png",
      brand: "Lumino",
    },
    {
      text: "Clean, pixel-perfect layouts with thoughtful UX choices. Handmade truly cares about every user touchpoint.",
      name: "Tom Bremer",
      title: "UX Consultant @CraftLab",
      rating: 5,
      image: "/images/testi.png",
      brand: "CraftLab",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 sm:px-6 md:px-8">
      <button className="px-[18px] py-[11px] rounded-[30px] border border-[#363804] bg-[#171802] text-[#FFBE0D]">
        <p className={`text-[14px] leading-[20.3px] ${montserrat.className}`}>Testimonials</p>
      </button>

      <div className="w-full max-w-[672px] text-center mt-6">
        <h2 className={`text-white font-extralight text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-[1.3] ${montserrat.className}`}>
          Read what our clients are saying about us
        </h2>
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-10">
        <div className="h-[100vh] overflow-hidden relative">
          <div className="masonry animate-scroll hide-scrollbar">
            {testimonials.map((item, idx) => (
              <div key={idx} className="masonry-item bg-[#141414] rounded-[32px] px-6 py-8 border border-[#313131] flex flex-col h-full">
                <div className="grid sm:grid-cols-12 gap-6 items-start mb-6">
                  <div className="col-span-3 w-[51px] h-[51px] rounded-full overflow-hidden">
                    <Image src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="col-span-9 flex flex-col justify-center">
                    <h4 className={`text-[#ffffff] leading-[23.2px] text-[16px] font-normal ${montserrat.className}`}>{item.name}</h4>
                    <p className={`text-[#a6a6a6] leading-[23.2px] text-[16px] font-normal ${montserrat.className}`}>{item.title}</p>
                  </div>
                </div>

                <p className={`text-[#a6a6a6] leading-[23.2px] text-[16px] font-normal ${montserrat.className}`}>“{item.text}”</p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-base font-medium flex items-center gap-2">
                    {item.brand}
                    <span className="flex">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-base">★</span>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}