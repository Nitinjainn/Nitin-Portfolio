import { IconUser, IconBriefcase, IconTrophy, IconMail } from '@tabler/icons-react';

const tabs = [
  { name: 'About', icon: <IconUser stroke={1.5} size={22} /> },
  { name: 'Projects', icon: <IconBriefcase stroke={1.5} size={22} /> },
  { name: 'Achievements', icon: <IconTrophy stroke={1.5} size={22} /> },
  { name: 'Contact', icon: <IconMail stroke={1.5} size={22} /> }
];

export default function Navbar({ active, setActive, isMobile }) {
  if (isMobile) {
    return (
      <nav className="flex items-center justify-around gap-2 bg-white/80 backdrop-blur-xl px-4 py-3 rounded-full border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        {tabs.map((tab) => {
          const isActive = active === tab.name;
          return (
            <button
              key={tab.name}
              id={`nav-${tab.name.toLowerCase()}`}
              onClick={() => setActive(tab.name)}
              className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                isActive ? 'bg-indigo-50 text-indigo-600 shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-indigo-500'
              }`}
              aria-label={tab.name}
              title={tab.name}
            >
              <div className="z-10 flex items-center justify-center">
                {tab.icon}
              </div>
            </button>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-8 bg-gray-50 px-10 py-6 rounded-bl-[2rem] rounded-tr-2xl border-b border-l border-gray-100">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          id={`nav-${tab.name.toLowerCase()}`}
          onClick={() => setActive(tab.name)}
          className={`text-sm font-semibold transition-all duration-200 ${
            active === tab.name ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-500'
          }`}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
}
