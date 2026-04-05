import { IconUser, IconBriefcase, IconTrophy, IconMail, IconSun, IconMoon } from '@tabler/icons-react';

const tabs = [
  { name: 'About', icon: <IconUser stroke={1.5} size={22} /> },
  { name: 'Projects', icon: <IconBriefcase stroke={1.5} size={22} /> },
  { name: 'Achievements', icon: <IconTrophy stroke={1.5} size={22} /> },
  { name: 'Contact', icon: <IconMail stroke={1.5} size={22} /> }
];

export default function Navbar({ active, setActive, isMobile, isDarkMode, toggleDarkMode }) {
  if (isMobile) {
    return (
      <nav className="flex items-center justify-around gap-2 bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl px-4 py-3 rounded-full border border-gray-200/50 dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none transition-colors duration-500">
        {tabs.map((tab) => {
          const isActive = active === tab.name;
          return (
            <button
              key={tab.name}
              id={`nav-${tab.name.toLowerCase()}`}
              onClick={() => setActive(tab.name)}
              className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                isActive ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-indigo-500 dark:hover:text-indigo-300'
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
        {/* Mobile Theme Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-indigo-500 dark:hover:text-indigo-300"
          aria-label="Toggle Dark Mode"
          title="Toggle Dark Mode"
        >
          <div className="z-10 flex items-center justify-center">
            {isDarkMode ? <IconSun stroke={1.5} size={22} /> : <IconMoon stroke={1.5} size={22} />}
          </div>
        </button>
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-6 sm:gap-8 bg-gray-50 dark:bg-white/[0.02] backdrop-blur-lg px-8 py-5 rounded-bl-[2rem] rounded-tr-2xl border-b border-l border-gray-100 dark:border-white/[0.05] shadow-none transition-colors duration-500">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          id={`nav-${tab.name.toLowerCase()}`}
          onClick={() => setActive(tab.name)}
          className={`text-sm font-semibold transition-all duration-200 ${
            active === tab.name ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300'
          }`}
        >
          {tab.name}
        </button>
      ))}

      {/* Divider */}
      <div className="h-5 w-px bg-gray-200 dark:bg-gray-700 transition-colors duration-500"></div>

      {/* Desktop Theme Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50"
        aria-label="Toggle Dark Mode"
        title="Toggle Dark Mode"
      >
        {isDarkMode ? <IconSun stroke={1.5} size={22} /> : <IconMoon stroke={1.5} size={22} />}
      </button>
    </nav>
  );
}
