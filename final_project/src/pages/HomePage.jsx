import React from "react";
import MainContent from "../components/MainContent";
import ServiceFeatures from "../components/services";
import ProductCarousel from "../components/ProductCarousel";
import BestSellers from "../components/BestSellers";
import HeroBanner from "../components/HeroBanner";
import Testimonials from "../components/Testimonials";
import NewArrivals from "../components/NewArrivals";
import Newsletter from "../components/Newsletter";
import Features from "../components/Features";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen px-4 px-26">
        <MainContent />
        <ServiceFeatures />
      </div>
      <div className="flex justify-end">
        <div className="w-[93.1%]">
          <ProductCarousel />
        </div>
      </div>
      <div className="min-h-screen px-26">
        <div className="bg-white">
          <BestSellers />
          <HeroBanner />
          <BestSellers />
          <BestSellers />
        </div>
      </div>
      <div>
        <Testimonials />
      </div>
      <div className="min-h-screen bg-white px-26">
        <div className="bg-white">
          <NewArrivals/>
          <Newsletter />
          <Features />
        </div>
      </div>
    </>
  );
};

export default HomePage;
