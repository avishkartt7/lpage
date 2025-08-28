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
    const subject = 'Traffic Management Services Quote Request';
    const body = `Hello,

I would like to get a quote for traffic management services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}

Thank you for your time.

Best regards,
${formData.name}`;
    
    const mailtoUrl = `mailto:info@thetmpcompany.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@thetmpcompany.com.au', '_blank');
  };

  const handleCall = () => {
    window.open('tel:0451661660', '_self');
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
              <span className="contact-nav-item"></span>
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
              
              <div className="contact-phone-card" onClick={handleCall}>
                <div className="phone-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="phone-content">
                  <span className="phone-label">Call Now for Free Quote</span>
                  <span className="phone-number">0451 661 660</span>
                </div>
              </div>

              <div className="contact-email-card" onClick={handleEmail}>
                <div className="email-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="email-content">
                  <span className="email-label">Email for Quote Details</span>
                  <span className="email-address">info@thetmpcompany.com.au</span>
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
                    placeholder="Tell us about your project requirements"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">SEND EMAIL</button>
              </form>
            </div>

            {/* Right Side - Info & Map */}
            <div className="contact-info-section">
              {/* UPDATED INFO CARDS WITH ICONS */}
              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon orange-circle">
                    {/* Map Pin Icon for Service Area */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4>Service Area</h4>
                  <p>Victoria<br />New South Wales</p>
                </div>
                
                <div className="info-card">
                  <div className="info-icon orange-circle">
                    {/* Clock Icon for Operating Hours */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="12,6 12,12 16,14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4>Operating Hours</h4>
                  <p>Open 7 Days<br />24 Hours Available</p>
                </div>
              </div>

              <div className="map-section-large">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635959716777!5v1635959716777"
                  width="100%"
                  height="500"
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