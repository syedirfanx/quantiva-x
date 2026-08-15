import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Blog() {
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
          <Link key={i} to={`/blog/${post.slug}`} className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-md p-8 transition-colors duration-500 cursor-pointer block">
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

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4 group-hover:text-blue-300 transition-colors leading-snug">{post.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-neutral-500 font-light mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                {post.excerpt && (
                  <div className="text-neutral-300 font-light leading-relaxed">
                    {post.excerpt}
                  </div>
                )}
              </div>
              <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500 md:-translate-x-4 group-hover:translate-x-0 font-medium whitespace-nowrap mt-4 md:mt-0">
                Read →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
