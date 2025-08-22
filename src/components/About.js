import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-label">WHO WE ARE</div>
            
            <h2>We regularly provide last-minute Traffic Management Plans to government and private clients.</h2>
            
            <div className="about-description">
              <p>
                The Traffic Management Plans Company is a specialist in providing Traffic Management Plans to reduce risk to the public, our clients and other stakeholders. We are committed to continuously improve our client service and business practices.
              </p>
              
              <p>
                We will further enhance our existing capability in the provision of Traffic Management Plans. Our management team prides itself on professionalism, knowledge and experience in all areas of Traffic Management Plans.
              </p>
              
              <p>
                Our job safety analysis, worksite hazard risk assessment and VicRoads pre-qualification processes are second to none. We help clients meet all regulatory requirements while keeping road users, pedestrians, and workers safe.
              </p>
            </div>

            <div className="checkmarks">
              <div className="check-item">
                <div className="checkmark-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="check-text">End-To-End Support</span>
              </div>
              <div className="check-item">
                <div className="checkmark-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="check-text">Certified Safety Systems</span>
              </div>
              <div className="check-item">
                <div className="checkmark-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="check-text">Tailored To Each Project</span>
              </div>
              <div className="check-item">
                <div className="checkmark-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="check-text">VicRoads-Accredited</span>
              </div>
            </div>

            <div className="about-buttons">
              <button className="btn-primary">
                <span>GET A FREE QUOTE</span>
              </button>
              <button className="btn-secondary phone-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>0451 661 660</span>
              </button>
            </div>
          </div>
          
          <div className="about-image">
            <img src="/images/about-main.jpg" alt="Traffic Management Team" />
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
                <button className="btn-secondary phone-button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>0451 661 660</span>
                </button>
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