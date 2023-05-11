import React from "react";
import videoHomePage from "../../assets/video/homePage.webm";
import { useSelector } from "react-redux";

const HomePage = () => {
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>

      <div className="homepage-content">
        <h1 className="title">There's a better way to ask</h1>
        <p className="description">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </p>
        <button>Get started - it's free</button>
        <div className="instruct">
          <span>✓ No credit card required</span>
          <span>✓ No time limit on Free plan</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
