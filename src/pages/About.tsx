import { motion } from 'motion/react';
import { Target, Lightbulb, Users, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Our Mission",
      description: "To empower individuals and organizations by simplifying complex ideas and providing actionable, knowledge-driven insights.",
      icon: Target,
      gradient: "from-blue-600/5 to-purple-600/5",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
      hoverBorder: ""
    },
    {
      title: "Innovation",
      description: "We constantly explore the intersection of technology and education to deliver modern, effective learning experiences.",
      icon: Lightbulb,
      gradient: "from-purple-600/5 to-pink-600/5",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/10",
      hoverBorder: ""
    },
    {
      title: "Community",
      description: "Building a supportive ecosystem where learners and experts can connect, share, and grow together.",
      icon: Users,
      gradient: "from-pink-600/5 to-orange-600/5",
      iconColor: "text-pink-400",
      iconBg: "bg-pink-500/10",
      hoverBorder: ""
    },
    {
      title: "Integrity",
      description: "Delivering accurate, unbiased, and transparent information you can trust for your most important decisions.",
      icon: Shield,
      gradient: "from-teal-600/5 to-blue-600/5",
      iconColor: "text-teal-400",
      iconBg: "bg-teal-500/10",
      hoverBorder: ""
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-32">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-michroma text-white tracking-tight mb-6"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">QuantivaX</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed"
        >
          QuantivaX is a knowledge-driven platform helping you make smarter decisions through education, technology, and insights. We simplify complex ideas and bring useful information closer to you, helping you learn, understand, and grow.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {values.map((value, i) => {
          const Icon = value.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className={`group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-md p-8 md:p-10 transition-colors duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* QX Watermark */}
              <div 
                className="absolute -bottom-8 -right-4 text-[8rem] font-michroma font-bold text-white/10 blur-[2px] tracking-tighter leading-none select-none pointer-events-none transition-all duration-500 z-0 group-hover:text-white/30"
                style={{ 
                  WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)',
                  maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)'
                }}
              >
                QX
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-16 h-16 rounded-2xl flex-shrink-0 ${value.iconBg} flex items-center justify-center ${value.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl text-white font-michroma mb-3">{value.title}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
