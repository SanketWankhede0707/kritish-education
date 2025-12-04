'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    type: 'video',
    name: 'Michael B.',
    status: 'Accepted: UK',
    quote: "Getting into LSE was a dream. The team guided me through every step of the visa process.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?controls=0"
  },
  {
    id: 2,
    type: 'video',
    name: 'Priya S.',
    status: 'Accepted: Canada',
    quote: "I was confused about Canada vs Australia. Their counseling clarified everything for me.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?controls=0" // Placeholder video
  },
  {
    id: 3,
    type: 'text',
    name: 'Anjali K.',
    status: 'Accepted: USA',
    quote: "The IELTS coaching was excellent. I scored 8.0 bands and got a full scholarship for my Masters.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150"
  },
  {
    id: 4,
    type: 'text',
    name: 'Rohan D.',
    status: 'Accepted: Germany',
    quote: "Smooth visa process for Germany. They handled my blocked account and uni application perfectly.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150"
  },
  {
    id: 5,
    type: 'text',
    name: 'Rohan D.2',
    status: 'Accepted: Canada',
    quote: "Smooth visa process for Germany. They handled my blocked account and uni application perfectly.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="w-full max-w-[85%] mx-auto px-4">
        
        {/* Title Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#002D62] mb-4">Success Stories</h2>
          <div className="w-24 h-1 bg-[#FF8C00] mb-6"></div>
          <p className="text-gray-600 uppercase tracking-widest text-sm font-medium">
            Hear from students who achieved their dreams
          </p>
        </motion.div>

        {/* Horizontal Slider */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory px-2 no-scrollbar">
          {testimonials.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 50 }} // Slide in from right
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[320px] bg-white border border-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 snap-center"
            >
              
              {/* VIDEO CARD LAYOUT */}
              {item.type === 'video' ? (
                <div className="mb-4">
                  <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-sm bg-black">
                    <iframe 
                      src={item.videoUrl} 
                      title={item.name}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                /* TEXT CARD LAYOUT (User Image) */
                <div className="mb-6 flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#FF8C00]"
                  />
                  <div>
                    <h4 className="font-bold text-[#002D62]">{item.name}</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold uppercase">
                      {item.status}
                    </span>
                  </div>
                </div>
              )}

              {/* QUOTE CONTENT */}
              <p className="text-gray-600 italic text-sm mb-4 leading-relaxed">
                "{item.quote}"
              </p>

              {/* For Video Cards: Show Name at bottom */}
              {item.type === 'video' && (
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <h4 className="font-bold text-[#002D62]">{item.name}</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold uppercase">
                      {item.status}
                    </span>
                  </div>
                  <i className="fas fa-play-circle text-3xl text-[#FF8C00] opacity-50"></i>
                </div>
              )}

              

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}