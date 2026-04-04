const achievements = [
  {
    title: "2nd Prize Winner ($1000)",
    subtitle: "MetaMask × HackQuest DevCook Global Hackathon",
    desc: "Our project Soluma secured 2nd place in the Solana Everyday Impact: Consumer & Community App track, highlighting its real-world impact.",
    prize: "$1000",
  },
  {
    title: "2nd Place Winner",
    subtitle: "TEK Connect 2024 (National Hackathon)",
    desc: "Secured 2nd place among 100+ competing teams for rapid development and highly innovative problem-solving.",
    prize: "2nd Place",
  },
  {
    title: "Health Track Winner",
    subtitle: "CosmoCloud Hackathon 2024",
    desc: "Emerged as the definitive winner in the Health Track category featuring outstanding technical execution.",
    prize: "Winner",
  },
  {
    title: "6th Place, Earn Category",
    subtitle: "EDU Chain Semester 3 Hackathon",
    desc: "Cryptify secured 6th position in the Earn domain for innovative problem-solving and teamwork among vast participants.",
    prize: "Top 6",
  },
  {
    title: "Top 10 & Top 20 Project",
    subtitle: "DCGC 2.0 & Fair 3 Hackathon (2025)",
    desc: "Recognized for VibeTribe, ranked in the Top 10 at DCGC 2.0 (2024) and was successfully selected as a Top 20 Project at Fair 3 Hackathon.",
    prize: "Top 10",
  },
  {
    title: "Best Non-Final Year Project",
    subtitle: "Kalanidhi 2025",
    desc: "Our project was formally recognized and ranked highest for its practical approach, quality code, and execution.",
    prize: "Best Project",
  },
  {
    title: "Section Topper (Silver Medalist)",
    subtitle: "Poornima College of Engineering (2023–24)",
    desc: "Awarded the Silver Medal for academic excellence across B.Tech Information Technology.",
    prize: "Silver Medal",
  }
];

export default function Achievement() {
  return (
    <div className="animate-slide-in space-y-10">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 relative">
          Achievements
          <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-indigo-500 rounded-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 ">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="relative p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Elegant Static Watermark */}
            <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 text-[40px] sm:text-[55px] font-black text-gray-200/50 blur-[1px] select-none pointer-events-none font-cinzel tracking-tighter leading-none whitespace-nowrap opacity-60">
              {a.prize}
            </div>

            {/* Visual Anchor Node */}
            <div className="absolute top-0 right-10 w-12 h-1 bg-indigo-100 rounded-b-md"></div>

            {/* Content Container (Layered above watermark) */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-auto">
                <div className="inline-flex items-center mb-4 px-3.5 py-1.5 bg-gray-50/80 text-gray-600 border border-gray-100 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-xl">
                  {a.subtitle}
                </div>
                
                <h3 className="text-[20px] sm:text-[22px] font-bold text-gray-900 font-cinzel tracking-tight leading-snug mb-3 drop-shadow-sm">
                  {a.title}
                </h3>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100/50">
                <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed max-w-[90%]">
                  {a.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
