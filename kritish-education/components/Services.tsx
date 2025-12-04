export default function Services() {
  return (
    <section id="services" className="section-padding">
        <div className="text-center">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">End-to-end support for your study abroad journey</p>
        </div>
      <div className="container">
        <div className="services-grid">
          {/* Card 1 */}
          <article className="service-card">
            <i className="fas fa-user-graduate service-icon"></i>
            <h3>Career Counseling</h3>
            <p>Expert guidance to help you choose the right course and university based on your academic profile and career goals.</p>
          </article>

          {/* Card 2 */}
          <article className="service-card">
            <i className="fas fa-university service-icon"></i>
            <h3>University Admissions</h3>
            <p>Complete assistance with application processing, SOP writing, and offer letter management.</p>
          </article>

          {/* Card 3 */}
          <article className="service-card">
            <i className="fas fa-passport service-icon"></i>
            <h3>Visa Assistance</h3>
            <p>99% success rate. We handle financial documentation, forms, and prepare you for mock interviews.</p>
          </article>

          {/* Card 4 */}
          <article className="service-card">
            <i className="fas fa-book-open service-icon"></i>
            <h3>Test Preparation</h3>
            <p>Certified trainers for IELTS, PTE, and TOEFL to ensure you get the bands required for admission.</p>
          </article>
        </div>
      </div>
    </section>
  );
}