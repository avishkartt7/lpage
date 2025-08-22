import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "icon-traffic-management.png",
      title: "Traffic Management Services",
      description: "We deliver safe, professional traffic control solutions to protect workers, motorists, and pedestrians across all types of worksites.",
      image: "service-construction.jpg",
      buttonText: "GET A FREE QUOTE"
    },
    {
      icon: "icon-clipboard-plan.png",
      title: "Traffic Management Plans",
      description: "Our expert team prepares detailed, compliant Traffic Management Plans tailored to your site conditions and permit requirements.",
      image: "service-event.jpg",
      buttonText: "📞 0459 449 651",
      isPhone: true
    },
    {
      icon: "icon-building.png",
      title: "Construction Traffic Management Plans",
      description: "We develop Construction TMPs to meet council and planning permit conditions for larger building and infrastructure projects.",
      image: "service-maintenance.jpg",
      buttonText: "GET A FREE QUOTE"
    },
    {
      icon: "icon-warning.png",
      title: "Traffic Impact Assessments",
      description: "Our engineers assess the impact of your development on surrounding traffic, helping secure planning approvals with well-supported reports.",
      image: "service-flagging.jpg",
      buttonText: "📞 0459 449 651",
      isPhone: true
    },
    {
      icon: "icon-road.png",
      title: "Swept Path Analysis",
      description: "We provide accurate swept path diagrams to demonstrate vehicle access and movement around tight or complex sites.",
      image: "portfolio-1.jpg",
      buttonText: "GET A FREE QUOTE"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Complete Traffic Management Solutions</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={`/images/${service.image}`} alt={service.title} />
                <div className="service-icon">
                  <div className="orange-circle-large">
                    <img src={`/images/${service.icon}`} alt="Service Icon" className="icon-img" />
                  </div>
                </div>
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <button className={service.isPhone ? "btn-secondary" : "btn-primary"}>
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="why-choose-bg">
          <img src="/images/hero-bg.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <div className="section-label orange">WHY CHOOSE US</div>
              <h2>We Go Beyond Standard Traffic Management</h2>
              <p>Our commitment to compliance, safety, and reliability is backed by industry certifications, skilled professionals, and a deep understanding of permit and planning requirements. These key advantages set us apart and give our clients the confidence to focus on their projects while we take care of the rest.</p>
              
              <div className="why-choose-buttons">
                <button className="btn-primary">GET A FREE QUOTE</button>
                <button className="btn-secondary">📞 0459 449 651</button>
              </div>
            </div>
            
            <div className="why-choose-cards">
              <div className="why-card orange-card">
                <div className="card-icon">
                  <img src="/images/icon-permit.png" alt="Permit Icon" className="icon-img" />
                </div>
                <h3>Permit-Ready Plans</h3>
                <p>We handle CTMPs, TIAs, and assessments for fast approvals.</p>
              </div>
              
              <div className="why-card blue-card">
                <div className="card-icon">
                  <img src="/images/icon-shield.png" alt="Shield Icon" className="icon-img" />
                </div>
                <h3>Certified Safety Systems</h3>
                <p>We operate under nationally certified safety and quality systems.</p>
              </div>
              
              <div className="why-card blue-card">
                <div className="card-icon">
                  <img src="/images/icon-team.png" alt="Team Icon" className="icon-img" />
                </div>
                <h3>Experienced Team</h3>
                <p>Our people are the backbone of our service excellence.</p>
              </div>
              
              <div className="why-card blue-card">
                <div className="card-icon">
                  <img src="/images/icon-industry.png" alt="Industry Icon" className="icon-img" />
                </div>
                <h3>Diverse Industry Coverage</h3>
                <p>We support projects in construction, events, utilities, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;