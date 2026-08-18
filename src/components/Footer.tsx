import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Users, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-900 mt-10 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-10">
          {/* Logo & Description */}
          <div className="flex flex-col items-start space-y-4">
            <Link to="/" className="text-white font-michroma text-xl font-bold tracking-tight">
              Quantiva<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">X</span>
            </Link>
            <p className="text-neutral-500 text-sm font-light max-w-sm leading-relaxed">
              Making useful knowledge easier to understand and access, helping you learn, explore opportunities, and make more informed decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 md:items-center">
            <div className="w-full md:w-auto">
              <h3 className="text-white font-medium mb-4 tracking-wider text-xs uppercase">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/resources" className="text-neutral-400 hover:text-white transition-colors text-sm font-light block">Resources</Link></li>
                <li><Link to="/blog" className="text-neutral-400 hover:text-white transition-colors text-sm font-light block">Blog</Link></li>
                <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors text-sm font-light block">About</Link></li>
                <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors text-sm font-light block">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Socials & Contact */}
          <div className="flex flex-col space-y-4 md:items-end">
            <div className="w-full md:w-auto">
              <h3 className="text-white font-medium mb-4 tracking-wider text-xs uppercase">Connect</h3>
              <ul className="space-y-3 flex flex-col">
                <li>
                  <a href="https://www.instagram.com/quantiva.x/" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors text-sm font-light group">
                    <span><Instagram size={16} className="group-hover:scale-110 transition-transform" /></span>
                    <span>quantiva.x</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@quantiva.x" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors text-sm font-light group">
                    <span><Youtube size={16} className="group-hover:scale-110 transition-transform" /></span>
                    <span>quantiva.x</span>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/quantivax" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors text-sm font-light group">
                    <span><Facebook size={16} className="group-hover:scale-110 transition-transform" /></span>
                    <span>quantivax</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info.quantivax@gmail.com" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors text-sm font-light group">
                    <span><Mail size={16} className="group-hover:scale-110 transition-transform" /></span>
                    <span>info.quantivax@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-neutral-900/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs tracking-widest font-light text-center md:text-left">
            © {new Date().getFullYear()} QuantivaX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
