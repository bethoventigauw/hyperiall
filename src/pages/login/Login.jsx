import React from "react";
import "./login.css";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="wrapper">
        <div className="logo">
          <img src="/assets/hyperial_logo.png" alt="hyperial_logo" className="logo" />
        </div>
        
        <div className="container">
          <div className="login-form">
            <div className="login-form-logo">
              <img src="/assets/hyperial_logo_only.png" alt="hyperial_logo" className="login-form-logo" />
            </div>
            <h2>Log in to your account</h2>
            <h3>Welcome back! Please enter your details</h3>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
            </form>
            <div className="login-container">
              <Link to="/home">
                <button type="submit">Login</button>
              </Link>
              <Link to="/LandingPage">
                <button type="landing test">LandingPage</button>
              </Link>
            </div>
            <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
