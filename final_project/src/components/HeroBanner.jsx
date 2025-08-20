import React from "react";

const HeroBanner = () => {
  return (
    <section className="h-[80vh] bg-gray-50 rounded-2xl shadow-md mx-auto my-10 w-[90%] flex items-center justify-between p-10">
      {/* Left Side Content */}
      <div className="flex-1">
        <p className="text-pink-600 font-medium flex items-center gap-2">
          <span className="text-lg">🛒</span> Don’t Miss!!
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Let's Shopping <br /> Today
        </h1>

        {/* Countdown Timer */}
        <div className="flex gap-5 mt-6">
          {["Day", "Hrs", "Min", "Sec"].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-white shadow rounded-full w-20 h-20"
            >
              <span className="text-2xl font-bold">00</span>
              <span className="text-gray-500 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
          Check it Out!
        </button>
      </div>

      {/* Right Side Product Image */}
      <div className="flex-1 flex justify-end">
        <img
          src="https://m.media-amazon.com/images/I/81Q5FLVF0vL.jpg" // put your image path in public folder
          alt="Smart Watch"
          className="w-[400px] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
