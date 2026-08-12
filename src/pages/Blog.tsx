export default function Blog() {
  const posts = [
    { title: "The Future of Algorithmic Trading", date: "August 12, 2026", readTime: "5 min read" },
    { title: "Understanding Market Microstructure", date: "August 5, 2026", readTime: "8 min read" },
    { title: "Risk Management in Volatile Markets", date: "July 28, 2026", readTime: "6 min read" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-32 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-michroma text-white tracking-tight mb-6 text-center">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Blog</span>
      </h1>
      <p className="text-neutral-400 max-w-2xl text-center text-lg md:text-xl font-light mb-16">
        Insights, news, and deep dives from the QuantivaX team.
      </p>

      <div className="flex flex-col space-y-6 w-full max-w-3xl">
        {posts.map((post, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-md p-8 transition-colors duration-500 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* QX Watermark */}
            <div 
              className="absolute -bottom-10 -right-4 text-[8rem] font-michroma font-bold text-white/10 blur-[2px] tracking-tighter leading-none select-none pointer-events-none transition-all duration-500 z-0 group-hover:text-white/30"
              style={{ 
                WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)',
                maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)'
              }}
            >
              QX
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl text-white font-michroma mb-2 group-hover:text-blue-300 transition-colors">{post.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-neutral-500 font-light">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:translate-x-[-10px] group-hover:translate-x-0 transform">
                Read →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
