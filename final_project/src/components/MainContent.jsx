import { MapPin, ArrowRight, Heart, ShoppingCart, User } from "lucide-react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";

const MainContent = () => {

  return (
    <main className="flex h-[500px] bg-white ">
      <div className="flex-1 flex flex-row ">
          <Sidebar />
        {/* Main content */}
        <div className="flex-1">
          {/* Hero + Product */}
          <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid h-full grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Hero Section */}
              <div className="h-full lg:col-span-3 bg-gray-100 rounded-2xl p-10 relative overflow-hidden">
                {/* Tag */}
                <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MapPin className="h-4 w-4 mr-2" />
                  Smartwatch
                </div>

                {/* Heading */}
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Bloosom <br /> Smat Watch
                </h1>

                {/* CTA */}
                <button className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

                {/* Watch Images */}
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML773?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803969136"
                    alt="watch"
                    className="w-72 h-72 object-contain"
                  />
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-6 left-14 flex space-x-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-pink-500 cursor-pointer"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-pink-500 cursor-pointer"></div>
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
        </div>
      </div>
    </main>
  );
};

export default MainContent;
