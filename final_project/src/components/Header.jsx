import React from "react";
import { Menu, Heart, ShoppingCart, User, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center">
        {/* Categories Button - Left Side */}
        <div className="w-[260px] bg-blue-600 h-[60px] flex items-center px-6">
          <Menu className="h-5 w-5 text-white mr-3" />
          <span className="text-white font-semibold text-lg">Categories</span>
        </div>

        {/* Middle + Right Section */}
        <div className="flex flex-1 items-center justify-between px-8 h-[60px]">
          {/* Navigation */}
          <nav className="flex space-x-8 font-medium text-gray-700">
            <a href="#" className="hover:text-pink-500">
              Home
            </a>
            <a href="#" className="hover:text-pink-500">
              Shop
            </a>
            <a href="#" className="hover:text-pink-500 flex items-center">
              Pages <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            <a href="#" className="hover:text-pink-500">
              About
            </a>
            <a href="#" className="hover:text-pink-500">
              Blog
            </a>
            <a href="#" className="hover:text-pink-500">
              Contact
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-gray-700">
            <Heart className="w-6 h-6 cursor-pointer hover:text-pink-500" />
            <div className="relative">
              <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-pink-500" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
            <User className="w-6 h-6 cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
