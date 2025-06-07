import { useState, useEffect } from 'react';

const aboutTypewriter = (words, speed = 100) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!words[wordIndex]) return;

    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex, words, speed]);

  return text;
};

export default aboutTypewriter;
