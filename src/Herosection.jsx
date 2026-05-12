import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
    <div className="hero-container">

       <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/vid1.mp4" type="video/mp4"/>
      </video>
      
      <div className="glass-overley"></div>

        <div className="hero-left">

          <div className="status-badge">
            <span className="pulse-dot"></span>
            SYSTEM STATUS: ACTIVE
          </div>

          <h1 className="hero-title">THE TRUTH<br/> 
          <span className="highlight">UNMASKED.</span></h1>
          <p className="hero-subtitle">Detectra uses neural artifact mapping to identify synthetic media with 99.8% accuracy. Protect your truth in the age of deepfakes.</p>
          <div className="button-grp">
            <button className="analyze-btn2" ><Link to="/Upload">START SCANNING</Link></button>
            <button className="white-paper-btn" >WHITE PAPER</button>
          </div>
        </div>
        
        <div className="scanner-container">

          <div className="radar-ring inner-ring"></div>
          <div className="radar-ring outer-ring"></div>

          <div className="scanner-overlay top-right">
            <p>ANALYSIS ENGINE V4.2</p>
            <p>SCANNING FOR ARTIFACTS...</p>
          </div>

          <div>
            <video className="box-video" autoPlay loop muted playsInline>
              <source src="/vid2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="scanner-overlay bottom-left">
            <p>FRAME_INDEX_X029</p>
          </div>

          <div className="scanner-overlay bottom-right">
            <p className="highlight">PROBABILITY: 0.882% GENUINE</p>
          </div>

          <div className="scanner-line"></div>
      </div>
        
    </div>
    </section>
  );
}
