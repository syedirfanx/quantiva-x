import { Instagram, Facebook, Mail, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-900 mt-10 md:mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-neutral-600 text-xs sm:text-sm tracking-widest font-light order-2 md:order-1">
          © {new Date().getFullYear()} QuantivaX. All rights reserved.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 order-1 md:order-2">
          <a
            href="https://www.instagram.com/quantiva.x/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 text-neutral-500 hover:text-white transition-colors text-sm font-light lowercase group"
          >
            <Instagram size={15} className="group-hover:scale-110 transition-transform" />
            <span>quantiva.x</span>
          </a>
          <a
            href="https://facebook.com/quantivax"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 text-neutral-500 hover:text-white transition-colors text-sm font-light lowercase group"
          >
            <Facebook size={15} className="group-hover:scale-110 transition-transform" />
            <span>quantivax</span>
          </a>
          <a
            href="https://www.facebook.com/groups/aicryptospacescience"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 text-neutral-500 hover:text-white transition-colors text-sm font-light lowercase group"
          >
            <Users size={15} className="group-hover:scale-110 transition-transform" />
            <span>community group</span>
          </a>
          <a 
            href="mailto:info.quantivax@gmail.com"
            className="flex items-center space-x-2 text-neutral-500 hover:text-white transition-colors text-sm font-light lowercase group"
          >
            <Mail size={15} className="group-hover:scale-110 transition-transform" />
            <span>info.quantivax@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
