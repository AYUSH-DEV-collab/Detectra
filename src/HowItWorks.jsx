 import {Link} from "react-router-dom"

export default function HowItWorks() {
  return (
    <div className="how-it-works">
      {/* HERO */}
      <section className="hero">
        <h2>
          NEURAL <br />
          <span>LOGIC.</span>
        </h2>

        <p className="hero-text">
          Our automated architecture leverages proprietary neural grids
          to decode high-fidelity data streams into actionable intelligence
          in real-time.
        </p>
      </section>

      {/* STEPS */}
      <section className="steps">

        <div className="step">
          <h3>01</h3>

          <h4>DATA INGESTION</h4>

          <p>
            Continuous harvesting of multi-vector signals across decentralized
            nodes. Detectra absorbs encrypted streams without latency.
          </p>
        </div>

        <div className="step">
          <h3>02</h3>

          <h4>NEURAL ANALYSIS</h4>

          <p>
            Synaptic mapping of raw packets via the Neural Grid.
            Deep-layer patterns are surfaced using recursive forensic logic.
          </p>
        </div>

        <div className="step">
          <h3>03</h3>

          <h4>ARTIFACT IDENTIFICATION</h4>

          <p>
            Isolation of anomalies and high-value data artifacts.
            Our grid cross-references millions of signatures per second.
          </p>
        </div>

        <div className="step">
          <h3>04</h3>

          <h4>REPORT GENERATION</h4>

          <p>
            Synthesized intelligence output in executive dashboard format.
            Fully automated forensic documentation ready for deployment.
          </p>
        </div>

      </section>

      {/* ENGINE */}
      <section className="engine">

        <div className="engine-left">
          <div className="card">
            <h2>THE FORENSIC ENGINE</h2>

            <p>
              Operating at the edge of neural computing, Detectra's engine
              processes multi-tetrabyte datasets in minutes, not hours.
              The autonomous nature of our identifying algorithm ensures
              zero human bias in artifact classification.
            </p>

            <div className="stats">
              <div>
                <h3>
                  <span>0.4ms</span>
                </h3>

                <p>Latency Floor</p>
              </div>

              <div>
                <h3>
                  <span>100%</span>
                </h3>

                <p>Automation Rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="engine-right">

          <div className="box">
            <h4>Encrypted Tunneling</h4>

            <p>
              All data is ingested through Quantum-Shielded tunnels,
              ensuring zero-leak capture.
            </p>
          </div>

          <div className="box">
            <h4>Live Telemetry</h4>

            <p>
              Monitor the neural analysis process live through our
              low-latency visualization portal.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta">

        <h2>READY TO <span>DECODE?</span> 
        </h2>

        <p>
          Deploy your first automated forensic grid today and witness
          the future of neural intelligence.
        </p>

        <button className="btn"><Link to='/upload'>INITIALIZE GRID</Link></button>

        <button className="btn"><Link to='/contacts'>REQUEST DEMO</Link></button>

      </section>

       
    </div>
  );
}
