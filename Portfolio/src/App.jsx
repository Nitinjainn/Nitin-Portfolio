import { useEffect, useState } from 'react';
import './index.css';
import Loading         from './components/Loading';
import Profile         from './components/Profile';
import Navbar          from './components/Navbar';
import Header          from './components/Header';
import Achievement      from './components/Acheivement';
import Projects        from './components/Projects';
import Contact         from './components/Contact';
import BackgroundIcons from './components/BackgroundIcons';

function App() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('About');

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
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Background Tech Stack Icons */}
      <BackgroundIcons />
      
      {/* Subtle gradient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto mt-4 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* ── Left Sidebar ── */}
          <Profile />

          {/* ── Right Content ── */}
          <main className="flex-1 min-w-0 w-full">
            <div className="card relative h-full min-h-[600px] flex flex-col">
              {/* Desktop Navbar */}
              <div className="absolute top-0 right-0 z-10 hidden sm:block">
                <Navbar active={active} setActive={setActive} />
              </div>
              
              {/* Mobile Navbar */}
              <div className="sm:hidden">
                <Navbar active={active} setActive={setActive} isMobile={true} />
              </div>

              {/* Page Content */}
              <div className="p-6 sm:p-8">
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