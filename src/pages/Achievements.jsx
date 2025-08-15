import React from "react";
import "./Achievements.css"; // separate CSS file

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-container">
        <h2 className="section-title">Achievements</h2>

        <div className="achievements-grid">
          <div className="achievement-card">``
            <h3>Bagdes <i className="fa-regular fa-star"></i></h3>
            <p>Check my badges on Credly</p>
            <a
              href="https://www.credly.com/users/23dit072-maulya-soni"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              View Credly Profile
              
            </a>
          </div>
          <div className="achievement-card">
            <h3>Certifications <i className="fa-solid fa-award"></i></h3>
            <p>Check my certifications on Coursera</p>
            <a
              href="https://www.coursera.org/account-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              View Coursera Profile
            </a>
          </div>
          {/* Add more achievement cards if needed */}
          <div className="achievement-card">
            <h3>Coming Soon</h3>
            <p>More achievements will be updated here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
