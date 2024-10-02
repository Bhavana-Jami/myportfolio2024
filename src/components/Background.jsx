import React, { useEffect, useState } from 'react';

const FallingBeam = ({ delay }) => {
  return (
    <div 
      className="beam"
      style={{
        left: `${Math.random() * 100}%`, // Randomize horizontal position
        height: `${10 + Math.random() * 20}%`, // Reduced height of beams
        animationDelay: `${delay}ms`,
        animation: 'fall 300s cubic-bezier(0.25, 1, 0.5, 1) forwards', // Smooth easing with cubic-bezier
      }}
    />
  );
};

const Background = () => {
  const [beams, setBeams] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBeams(prev => [...prev, Date.now()]);
      if (beams.length > 20) {
        setBeams(prev => prev.slice(1));
      }
    }, 200); // Interval between new beams

    return () => clearInterval(intervalId);
  }, [beams]);

  return (
    <div className="background-container">
      {/* Grid background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 25 0 L 0 0 0 25"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Radial gradient overlay */}
      <div
        className="radial-gradient"
      />

      {/* Falling beams */}
      {/* {beams.map((beam, index) => (
        <FallingBeam key={beam} delay={index * 100} />
      ))} */}

      {/* Content */}
      <div className="content">
        <h1 className="title">Backgrounds</h1>
      </div>

      {/* CSS for falling animation */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        .background-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100vh;
        }
        .radial-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 20%, black 100%);
          z-index: 1;
        }
        .beam {
          position: absolute;
          top: 0;
          width: 2px; /* Beam thickness */
          background-color: white;
          opacity: 0.5;
          animation: fall 200s linear forwards;
          z-index: 2; /* Ensure it is above the grid */
        }
        .content {
          position: relative;
          z-index: 10; /* Content stays above everything */
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .title {
          font-size: 8rem;
          font-weight: bold;
          color: white;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Background;
