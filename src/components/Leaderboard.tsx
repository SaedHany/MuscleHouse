import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

const users = [
  { rank: 1, name: "Amar Jawdat", avatar: "https://r2-bucket.flowith.net/f/dec607bf38964a34/127806.jpg", xp: 5000, color: "bg-yellow-400 text-black shadow-[0_0_10px_#facc15]" },
  { rank: 2, name: "Adam muttier", avatar: "https://r2-bucket.flowith.net/f/7daa9c28db1179dd/127816.jpg", xp: 4800, color: "bg-gray-200 text-gray-700" },
  { rank: 3, name: "Feras Bengal", avatar: "https://r2-bucket.flowith.net/f/950ccc5a50ebd900/127815.jpg", xp: 4200, color: "bg-orange-300 text-orange-900" },
];

export default function Leaderboard() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#111] relative overflow-hidden transition-colors duration-300" id="leaderboard">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-4"
        >
          <Trophy className="w-10 h-10 text-primary" />
          لوحة الصدارة
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">أفضل المتدربين هذا الأسبوع</p>
      </div>
      
      <div className="max-w-xl mx-auto">
         <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-[32px] p-6 shadow-xl relative z-10 transition-colors duration-300">
           <div className="space-y-4">
             {users.map((user, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="flex flex-row-reverse items-center justify-between gap-4 p-4 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
               >
                 <div className="flex flex-row-reverse items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-mono text-sm ${user.color}`}>
                      {user.rank}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-black overflow-hidden border-2 border-white dark:border-[#222] flex items-center justify-center text-gray-400 font-bold">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        user.name.charAt(0)
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900 dark:text-white text-lg" dir="ltr">{user.name}</div>
                    </div>
                 </div>
                 <div className="text-sm text-gray-600 dark:text-gray-300 font-mono font-bold bg-white dark:bg-black px-3 py-1 rounded-full border border-gray-200 dark:border-white/10" dir="ltr">
                   {user.xp} XP
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
      </div>
    </section>
  );
}
