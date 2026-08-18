import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Facebook, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { posts } from '../data/blogPosts';
import { useState } from 'react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);
  const [copied, setCopied] = useState(false);

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

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

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
          <header className="mb-10 pb-10 border-b border-neutral-800 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-neutral-400">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="flex items-center gap-3 shrink-0 mt-4 md:mt-0">
              <span className="text-sm font-medium text-neutral-500 flex items-center gap-2 mr-2">
                <Share2 size={16} /> Share
              </span>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800/50 hover:bg-blue-600/20 hover:text-blue-400 border border-neutral-700/50 flex items-center justify-center text-neutral-400 transition-colors"
                title="Share on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareTitle}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800/50 hover:bg-neutral-700 hover:text-white border border-neutral-700/50 flex items-center justify-center text-neutral-400 transition-colors"
                title="Share on X"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${shareTitle}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800/50 hover:bg-blue-500/20 hover:text-blue-300 border border-neutral-700/50 flex items-center justify-center text-neutral-400 transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <button 
                onClick={copyToClipboard}
                className="w-10 h-10 rounded-full bg-neutral-800/50 hover:bg-purple-500/20 hover:text-purple-400 border border-neutral-700/50 flex items-center justify-center text-neutral-400 transition-colors"
                title="Copy Link"
              >
                {copied ? <Check size={18} className="text-green-400" /> : <LinkIcon size={18} />}
              </button>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:font-light">
            {post.content}
          </div>
        </div>
      </article>
    </div>
  );
}
