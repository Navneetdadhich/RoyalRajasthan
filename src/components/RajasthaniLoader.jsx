import React, { useEffect, useState } from 'react';

const RajasthaniLoader = () => {
  const rajasthaniWords = [
    "पधारो म्हारे देस",
    "खम्मा घणी",
    "राजस्थान",
    "पधारो सा",
    "राजवाड़ा",
    "मारवाड़",
    "रंगीलो",
    "धरती धोरां री"
  ];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rajasthaniWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="rajasthani-loader">
        {rajasthaniWords.map((word, index) => (
          <span
            key={index}
            className={`word ${index === currentWord ? 'active' : ''}`}
          >
            {word}
          </span>
        ))}
        <div className="mandala-overlay"></div>
      </div>
    </div>
  );
};

export default RajasthaniLoader;