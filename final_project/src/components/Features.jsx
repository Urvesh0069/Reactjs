import React from "react";
import { Truck, BadgeCheck, RotateCcw, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-10 h-10 text-blue-500" />,
      title: "Fast & Secure Delivery",
      desc: "Tell about your service.",
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-blue-500" />,
      title: "Money Back Guarantee",
      desc: "Within 10 days.",
    },
    {
      icon: <RotateCcw className="w-10 h-10 text-blue-500" />,
      title: "24 Hour Return Policy",
      desc: "No question ask.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-blue-500" />,
      title: "Pro Quality Support",
      desc: "24/7 Live support.",
    },
  ];

  return (
    <section className="w-full border-b border-gray-200 py-10">
      <div className="max-w-6xl ml-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {features.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            {item.icon}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
