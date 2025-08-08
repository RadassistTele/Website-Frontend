import React from 'react';
import './UnderConstruction.scss';

const UnderConstruction = () => {
  return (
    <section className="under-construction-section">
      <div className="construction-container">
        <div className="construction-visual">
          <div className="construction-circle">
            <div className="construction-icon">🏗️</div>
          </div>
          <div className="construction-gears">
            <div className="gear gear-1">⚙️</div>
            <div className="gear gear-2">⚙️</div>
            <div className="gear gear-3">⚙️</div>
          </div>
        </div>
        <div className="construction-content">
          <h2 className="construction-title">
            <span className="title-highlight">Website Under Construction</span>
          </h2>
          <p className="construction-subtitle">
            We&apos;re building something amazing for you! 🚀
          </p>
          <div className="construction-features">
            <div className="feature-item">
              <span className="feature-icon">🔧</span>
              <span>Enhanced AI Features</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎨</span>
              <span>Improved User Interface</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Better Performance</span>
            </div>
          </div>
          <div className="construction-cta">
            <button className="notify-btn">Notify Me When Ready</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;
