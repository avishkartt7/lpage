import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-label">WHO WE ARE</div>
            
            <h2>We regularly provide last-minute Traffic Management Plans to government and private clients.</h2>
            
            <p>
              The Traffic Management Plans Company is a specialist in providing Traffic Management Plans to reduce risk to the public, our clients and other stakeholders.We are committed to continuously improve our client service and business practices. We will further enhance our existing capability in the provision of Traffic Management Plans.Our management team prides itself on professionalism, knowledge and experience in all areas of Traffic Management Plans. Our job safety analysis, worksite hazard risk assessment and VicRoads pre-qualification processes are second to none.  
            </p>
            
            <p>
              we help clients meet all 
              regulatory requirements while keeping road users, pedestrians, and 
              workers safe.
            </p>

            <div className="checkmarks">
              <div className="check-item">
                <span className="checkmark">✓</span>
                <span>End-To-End Support</span>
              </div>
              <div className="check-item">
                <span className="checkmark">✓</span>
                <span>Certified Safety Systems</span>
              </div>
              <div className="check-item">
                <span className="checkmark">✓</span>
                <span>Tailored To Each Project</span>
              </div>
              <div className="check-item">
                <span className="checkmark">✓</span>
                <span>VicRoads-Accredited</span>
              </div>
            </div>

            <div className="about-buttons">
              <button className="btn-primary">GET A FREE QUOTE</button>
              <button className="btn-secondary">0451661660</button>
            </div>
          </div>
          
          <div className="about-image">
            <img src="/images/about-main.jpg" alt="Traffic Management Team" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number orange">20+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number orange">300</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number orange">2K+</div>
              <div className="stat-label">Successful Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="value-section">
        <div className="value-bg">
          <img src="/images/hero-bg.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="value-content">
            <div className="value-text">
              <div className="section-label white">OUR VALUE</div>
              <h2>Foundations of Trust, Standards That Keep Roads Safer</h2>
              <p>At SafeRoads Australia, we deliver more than just traffic control — we provide trusted, fully compliant solutions backed by experience and accreditation.</p>
            </div>
            
            <div className="value-cards">
              <div className="value-card orange-card">
                <div className="card-icon">
                  <img src="/images/icon-clipboard-white.png" alt="Clipboard Icon" className="icon-img" />
                </div>
                <h3>VicRoads Accredited & Fully Compliant</h3>
                <p>SafeRoads Australia is accredited by VicRoads and complies with AS1742.3-2002, the Victorian Road Management Act 2004, and all relevant Codes of Practice.</p>
                <button className="btn-primary">GET A FREE QUOTE</button>
              </div>
              
              <div className="value-card blue-card">
                <div className="card-icon">
                  <img src="/images/icon-tools-white.png" alt="Tools Icon" className="icon-img" />
                </div>
                <h3>Complete Traffic Management Solutions</h3>
                <p>From Traffic Control and TMPs to Labour Hire and Risk Assessments, SafeRoads delivers end-to-end services for every stage of on-road and roadside works.</p>
                <button className="btn-secondary">📞 0451661660</button>
              </div>
              
              <div className="value-card blue-card">
                <div className="card-icon">
                  <img src="/images/icon-building-white.png" alt="Building Icon" className="icon-img" />
                </div>
                <h3>Trusted by Government & Major Industries</h3>
                <p>Serving state and local governments, utilities, civil contractors, and event managers across Victoria with a strong reputation for professionalism and compliance.</p>
                <button className="btn-primary">GET A FREE QUOTE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;