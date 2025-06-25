import React, { useEffect, useState } from 'react';
import '../styles/intro.css';

const Intro = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Show for 0.8s, then fade out
    const timeout = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 800); // match fade duration
    }, 800);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className={`intro-overlay${show ? '' : ' intro-hide'}`}>
      <span className="intro-text">Hello</span>
    </div>
  );
};

export default Intro;