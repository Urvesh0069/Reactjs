import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Always visible for demo */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
