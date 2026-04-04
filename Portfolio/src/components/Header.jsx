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
        <div className="text-base text-gray-600 leading-relaxed">
          <p>
            I’m a <span className="font-semibold text-indigo-600">Java Full Stack Developer</span> specializing in <span className="font-semibold text-gray-900">backend systems</span> and <span className="font-semibold text-indigo-600">Data Structures & Algorithms</span>. I love turning complex problems into simple, high-performing solutions by writing <span className="font-medium text-gray-900">clean, optimized code</span>.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <Experience />

      {/* Tech Stack */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 relative">
            Tech Stack
            <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-indigo-500 rounded-full"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 cursor-pointer">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-3 p-5 bg-white/60 backdrop-blur-xl border border-gray-100 rounded-2xl"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-gray-50/80 rounded-xl">
                <img 
                  src={tech.customUrl || `https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} 
                  alt={tech.name} 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-[13px] font-semibold text-gray-600 group-hover:text-indigo-600 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
