import React from 'react';
import logo from './logo.png';

const HeroSection = () => {
  return (
    <header className="my-5">
      <img src={logo} alt="RailFood Logo" className="logo mb-4" />
      <h1 className="display-4">RailFood</h1>
      <h2 className="lead">ریلفوڈ کے ساتھ ذائقے کا سفر</h2>
    </header>
  );
};

export default HeroSection;
