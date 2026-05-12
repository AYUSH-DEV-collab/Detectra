import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <section className="hero">
        <h2>
          PROTECTING <br /> THE <br />
          <span>
            ABSOLUTE <br />
            TRUTH
          </span>{' '}
          IN A <br />
          SYNTHETIC <br /> ERA.
        </h2>

        <p className="hero-text">
          In an age where reality is programmable, Detectra stands as the
          final line of defense. We map the invisible neural fingerprints of
          synthetic media to ensure the integrity of human discourse.
        </p>
      </section>

      <section className="mission">
        <div className="mission-left">
          <img
            src="./src/assets/a_hyper_realistic_cinematic_portrait_of_a_futuristic_high_tech_operative_in_the.png"
            alt="ai"
          />
        </div>

        <div className="mission-right">
          <h2>Our Mission</h2>

          <p>
            The proliferation of deepfakes isn't just a technical challenge.
            It's an existential threat to trust. Detectra was born from the
            necessity to distinguish between the generated and the genuine.
          </p>

          <p>
            We empower journalists, forensic investigators, and democratic
            institutions with tools that operate at the speed of the social
            web, providing a cryptographic layer of certainty to every frame
            of video and every byte of audio.
          </p>

          <div className="stats">
            <div>
              <h3>
                <span>99.9%</span>
              </h3>

              <p>Detection Accuracy</p>
            </div>

            <div>
              <h3>
                <span>&lt;2ms</span>
              </h3>

              <p>Neural Latency</p>
            </div>
          </div>
        </div>
      </section>

      <section className="science">
        <h2>
          THE SCIENCE OF <span>NEURAL MAPPING</span>
        </h2>

        <div className="cards">
          <div className="card">
            <img
              src="https://www.shutterstock.com/image-vector/marketing-research-human-head-logo-600nw-2624071265.jpg"
              alt="Artifact"
            />

            <h3>Artifact Analysis</h3>

            <p>
              Detecting the digital sweat left behind by generative models.
              We track micro-fluctuation in pixel density that are invisible
              to the human eye but glaring to our neural grid.
            </p>
          </div>

          <div className="card">
            <img
              src="https://images.scalebranding.com/human-fingerprint-security-logo-6b5c04f0-66d9-47bd-8ddb-260d234b42f2.png"
              alt="Fingerprint"
            />

            <h3>Biological Syncing</h3>

            <p>
              Humans have involuntary movements, micro-saccades and
              heart-rate blood flow shifts (rPPG). Our systems verify these
              biological signatures against synthetic imitations.
            </p>
          </div>

          <div className="card">
            <img
              src="https://miro.medium.com/0*uY3ZkWWftlwwdaty"
              alt="Semantic"
            />

            <h3>Semantic Drift</h3>

            <p>
              Mapping the subtle inconsistencies in speech patterns and
              contextual logic where AI models struggle to maintain cohesive
              narrative integrity over duration.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="highlights">
          ETHICAL AI BY 
          <span> DESIGN</span>
        </h2>

        <p className="highlight-text">
          We believe technology should serve truth, not manipulate it. Our  
          algorithms are <br />trained on diverse databases to prevent bias and
          ensure that protection is universal.
        </p>


        <div className="fourCard">
          <div className="subfourCard">
            <h3>Privacy First</h3>

            <p>
              Zero-knowledge proofs ensure we verify media without ever
              storing or accessing personal identity data.
            </p>
          </div>

          <div className="subfourCard">
            <h3>Open Inspection</h3>

            <p>
              Our core detection logic is auditable by third-party
              researchers to ensure objective performance.
            </p>
          </div>

          <div className="subfourCard">
            <h3>Bias Mitigation</h3>

            <p>
              Continuous testing across all demographics to maintain a
              &lt;0.01% variance in detection performance.
            </p>
          </div>

          <div className="subfourCard">
            <h3>Neutral Protocol</h3>

            <p>
              Detectra remains an independent entity, unbound by political
              or commercial influence.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>
          RECLAIM THE <span>NARRATIVE.</span>
        </h2>

        <button className="btn"><Link to='/upload'>INITIALIZE GRID</Link></button>

        <button className="btn"><Link to='/contacts'>SYSTEM DEMO</Link></button>
      </section>

      <footer>
        <p>© 2026 Detectra Neural Grid. All rights reserved</p>
      </footer>
    </div>
  );
}