import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="nav-section nav-left">
        <button className="nav-button menu-button">
          <i className="uil uil-bars"></i>
        </button>
        <a href="#" className="nav-logo">
          <img src="images/logo.png" alt="Logo" className="logo-image" />
          <h2 className="logo-text">CnTube</h2>
        </a>
      </div>
      <div className="links-container">
        <div className="link-section">
          <a href="#" className="link-item">
            <i className="uil uil-estate"></i> Home
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-video"></i> Shorts
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-tv-retro"></i> Subscriptions
          </a>
        </div>
        <div className="section-separator"></div>
        <div className="link-section">
          <h4 className="section-title">You</h4>
          <a href="#" className="link-item">
            <i className="uil uil-user-square"></i> Your channel
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-history"></i> History
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-clock"></i> Watch later
          </a>
        </div>
        <div className="section-separator"></div>
        <div className="link-section">
          <h4 className="section-title">Explore</h4>
          <a href="#" className="link-item">
            <i className="uil uil-fire"></i> Trending
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-music"></i> Music
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-basketball"></i> Gaming
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-trophy"></i> Sports
          </a>
        </div>
        <div className="section-separator"></div>
        <div className="link-section">
          <h4 className="section-title">More from YouTube</h4>
          <a href="#" className="link-item">
            <i className="uil uil-shield-plus"></i> YouTube Plus
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-headphones-alt"></i> YouTube Music
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-airplay"></i> YouTube Kids
          </a>
        </div>
        <div className="section-separator"></div>
        <div className="link-section">
          <a href="#" className="link-item">
            <i className="uil uil-setting"></i> Settings
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-file-medical-alt"></i> Report
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-question-circle"></i> Help
          </a>
          <a href="#" className="link-item">
            <i className="uil uil-exclamation-triangle"></i> Feedback
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;