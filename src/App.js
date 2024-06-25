import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bgImage from './bg.jpg';
import HeroSection from './HeroSection';
import Countdown from './Countdown';
import Footer from './Footer';

const App = () => {
  const launchDate = new Date().getTime() + 25 * 24 * 60 * 60 * 1000; // 25 days from now

  return (
    <div className="container-fluid text-center d-flex flex-column justify-content-between align-items-center min-vh-100" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="overlay"></div>
      <HeroSection />
      <Countdown launchDate={launchDate} className="text-white no-transparency" />
      <Footer />
    </div>
  );
};

export default App;
