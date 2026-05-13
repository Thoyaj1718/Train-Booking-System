import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-card">
        <img src="/rail-Copy.jpg" alt="Railways Logo" className="landing-logo" />
        <h1>Welcome to Railways</h1>
        <p>Your journey starts here.</p>

        <div className="landing-actions">
          <Link to="/login" className="landing-btn">
            Login
          </Link>
          <Link to="/signup" className="landing-btn secondary">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;