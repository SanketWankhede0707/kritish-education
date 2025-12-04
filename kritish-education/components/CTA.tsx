import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 relative bg-white">
      {/* Design Element: Orange line at top to separate from stats */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#FF8C00]"></div>

      <div className="container mx-auto px-4">
        <div className="bg-[#f8f9fa] rounded-3xl p-8 md:p-16 text-center border border-gray-100 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          
          {/* Decorative Circle in background */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#002D62] rounded-full opacity-5 blur-3xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002D62] mb-6 relative z-10">
            Confused about where to start?
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed relative z-10">
            Take the first step towards your global career today. Our experts are ready to guide you through university selection, visas, and more.
          </p>
          
          <Link 
            href="#services" 
            className="inline-block bg-[#002D62] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#FF8C00] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10"
          >
            Connect With US
          </Link>

        </div>
      </div>
    </section>
  );
}