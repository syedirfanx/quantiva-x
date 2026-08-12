import { ExternalLink, Zap, BookOpen, TrendingUp, Globe, ShoppingCart, GraduationCap } from 'lucide-react';

const affiliates = [
  {
    name: "IELTS LIVE Batch by 10 Minute School",
    features: [
      "কোর্সের সময়সীমা: ৩ মাস",
      "শনি, সোম, বুধ (সন্ধ্যা ৬:০০টা - সন্ধ্যা ৭:৩০টা)",
      "২৬তম ব্যাচের ভর্তি চলছে",
      "ভর্তি শেষ হবে: আগস্ট ২৮, ২০২৬",
      "১ম থেকে ২৫তম ব্যাচে মোট শিক্ষার্থী সংখ্যা: ২,০৭১ জন"
    ],
    icon: GraduationCap,
    link: "https://10ms.io/rJg6Cd",
    colorClass: "text-blue-400",
    hoverBorder: "group-hover:border-blue-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    cta: "Registration"
  },
  {
    name: "Business School by Khalid Farhan",
    features: [
      "Courses & Masterclass, Updates Every Year",
      "Live Challenges & Business Building Projects",
      "Lifetime Access",
      "1000+ Success Stories",
      "Running Since 2018",
      "30,000+ Members"
    ],
    icon: TrendingUp,
    link: "https://khalidfarhan.com/businessschool?ref=syed-md-irfanul-alam-irfan",
    colorClass: "text-purple-400",
    hoverBorder: "group-hover:border-purple-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    cta: "Registration"
  },
  {
    name: "Rokomari.com",
    description: "Rokomari.com is one of the most beloved online shops in Bangladesh, famous for its enormous collection of more than 300,000 books in almost 3,000 categories. But Rokomari is more than just a bookshop.",
    icon: BookOpen,
    link: "https://rkmri.co/mMTERR0E50EA/",
    colorClass: "text-blue-400",
    hoverBorder: "group-hover:border-blue-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    cta: "Shop Now"
  },
  {
    name: "Pigeon PG352/00 Air Fryer (8L)",
    features: [
      "Capacity: 8 liters, Transparent Window",
      "Rated Power: 2000W, Uses little to no oil",
      "One-Touch Digital Touch Panel",
      "Removable non-stick cooking basket",
      "Price: 9,680৳ (Cash Discount)"
    ],
    icon: ShoppingCart,
    link: "https://www.startech.com.bd/pigeon-pg352-00-air-fryer?tracking=6a7765668a9d5",
    colorClass: "text-purple-400",
    hoverBorder: "group-hover:border-purple-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    cta: "Buy Now"
  }
];

export default function Affiliates() {
  return (
    <section className="pt-4 pb-20 px-4 sm:px-6 w-full max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-michroma text-white mb-4">
          RECOMMENDED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">RESOURCES</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {affiliates.map((affiliate, index) => {
          const Icon = affiliate.icon;
          return (
            <a 
              key={index} 
              href={affiliate.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 p-6 rounded-2xl transition-all duration-500 overflow-hidden flex flex-col h-full ${affiliate.hoverBorder} ${affiliate.hoverShadow}`}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* QX Watermark */}
              <div 
                className="absolute -bottom-4 -right-2 text-[7rem] font-michroma font-bold text-white/10 blur-[2px] tracking-tighter leading-none select-none pointer-events-none transition-all duration-500 z-0 group-hover:text-white/30"
                style={{ 
                  WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)',
                  maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)'
                }}
              >
                QX
              </div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className={`w-6 h-6 ${affiliate.colorClass}`} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-neutral-200 transition-colors">
                  {affiliate.name}
                </h3>
                
                <div className="flex-grow">
                  {affiliate.description && (
                    <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                      {affiliate.description}
                    </p>
                  )}
                  
                  {affiliate.features && (
                    <ul className="text-sm text-neutral-400 leading-relaxed space-y-2">
                      {affiliate.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`${affiliate.colorClass} mr-2 mt-0.5 text-xs`}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                {/* CTA */}
                <div className="mt-8 flex items-center text-xs font-semibold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors duration-300">
                  <span>{affiliate.cta || "Visit Link"}</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
