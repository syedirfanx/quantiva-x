import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullLogo, setIsFullLogo] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const runCycle = () => {
      setIsFullLogo(true);
      timeoutId = setTimeout(() => {
        setIsFullLogo(false);
        timeoutId = setTimeout(runCycle, 12000); // Wait 12s as QX
      }, 4000); // Stay as QuantivaX for 4s
    };

    timeoutId = setTimeout(runCycle, 12000);

    return () => clearTimeout(timeoutId);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="w-full relative z-50 py-6 px-4 sm:px-6 max-w-7xl mx-auto flex items-center justify-between">
      <Link to="/" onClick={closeMenu} className="text-white font-michroma text-xl font-bold tracking-tight z-50 flex items-center">
        <span>Q</span>
        <motion.span
          initial={false}
          animate={{
            width: isFullLogo ? "auto" : 0,
            opacity: isFullLogo ? 1 : 0
          }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden whitespace-nowrap inline-block"
        >
          uantiva
        </motion.span>
        <span>X</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm tracking-wide transition-colors ${ location.pathname === link.path ? 'text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-neutral-400 hover:text-white' }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Icon */}
      <button 
        onClick={toggleMenu} 
        className="md:hidden z-50 text-white p-2 hover:bg-neutral-800/50 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 mx-4 bg-black/90 backdrop-blur-xl rounded-2xl md:hidden flex flex-col space-y-4 shadow-2xl"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-lg p-3 rounded-xl tracking-wide transition-colors ${ location.pathname === link.path ? 'text-white font-semibold bg-neutral-800/50' : 'text-neutral-400 hover:text-white hover:bg-neutral-800/30' }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
