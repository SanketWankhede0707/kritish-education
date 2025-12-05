'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import BookingModal from '@/components/BookingModal';

// --- DATA: SERVICES ---
const services = [
  {
    id: 1,
    title: 'Career Counseling',
    desc: 'Confused about which country or course is right for you? Our certified counselors analyze your academic profile, budget, and career goals to recommend the perfect destination. We don’t just pick colleges; we build careers.',
    icon: 'fa-user-graduate',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070',
    points: ['Profile Analysis', 'Country Comparison', 'Course Selection', 'Budget Planning']
  },
  {
    id: 2,
    title: 'University Admissions',
    desc: 'We handle the complex application process for you. From drafting a winning Statement of Purpose (SOP) to managing Letters of Recommendation (LOR) and filling out forms, we ensure your application stands out.',
    icon: 'fa-university',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974',
    points: ['SOP & LOR Editing', 'Application Tracking', 'Scholarship Assistance', 'Offer Letter Management']
  },
  {
    id: 3,
    title: 'Visa Assistance',
    desc: 'A rejection can ruin your dreams. Our visa experts guide you through financial documentation, form filling, and mock interviews to ensure a 99% success rate. We specialize in Schengen, UK, and US visas.',
    icon: 'fa-passport',
    image: 'https://images.unsplash.com/photo-1569974498991-d3c12a504f95?q=80&w=2070',
    points: ['Financial Docs Guidance', 'DS-160 / VFS Support', 'Mock Visa Interviews', 'Blocked Account Setup (Germany)']
  },
  {
    id: 4,
    title: 'Test Preparation',
    desc: 'Achieve your target score with our expert coaching. We offer intensive training for IELTS, PTE, and TOEFL with mock tests and personalized feedback to ensure you clear the language barrier.',
    icon: 'fa-book-open',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070',
    points: ['IELTS / PTE / TOEFL', 'German Language (A1-B2)', 'Mock Tests', 'Study Material Provided']
  }
];

// --- DATA: TEAM (Scalable) ---
const team = [
  {
    id: 1,
    name: 'Mr. Mangesh Tarle',
    role: 'Director & Founder',
    bio: 'With over 7 years of experience in overseas education, Mr. Mangesh has guided 1000+ students to top universities in Germany and the UK. His vision is to make global education accessible to every deserving student in Nashik.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OjHy2n0d3hSunHrP0y0uAYqPrduD2KjBpA&s' // PLACEHOLDER (Replace with real image)
  },
  {
    id: 2,
    name: 'Mrs. Arti Mangesh Tarle',
    role: 'Director & Head Counselor',
    bio: 'An expert in student psychology and career planning, Mrs. Arti ensures every student finds a course that matches their passion. She specializes in visa documentation and financial planning.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OjHy2n0d3hSunHrP0y0uAYqPrduD2KjBpA&s' // PLACEHOLDER (Replace with real image)
  }
  // Add more team members here in future...
];

// --- DATA: PROCESS ---
const processSteps = [
  { step: '01', title: 'Counseling', desc: 'We understand your goals.' },
  { step: '02', title: 'Shortlisting', desc: 'We select the best universities.' },
  { step: '03', title: 'Application', desc: 'We apply & track offers.' },
  { step: '04', title: 'Visa Filing', desc: 'We handle the embassy work.' },
  { step: '05', title: 'Departure', desc: 'You fly to your dream!' }
];

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Placeholder function for PDF download
  const handleDownload = () => {
    // In future, put the real PDF in public/brochure.pdf
    alert("Brochure downloading... (Upload a PDF to public folder to make this real)");
    // window.open('/brochure.pdf', '_blank'); 
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#002D62] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#002D62]/50 to-[#002D62]"></div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            Comprehensive Guidance
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            From your first question to your first day on campus, we are with you every step of the way.
          </p>
        </div>
      </section>

      {/* 2. PROCESS TIMELINE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002D62]">How It Works</h2>
            <div className="w-16 h-1 bg-[#FF8C00] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white rounded-full border-2 border-[#002D62] text-[#002D62] flex items-center justify-center text-xl font-bold mb-4 group-hover:bg-[#002D62] group-hover:text-white transition-all shadow-lg">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED SERVICES (Zig-Zag Layout) */}
      <section className="py-20 container mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                  <img src={service.image} alt={service.title} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 right-0 bg-[#FF8C00] text-white p-4 rounded-tl-2xl">
                    <i className={`fas ${service.icon} text-3xl`}></i>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-serif font-bold text-[#002D62] mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center text-gray-700 font-medium">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      {point}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#002D62] font-bold border-b-2 border-[#FF8C00] pb-1 hover:text-[#FF8C00] transition-colors"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT US / TEAM */}
      <section className="py-20 bg-[#002D62] text-white">
        <div className="text-center mb-20">
  {/* Added tracking-tight for a modern feel and upped the size */}
  <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
    Meet Our Leaders
  </h2>
  
  {/* Increased text size slightly and softened the color for elegance */}
  <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
    Kritish Education is led by industry veterans with a passion for student success.
  </p>
</div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                <div className="flex items-center gap-6 mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#FF8C00]" 
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white ">{member.name}</h3>
                    <p className="text-[#FF8C00] text-sm uppercase tracking-widest font-bold">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "{member.bio}"
                </p>
              </div>
            ))}
          </div>

          {/* Add Member Placeholder (Hidden for now, enable when hiring) */}
          {/* <div className="text-center mt-12">
            <p className="text-sm text-gray-400">Want to join our team? Email us at careers@kritisheducation.com</p>
          </div> */}

        </div>
      </section>

      {/* 5. DOWNLOAD PDF STRIP */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#FF8C00] to-[#ffaa40] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden">
            
            {/* Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10 mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Need more details?
              </h3>
              <p className="text-white/90 text-lg">
                Download our comprehensive 2026 Study Guide brochure.
              </p>
            </div>
            
            <button 
              onClick={handleDownload}
              className="relative z-10 bg-white text-[#e07b00] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-3"
            >
              <i className="fas fa-file-download"></i>
              Download Brochure
            </button>

          </div>
        </div>
      </section>

      {/* MODAL */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </main>
  );
}