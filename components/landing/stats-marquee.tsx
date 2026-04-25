const stats = [
  "US · AU · India",
  "4.9★ client rating",
  "48-hr avg turnaround",
  "10,000+ creatives shipped",
  "50+ D2C brands served",
]

export function StatsMarquee() {
  const repeatedStats = [...stats, ...stats, ...stats, ...stats, ...stats]

  return (
    <>
      <style>{`
        @keyframes scrollMarqueeStats {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-stats {
          animation: scrollMarqueeStats 40s linear infinite;
        }
      `}</style>

      <div className="flex h-18 w-full items-center overflow-hidden bg-secondary">
        <div className="animate-marquee-stats flex w-max items-center">
          {repeatedStats.map((stat, idx) => (
            <div key={idx} className="flex shrink-0 items-center">
              <span className="type-monospaced text-[16px] whitespace-nowrap text-secondary-foreground">
                ✦ {stat}
              </span>
              <div className="w-40 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
