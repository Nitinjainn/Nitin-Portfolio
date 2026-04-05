export default function Experience() {
  const experiences = [
    {
      company: "STPI",
      fullName: "Software Technology Parks of India",
      role: "FullStack Intern",
      duration: "June 2025 - July 2025",
      location: "Jaipur",
      description: "Completed an intensive Full Stack Web Development training. Focused on building robust web applications and backend systems using the MERN stack.",
      technologies: ["React", "Express", "Node.js", "MongoDB"],
    },
    {
      company: "Bussibees",
      fullName: "Bussibees Ed-tech Pvt. Ltd.",
      role: "Frontend Intern",
      duration: "July 2024 - July 2024",
      location: "Jaipur",
      description: "Spearheaded core frontend development and UI enhancements. Built highly responsive and visually engaging user interfaces for modern educational tools.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="animate-slide-in">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 relative">
          Experience
          <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-indigo-500 rounded-full"></span>
        </h2>
      </div>

      <div className="relative space-y-10">
        {/* Dynamic Gradient Timeline Line */}
        <div className="absolute left-[7px] md:left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-indigo-400 via-indigo-200 to-transparent" />

        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-10 md:pl-14 group cursor-pointer">
            
            {/* Elegant Timeline Node */}
            <div className="absolute left-0 md:left-1 top-8 w-4 h-4 rounded-full bg-white border-[3px] border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.4)] z-10" />

            {/* High-End Glassmorphic Card */}
            <div className="relative p-6 sm:p-8 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] overflow-hidden">
              
              {/* Luxury Brand Watermark */}
              <div className="absolute right-4 bottom-2 text-[45px] sm:text-[80px] font-black text-gray-200/40 blur-[2px] select-none pointer-events-none font-cinzel tracking-tighter leading-none whitespace-nowrap opacity-50 overflow-hidden max-w-[90%] text-right">
                {exp.company}
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10">
                
                {/* Header Row: Duration Badge & Location */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 shadow-sm border border-gray-100 text-indigo-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-full self-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
                    {exp.duration}
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {exp.location}
                  </div>
                </div>

                {/* Company & Role */}
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 font-cinzel tracking-tight drop-shadow-sm leading-tight">
                    {exp.company}
                  </h3>
                  <div className="text-[11px] sm:text-[13px] text-gray-400 font-medium tracking-wide mb-2 sm:mb-2 uppercase">
                    {exp.fullName}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-800 tracking-wide mt-1">
                    {exp.role}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[12px] sm:text-sm text-gray-500 leading-relaxed max-w-2xl mb-6">
                  {exp.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-gray-100/50">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 bg-gray-50/80 text-gray-600 border border-gray-100 rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
