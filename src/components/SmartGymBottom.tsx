import { motion } from 'motion/react';
import { Target, Utensils, BrainCircuit, MessageCircle, LineChart, Download, Mail, Phone, MapPin, Instagram, Code } from 'lucide-react';

const features = [
  {
    title: "كيف تحلل بيانات جسمك وتحدد أهدافك بدقة؟",
    desc: "يقدم التطبيق تحليلاً دقيقاً للبيانات الخاصة بك من أجل الوصول لأهدافك بدقة متناهية.",
    icon: Target,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "كيف تحصل على وصفات صحية ولذيذة بسعرات مدروسة؟",
    desc: "نظام غذائي متكامل يعتمد على وصفات واقعية وسهلة التحضير مع تتبع السعرات.",
    icon: Utensils,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "كيف تحصل على خطة تدريب وتغذية تناسبك تماماً؟",
    desc: "برامج مقترحة ومصممة خصيصاً لمستواك وطبيعة جسمك.",
    icon: BrainCircuit,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "كيف تتواصل مع مدربك في أي وقت؟",
    desc: "فريق الدعم ومدربك الشخصي متوفرون للإجابة على استفساراتك وتحفيزك.",
    icon: MessageCircle,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "كيف تتابع أداءك وتقيم تطورك أسبوعياً؟",
    desc: "تتبع تقدمك من خلال رسوم بيانية وتقارير مفصلة تعكس مجهودك وتطورك المستمر.",
    icon: LineChart,
    color: "bg-primary/20 text-primary"
  },
  {
    title: "كيف تتدرب باحترافية مع مكتبة تمارين تضم أكثر من ٣٠٠ تمرين؟",
    desc: "دليل رياضي مصور ومتكامل يغطي كافة المجموعات العضلية لضمان أداء التمارين بالوضعية الصحيحة والآمنة.",
    icon: BrainCircuit,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "كيف تراقب استهداف عضلاتك أسبوعياً من خلال خريطة العضلات الذكية؟",
    desc: "خارطة تفاعلية توضح لك بدقة العضلات المستهدفة أسبوعياً، لضمان نمو متناسق وتفادي الإجهاد.",
    icon: Target,
    color: "bg-teal-100 text-teal-600"
  },
  {
    title: "كيف تخصص تفاصيل رحلتك الرياضية عبر قسم الإعدادات المميز؟",
    desc: "لوحة تحكم متقدمة تمنحك إمكانية ضبط تفضيلاتك الشخصية، الخصوصية، تتبع الوزن، والوضع الليلي بسهولة فائقة.",
    icon: Target,
    color: "bg-yellow-100 text-yellow-600"
  }
];

export default function SmartGymBottom() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Features List Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">المميزات</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-200 dark:border-white/5 flex gap-6 items-start text-right transition-all duration-300 hover:border-primary/30 hover:scale-[1.01]"
              >
                {/* Number */}
                <div className="flex-shrink-0 font-sans text-4xl md:text-5xl font-black text-primary/30 dark:text-primary/25 select-none pt-1">
                  {(idx + 1).toLocaleString('ar-EG')}
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10" id="contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">جاهزيــــــــــــن نسمعك، ونخدمك!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm">
              سواء عندك سؤال، فكرة — فريقنا بانتظارك. تواصل معنا لنساعدك في الوصول لأهدافك.
            </p>
            <div className="space-y-4">
              <a href="mailto:saedhany20010@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors hover:scale-105 transform duration-200" dir="ltr">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <span>saedhany20010@gmail.com</span>
              </a>
              <a href="https://wa.me/972592104769" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors hover:scale-105 transform duration-200" dir="ltr">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+972 59-210-4769</span>
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center text-center">
            <h4 className="font-bold text-gray-900 dark:text-white mb-8 text-2xl">تابعنا</h4>
            <div className="flex items-center justify-center gap-6">
               <a href="https://wa.me/972592104769" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-green-500/30" aria-label="WhatsApp">
                 <MessageCircle className="w-7 h-7" />
               </a>
               <a href="https://www.instagram.com/moham_medesam1?igsh=MWJpc215ZDZyZ3Rlbg==" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-pink-500/30" aria-label="Instagram">
                 <Instagram className="w-7 h-7" />
               </a>
               <a href="https://www.instagram.com/saed.hany7?igsh=MTNheTZudXlmdmwxMg==" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-gray-500/30" aria-label="Developer">
                 <Code className="w-7 h-7" />
               </a>
            </div>
            <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-auto">
              انضم إلينا على منصات التواصل الاجتماعي لبناء مجتمع رياضي متكامل
            </p>
          </div>
          
        </div>

        <div className="max-w-6xl mx-auto border-t border-gray-200 dark:border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4">
          <div>&copy; {new Date().getFullYear()} Muscle House. جميع الحقوق محفوظة.</div>
          <div className="flex gap-6">
             <a href="#" className="hover:text-primary">الشروط والأحكام</a>
             <a href="#" className="hover:text-primary">سياسة الخصوصية</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
