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
            <div className="welcome-text">WELCOME TO TRAFFIC MANAGEMENT PLANS COMPANY</div>
            <h1>
              <span className="get-quote">GET A FREE QUOTE</span>
              <br />
              From Melbourne's Leading Traffic
              <br />
              Control & Management Specialists
            </h1>
            
            <p>
              Traffic Management Plans Company are industry leaders in Traffic Management Services offering clients premium quality Traffic 
              Management Solutions delivered by our trained and experienced team.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleWhatsApp}>GET A FREE QUOTE</button>
              <button className="btn-secondary" onClick={handleCall}>📞 0451 661 660</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section with Cards */}
      <div className="hero-bottom">
        <div className="container">
          <div className="hero-bottom-content">
            {/* Left Side - Blue Card */}
            <div className="accredited-card">
              <div className="card-icon">
                {/* No image - just clean orange circle */}
              </div>
              <div className="card-content">
                <h3>TRAFFIC MANAGEMENT PLANS COMPANY</h3>
                <h4>Fully Accredited VicRoads Traffic Management Experts</h4>
              </div>
            </div>

            {/* Right Side - Three Feature Cards */}
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-icon">
                  {/* No image - just clean orange circle */}
                </div>
                <h4>End-To-End Traffic Solutions</h4>
                <p>From planning to execution, we manage every stage of your traffic control project.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  {/* No image - just clean orange circle */}
                </div>
                <h4>Experienced, Qualified Team</h4>
                <p>Our team is fully trained, accredited, and backed by years of industry experience.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  {/* No image - just clean orange circle */}
                </div>
                <h4>Trusted by Government & Industry</h4>
                <p>We proudly support councils, utilities, contractors and event managers across Victoria.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;