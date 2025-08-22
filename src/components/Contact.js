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
              
              <div className="contact-phone-card">
                <div className="phone-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="phone-content">
                  <span className="phone-label">Call Now for Free Quote</span>
                  <a href="tel:0459449651" className="phone-number">0459 449 651</a>
                </div>
              </div>

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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635959716777!5v1635959716777"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Melbourne Map - Service Area"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;