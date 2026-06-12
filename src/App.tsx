import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TopImage from './components/TopImage';
import SmartGymBottom from './components/SmartGymBottom';
import Leaderboard from './components/Leaderboard';
import About from './components/About';
import { Moon, Sun } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      // For legacy variables setup
      document.documentElement.style.setProperty('--color-dark-bg', '#0a0a0a');
      document.documentElement.style.setProperty('--color-dark-surface', '#141414');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--color-dark-bg', '#f8fafc');
      document.documentElement.style.setProperty('--color-dark-surface', '#ffffff');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#f8fafc] text-gray-900' : 'bg-[#0a0a0a] text-white'} selection:bg-primary/30 antialiased overflow-x-hidden transition-colors duration-300`}>
      {/* Simple Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[10px] border-b transition-colors duration-300 ${theme === 'light' ? 'bg-white/80 border-gray-200' : 'bg-[#0a0a0a]/80 border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://r2-bucket.flowith.net/f/b97db07c7aaef431/127781.png" alt="MH Logo" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
            <span className="font-sans font-black text-xl tracking-tighter text-primary">Muscle House</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">الميزات</a>
            <a href="#" className="hover:text-primary transition-colors">البرامج</a>
            <a href="#" className="hover:text-primary transition-colors">عن التطبيق</a>
            <a href="#" className="hover:text-primary transition-colors">المجتمع</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${theme === 'light' ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-400 hover:bg-white/10'}`} aria-label="Toggle Theme">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <a 
              href="https://www.mediafire.com/file/3k0vaplbqoofo11/Muscle+House.apk/file"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black px-5 py-2 rounded-lg font-bold text-sm shadow-[0_0_20px_rgba(234,179,8,0.2)] inline-flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              حمل التطبيق
            </a>
          </div>
        </div>
      </nav>

      <main className="flex flex-col pt-[80px]">
        <Hero />
        <About />
        <Leaderboard />
        <SmartGymBottom />
      </main>
    </div>
  );
}
