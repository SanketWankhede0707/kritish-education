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
              <li><Link href="#">Study in Ireland</Link></li>
              <li><Link href="#">Study in Germany</Link></li>
              <li><Link href="#">IELTS Coaching</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 3rd Floor, United Arcade, Opp. BYK College, College Road, Nashik-422005</li>
              <li><i className="fas fa-phone"></i> +91-8830949360 </li>
              <li><i className="fas fa-envelope"></i> applications.kritish@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
       <div className="copyright">
          <p>&copy; 2025 Kritish Overseas. All Rights Reserved.</p>
        </div>
    </footer>
  );
}