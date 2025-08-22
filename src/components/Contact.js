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
    const message = `Hello, I would like to get a quote for traffic management services.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/61451661660?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/61451661660', '_blank');
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
              <span className="contact-nav-divider">•</span>
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

              <div className="contact-whatsapp-card" onClick={handleWhatsApp}>
                <div className="whatsapp-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108" fill="currentColor"/>
                  </svg>
                </div>
                <div className="whatsapp-content">
                  <span className="whatsapp-label">WhatsApp for Quick Quote</span>
                  <span className="whatsapp-number">0451 661 660</span>
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

                <button type="submit" className="btn-submit">SEND VIA WHATSAPP</button>
              </form>
            </div>

            {/* Right Side - Info & Map */}
            <div className="contact-info-section">
              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon orange-circle">
                    <img src="/images/icon-location.png" alt="Location Icon" className="icon-img" />
                  </div>
                  <h4>Service Area</h4>
                  <p>Melbourne Wide<br />Victoria, Australia</p>
                </div>
                
                <div className="info-card">
                  <div className="info-icon orange-circle">
                    <img src="/images/icon-clock.png" alt="Clock Icon" className="icon-img" />
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