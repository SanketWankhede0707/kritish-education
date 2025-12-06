'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const countries = [
  {
    id: 1,
    name: 'United Kingdom',
    slug: 'uk',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070',
    tagline: 'The Home of Academic Prestige',
    desc: 'Home to the world’s most prestigious universities. Experience a rich academic heritage combined with modern, fast-track career options.',
    stat: '1 Year Masters'
  },
  {
    id: 2,
    name: 'USA',
    slug: 'usa',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070',
    tagline: 'Land of Opportunity',
    desc: 'The global leader in technology and research. Offering the highest starting salaries in the world for STEM graduates.',
    stat: '3 Year STEM Visa'
  },
  {
    id: 3,
    name: 'Canada',
    slug: 'canada',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070',
    tagline: 'Pathway to Permanent Residency',
    desc: 'A welcoming, multicultural environment with clear pathways to PR and citizenship. High quality of life and affordable education.',
    stat: 'Easy PR Options'
  },
  {
    id: 4,
    name: 'Australia',
    slug: 'australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070',
    tagline: 'World-Class Education & Lifestyle',
    desc: 'Combines academic excellence with an incredible lifestyle. High minimum wages help students cover living costs easily.',
    stat: '4 Year Work Rights'
  },
  {
    id: 5,
    name: 'Germany',
    slug: 'germany',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070',
    tagline: 'Engineering Excellence',
    desc: 'The engineering hub of Europe. Public universities charge ZERO tuition fees, making it the most affordable world-class destination.',
    stat: 'Free Tuition Fees'
  },
  {
    id: 6,
    name: 'Ireland',
    slug: 'ireland',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1974',
    tagline: 'The Silicon Valley of Europe',
    desc: 'Home to Google, Meta, and Apple HQs. Offers a friendly English-speaking environment and a booming tech sector.',
    stat: '2 Year Stay Back'
  }
];

export default function DestinationsIndex() {
  return (
    // CHANGED BACKGROUND: Soft Gray for contrast
    <main className="min-h-screen bg-[#f8f9fa]">
      
      {/* 1. HERO HEADER (With Image & Overlay) */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#002D62] overflow-hidden text-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524813686514-a5756c97759e?q=80&w=2070" 
            alt="World Travel" 
            className="w-full h-full object-cover"
          />
          {/* Dark Blue Overlay for Readability */}
          <div className="absolute inset-0 bg-[#002D62]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#002D62]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#FF8C00] font-bold tracking-[0.3em] uppercase block mb-4 text-sm md:text-base"
          >
            Your Global Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl"
          >
            Select Your Destination
          </motion.h1>
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            We partner with the world's most prestigious universities. Explore visa rules, university lists, and scholarship opportunities below.
          </p>
        </div>
      </section>

      {/* 2. DESTINATIONS LIST (Refined Size) */}
      <section className="py-20 px-4">
        
        <div className="max-w-6xl mx-auto space-y-16">
          
          {countries.map((country, index) => (
            <motion.div 
              key={country.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              // LAYOUT: White Card, Rounded, Shadow
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* IMAGE SIDE (Smaller & Balanced: 45% Width) */}
                <div className="w-full lg:w-[45%]">
                  <Link href={`/destinations/${country.slug}`} className="block overflow-hidden rounded-2xl relative group h-[300px] lg:h-[350px]">
                    <img 
                      src={country.image} 
                      alt={country.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-md">
                      <span className="text-[#002D62] font-bold uppercase tracking-wider text-xs">
                        {country.stat}
                      </span>
                    </div>
                  </Link>
                </div>

                {/* TEXT SIDE (55% Width) */}
                <div className="w-full lg:w-[55%] text-center lg:text-left">
                  <div className="flex flex-col lg:items-start items-center">
                    <span className="text-gray-200 text-6xl font-serif font-bold -mb-4 lg:-ml-1 select-none">
                      0{country.id}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#002D62] mb-3">
                      {country.name}
                    </h2>
                    <p className="text-[#FF8C00] font-bold uppercase tracking-widest text-xs mb-6">
                      {country.tagline}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                      {country.desc}
                    </p>
                    
                    <Link href={`/destinations/${country.slug}`} className="inline-flex items-center gap-3 bg-[#002D62] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#FF8C00] transition-colors shadow-lg group">
                      Explore {country.name}
                      <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 3. FOOTER BANNER */}
      <section className="py-20 text-center px-4">
        <h3 className="text-2xl font-serif font-bold text-gray-400 mb-6">Not sure where to go?</h3>
        <Link href="/services" className="text-[#002D62] font-bold border-b-2 border-[#FF8C00] pb-1 hover:text-[#FF8C00] transition-colors uppercase tracking-widest">
          Talk to a Counselor
        </Link>
      </section>

    </main>
  );
}