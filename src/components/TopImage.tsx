import { motion } from 'motion/react';

export default function TopImage() {
  const imgUrl = "https://r2-bucket.flowith.net/f/92259d6dc7ead6db/127833.png";

  return (
    <section className="relative w-full flex justify-center items-center bg-transparent pt-32 pb-8 z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl px-4"
      >
        <img 
          src={imgUrl} 
          alt="App Showcase" 
          className="w-full h-auto max-h-[80vh] object-cover rounded-3xl" 
          referrerPolicy="no-referrer" 
        />
      </motion.div>
    </section>
  );
}
