import { useState, useMemo } from 'react';
import { Search, ChevronDown, ExternalLink, GraduationCap, TrendingUp, BookOpen, ShoppingCart, Zap } from 'lucide-react';

const allItems = [
  {
    name: "AI Automation Masterclass with n8n",
    description: "বর্তমানে AI Agent Building ও n8n Automation সবচেয়ে চাহিদাসম্পন্ন স্কিলগুলোর একটি! n8n দিয়ে নিজের ও ক্লায়েন্টের ৮৫–৯৫% রিপিটেড কাজ অটোমেট করে Freelancing ও Remote Job-এর মাধ্যমে ইনকামের সুযোগ তৈরি করুন।",
    features: [
      "AI Agent & Business Automation",
      "Facebook, YouTube, WordPress & E-commerce Automation",
      "1000+ Pre-Built Workflow"
    ],
    icon: Zap,
    link: "https://www.msbacademy.com/course/ai-agent-and-automation/ref/2712/",
    colorClass: "text-purple-400",
    hoverBorder: "group-",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    cta: "Enroll Now",
    category: "Courses",
    subcategory: "AI"
  },
  {
    name: "HSC 27 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)",
    description: "কলেজ লাইফের শুরু থেকেই দেশের এক্সপার্ট টিচারদের মাস্টারপ্ল্যানে তোমার A+ প্রস্তুতি শুরু করো অনলাইন ব্যাচে। HSC 27 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি) কোর্সে রেগুলার লাইভ ক্লাস, রেকর্ডেড ক্লাস, মাস্টারবুক, এক্সামসহ সবকিছু দিয়ে তোমার HSC ও Admission প্রস্তুতি হবে ১০০ তে ১০০!",
    features: ["Promo Code: QNTVX"],
    icon: GraduationCap,
    link: "https://10ms.io/jJho8t",
    colorClass: "text-pink-400",
    hoverBorder: "group-",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    cta: "Enroll Now",
    category: "Courses",
    subcategory: "HSC"
  },
  {
    name: "IELTS LIVE Batch by 10 Minute School",
    description: "",
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
    hoverBorder: "group-",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    cta: "Registration",
    category: "Courses",
    subcategory: "English Language"
  },
  {
    name: "Business School by Khalid Farhan",
    description: "",
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
    hoverBorder: "group-",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    cta: "Registration",
    category: "Courses",
    subcategory: "Business School"
  },
  {
    name: "Rokomari.com",
    description: "Rokomari.com is one of the most beloved online shops in Bangladesh, famous for its enormous collection of more than 300,000 books in almost 3,000 categories. But Rokomari is more than just a bookshop.",
    features: [],
    icon: BookOpen,
    link: "https://rkmri.co/mMTERR0E50EA/",
    colorClass: "text-blue-400",
    hoverBorder: "group-",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    cta: "Shop Now",
    category: "Books",
    subcategory: "Literature" 
  },
  {
    name: "Pigeon PG352/00 Air Fryer (8L)",
    description: "",
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
    hoverBorder: "group-",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    cta: "Buy Now",
    category: "Electronic Products",
    subcategory: "Air Fryer"
  }
];

const subcategoryOptions: Record<string, string[]> = {
  "Courses": ["All", "AI", "Machine Learning", "Python", "English Language", "Business School", "HSC"],
  "Books": ["All", "Fiction", "Non-Fiction", "Literature", "Educational", "Sci-Fi"],
  "Electronic Products": ["All", "Mobile", "Laptop", "Air Fryer"]
};

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === "All" || item.subcategory === selectedSubcategory;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory("All"); // Reset subcategory on category change
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-32 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-michroma text-white tracking-tight mb-6 text-center">
        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Resources</span>
      </h1>
      <p className="text-neutral-400 max-w-2xl text-center text-lg md:text-xl font-light mb-12">
        Find exactly what you need to elevate your journey.
      </p>

      {/* Search and Filters */}
      <div className="w-full max-w-5xl mb-12 flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-neutral-900/50 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none transition-colors placeholder:text-neutral-600"
          />
        </div>
        
        {/* Category Filter */}
        <div className="relative md:w-64">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full bg-neutral-900/50 text-white rounded-xl py-3 pl-4 pr-10 appearance-none focus:outline-none transition-colors cursor-pointer"
          >
            <option value="All">All Resources</option>
            <option value="Courses">Courses</option>
            <option value="Books">Books</option>
            <option value="Electronic Products">Electronic Products</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-neutral-500">
            <ChevronDown size={18} />
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className="relative md:w-64">
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            disabled={selectedCategory === "All"}
            className={`w-full bg-neutral-900/50 text-white rounded-xl py-3 pl-4 pr-10 appearance-none focus:outline-none transition-colors ${selectedCategory === "All" ? "opacity-50 cursor-not-allowed text-neutral-500" : "cursor-pointer"}`}
          >
            {selectedCategory === "All" ? (
              <option value="All">Select Category First</option>
            ) : (
              subcategoryOptions[selectedCategory]?.map(sub => (
                <option key={sub} value={sub}>{sub === "All" ? "All Subcategories" : sub}</option>
              ))
            )}
          </select>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-neutral-500">
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a 
                key={index} 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-neutral-900/40 backdrop-blur-md p-6 rounded-2xl transition-all duration-500 overflow-hidden flex flex-col h-full ${item.hoverShadow}`}
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
                  {/* Category badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-medium px-2 py-1 rounded-md bg-neutral-800/80 text-neutral-400">
                      {item.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-medium px-2 py-1 rounded-md bg-neutral-800/80 text-neutral-400">
                      {item.subcategory}
                    </span>
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-neutral-200 transition-colors">
                    {item.name}
                  </h3>
                  
                  <div className="flex-grow">
                    {item.description && (
                      <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    )}
                    
                    {item.features && item.features.length > 0 && (
                      <ul className="text-sm text-neutral-400 leading-relaxed space-y-2">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`${item.colorClass} mr-2 mt-0.5 text-xs`}>✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-8 flex items-center text-xs font-semibold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors duration-300">
                    <span>{item.cta || "Visit Link"}</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </a>
            );
          })
        ) : (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
            <p className="text-neutral-500 text-lg mb-2">No items found matching your filters.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedSubcategory('All'); }}
              className="text-purple-400 hover:text-purple-300 underline underline-offset-4 text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
