import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-purple-500/30 selection:text-blue-100 flex flex-col relative overflow-x-hidden">
      {/* Large Faded QX Background */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
        <span 
          className="text-[55vw] md:text-[45vw] lg:text-[35vw] font-michroma text-white/10 blur-[2px] tracking-tighter leading-none mt-[-5vw] md:mt-[-3vw] lg:mt-[-2vw]"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
          }}
        >
          QX
        </span>
      </div>

      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-[100px] md:blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[100px] md:blur-[128px] pointer-events-none"></div>
      
      <Navigation />

      <main className="flex-grow relative z-10 flex flex-col justify-center pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
