import React, { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState('traffic-management');

  const handleWhatsApp = () => {
    window.open('https://wa.me/61451661660', '_blank');
  };

  const handleCall = () => {
    window.open('tel:0451661660', '_self');
  };

  const serviceContent = {
    'traffic-management': {
      title: 'Traffic Management Services',
      content: `Traffic Management Plans Company are industry leaders in Traffic Management Services - offering clients premium quality Traffic Management Solutions delivered by our large, trained and experienced team. Traffic Management Plans Company maintain the safety of road workers, road users, pedestrians and crowds by providing appropriate traffic management services to a range of clients including state and local governments, utility companies, major construction companies and event managers.

Our team of experienced professionals can adapt to the diverse requirements of individual clients and projects. Our management team prides itself on professionalism, knowledge and experience in all areas of traffic management. Our job safety analysis, hazard risk assessment and VicRoads pre-qualification processes are second to none.

Traffic Management Plans Company provides Traffic Management Plans to a range of industries including:
• Roadside Works • Asphalting & Road Profiling • Line Marking • Construction Works • Council Works • Events • Festivals • Cabling • General Maintenance Works • Landscaping / Tree Services • Emergency Utility Works

Traffic Management Planning is a detailed undertaking as all potential risks need to be accounted for such as side roads, direction of traffic flow, road speeds and car parking allocations. The Team at Traffic Management Plans Company will ensure that plans are created that take into account all situations.`
    },
    'traffic-plans': {
      title: 'Traffic Management Plans',
      content: `We provide same day traffic management plans on request

Traffic Management Plans are vital for organisations working near roads or pedestrian pathways and a requirement of state authorities and councils who require professionally developed Traffic Management Plans as part of a permit process.

We provide plans and submission to Councils and VicRoads as a part of our planning process and will work with our clients to ensure that all relevant plans and permits are issued prior to starting works.

Traffic Management Plans Company design Road Traffic Management Plans that not only satisfy the requirements of authorities, but also identify and assist in minimising on-site hazard risk assessment for your organisation and members of the public.

We have a qualified team that understand the requirements of relevant state and national traffic safety codes and uses traffic planning software to develop plans for temporary traffic control measures for any project.

If you require Traffic Management Plans on your project, contact us`
    },
    'construction-plans': {
      title: 'Construction Traffic Management Plans',
      content: `Construction Traffic Management Plans also known as CTMP are necessary to help manage larger construction sites. A CTMP is triggered often as a Planning Permit condition. If you have been issued with a Planning Permit Condition requiring to submit a Construction Traffic Management Plan (CTMP) and unsure where to start, you have come to the right place.

Our experienced team specializes in developing comprehensive Construction Traffic Management Plans that meet all regulatory requirements and ensure the safety of workers, road users, and pedestrians during construction activities.

We work closely with councils, planning authorities, and construction teams to create detailed CTMPs that address all aspects of traffic management during the construction phase, including access routes, temporary road closures, signage requirements, and safety protocols.`
    },
    'traffic-assessment': {
      title: 'Traffic Impact Assessments',
      content: `Triggers of Traffic Impact Assessments

Roads authorities (VicRoads, Local Councils or other State Authorities based on location) will request the applicant to submit a Traffic Impact Assessment (TIA) for most Planning Permit Applications when the development is expected to generate traffic volumes that are likely to alter the existing operations of the surrounding network. This is also the case if the development is expected to impact the surrounding parking facilities, access points, intersections or the movement of pedestrians/cyclists.

Contents of Traffic Impact Assessments

Traffic Management Plans engineer preparing a TIA looks at various factors including:
• Potential adverse impacts on local community and amenities
• Network wide operational impacts especially at nearby key intersections
• Road safety issues resulting from your development
• Alignment of your development with current and future government strategies and objectives
• Impacts on various modes of transport such as cyclists, pedestrians and public transport
• Compliance of your development with local planning schemes
• Future proofing for upcoming changes in the road network`
    },
    'swept-path': {
      title: 'Swept Path Analysis',
      content: `A swept path assessment or a swept path analysis is a diagram or a collection of diagrams indicating the path taken by a certain vehicle when undertaking various movements such as three point turns, U-turns or right turns. These diagrams mimic the path followed by the body and chassis of vehicles during these movements. The intention of swept path diagrams is to analyse and confirm that vehicles are able to stay clear of hazards such as fixed objects and road users when undertaking manoeuvres.

When submitting your Planning Application together with design drawings, it will be presumed by the Statutory Planners that all relevant clauses and conditions specified in these standards are met satisfactorily through your design.

Our team uses advanced software to create accurate swept path analyses that demonstrate vehicle movements and ensure compliance with planning requirements. These assessments are crucial for developments involving large vehicles, tight access points, or complex maneuvering requirements.`
    },
    'labour-hire': {
      title: 'Labour Hire Services',
      content: `To finish off works completely and efficiently, organizations or contractors should have the best and skilled labourers. Recruiting the labourers you need, by yourself, would be a hard and painful task. This is where a labour hire service becomes much important.

Traffic Management Plans Company specialises in providing expert Labour Hire Melbourne services. We have a long and great history of providing individuals, companies and businesses across Melbourne with the best and premium skilled labour hire solutions they can rely on. Our years of expertise in handling recruitment has helped us in finding the right solutions to meet our client's needs.

Our labour hire services include fully trained and certified traffic control personnel who are ready to support your project requirements. All our staff are qualified, experienced, and committed to maintaining the highest safety standards on every job site.`
    }
  };

  const serviceCards = [
    {
      id: 'traffic-management',
      icon: "icon-traffic-management.png",
      title: "Traffic Management Services",
      description: "We deliver safe, professional traffic control solutions to protect workers, motorists, and pedestrians across all types of worksites.",
      image: "construction-traffic.png" // FIXED: Changed from "construction traffic.png" to "construction-traffic.png"
    },
    {
      id: 'traffic-plans',
      icon: "icon-clipboard-plan.png",
      title: "Traffic Management Plans",
      description: "Our expert team prepares detailed, compliant Traffic Management Plans tailored to your site conditions and permit requirements.",
      image: "service-event.jpg"
    },
    {
      id: 'construction-plans',
      icon: "icon-building.png",
      title: "Construction Traffic Management Plans",
      description: "We develop Construction TMPs to meet council and planning permit conditions for larger building and infrastructure projects.",
      image: "service-maintenance.jpg"
    },
    {
      id: 'traffic-assessment',
      icon: "icon-warning.png",
      title: "Traffic Impact Assessments",
      description: "Our engineers assess the impact of your development on surrounding traffic, helping secure planning approvals with well-supported reports.",
      image: "service-flagging.jpg"
    },
    {
      id: 'swept-path',
      icon: "icon-road.png",
      title: "Swept Path Analysis",
      description: "We provide accurate swept path diagrams to demonstrate vehicle access and movement around tight or complex sites.",
      image: "portfolio-1.jpg"
    },
    {
      id: 'labour-hire',
      icon: "icon-team.png",
      title: "Labour Hire Services",
      description: "Professional traffic control personnel available for hire to support your project requirements with trained and certified staff.",
      image: "portfolio-2.jpg"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive traffic management solutions for all your project needs</p>
        </div>

        {/* Interactive Service Cards Grid */}
        <div className="services-grid">
          {serviceCards.map((service) => (
            <div 
              key={service.id} 
              className={`service-card clickable ${activeService === service.id ? 'active' : ''}`}
              onClick={() => setActiveService(service.id)}
            >
              <div className="service-image">
                <img 
                  src={`/images/${service.image}`} 
                  alt={service.title}
                  onError={(e) => {
                    console.log(`Image failed to load: /images/${service.image}`);
                    e.target.style.display = 'none';
                  }}
                />
                <div className="service-icon">
                  <div className="orange-circle-large">
                    <img 
                      src={`/images/${service.icon}`} 
                      alt="Service Icon" 
                      className="icon-img"
                      onError={(e) => {
                        console.log(`Icon failed to load: /images/${service.icon}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-actions">
                  <span className="click-indicator">Click to learn more</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Details Section */}
        <div className="service-details">
          <div className="service-detail-content">
            <h3>{serviceContent[activeService].title}</h3>
            <div className="service-description">
              {serviceContent[activeService].content.split('\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="service-detail-actions">
              <button className="btn-primary" onClick={handleWhatsApp}>
                GET A FREE QUOTE
              </button>
              <button className="btn-secondary" onClick={handleCall}>
                📞 0451 661 660
              </button>
            </div>
          </div>
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
                <button className="btn-primary" onClick={handleWhatsApp}>GET A FREE QUOTE</button>
                <button className="btn-secondary" onClick={handleCall}>📞 0451 661 660</button>
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