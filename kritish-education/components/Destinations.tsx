'use client'; 

import Link from 'next/link';
import { motion } from 'framer-motion';

const destinations = [
  {
    id: 1,
    country: 'United Kingdom',
    sub: 'Russell Group Experts',
    badge: '50+ Unis',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070',
    slug: 'uk'
  },
  {
    id: 2,
    country: 'USA',
    sub: 'Ivy League & STEM',
    badge: 'Work Permit',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070',
    slug: 'usa'
  },
  {
    id: 3,
    country: 'Canada',
    sub: 'PR Pathways',
    badge: '3 Year Stay',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070',
    slug: 'canada'
  },
  {
    id: 4,
    country: 'Australia',
    sub: 'Group of 8',
    badge: 'Post Study Work',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070',
    slug: 'australia'
  },
  {
    id: 5,
    country: 'Germany',
    sub: 'Engineering Hub',
    badge: 'Free Tuition',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070',
    slug: 'germany'
  },
  {
    id: 6,
    country: 'Ireland',
    sub: 'Europe Silicon Valley',
    badge: '2 Year Stay',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1974',
    slug: 'ireland'
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gray-100">
      
      {/* UPDATE: Changed max-w-[95%] to max-w-[85%] */}
      <div className="w-full max-w-[85%] mx-auto px-4">
        
        {/* Title Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#002D62] mb-4">Study Destinations</h2>
          <div className="w-24 h-1 bg-[#FF8C00] mb-6"></div>
          <p className="text-gray-600 uppercase tracking-widest text-sm font-medium">
            Choose your dream country
          </p>
        </motion.div>

        {/* SLIDER CONTAINER */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory px-2 no-scrollbar">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] h-[400px] relative rounded-2xl overflow-hidden shadow-xl snap-center group cursor-pointer"
            >
              <img 
                src={dest.image} 
                alt={dest.country} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">
                  {dest.badge}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62] via-[#002D62]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-serif font-bold text-white mb-1">
                    {dest.country}
                  </h3>
                  <p className="text-[#FF8C00] text-xs uppercase tracking-widest font-bold mb-4">
                    {dest.sub}
                  </p>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <Link href={`/destinations/${dest.slug}`} className="text-white text-sm flex items-center gap-2 hover:gap-4 transition-all">
                      Explore <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}