import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Upload() {
  // VIVA NOTE: useState is used to store data that changes over time and triggers a UI update.
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // NEW: Added state to hold the final mock result after scanning
  const [analysisResult, setAnalysisResult] = useState(null);

  // VIVA NOTE: useRef holds a reference to the hidden HTML input element so we can trigger clicks on it programmatically.
  const inputRef = useRef(null);

  const handleFile = (selectedFile) => {
    if (selectedFile) {
      setFile(selectedFile);
      setIsProcessing(true);
      setProgress(0);
      setAnalysisResult(null); // Clear previous results

      // VIVA NOTE: setInterval creates our fake progress bar by incrementing the state every 50ms.
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      // VIVA NOTE: setTimeout simulates a network request delay. After 2.5 seconds, we show the mock results.
      setTimeout(() => {
        setIsProcessing(false);
        // Generate a random mock result to make the presentation dynamic
        const mockResults = [
          { status: 'HIGH RISK', score: '98.4%', color: '#ff3333', desc: 'Synthetic Neural Artifacts Detected in Visual Layer.' },
          { status: 'AUTHENTIC', score: '0.2%', color: '#39FF14', desc: 'Biological Sync Verified. Source is clean.' },
          { status: 'ANOMALY', score: '64.1%', color: '#ffbb00', desc: 'Semantic Drift Detected in Audio Frequencies.' }
        ];
        setAnalysisResult(mockResults[Math.floor(Math.random() * mockResults.length)]);
      }, 2500); // Shortened to 2.5s for a snappier presentation demo
    }
  };

  const handleInputChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // VIVA NOTE: Prevents the browser from opening the file in a new tab.
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleRemove = () => {
    setFile(null);
    setAnalysisResult(null);
    setProgress(0);
    inputRef.current.value = '';
  };

  return (
    <section className='upload-section' id='upload'>
      <div className='upload-container'>
        <div className='left-side'>
          <h2 className='big-title'>INITIALIZE<br />
            <span className='highlight'>DATA </span>INGESTION.</h2>
        </div>

        <div className='right-side'>
          <p>Drop any suspicious file into the scanner for threat analysis.</p>
        </div>
      </div>

      {/* Hidden file input triggered by clicking the dropzone */}
      <input type='file' ref={inputRef} onChange={handleInputChange} hidden/>

      <button className='back-btn'><Link to='/'>&#x3c; BACK TO TERMINAL </Link></button>

      <div className='upload-box'>
        <div className="window-bar">
          <div className="window-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="window-title">DEEP_SEC_PROTOCOL_V4.0</div>
        </div>

        <div
          className={`upload-dropzone ${isDragging ? 'dragging' : ''}`}
          onClick={() => !isProcessing && !analysisResult && inputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{ cursor: (isProcessing || analysisResult) ? 'default' : 'pointer' }}
        >
          {/* Conditional Rendering: Showing different UI based on state */}
          {isProcessing ? (
            <div className='processing-content' style={{ padding: '2rem', textAlign: 'center', width: '80%' }}>
              <h2 style={{ color: '#39FF14', marginBottom: '1rem', fontFamily: 'monospace', letterSpacing: '2px' }}>ANALYZING NEURAL GRID...</h2>
              <div style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', height: '20px', border: '1px solid rgba(57,255,20,0.3)' }}>
                <div style={{ width: `${progress}%`, backgroundColor: '#39FF14', height: '100%', transition: 'width 0.1s linear', boxShadow: '0 0 10px #39FF14' }}></div>
              </div>
              <p style={{ marginTop: '1rem', color: '#888', fontFamily: 'monospace' }}>{progress}% COMPLETE</p>
            </div>
          ) : analysisResult ? (
            <div className='result-content' style={{ padding: '3rem', textAlign: 'center', border: `1px solid ${analysisResult.color}`, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.6)', width: '80%', boxShadow: `0 0 20px ${analysisResult.color}33` }}>
              <h2 style={{ color: analysisResult.color, fontSize: '1.5rem', marginBottom: '0.5rem', letterSpacing: '3px' }}>[{analysisResult.status}]</h2>
              <h1 style={{ fontSize: '4rem', margin: '10px 0', color: 'white', textShadow: `0 0 10px ${analysisResult.color}` }}>{analysisResult.score}</h1>
              <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '1.1rem' }}>{analysisResult.desc}</p>
              <button 
                style={{ marginTop: '2.5rem', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 24px', cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s' }} 
                onClick={(e) => { e.stopPropagation(); handleRemove(); }}
                onMouseOver={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.borderColor = 'white'; }}
                onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(255,255,255,0.3)'; }}
              >
                RUN NEW SCAN
              </button>
            </div>
          ) : file ? (
            <div className='file-uploaded-content'>
              <div className='icon-circle'>
                <img src="./src/assets/upload-image.png" alt="Uploaded" />
              </div>
              <h2 className='file-name'>{file.name}</h2>
              <button className='remove-file-btn' onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}>✕ REMOVE FILE</button>
            </div>
          ) : (
            <>
              <img className='upload-image' src="./src/assets/upload-image.png" alt="Drop" />
              <h1>DROP MEDIA FOR ANALYSIS </h1>
              <p className='drop-zone'>Drag and drop images or videos here. Supported formats: <br /> JPG, PNG, MP4, MOV (Max: 50MB)</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}