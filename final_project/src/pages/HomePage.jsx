import React from "react";
import MainContent from "../components/MainContent";
import ServiceFeatures from "../components/services";
import ProductCarousel from "../components/ProductCarousel";

const HomePage = () => {
  return (
    <>
      <div>
        <MainContent />
        <ServiceFeatures />
      </div>
      <ProductCarousel />
    </>
  );
};

export default HomePage;
