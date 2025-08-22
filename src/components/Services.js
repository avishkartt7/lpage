import React from 'react';

const Services = () => {
  const mainServices = [
    {
      icon: "icon-traffic-management.png",
      title: "Traffic Management Services",
      description: "We deliver safe, professional traffic control solutions to protect workers, motorists, and pedestrians across all types of worksites.",
      image: "service-construction.jpg",
      buttonText: "GET A FREE QUOTE",
      buttonClass: "btn-primary"
    },
    {
      icon: "icon-clipboard-plan.png", 
      title: "Traffic Management Plans",
      description: "Our expert team prepares detailed, compliant Traffic Management Plans tailored to your site conditions and permit requirements.",
      image: "service-event.jpg",
      buttonText: "📞 0459 449 651",
      buttonClass: "btn-secondary"
    },
    {
      icon: "icon-building.png",
      title: "Construction Traffic Management Plans", 
      description: "We develop Construction TMPs to meet council and planning permit conditions for larger building and infrastructure projects.",
      image: "service-maintenance.jpg",
      buttonText: "GET A FREE QUOTE",
      buttonClass: "btn-primary"
    },
    {
      icon: "icon-warning.png",
      title: "Traffic Impact Assessments",
      description: "Our engineers assess the impact of your development on surrounding traffic, helping secure planning approvals with well-supported reports.",
      image: "service-flagging.jpg", 
      buttonText: "📞 0459 449 651",
      buttonClass: "btn-secondary"
    },
    {
      icon: "icon-road.png",
      title: "Swept Path Analysis",
      description: "We provide accurate swept path diagrams to demonstrate vehicle access and movement around tight or complex sites.",
      image: "portfolio-1.jpg",
      buttonText: "GET A FREE QUOTE", 
      buttonClass: "btn-primary"
    },
    {
      icon: "icon-team.png",
      title: "Labour Hire Services", 
      description: "Professional traffic control personnel available for hire to support your project requirements with trained and certified staff.",
      image: "portfolio-2.jpg",
      buttonText: "GET A FREE QUOTE",
      buttonClass: "btn-primary"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <h2>Services</h2>
        </div>

        {/* Service Category Buttons */}
        <div className="service-categories">
          <button className="service-category-btn active">Traffic Management Services</button>
          <button className="service-category-btn">Traffic Management Plans</button>
          <button className="service-category-btn">Construction Traffic Management Plans</button>
          <button className="service-category-btn">Traffic Impact Assessments</button>
          <button className="service-category-btn">Swept Path Analysis</button>
          <button className="service-category-btn">Labour Hire Services</button>
        </div>

        {/* Company Description */}
        <div className="company-description">
          <p>
            Traffic Management Plans Company are industry leaders in Traffic Management Services - offering clients premium quality Traffic Management Solutions delivered by our large, trained and experienced team. Traffic Management Plans Company maintain the safety of road workers, road users, pedestrians and crowds by providing appropriate traffic management services to a range of clients including state and local governments, utility companies, major construction companies and event managers.
          </p>
          
          <p>
            Our team of experienced professionals can adapt to the diverse requirements of individual clients and projects. Our management team prides itself on professionalism, knowledge and experience in all areas of traffic management. Our job safety analysis, hazard risk assessment and VicRoad pre-qualification processes are second to none.
          </p>
          
          <p>Traffic Management Plans Company provides Traffic Management Plans to a range of industries including:</p>
          
          <ul className="service-industries">
            <li>• Roadside Works</li>
            <li>• Asphalting & Road Profiling</li>
            <li>• Line Marking</li>
            <li>• Construction Works</li>
            <li>• Council Works</li>
            <li>• Events</li>
            <li>• Festivals</li>
            <li>• Cabling</li>
            <li>• General Maintenance Works</li>
            <li>• Landscaping / Tree Services</li>
            <li>• Emergency Utility Works</li>
          </ul>
          
          <p>
            Traffic Management Planning is a detailed undertaking as all potential risks need to be accounted for such as side roads, direction of traffic flow, road speeds and car parking allocations. The Team at Traffic Management Plans Company will ensure that plans are created that take into account all situations.
          </p>
        </div>

        {/* Original Services Grid - keeping for visual consistency */}
        <div className="services-grid">
          {mainServices.map((service, index) => (
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
                
                <button className={service.buttonClass}>
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