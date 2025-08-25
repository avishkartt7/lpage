import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="Traffic Management Plans Company" />
            </div>
            <p>Traffic Management Plans Company is a specialist in providing Traffic Management Plans to reduce risk to the public, our clients and other stakeholders. We maintain the safety of road workers, road users, pedestrians and crowds across Melbourne.</p>
          </div>
          
          <div className="footer-center">
            <div className="footer-section">
              <h3>QUICK ACCESS</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="footer-section">
              <h3>CONTACT US</h3>
              <div className="contact-info">
                <p><strong>Phone:</strong> 0451 661 660</p>
                <p><strong>Email:</strong> info@thetmpcompany.com.au</p>
                <p><strong>Service Area:</strong> Victoria, New South Wales</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© Copyright <strong>Traffic Management Plans Company</strong>. All Rights Reserved</p>
            <div className="footer-scroll-top">
              <button className="scroll-top-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;