import React, { useState } from 'react';
import './Contact.css';
import githubLogo from '../assets/github_new.png';
import linkedinLogo from '../assets/linkedin_new.png';
import instagramLogo from '../assets/instagram.png';

const Contact = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = async () => {
    const email = 'sheth.mitul.71@gmail.com';
    
    try {
      // Try to copy to clipboard
      await navigator.clipboard.writeText(email);
      setShowCopied(true);
      
      // Hide the notification after 2 seconds
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      // Fallback: try mailto
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="contact-root" id="contact">
      <div className="contact-content">
        <h1 className="contact-title">&gt;_connect<span className="dot-accent">.</span></h1>
        
        <div className="contact-info">
          <div className="contact-section">
            <p className="contact-description">
              Always open to discoveries and collaborations!
            </p>
            
            <div className="contact-email" onClick={handleEmailClick}>
              <span className="email-icon">✉</span>
              <span className="email-text">sheth.mitul.71@gmail.com</span>
              {showCopied && <span className="copied-notification">Copied!</span>}
            </div>
          </div>

          <div className="contact-section">
            <div className="social-links">
              <a 
                href="https://github.com/aristocrat71" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <img src={githubLogo} alt="GitHub" className="social-icon" />
                <span className="social-text">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/mitul-sheth71/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                <span className="social-text">LinkedIn</span>
              </a>
              
              <a 
                href="https://www.instagram.com/m1tul5/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <img src={instagramLogo} alt="Instagram" className="social-icon" />
                <span className="social-text">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 