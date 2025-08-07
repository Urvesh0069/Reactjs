import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const MainContent = () => {
  return (
    <main className="flex-1 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Hero Section */}
          <div className="lg:col-span-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Content */}
            <div className="relative z-10 max-w-md">
              {/* Tag */}
              <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Smartwatch
              </div>

              {/* Heading */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Delux Brand
                <br />
                Watch
              </h1>

              {/* CTA Button */}
              <button className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Watch Images ......................*/}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8">
              <div className="relative">
                {/* First Watch */}
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-12 shadow-2xl">
                  <div className="absolute inset-4 bg-black rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">10:09</div>
                      <div className="text-xs opacity-75 mt-1">@Trade</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-blue-500 rounded-full shadow-lg"></div>
                </div>

                {/* Second Watch */}
                <div className="absolute -left-24 top-12 w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl transform -rotate-6 shadow-xl">
                  <div className="absolute inset-3 bg-black rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-xl font-bold">10:09</div>
                      <div className="text-xs opacity-75 mt-1">@Trade</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-blue-600 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-14 flex space-x-2 mt-6">
              <div className="w-3 h-3 bg-pink-500 rounded-full shadow-sm"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full shadow-sm hover:bg-pink-500 cursor-pointer transition-colors duration-200"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full shadow-sm hover:bg-pink-500 cursor-pointer transition-colors duration-200"></div>
            </div>
          </div>

          {/* Product Card */}
          <div className="lg:col-span-1">
            <ProductCard
              image="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400"
              title="Yantiti Leather Bags"
              price="$29.99"
            />
          </div>
        </div>

      </div>
    </main>
  );
};

export default MainContent;