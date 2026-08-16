import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  
  const slides = [
    {
      tagline: "Helping you make smarter decisions",
      description: "QuantivaX brings useful information closer to you, helping you learn, understand, and make smarter decisions through education, technology, and insights."
    },
    {
      tagline: "যুগোপযোগী সিদ্ধান্তে আপনার বিশ্বস্ত সহযোগী",
      description: "QuantivaX আপনাকে প্রয়োজনীয় জ্ঞান ও তথ্যের সঙ্গে যুক্ত রাখে, যা আপনাকে নতুন কিছু শিখতে, বিষয়গুলো গভীরভাবে বুঝতে এবং জীবনের নানা ক্ষেত্রে আরও সচেতন ও স্মার্ট সিদ্ধান্ত নিতে সাহায্য করে।"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length);
    }, 10000); // Increased stay time to 10 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-[85vh] flex items-center px-6 sm:px-12 md:px-20 lg:px-32 pt-10 pb-20 overflow-hidden">
      
      {/* Minimal Background Effects */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_20%,transparent_100%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center w-full">
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-michroma font-bold tracking-tight mb-8 flex items-center justify-center"
          >
            <span className="text-white">Quantiva</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">X</span>
          </motion.h1>
          
          {/* Slide Content (Tagline + Description) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative min-h-[140px] sm:min-h-[120px] mb-6 w-full max-w-2xl mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="text-base sm:text-xl font-light tracking-wide text-neutral-300 mb-4">
                  {slides[slideIndex].tagline}
                </div>
                <p className="text-sm sm:text-base font-light text-neutral-400 leading-relaxed">
                  {slides[slideIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Dots Navigation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  slideIndex === idx ? "w-8 bg-purple-500" : "w-2 bg-neutral-700 hover:bg-neutral-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </motion.div>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
          >
            <Link 
              to="/resources" 
              className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
            >
              Explore Resources
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-all flex items-center justify-center"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
