import React, { useState } from 'react';
import { Phone, Mail, Menu, X, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <span className="top-bar-item">
                <div className="orange-circle">
                  <MapPin size={12} />
                </div>
                SERVING MELBOURNE WIDE
              </span>
            </div>
            <div className="top-bar-center">
              <div className="saferoads-logo">
                <img src="/images/saferoads-logo.png" alt="SafeRoads Australia Logo" className="logo-header" />
              </div>
            </div>
            <div className="top-bar-right">
              <span className="top-bar-item">
                <div className="orange-circle">
                  <Clock size={12} />
                </div>
                OPEN 7 DAYS | 24 HOURS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/images/logo.png" alt="SafeRoads Australia" />
            </div>
            
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;