import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-purple-900/20 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <a
            href="https://www.instagram.com/quantiva.x/"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400/50 hover:text-purple-400 transition-all hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://facebook.com/quantivax"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400/50 hover:text-blue-400 transition-all hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>
        <p className="text-neutral-500 text-sm tracking-wide">
          © {new Date().getFullYear()} QuantivaX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
