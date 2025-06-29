import React, { useEffect, useState } from 'react';
import './LoadingBoxes.css';

const GREETINGS = ['Hello!', 'Bonjour!', 'Namaste!'];

const StartGreeting = ({ duration, onComplete }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (index < GREETINGS.length - 1) {
      const timeout = setTimeout(() => {
        setFade(false);
        setTimeout(() => {
          setIndex(i => i + 1);
          setFade(true);
        }, 250); // fade out duration
      }, duration);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      const timeout = setTimeout(onComplete, duration + 250);
      return () => clearTimeout(timeout);
    }
  }, [index, duration, onComplete]);

  return (
    <div className="start-loading-wrapper">
      <span className={`start-greeting${fade ? ' in' : ''}`}>{GREETINGS[index]}</span>
    </div>
  );
};

export default StartGreeting; 