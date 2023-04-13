import React from "react";
import videoHomePage from '../../assets/video/homePage.webm';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
