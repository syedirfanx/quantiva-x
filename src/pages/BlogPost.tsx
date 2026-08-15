import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-32 flex flex-col items-center min-h-[60vh] justify-center">
        <h1 className="text-3xl md:text-4xl text-white font-michroma mb-6">Post Not Found</h1>
        <Link to="/blog" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-32">
      <Link to="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors mb-12">
        <ArrowLeft size={16} />
        <span>Back to all posts</span>
      </Link>

      <article className="relative bg-neutral-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-neutral-800/50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10">
          <header className="mb-10 pb-10 border-b border-neutral-800">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-neutral-400">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:font-light whitespace-pre-wrap">
            {post.content}
          </div>
        </div>
      </article>
    </div>
  );
}
