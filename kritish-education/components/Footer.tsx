import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About */}
          <div className="footer-col">
            <div className="logo">
              <img 
                src="/images/web-logo-final1.png" 
                alt="Kritish Overseas" 
                style={{ height: '40px', filter: 'brightness(0) invert(1)' }} 
              />
            </div>
            <p style={{ marginTop: '20px' }}>
              Helping students realize their dreams of studying abroad since 2018. We provide end-to-end guidance for a seamless transition to global education.
            </p>
            <div className="social-links">
              <Link href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
              <Link href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
              <Link href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
              <Link href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Study in UK</Link></li>
              <li><Link href="#">Study in Canada</Link></li>
              <li><Link href="#">IELTS Coaching</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 Education Street, London, UK</li>
              <li><i className="fas fa-phone"></i> +44 20 7946 0000</li>
              <li><i className="fas fa-envelope"></i> admissions@kritishoverseas.com</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Kritish Overseas. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}