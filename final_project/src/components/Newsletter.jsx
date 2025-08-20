import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="w-full flex justify-center px-6">
      <div
        className=" bg-cover bg-center rounded-xl flex items-center justify-between px-10 py-12"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542744094-24638eff58bb')", // replace with your image
        }}
      >
        {/* Left Content */}
        <div className="max-w-md">
          <span className="flex items-center text-blue-600 font-medium mb-2">
            <Mail className="w-5 h-5 mr-2" />
            Newsletter
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get weekly update
          </h2>

          {/* Email Form */}
          <form className="flex items-center">
            <div className="flex items-center bg-white rounded-md shadow-sm px-3 py-2 w-full">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="ml-3 bg-gray-900 text-white font-medium px-6 py-2 rounded-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Image (Optional Overlay) */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" // replace with your image
            alt="Newsletter Visual"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
