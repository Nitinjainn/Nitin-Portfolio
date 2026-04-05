import { useEffect, useState } from 'react';
import './index.css';
import Loading         from './components/Loading';
import Profile         from './components/Profile';
import Navbar          from './components/Navbar';
import Header          from './components/Header';
import Achievement     from './components/Acheivement';
import Projects        from './components/Projects';
import Contact         from './components/Contact';
import BackgroundIcons from './components/BackgroundIcons';

function App() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('About');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loading />;

  const renderContent = () => {
    switch (active) {
      case 'About':        return <Header key="about" />;
      case 'Achievements': return <Achievement key="achievements" />;
      case 'Projects':     return <Projects key="projects" />;
      case 'Project':      return <Projects key="project" />;
      case 'Contact':      return <Contact key="contact" />;
      default:             return <Header key="about" />;
    }
  };

  return (
    <div className="min-h-[100dvh] bg-gray-50 dark:bg-gray-950 font-inter relative pb-24 sm:pb-0 transition-colors duration-500">
      {/* Background Tech Stack Icons */}
      <BackgroundIcons />
      
      {/* Subtle gradient background - Hide in Dark Mode for minimalism */}
      <div className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-700 dark:opacity-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl transition-colors duration-500" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl transition-colors duration-500" />
      </div>

      {/* Mobile Floating Navbar */}
      <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[350px]">
        <Navbar active={active} setActive={setActive} isMobile={true} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      </div>

      <div className="max-w-[68rem] mx-auto px-4 pt-3 pb-8 sm:px-6 sm:pt-4 sm:pb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* ── Left Sidebar ── */}
          <Profile />

          {/* ── Right Content ── */}
          <main className="flex-1 min-w-0 w-full mb-8 lg:mb-0">
            <div className="card relative h-full min-h-[600px] flex flex-col">
              {/* Desktop Navbar */}
              <div className="absolute top-0 right-0 z-10 hidden sm:block">
                <Navbar active={active} setActive={setActive} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
              </div>

              {/* Page Content */}
              <div className="p-5 sm:p-8">
                {renderContent()}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;