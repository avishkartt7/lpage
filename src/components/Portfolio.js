import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "portfolio-1.jpg",
      icon: "icon-traffic-cone.png"
    },
    {
      id: 2,
      image: "portfolio-2.jpg", 
      icon: "icon-traffic-cone.png"
    },
    {
      id: 3,
      image: "portfolio-3.jpg",
      icon: "icon-traffic-cone.png"
    },
    {
      id: 4,
      image: "portfolio-4.jpg",
      icon: "icon-traffic-cone.png"
    },
    {
      id: 5,
      image: "portfolio-5.jpg",
      icon: "icon-traffic-cone.png"
    },
    {
      id: 6,
      image: "portfolio-6.jpg",
      icon: "icon-traffic-cone.png"
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div className="section-label orange">FEATURED PROJECT</div>
          <h2>Explore Our Construction Portfolio</h2>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={`/images/${item.image}`} alt={`Portfolio Project ${item.id}`} />
                <div className="portfolio-icon">
                  <div className="orange-circle-portfolio">
                    <img src={`/images/${item.icon}`} alt="Traffic Cone Icon" className="icon-img" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;