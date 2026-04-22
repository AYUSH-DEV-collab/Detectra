import BorderGlow from "./reactbits/BorderGlow";


export default function Features() {
  return (
    <section className="features-section">

     <div className="features-header">
        <div className="left-side">
          <div className="mini-badge">
            <span className="yellow-dot"></span> SYSTEM CAPABILITIES V4.2
          </div>

          <h2 className="big-title">SYSTEM<br />
          <span className="highlight">CAPABILITIES.</span></h2>
        </div>

        <div className="right-side">
          <p>Detectra utilizes a proprietary neural grid to dismantle synthetic deception at the pixel level. Our tools provide forensic-grade certainty in an era of digital doubt.</p>
        </div>
      </div>


      <div className="bento-grid">
        <BorderGlow
          className="span-3 bento-card"
          glowColor="120 10 54"
          borderRadius={5}
          colors={["#FFFF33", "#39FF14"]}
          backgroundColor="rgba(0, 0, 0, 0.97)"
        >
          <h3>DEEPFAKE DETECTION</h3>
          <p>Identify high-fidelity synthetic media using temporal coherence analysis</p>
        </BorderGlow>

        <BorderGlow
          className="span-2 bento-card"
          glowColor="120 10 54"
          borderRadius={5}
          colors={["#FFFF33", "#39FF14"]}
          backgroundColor="rgba(24, 24, 24, 1)"
        >
          <h3>NEURAL ARTIFACT MAPPING</h3>
          <p>Every generative model leaves a digital fingerprint. We map GAN-specific textures</p>
        </BorderGlow>

        <BorderGlow
          className="span-2 bento-card"
          glowColor="120 10 54"
          borderRadius={5}
          colors={["#FFFF33", "#39FF14"]}
          backgroundColor="rgba(24, 24, 24, 1)"
        >
          <h3>REAL-TIME API</h3>
          <p>Inject forensic security directly into your stack. Ultra-low latency verification.</p>

          <div className="terminal-block">
            <span className="yellow-code">GET /v4/neural/analyze</span>
            <br />
            <span>X-DETECTRA-TOKEN: [. . .]</span>
            <br />
            <span className="green-code">STATUS: 200 OK</span>
          </div>
        </BorderGlow>

        <BorderGlow
          className="span-3 bento-card batch-card"
          glowColor="120 10 54"
          borderRadius={5}
          colors={["#FFFF33", "#39FF14"]}
          backgroundColor="rgba(0, 0, 0, 0.97)"
        >
          <div className="card-content">
            <h3>BATCH ANALYSIS</h3>
            <p>Process petabytes of visual data in minutes for high-throughput content vetting.</p>
            <p className="explore-link">
              EXPLORE SCALABILITY <span className="yellow-arrow">&#10132;</span>
            </p>
          </div>

          <div className="status-grid">
            <div className="grid-box"></div>
            <div className="grid-box green-box">
              <span className="dot-check">✓</span>
            </div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>

            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box red-box">
              <span className="triangle">⚠</span>
            </div>
            <div className="grid-box"></div>

            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
          </div>
        </BorderGlow>
      </div>

      <div className="features-footer">
        
        <div className="footer-style">
          <h4>ENCRYPTION</h4>
          <p>Zero-knowledge analysis protocols. Your visual assets are hashed, analyzed, and purged immediately after verification.</p>
        </div>

        <div className="footer-style">
          <h4>MODEL DEPTH</h4>
          <p>Powered by a massive ensemble of transformer architectures trained on over 500 million synthetic and organic media pairs.</p>
        </div>

        <div className="footer-style">
          <h4>NODE EDGE</h4>
          <p>Distributed neural processing across 14 global data centers ensures sub-100ms latency for real-time verification requests.</p>
        </div>
      </div>




    </section>
  );
}
