import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <section className="contact" id="contact">
      {/* Contact Header */}
      <div className="contact-header">
        <div className="contact-header-bg">
          <img src="/images/hero-bg.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="contact-header-content">
            <div className="saferoads-logo-contact">
              <div className="diamond-logo">
                <span>SAFER ROADS</span>
                <small>AUSTRALIA</small>
              </div>
            </div>
            <h2>Contact Us</h2>
            <p>We'll guide you through compliance, planning, and permits—start your project with confidence.</p>
            
            <div className="contact-nav">
              <span className="contact-nav-item active">CONTACT US</span>
              <span className="contact-nav-divider"></span>
              <span className="contact-nav-item">GET A FREE QUOTE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Left Side - Form */}
            <div className="contact-form-section">
              <div className="section-label orange">GET IN TOUCH</div>
              <h3>Get A Free Quote</h3>
              <p>Speak with our expert team today for a fast, no-obligation quote tailored to your traffic management needs.</p>
              
              <button className="btn-primary contact-phone">📞 0459 449 651</button>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>NAME *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>PHONE *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>MESSAGE</label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">SUBMIT</button>
              </form>
            </div>

            {/* Right Side - Info & Map */}
            <div className="contact-info-section">
              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon orange-circle">
                    <img src="/images/icon-location.png" alt="Location Icon" className="icon-img" />
                  </div>
                  <h4>Servicing</h4>
                  <p>Melbourne Wide</p>
                </div>
                
                <div className="info-card">
                  <div className="info-icon orange-circle">
                    <img src="/images/icon-clock.png" alt="Clock Icon" className="icon-img" />
                  </div>
                  <h4>Operating Hours</h4>
                  <p>Monday To Friday<br />8am - 5pm</p>
                </div>
              </div>

              <div className="map-section">
                <img src="/images/melbourne-map.jpg" alt="Melbourne Map" className="map-placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="diamond-logo">
                <span>SAFER ROADS</span>
                <small>AUSTRALIA</small>
              </div>
            </div>
            <div className="footer-text">
              <p>Copyright © 2025. the traffic management plans company All rights reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;