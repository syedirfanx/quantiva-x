import Hero from './components/Hero';
import Affiliates from './components/Affiliates';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-purple-500/30 selection:text-blue-100 flex flex-col relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-[100px] md:blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[100px] md:blur-[128px] pointer-events-none"></div>
      
      <main className="flex-grow relative z-10 flex flex-col justify-center pb-20">
        <Hero />
        <Affiliates />
      </main>
      <Footer />
    </div>
  );
}
