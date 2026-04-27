const mockLogos = [
  "HOOKANA",
  "HOOKANA",
  "HOOKANA",
  "HOOKANA",
  "HOOKANA",
  "HOOKANA",
  "HOOKANA",
  "HOOKANA",
]

export function HeroCarousel() {
  const repeatedLogos = [...mockLogos, ...mockLogos, ...mockLogos, ...mockLogos]

  return (
    <>
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scrollMarquee 40s linear infinite;
        }
      `}</style>
      <div className="pointer-events-none relative -z-30 h-0 w-full overflow-x-clip overflow-y-visible">
        <div className="pointer-events-auto absolute -top-20 left-1/2 h-66 w-234 origin-center -translate-x-1/2 scale-[0.45] transition-all duration-300 sm:-top-14 sm:scale-[0.55] md:scale-75 lg:-top-7 lg:right-5 lg:left-auto lg:origin-right lg:translate-x-0 lg:scale-90 xl:scale-100">
          <img
            src="/svg/the-roll.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-contain object-right"
          />

          <div className="absolute top-16 right-2 left-8 flex h-32 items-center overflow-hidden">
            <div className="animate-marquee flex w-max">
              {repeatedLogos.map((logo, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="px-12 font-sans text-xl font-black tracking-widest text-white">
                    {logo}
                  </span>
                  <div className="h-20 border-l-4 border-dotted border-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
