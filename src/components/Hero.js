import React from 'react';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/61451661660', '_blank');
  };

  const handleCall = () => {
    window.open('tel:0451661660', '_self');
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/images/hero-bg.jpg" alt="Traffic Control Background" className="hero-bg-img" />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="welcome-text"></div>
            <h1>
              <span className="get-quote"></span>
              <br />
              Safe & Compliant Solutions
              <br />
              For Every Project
            </h1>
            
            <p>
              We deliver comprehensive traffic management services across Melbourne, ensuring safety and compliance 
              for construction sites, events, and roadwork projects with our certified team and proven expertise.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleWhatsApp}>GET FREE CONSULTATION</button>
              <button className="btn-secondary" onClick={handleCall}>📞 Call Expert Team</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section with 2 Feature Cards */}
      <div className="hero-bottom">
        <div className="container">
          <div className="hero-bottom-content">
            <div className="feature-cards">
              {/* CARD 1 - Traffic Solutions with Background Image */}
              <div className="feature-card card-with-image">
                <div className="card-image-section">
                  <img 
                    src="/images/construction%20traffic.png" 
                    alt="Professional Traffic Management" 
                    className="card-main-image" 
                    onError={(e) => {
                      console.log('Image failed to load, trying alternative path');
                      e.target.src = "/images/construction-traffic.png";
                    }}
                  />
                </div>
                <div className="card-content-with-image">
                  <h4>Complete Traffic Management</h4>
                  <p>Professional traffic control solutions for all project types and site conditions across Victoria.</p>
                </div>
              </div>
              
              {/* CARD 2 - Expert Team with Getty Image */}
              <div className="feature-card card-with-image">
                <div className="card-image-section">
                  <img 
                    src="/images/gettyimages-2202496350-612x612.jpg" 
                    alt="Professional Expert Team" 
                    className="card-main-image" 
                    onError={(e) => {
                      console.log('Team image failed to load');
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="card-content-with-image">
                  <h4>Certified Expert Team</h4>
                  <p>VicRoads accredited professionals with extensive experience in traffic management and safety protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;