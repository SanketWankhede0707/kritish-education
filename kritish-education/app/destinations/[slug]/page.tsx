'use client';

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

// --- ENRICHED DATA (2025 Updated) ---
const destinationData: Record<string, any> = {
  uk: {
    country: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070',
    tagline: 'The Home of Academic Prestige',
    desc: 'Home to the world’s most prestigious "Russell Group" universities. The UK offers a rich academic heritage combined with modern, 1-year Master’s degrees that fast-track your career.',
    stats: [
      { label: 'Post-Study Visa', value: '2 Years' },
      { label: 'Avg Salary', value: '£35k - £50k' },
      { label: 'Intakes', value: 'Sep / Jan' },
      { label: 'Masters Duration', value: '1 Year' }
    ],
    features: [
      { title: 'Graduate Route Visa', desc: 'Stay for 2 years after graduation to find work. No job offer needed.', icon: 'fa-passport' },
      { title: 'Save Time & Money', desc: 'Master’s degrees are only 1 year (vs 2 years elsewhere), saving huge costs.', icon: 'fa-piggy-bank' },
      { title: 'Spouse Visa Allowed', desc: 'Eligible Research/PhD students can bring dependents with full work rights.', icon: 'fa-user-friends' },
      { title: '90% Employment', desc: 'High employability rate within 6 months of course completion.', icon: 'fa-briefcase' }
    ],
    universities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'LSE', 'UCL', 'University of Manchester']
  },
  usa: {
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070',
    tagline: 'Land of Opportunity & Innovation',
    desc: 'The global leader in technology and research. Home to Ivy League institutions and Silicon Valley, offering the highest starting salaries in the world.',
    stats: [
      { label: 'STEM OPT Visa', value: '3 Years' },
      { label: 'Avg Salary', value: '$70k - $100k' },
      { label: 'Universities', value: '4000+' },
      { label: 'Global Rank', value: '#1' }
    ],
    features: [
      { title: '3-Year Work Permit', desc: 'STEM graduates get up to 36 months of Optional Practical Training (OPT).', icon: 'fa-clock' },
      { title: 'Highest Salaries', desc: 'US graduates earn the highest entry-level salaries globally.', icon: 'fa-money-bill-wave' },
      { title: 'Flexible Curriculum', desc: 'Change your major easily or take diverse electives.', icon: 'fa-layer-group' },
      { title: 'Green Card Pathway', desc: 'H1B Visa and EB-2/EB-3 categories for skilled professionals.', icon: 'fa-id-card' }
    ],
    universities: ['Harvard University', 'MIT', 'Stanford University', 'Caltech', 'University of Chicago', 'Columbia University']
  },
  canada: {
    country: 'Canada',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070',
    tagline: 'Your Pathway to Permanent Residency',
    desc: 'The #1 choice for students seeking a new home. Canada offers a welcoming, multicultural environment with clear pathways to PR and citizenship.',
    stats: [
      { label: 'PGWP Visa', value: '3 Years' },
      { label: 'PR Chance', value: 'Very High' },
      { label: 'Safety Rank', value: 'Top 5' },
      { label: 'Work Rights', value: '20hrs/week' }
    ],
    features: [
      { title: 'Post-Grad Work Permit', desc: 'Get an open work permit for up to 3 years after studies.', icon: 'fa-file-signature' },
      { title: 'Easy PR Pathways', desc: 'Earn points for Canadian education in Express Entry.', icon: 'fa-flag-checkered' },
      { title: 'Affordable Education', desc: 'Tuition fees are lower than the US, UK, or Australia.', icon: 'fa-tag' },
      { title: 'Spouse Work Permit', desc: 'Spouses of eligible students can work full-time.', icon: 'fa-heart' }
    ],
    universities: ['University of Toronto', 'McGill University', 'UBC', 'University of Alberta', 'University of Waterloo', 'Dalhousie University']
  },
  australia: {
    country: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070',
    tagline: 'World-Class Education & Lifestyle',
    desc: 'With 7 of the world’s top 100 universities, Australia combines academic excellence with high minimum wages to support your living costs.',
    stats: [
      { label: 'Post-Study Visa', value: '2-4 Years' },
      { label: 'Min Wage', value: '$23.23 / hr' },
      { label: 'Lifestyle', value: 'A++' },
      { label: 'Group of 8', value: 'Top Ranked' }
    ],
    features: [
      { title: 'Extended Work Rights', desc: 'Stay up to 4 years (or more in regional areas) after graduation.', icon: 'fa-calendar-plus' },
      { title: 'Highest Min Wage', desc: 'Earn over $23/hr while working part-time.', icon: 'fa-coins' },
      { title: 'Scholarships', desc: 'Generous scholarships for high-achieving Indian students.', icon: 'fa-graduation-cap' },
      { title: 'Regional Bonus', desc: 'Study in regional areas for extra PR points.', icon: 'fa-map-marked-alt' }
    ],
    universities: ['University of Melbourne', 'UNSW Sydney', 'University of Sydney', 'ANU', 'Monash University', 'University of Queensland']
  },
  germany: {
    country: 'Germany',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070',
    tagline: 'Engineering Excellence for Free',
    desc: 'The engineering hub of Europe. Public universities charge ZERO tuition fees, making it the most affordable world-class education destination.',
    stats: [
      { label: 'Tuition Fee', value: '€0 (Free)' },
      { label: 'Job Seeker Visa', value: '18 Months' },
      { label: 'Tech Jobs', value: 'Very High' },
      { label: 'Economy', value: '#1 in EU' }
    ],
    features: [
      { title: 'Free Education', desc: 'Most public universities charge zero tuition fees.', icon: 'fa-hand-holding-usd' },
      { title: '18-Month Job Seeker', desc: 'Stay back after graduation to find a job in your field.', icon: 'fa-search-location' },
      { title: 'Schengen Visa', desc: 'Travel freely to 26+ European countries while you study.', icon: 'fa-plane' },
      { title: 'Strong Economy', desc: 'Huge demand for Engineers and IT professionals.', icon: 'fa-industry' }
    ],
    universities: ['TU Munich', 'LMU Munich', 'Heidelberg University', 'Humboldt University', 'RWTH Aachen', 'KIT']
  },
  ireland: {
    country: 'Ireland',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1974',
    tagline: 'The Silicon Valley of Europe',
    desc: 'Home to Google, Meta, and Apple HQs. Ireland offers a friendly English-speaking environment and a booming tech sector.',
    stats: [
      { label: 'Post-Study Visa', value: '2 Years' },
      { label: 'Corp Tax', value: 'Low (Job Hub)' },
      { label: 'Language', value: 'English' },
      { label: 'Currency', value: 'Euro' }
    ],
    features: [
      { title: '2-Year Stay Back', desc: 'Perfect for Master’s graduates to secure a job.', icon: 'fa-hourglass-half' },
      { title: 'Tech Giants HQ', desc: 'Google, Facebook, LinkedIn have HQs in Dublin.', icon: 'fa-building' },
      { title: 'English Speaking', desc: 'No language barrier, unlike other EU countries.', icon: 'fa-comments' },
      { title: 'Fastest Growing', desc: 'One of the fastest growing economies in the Eurozone.', icon: 'fa-chart-line' }
    ],
    universities: ['Trinity College Dublin', 'University College Dublin', 'University of Galway', 'UCC', 'Dublin City University']
  }
};

export default function DestinationPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = destinationData[slug];
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-300">Country Not Found</h1>
        <Link href="/" className="text-[#002D62] underline font-bold hover:text-[#FF8C00]">Go Back Home</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. IMMERSIVE CINEMATIC HERO */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        {/* Parallax-like Image */}
        <div className="absolute inset-0">
          <img src={data.image} alt={data.country} className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002D62] via-[#002D62]/50 to-transparent opacity-90"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#FF8C00] font-bold tracking-[0.3em] uppercase mb-4"
          >
            Study Abroad With Kritish
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl"
          >
            {data.country}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 font-light italic max-w-2xl"
          >
            "{data.tagline}"
          </motion.p>
        </div>
      </div>

      {/* 2. PREMIUM STATS BAR (Full Width) */}
      <div className="bg-[#002D62] border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {data.stats.map((stat: any, index: number) => (
              <div key={index} className="text-center px-4">
                <p className="text-[#FF8C00] text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-serif font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. "ALL LEVELS" ANNOUNCEMENT STRIP */}
      <div className="bg-[#FF8C00] py-3 overflow-hidden">
        <div className="flex justify-center items-center gap-8 text-[#002D62] font-bold text-sm md:text-base uppercase tracking-wider whitespace-nowrap">
           <span><i className="fas fa-graduation-cap mr-2"></i> Bachelors</span>
           <span>•</span>
           <span><i className="fas fa-scroll mr-2"></i> Masters</span>
           <span>•</span>
           <span><i className="fas fa-briefcase mr-2"></i> MBA</span>
           <span>•</span>
           <span><i className="fas fa-user-graduate mr-2"></i> PhD</span>
           <span>•</span>
           <span><i className="fas fa-microscope mr-2"></i> Research</span>
        </div>
      </div>

      {/* 4. MAIN CONTENT (Wide Layout) */}
      <div className="max-w-[90%] mx-auto py-20 px-4">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-[#FF8C00] mb-12 transition-colors font-bold text-sm uppercase tracking-widest group">
          <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> Back to Destinations
        </Link>

        {/* Introduction */}
        <div className="flex flex-col md:flex-row gap-16 mb-24 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#002D62] mb-8 leading-tight">
              Why Choose <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#FF8C00]">{data.country}?</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              {data.desc}
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#002D62] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#FF8C00] transition-colors shadow-2xl hover:shadow-orange-500/40 transform hover:-translate-y-1"
            >
              Apply for {data.country}
            </button>
          </div>
          
          {/* Visual Graphic */}
          <div className="md:w-1/2 relative">
            <div className="absolute top-10 right-10 w-full h-full bg-[#f0f4f8] rounded-3xl -z-10"></div>
            <img 
              src={data.image} 
              alt="Study Abroad" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 rotate-1 hover:rotate-0" 
            />
          </div>
        </div>

        {/* 5. BENTO GRID FEATURES */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#002D62] mb-4">Key Benefits</h3>
            <div className="w-20 h-1 bg-[#FF8C00] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.map((feature: any, index: number) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-[#FF8C00] transition-colors text-[#002D62] group-hover:text-white text-2xl">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold text-[#002D62] mb-3">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. UNIVERSITY MARQUEE (Wide Grid) */}
        <div className="bg-[#002D62] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <h3 className="text-3xl font-serif font-bold mb-10 relative z-10">Top Universities in {data.country}</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {data.universities.map((uni: string, index: number) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#002D62] transition-all duration-300 cursor-pointer h-24">
                <span className="font-bold text-sm">{uni}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 relative z-10">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-4">And 100+ More Options</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-[#FF8C00] font-bold hover:text-white underline decoration-2 underline-offset-4"
            >
              Get Full List & Eligibility Check
            </button>
          </div>
        </div>

      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </main>
  );
}