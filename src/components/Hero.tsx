import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Activity, Flame, Users, CalendarDays, BrainCircuit, ArrowRight, Play, Camera, Utensils, ScanFace, CheckCircle2, Trophy, Star, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);

  const screens = [
    <img key={0} src="https://r2-bucket.flowith.net/f/6e692098501cc4c9/127770.png" alt="Screen 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />,
    <img key={1} src="https://r2-bucket.flowith.net/f/a6110a382c04b865/127772.png" alt="Screen 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />,
    <img key={2} src="https://r2-bucket.flowith.net/f/4adfaa57b9ebc0b2/127773.png" alt="Screen 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />,
    <img key={3} src="https://r2-bucket.flowith.net/f/92ed27ce3bf0125c/127774.png" alt="Screen 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />,
    <img key={4} src="https://r2-bucket.flowith.net/f/3acb7bb2176b72a7/127775.png" alt="Screen 5" className="w-full h-full object-cover" referrerPolicy="no-referrer" />,
    <img key={5} src="https://r2-bucket.flowith.net/f/b3461c4827f611f1/127776.png" alt="Screen 6" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreenIdx((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-start pt-4 lg:justify-center pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-accent-glow)_0%,transparent_70%)] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center z-10">
        
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 text-right"
        >
          <img 
            src="https://r2-bucket.flowith.net/f/92259d6dc7ead6db/127833.png" 
            alt="App Showcase" 
            className="w-full h-auto object-cover rounded-3xl shadow-2xl mb-1" 
            referrerPolicy="no-referrer" 
          />
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-[1.2] tracking-tight dark:text-white mt-0">
            دليلك المتكامل نحو <br />
            <span className="text-gradient">جسد صحي ورياضي</span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mt-2">
            ليس مجرد تطبيق، بل هو مدربك الشخصي، ومحلل تغذيتك، ورفيق رحلتك. احصل على أفضل التقنيات الحديثة لبناء أفضل نسخة منك.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="https://muscle-house-610366452826.europe-west2.run.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-black font-bold text-lg px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)] text-center cursor-pointer"
            >
              ابدأ رحلتك الآن
              <ArrowLeft className="w-5 h-5 pointer-events-none" />
            </a>
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              تعرف على الميزات
            </button>
          </div>
          
          <a 
            href="https://wa.me/972592104769"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 mt-10 hover:scale-105 transition-transform duration-200 cursor-pointer self-start"
            title="تواصل مع الكابتن محمد وشاح عبر واتساب"
          >
            <div className="w-12 h-12 rounded-full border-2 border-white dark:border-[#111] overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-[#111] shadow-sm">
              <img src="https://r2-bucket.flowith.net/f/a4545e380e3a73ba/127843.png" alt="محمد عصام وشاح" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              مدربك الشخصي <span className="font-bold text-gray-900 dark:text-white border-b border-dashed border-gray-300 dark:border-white/30 pb-0.5">محمد عصام وشاح</span>
            </div>
          </a>
        </motion.div>

        {/* Visual/Mockup Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center perspective-[1000px]"
        >
          {/* Isometric Phone Mockup */}
          <motion.div 
            animate={{ 
              y: [-10, 10, -10],
              rotateX: [10, 15, 10],
              rotateY: [-15, -10, -15]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6, 
              ease: "easeInOut" 
            }}
            className="relative w-[300px] h-[600px] bg-black border-[8px] border-[#222] rounded-[36px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden transform-style-3d z-20 flex flex-col"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 mx-auto w-[120px] h-6 bg-[#222] rounded-b-[20px] z-30" />
            
            {/* Dynamic UI Content */}
            <div className="flex-1 flex flex-col relative bg-[#0a0a0a]">
              <div className="absolute inset-0">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={activeScreenIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {screens[activeScreenIdx]}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
            
          </motion.div>
          
          {/* Pagination Dots Below Phone */}
          <div className="absolute -bottom-16 left-0 right-0 flex flex-col items-center gap-3">
             <div className="flex gap-2">
                  {[0,1,2,3,4,5].map(idx => (
                    <button
                      key={idx} 
                      onClick={() => setActiveScreenIdx(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === activeScreenIdx ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-white/20 w-2 hover:bg-gray-400 dark:hover:bg-white/40'}`}
                      aria-label={`Go to screen ${idx + 1}`}
                    />
                  ))}
             </div>
             <div className="text-gray-500 dark:text-gray-400 text-xs font-mono font-bold tracking-widest">
               {activeScreenIdx + 1} / {6}
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
