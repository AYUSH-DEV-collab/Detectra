import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2 className="footer-title">
            DETECTRA<span className="highlight">.</span>
          </h2>
          <p className="footer-desc">
            Advanced AI-powered detection for modern security needs. Accuracy and reliability in every scan.
          </p>
          <div className="social-links">
            <button className="social-icon"><img src="src/assets/twitter.png" alt="TW" /></button>
            <button className="social-icon"><img src="src/assets/github1.png" alt="GH" /></button>
            <button className="social-icon"><img src="src/assets/linkedin.png" alt="LN" /></button>
          </div>
        </div>

        <div className="footer-nav">
          <h3 className="highlight">NAVIGATION</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/upload">Analyze Image</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
          </ul>
        </div>

        <div className="footer-nav">
          <h3 className="highlight">COMPANY</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contacts">Contact Support</Link></li>
            <li><span className="clickable">Privacy Policy</span></li>
            <li><span className="clickable">Terms of Service</span></li>
          </ul>
        </div>

        <div className="footer-status">
          <h3>SYSTEM STATUS</h3>
          <div className="status-indicator">
            <span className="pulse-dot"></span> All systems operational
          </div>
          <p>Subscribe to our newsletter for latest AI updates.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button>JOIN</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Detectra AI. All rights reserved.</p>
        <div className="footer-meta">
          <span>v1.0.4-stable</span>
        </div>
      </div>
    </footer>
  );
}
