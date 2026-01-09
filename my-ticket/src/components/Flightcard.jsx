import React from "react";

const AboutCompany = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Text Content */}
        <div className="about-text">
          <h2>About Our Company</h2>
          <p>
            <strong>Smart Aero Solutions</strong> is a technology-driven aviation
            company developed as part of an academic project. We focus on
            designing intelligent aeroplane management and smart flight
            reservation systems that improve airline efficiency and passenger
            experience.
          </p>

          <p>
            Our system integrates real-time flight data, secure reservation
            mechanisms, and user-friendly interfaces to ensure reliable and
            efficient air travel operations.
          </p>

          <h4>Our Vision</h4>
          <p>
            To revolutionize air travel by introducing smart, automated, and
            scalable aviation systems.
          </p>

          <h4>Our Mission</h4>
          <ul>
            <li>Provide a secure and intelligent reservation system</li>
            <li>Improve passenger experience through automation</li>
            <li>Support airlines with smart operational tools</li>
          </ul>
        </div>

        {/* Image */}
        <div className="about-image">
          <img src={companyImage} alt="Smart Aero Company" />
        </div>

      </div>
    </section>
  );
};

export default AboutCompany;
