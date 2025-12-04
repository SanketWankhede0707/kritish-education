export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      {/* --- TITLE SECTION (Centered & Top) --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002D62] mb-4">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-[#FF8C00] mb-6"></div> {/* The Orange Underline */}
          <p className="text-gray-600 uppercase tracking-widest text-sm font-medium">
            End-to-end support for your study abroad journey
          </p>
        </div>
      <div className="container mx-auto px-4">  
        {/* --- CARDS SECTION (Row of 4 Below Title) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center group">
            <div className="mb-6 flex justify-center">
              <i className="fas fa-user-graduate text-5xl text-[#002D62] group-hover:text-[#FF8C00] transition-colors"></i>
            </div>
            <h3 className="text-lg font-bold mb-3 text-[#002D62]">Career Counseling</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Expert guidance to help you choose the right course and university based on your academic profile.
            </p>
          </article>

          {/* Card 2 */}
          <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center group">
             <div className="mb-6 flex justify-center">
              <i className="fas fa-university text-5xl text-[#002D62] group-hover:text-[#FF8C00] transition-colors"></i>
            </div>
            <h3 className="text-lg font-bold mb-3 text-[#002D62]">University Admissions</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Complete assistance with application processing, SOP writing, and offer letter management.
            </p>
          </article>

          {/* Card 3 */}
          <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center group">
             <div className="mb-6 flex justify-center">
              <i className="fas fa-passport text-5xl text-[#002D62] group-hover:text-[#FF8C00] transition-colors"></i>
            </div>
            <h3 className="text-lg font-bold mb-3 text-[#002D62]">Visa Assistance</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              99% success rate. We handle financial documentation, forms, and prepare you for mock interviews.
            </p>
          </article>

          {/* Card 4 */}
          <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center group">
             <div className="mb-6 flex justify-center">
              <i className="fas fa-book-open text-5xl text-[#002D62] group-hover:text-[#FF8C00] transition-colors"></i>
            </div>
            <h3 className="text-lg font-bold mb-3 text-[#002D62]">Test Preparation</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Certified trainers for IELTS, PTE, and TOEFL to ensure you get the bands required for admission.
            </p>
          </article>

        </div>
        
      </div>
    </section>
  );
}