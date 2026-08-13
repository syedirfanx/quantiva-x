import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  
  const taglines = [
    "Helping you make smarter decisions",
    "যুগোপযোগী সিদ্ধান্তে আপনার বিশ্বস্ত সহযোগী"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((current) => (current + 1) % taglines.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 py-20 overflow-hidden">
      
      {/* Modern Background Effects */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/15 rounded-full blur-[100px] md:blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>
      
      {/* Main Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-8xl font-michroma font-bold tracking-widest mb-6 flex items-center justify-center relative z-10"
      >
        <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">QUANTIVA</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">X</span>
      </motion.h1>
      
      {/* Animated Tagline */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="h-6 sm:h-8 mb-12 sm:mb-16 flex justify-center items-center overflow-hidden relative z-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={taglineIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`text-sm sm:text-lg font-light tracking-wide text-neutral-300`}
          >
            {taglines[taglineIndex]}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Modern Glassmorphism Description Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col md:flex-row gap-8 max-w-5xl w-full text-left items-start relative z-10 p-6 sm:p-10 rounded-[2rem] bg-black/40 backdrop-blur-xl shadow-2xl"
      >
        <div className="flex-1 space-y-4">
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-800"></div>
          <p className="text-sm sm:text-base md:text-lg font-light text-neutral-300 leading-relaxed">
            QuantivaX is a knowledge-driven platform helping you make smarter decisions through education, technology, and insights. We simplify complex ideas and bring useful information closer to you, helping you learn, understand, and grow.
          </p>
        </div>
        
        <div className="hidden md:block w-[1px] self-stretch bg-neutral-800/60"></div>
        <div className="block md:hidden h-[1px] w-full bg-neutral-800/60"></div>

        <div className="flex-1 space-y-4">
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-800"></div>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            QuantivaX একটি জ্ঞানভিত্তিক প্ল্যাটফর্ম, যেখানে শিক্ষা, প্রযুক্তি ও তথ্যের মাধ্যমে আপনাকে আরও স্মার্ট সিদ্ধান্ত নিতে সহায়তা করা হয়। জটিল বিষয়গুলো সহজভাবে তুলে ধরে শেখা, বোঝা ও এগিয়ে যাওয়ার জন্য প্রয়োজনীয় তথ্য ও জ্ঞান আমরা আপনার কাছে পৌঁছে দিই।
          </p>
        </div>
      </motion.div>

      {/* Call to Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto px-4 sm:px-0"
      >
        <Link 
          to="/resources" 
          className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-semibold tracking-wide hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
        >
          Explore Resources
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link 
          to="/contact" 
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900/50 text-white font-medium tracking-wide hover:bg-neutral-800 transition-all flex items-center justify-center"
        >
          Get In Touch
        </Link>
      </motion.div>

    </section>
  );
}
