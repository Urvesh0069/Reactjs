import React from "react";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
          <p className="text-sm text-gray-600">
            685 Market Street, <br />
            Las Vegas, LA 95820, <br />
            United States.
          </p>
          <p className="flex items-center gap-2 mt-3 text-sm text-gray-600">
            <Mail className="w-4 h-4" /> example@domain.com
          </p>
          <p className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <Phone className="w-4 h-4" /> (+01) 850-315-5862
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Account</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Download App</h3>
          <p className="text-sm text-gray-600 mb-3">
            Save $3 With App & New User only
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/QR_code_example.svg"
              alt="QR"
              className="w-16 h-16"
            />
            <div className="flex flex-col gap-2">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2025. All rights reserved by Axilthemes.</p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <span>Accept For</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/PayPal_logo_2014.svg"
            alt="PayPal"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="MasterCard"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-5"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
