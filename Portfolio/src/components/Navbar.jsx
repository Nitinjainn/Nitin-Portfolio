const tabs = ['About', 'Projects', 'Achievements', 'Contact'];

export default function Navbar({ active, setActive, isMobile }) {
  if (isMobile) {
    return (
      <nav className="flex items-center justify-center gap-4 bg-gray-50/80 px-4 py-4 rounded-t-2xl border-b border-gray-100 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            id={`nav-${tab.toLowerCase()}`}
            onClick={() => setActive(tab)}
            className={`text-sm font-semibold transition-all duration-200 ${
              active === tab ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-8 bg-gray-50 px-10 py-6 rounded-bl-[2rem] rounded-tr-2xl border-b border-l border-gray-100">
      {tabs.map((tab) => (
        <button
          key={tab}
          id={`nav-${tab.toLowerCase()}`}
          onClick={() => setActive(tab)}
          className={`text-sm font-semibold transition-all duration-200 ${
            active === tab ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
