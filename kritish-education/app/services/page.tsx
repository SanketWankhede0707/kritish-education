'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from '@/components/BookingModal';

// --- DATA ---
const services = [
  {
    id: 1,
    title: 'Career Counseling',
    desc: 'Confused about which country or course is right for you? Our certified counselors analyze your academic profile, budget, and career goals to recommend the perfect destination.',
    icon: 'fa-user-graduate',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070',
    points: ['Profile Analysis', 'Country Comparison', 'Course Selection', 'Budget Planning']
  },
  {
    id: 2,
    title: 'University Admissions',
    desc: 'We handle the complex application process for you. From drafting a winning Statement of Purpose (SOP) to managing Letters of Recommendation (LOR) and filling out forms.',
    icon: 'fa-university',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974',
    points: ['SOP & LOR Editing', 'Application Tracking', 'Scholarship Assistance', 'Offer Letter Management']
  },
  {
    id: 3,
    title: 'Visa Assistance',
    desc: 'A rejection can ruin your dreams. Our visa experts guide you through financial documentation, form filling, and mock interviews to ensure a 99% success rate.',
    icon: 'fa-passport',
    image: 'https://images.unsplash.com/photo-1569974498991-d3c12a504f95?q=80&w=2070',
    points: ['Financial Docs Guidance', 'DS-160 / VFS Support', 'Mock Visa Interviews', 'Blocked Account Setup']
  },
  {
    id: 4,
    title: 'Test Preparation',
    desc: 'Achieve your target score with our expert coaching. We offer intensive training for IELTS, PTE, and TOEFL with mock tests and personalized feedback.',
    icon: 'fa-book-open',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070',
    points: ['IELTS / PTE / TOEFL', 'German Language (A1-B2)', 'Mock Tests', 'Study Material Provided']
  }
];

const processSteps = [
  { step: '01', title: 'Counseling', desc: 'Understanding your goals' },
  { step: '02', title: 'Selection', desc: 'Choosing universities' },
  { step: '03', title: 'Apply', desc: 'Sending applications' },
  { step: '04', title: 'Visa', desc: 'Embassy interviews' },
  { step: '05', title: 'Fly', desc: 'Departure briefing' }
];

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    alert("Brochure downloading... (Please upload a PDF to your public folder)");
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION (With Background Image) */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#002D62] overflow-hidden text-center px-4">
        
        {/* NEW: Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070" 
            alt="University graduates" 
            className="w-full h-full object-cover"
          />
          {/* Stronger Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#002D62]/90 to-[#002D62]/70"></div>
        </div>
        
        {/* Background Pattern (Optional, keep or remove) */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg"
          >
            Comprehensive Guidance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            From your first question to your first day on campus, we are with you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* 2. PROCESS TIMELINE (Staggered Animation) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#002D62] mb-4">How We Work</h2>
            <div className="w-20 h-1 bg-[#FF8C00] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group w-full max-w-[150px]"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-[#002D62] text-[#002D62] flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg mb-4 group-hover:bg-[#002D62] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  {step.step}
                </div>
                <h3 className="font-bold text-base md:text-lg text-[#002D62]">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP & VISION (Slide In from Sides) */}
      <section className="py-24 bg-[#002D62] text-white relative overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8C00] rounded-full blur-[150px] opacity-10"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-5"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Leadership & Vision</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
              Kritish Education is built on the expertise and passion of its founders.
            </p>
          </div>

          {/* DIRECTOR 1: Mr. Mangesh (Slide from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 mb-32"
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="/images/team-1.jpg" // ⚠️ REPLACE
                alt="Mr. Mangesh Tarle" 
                className="w-[280px] h-[320px] md:w-[350px] md:h-[450px] object-cover rounded-xl shadow-[10px_10px_0px_0px_rgba(255,140,0,1)] bg-gray-700"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left max-w-lg">
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-2 text-white">
                Mr. Mangesh Tarle
              </h3>
              <p className="text-[#FF8C00] text-sm font-bold uppercase tracking-[0.2em] mb-6">
                Director & Founder
              </p>
              <blockquote className="text-lg md:text-xl text-gray-200 italic leading-relaxed mb-6 border-t-4 md:border-t-0 md:border-l-4 border-[#FF8C00] pt-4 md:pt-0 md:pl-6">
                "Our mission is simple: To provide honest, transparent, and expert guidance to every student. We don't just process visas; we craft careers that last a lifetime."
              </blockquote>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                With over 7 years of industry experience, Mr. Mangesh has successfully guided 1000+ students to top universities.
              </p>
            </div>
          </motion.div>

          {/* DIRECTOR 2: Mrs. Arti (Slide from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 lg:gap-24"
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img 
                src="/images/team-2.jpg" // ⚠️ REPLACE
                alt="Mrs. Arti Mangesh Tarle" 
                className="w-[280px] h-[320px] md:w-[350px] md:h-[450px] object-cover rounded-xl shadow-[-10px_10px_0px_0px_rgba(255,255,255,0.2)] bg-gray-700"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right max-w-lg">
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-2 text-white">
                Mrs. Arti Tarle
              </h3>
              <p className="text-[#FF8C00] text-sm font-bold uppercase tracking-[0.2em] mb-6">
                Director & Head Counselor
              </p>
              <blockquote className="text-lg md:text-xl text-gray-200 italic leading-relaxed mb-6 border-t-4 md:border-t-0 md:border-r-4 border-[#FF8C00] pt-4 md:pt-0 md:pr-6">
                "Every student has a unique story. My goal is to understand that story and match it with the perfect university."
              </blockquote>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                A specialist in student psychology and financial planning, Mrs. Arti ensures the transition abroad is smooth and stress-free.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. DETAILED SERVICES (Fade Up) */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002D62] mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-[#FF8C00] mx-auto"></div>
          </div>

          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 max-w-lg">
                  <div className="relative group">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute bottom-0 right-0 bg-[#FF8C00] text-white p-4 md:p-6 rounded-tl-3xl">
                        <i className={`fas ${service.icon} text-2xl md:text-3xl`}></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 text-center md:text-left max-w-lg">
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#002D62] mb-4 md:mb-6">{service.title}</h2>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 gap-3 mb-8 text-left max-w-sm mx-auto md:max-w-none">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-medium">
                        <i className="fas fa-check-circle text-green-500 mr-3 text-lg"></i>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="text-[#002D62] font-bold border-b-2 border-[#FF8C00] pb-1 hover:text-[#FF8C00] transition-colors uppercase tracking-widest text-sm"
                  >
                    Book This Service
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DOWNLOAD CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#FF8C00] to-[#ffaa40] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl text-center md:text-left gap-6"
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Need detailed info?</h3>
              <p className="text-white/90 text-base md:text-lg">Download our 2025 Comprehensive Study Guide.</p>
            </div>
            
            <button 
              onClick={handleDownload}
              className="relative z-10 bg-white text-[#e07b00] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center gap-3 w-full md:w-auto"
            >
              <i className="fas fa-file-download"></i>
              Download Brochure
            </button>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </main>
  );
}