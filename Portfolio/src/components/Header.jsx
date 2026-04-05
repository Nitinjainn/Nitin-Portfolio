import Experience from './Experience';

const techStack = [
  { name: "React.js",    icon: "react",       color: "61DAFB" },
  { name: "Java",        icon: "java",        customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "MongoDB",     icon: "mongodb",     color: "47A248" },
  { name: "Tailwind CSS",icon: "tailwindcss", color: "06B6D4" },
  { name: "Git",         icon: "git",         color: "F05032" },
  { name: "Spring Boot", icon: "spring",      color: "6DB33F" },
  { name: "Postman",     icon: "postman",     color: "FF6C37" },
  { name: "MySQL",       icon: "mysql",       color: "4479A1" },
  { name: "HTML5",       icon: "html5",       color: "E34F26" },
  { name: "GitHub",      icon: "github",      color: "181717" },
  { name: "Figma", icon: "figma", color: "F24E1E" },
  { name: "Postgresql", icon: "postgresql", color: "F24E1E" },
  
];

export default function Header() {
  return (
    <div className="animate-slide-in space-y-8">
      {/* About Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="text-base text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-500">
          <p>
            I’m a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Java Full Stack Developer</span> specializing in <span className="font-semibold text-gray-900 dark:text-white">backend systems</span> and <span className="font-semibold text-indigo-600 dark:text-indigo-400">Data Structures & Algorithms</span>. I love turning complex problems into simple, high-performing solutions by writing <span className="font-medium text-gray-900 dark:text-white">clean, optimized code</span>.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <Experience />

      {/* Tech Stack */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white relative transition-colors duration-500">
            Tech Stack
            <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-indigo-500 rounded-full"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 cursor-pointer">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100 dark:border-gray-700 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] rounded-2xl sm:rounded-[1.25rem] transition-colors duration-500"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-50/80 dark:bg-gray-900/50 rounded-xl transition-colors duration-500">
                <img 
                  src={tech.customUrl || `https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} 
                  alt={tech.name} 
                  className={`w-5 h-5 sm:w-6 sm:h-6 object-contain ${tech.icon === 'github' ? 'dark:invert' : ''}`}
                />
              </div>
              <span className="text-[10px] sm:text-[13px] font-semibold text-gray-600 dark:text-gray-300 text-center break-words group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
