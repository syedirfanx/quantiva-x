export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-[1.75rem] sm:text-5xl md:text-7xl font-michroma tracking-widest mb-6 sm:mb-8 flex items-center justify-center">
        <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">QUANTIVA</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">X</span>
      </h1>
      <p className="text-base sm:text-xl md:text-2xl font-light text-neutral-300 mb-3 sm:mb-4 px-4">
        Helping you make smarter decisions
      </p>
      <p className="text-sm sm:text-lg md:text-xl font-bengali text-neutral-400 mb-10 sm:mb-12 px-4">
        যুগোপযোগী সিদ্ধান্তে আপনার বিশ্বস্ত সহযোগী
      </p>
    </section>
  );
}
