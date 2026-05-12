import React, { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // VIVA NOTE: This handles the simulated form submission. 
  // We use event.preventDefault() to stop the page from refreshing.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSending(true);
    
    // Simulating a secure transmission delay
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 2000);
  };

  const handleReset = () => {
    setIsSent(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contacts">
      {/* HERO */}
      <section className="contact-hero">
        <h1>
          ESTABLISH <span><br />CONTACT</span>
        </h1>

        <p>
          Connect with the Detectra Neural Grid. Our architects are
          <br />
          standing by to facilitate your integration into the next
          <br />
          generation of data forensics.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-container">

        {/* LEFT FORM */}
        <div className="form-box">
          <h3>SECURE TRANSMISSION</h3>

          {isSent ? (
            <div className="success-message" style={{ 
              padding: '40px', 
              textAlign: 'center', 
              border: '1px solid #39FF14', 
              backgroundColor: 'rgba(57, 255, 20, 0.05)',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '20px' }}>✓</div>
              <h4 style={{ color: '#39FF14', letterSpacing: '2px' }}>TRANSMISSION ENCRYPTED</h4>
              <p style={{ color: '#888', marginTop: '10px' }}>Your signal has been received by the Grid. Expect a response within 15ms of human perception.</p>
              <button 
                className="btn-contact" 
                style={{ marginTop: '30px' }}
                onClick={handleReset}
              >
                SEND ANOTHER SIGNAL
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="FULL NAME" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSending}
                />
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSending}
                />
              </div>

              <select disabled={isSending}>
                <option>GENERAL INQUIRY</option>
                <option>SYSTEM INTEGRATION</option>
                <option>FORENSIC PARTNERSHIP</option>
                <option>MEDIA AUTHENTICATION</option>
              </select>

              <textarea 
                placeholder="TYPE YOUR MESSAGE"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSending}
              ></textarea>

              <button type="submit" className="btn-contact" disabled={isSending}>
                {isSending ? 'ENCRYPTING...' : 'INITIATE TRANSFER →'}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="info-box">
          <div className="card">
            <h4>GLOBAL HEADQUARTERS</h4>
            <p>San Francisco, USA</p>
            <p className="highlight">+1 (888) DETECTRA</p>
          </div>

          <div className="card">
            <h4>SUPPORT CENTER</h4>
            <div className="box">
              <p>Under 15 Minutes Response</p>
              <p className="highlight">support@detectra.io</p>
            </div>
          </div>

          <div className="card" style={{ marginTop: '20px', border: '1px dashed rgba(57, 255, 20, 0.3)' }}>
            <h4>SYSTEM STATUS</h4>
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="pulse-dot" style={{ width: '8px', height: '8px', backgroundColor: '#39FF14', borderRadius: '50%', boxShadow: '0 0 10px #39FF14' }}></span>
              NEURAL GRID: ONLINE
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
