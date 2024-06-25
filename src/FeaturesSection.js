import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="features-section d-flex flex-wrap justify-content-center">
      <div className="feature-card p-3 m-2">
        <h3 className="feature-title">Fresh Meals</h3>
        <p>Delicious meals delivered directly to your train seat.</p>
      </div>
      <div className="feature-card p-3 m-2">
        <h3 className="feature-title">Wide Variety</h3>
        <p>Choose from a wide range of cuisines and dishes.</p>
      </div>
      <div className="feature-card p-3 m-2">
        <h3 className="feature-title">Timely Delivery</h3>
        <p>Ensuring your food arrives hot and on time.</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
