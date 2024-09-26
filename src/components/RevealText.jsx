// RevealText.js
import React, { useRef, useEffect, useState } from 'react';
import '../styles/RevealText.css';

const RevealText = ({ children }) => {
  const textRef = useRef();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;

        // Calculate the percentage of the element that has been scrolled through
        const percentage = Math.min(
          Math.max(0, (windowHeight - rect.top) / (windowHeight + elementHeight)),
          1
        );
        setScrollPercentage(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getColoredWords = (text) => {
    const words = text.split(' '); // Split text into words
    return words.map((word, index) => {
      // Calculate color based on scroll percentage and word index
      const colorPercentage = Math.min(scrollPercentage * (index + 1), 1);
      const color = `rgb(${colorPercentage * 255}, ${100 - colorPercentage * 100}, ${
        255 - colorPercentage * 255
      })`;
      return (
        <span key={index} style={{ color }}>
          {word + ' '}
        </span>
      );
    });
  };

  return (
    <div ref={textRef} className="reveal-text">
      {React.Children.map(children, (child) => {
        if (typeof child === 'string') {
          return <div>{getColoredWords(child)}</div>;
        }
        return child; // Return any other elements unmodified
      })}
    </div>
  );
};

export default RevealText;
