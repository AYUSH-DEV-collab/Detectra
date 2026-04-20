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

        <div className="bento-card span-3">
          <h3>DEEPFAKE DETECTION</h3>
          <p>Identify high-fidelity synthetic media using temporal coherence analysis</p>
        </div>

        <div className="bento-card span-2">
          <h3>NEURAL ARTIFACT MAPPING</h3>
          <p>very generative model leaves a digital fingerprint. We map GAN-specific textures</p>
        </div>

        <div className="bento-card span-2">
          <h3>REAL-TIME API</h3>
          <p>Inject forensic security directly into your stack. Ultra-low latency verification.</p>
        </div>
        <div className="bento-card span-3">
          <h3>BATCH ANALYSIS</h3>
          <p>Process petabytes of visual data in minutes for high-throughput content vetting.</p>
        </div>
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
