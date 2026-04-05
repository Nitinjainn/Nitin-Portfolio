import HackzenImg from '../assets/Hackzen.png';
import VibetribeImg from '../assets/Vibetribe.png';
import SolumaImg from '../assets/Soluma.png';
import CryptifyImg from '../assets/Cryptify.png';

const projects = [
  {
    title: 'HackZen',
    subtitle: 'Hackathon Management Platform',
    desc: 'Built HackZen, a full-stack hackathon management platform during internship at STPI. Engineered comprehensive features supporting multi-stage event lifecycles.',
    tags: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
    image: HackzenImg,
    link: 'https://hackzen.vercel.app/',
  },
  {
    title: 'Soluma',
    subtitle: 'The Web3 Event Platform',
    desc: 'A decentralized event platform that combines a seamless Web2 user experience with the power of the Solana blockchain. No seed phrases, no complexity—just events.',
    tags: ['Solana', 'Web3', 'Blockchain', 'React'],
    image: SolumaImg,
    link: 'https://soluma.vercel.app/',
  },
  {
    title: 'Cryptify',
    subtitle: 'Decentralized Payment dApp',
    desc: 'Contributed to Cryptify, a Web3 payment dApp enabling username-based transfers and escrow contracts. Focused on frontend development while gaining basic exposure to Web3 concepts.',
    tags: ['React', 'Web3', 'Blockchain', 'Frontend'],
    image: CryptifyImg,
    link: 'https://cryptify-defi.vercel.app/',
  },
  {
    title: 'VibeTribe',
    subtitle: 'Decentralized Travel Platform',
    desc: 'Web3-based decentralized travel and trip management platform designed for seamless collaborative planning and execution.',
    tags: ['Web3', 'Blockchain', 'React', 'Tailwind'],
    image: VibetribeImg,
    link: 'https://vibetribew3.vercel.app/',
  }
];

export default function Projects() {
  return (
    <div className="animate-slide-in space-y-10">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white relative transition-colors duration-500">
          Projects
          <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-indigo-500 rounded-full"></span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-3xl overflow-hidden transition-colors duration-500"
          >
            {/* Visual Anchor Node */}
            <div className="absolute top-0 right-10 w-12 h-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-b-md z-20 transition-colors duration-500"></div>

            {/* Elegant Static Watermark */}
            <div className="absolute right-4 bottom-2 text-[35px] sm:text-[60px] font-black text-gray-200/50 dark:text-gray-700/50 blur-[1px] select-none pointer-events-none font-cinzel tracking-tighter leading-none whitespace-nowrap opacity-60 z-0 overflow-hidden max-w-[90%] text-right transition-colors duration-500">
              {p.title}
            </div>

            {/* Inset Screen Frame */}
            <div className="p-3 sm:p-4 pb-0 z-10 relative">
              <div className="w-full h-40 sm:h-48 bg-gray-100 dark:bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-sm relative group-hover:shadow-md transition-all duration-500">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
            </div>

            <div className="relative p-5 sm:p-6 z-10">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="text-[18px] sm:text-[22px] font-bold text-gray-900 dark:text-white font-cinzel tracking-tight leading-snug drop-shadow-sm transition-colors duration-500">
                    {p.title}
                  </h3>
                  <div className="text-[10px] sm:text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mt-1 transition-colors duration-500">
                    {p.subtitle}
                  </div>
                </div>
                
                {/* External Website Link */}
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Visit Website"
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-50/80 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white transition-colors duration-500 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 ml-0.5 mb-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              <p className="text-[12px] sm:text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed mb-6 mt-2 max-w-[95%] transition-colors duration-500">
                {p.desc}
              </p>

              <div className="pt-4 border-t border-gray-100/80 dark:border-gray-700/50 flex flex-wrap gap-2 transition-colors duration-500">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-50/80 dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-xl transition-colors duration-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
