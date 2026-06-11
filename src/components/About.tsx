import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#111] border-t border-gray-200 dark:border-white/5" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold text-lg mb-4 tracking-wider"
        >
          عن التطبيق
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black mb-8 text-gray-900 dark:text-white"
        >
          Muscle House
        </motion.h3>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          <p>
            هو تطبيق رياضي ذكي يجمع بين التدريب، التغذية، وتحليل مكونات الجسم في مكان واحد. تم تصميمه خصيصًا للرياضيين من مختلف المستويات — سواء كنت مبتدئًا أو محترفًا — ليمنحك برنامجًا تدريبيًا وغذائيًا مخصصًا بناءً على بياناتك الحقيقية وأهدافك الشخصية.
          </p>
          <p>
            من خلال نظامنا المتكامل، يوفر لك التطبيق تواصلًا مباشرًا مع المدربين والنوادي، ومتابعة دقيقة لتقدمك شهريًا، مع تجربة استخدام سهلة ومظهر احترافي موجه لعشّاق اللياقة والنتائج الواقعية.
          </p>
          <p>
            صُمم ليكون رفيقك الذكي في رحلتك الرياضية؛ سواء كنت رياضيًا تسعى لتحسين أدائك، أو مبتدئًا تبحث عن بداية صحيحة نحو جسم متناسق وحياة أكثر نشاطًا.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
