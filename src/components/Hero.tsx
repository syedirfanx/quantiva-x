import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = [
    "Helping you make smarter decisions",
    "যুগোপযোগী সিদ্ধান্তে আপনার বিশ্বস্ত সহযোগী"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((current) => (current + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-4 sm:px-6 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-michroma tracking-widest mb-4 flex items-center justify-center">
        <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">QUANTIVA</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">X</span>
      </h1>
      
      <div className="h-5 sm:h-8 mb-8 sm:mb-10 flex justify-center items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={taglineIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`text-xs sm:text-base font-light tracking-wide text-neutral-400 ${taglineIndex === 1 ? 'font-bengali' : ''}`}
          >
            {taglines[taglineIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-sm sm:text-lg md:text-xl font-light text-neutral-300 mb-4 px-2 sm:px-4 max-w-3xl leading-relaxed">
        QuantivaX is a knowledge-driven platform helping you make smarter decisions through education, technology, and insights. We simplify complex ideas and bring useful information closer to you, helping you learn, understand, and grow.
      </p>
      <p className="text-xs sm:text-base md:text-lg font-bengali text-neutral-400 mb-10 sm:mb-12 px-2 sm:px-4 max-w-3xl leading-relaxed">
        QuantivaX একটি জ্ঞানভিত্তিক প্ল্যাটফর্ম, যেখানে শিক্ষা, প্রযুক্তি ও তথ্যের মাধ্যমে আপনাকে আরও স্মার্ট সিদ্ধান্ত নিতে সহায়তা করা হয়। জটিল বিষয়গুলো সহজভাবে তুলে ধরে শেখা, বোঝা ও এগিয়ে যাওয়ার জন্য প্রয়োজনীয় তথ্য ও জ্ঞান আমরা আপনার কাছে পৌঁছে দিই।
      </p>
    </section>
  );
}
