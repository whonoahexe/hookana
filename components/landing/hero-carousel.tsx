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
      <div className="pointer-events-none relative -z-30 h-0 w-full">
        <div className="pointer-events-auto absolute -top-6 right-5 h-66 w-234">
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
