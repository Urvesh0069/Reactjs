import React from "react";
import { Heart, ShoppingCart, Eye, ArrowLeft, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Full A-Line Dress",
    oldPrice: 50,
    newPrice: 25,
    discount: "50% OFF",
    image: "/images/ring.png",
  },
  {
    id: 2,
    title: "Leather Hand Bag",
    oldPrice: 60,
    newPrice: 45,
    discount: "15% OFF",
    image: "/images/nike.png",
  },
  {
    id: 3,
    title: "Guys Bomber Jacket",
    oldPrice: 30,
    newPrice: 20,
    discount: "30% OFF",
    image: "/images/jacket.png",
  },
  {
    id: 4,
    title: "Full A-Line Dress",
    oldPrice: 50,
    newPrice: 25,
    discount: "50% OFF",
    image: "/images/girl.png",
  },
];

const NewArrivals = () => {
  return (
    <section className="py-10 h-[90vh]">
      <div className="text-center mb-8">
        <p className="text-purple-600 font-medium flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" /> This Week's
        </p>
        <h2 className="text-3xl font-bold">New Arrivals</h2>
      </div>

      <div className="flex items-center justify-center gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md p-4 rounded-2xl text-center relative"
          >
            {/* Discount Badge */}
            <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-md shadow">
              {item.discount}
            </span>

            {/* Product Image */}
            <div className="flex justify-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-40 object-contain rounded-full"
              />
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            </div>

            {/* Title */}
            <h3 className="font-medium">{item.title}</h3>

            {/* Price */}
            <p className="text-gray-400 line-through">${item.oldPrice}</p>
            <p className="text-lg font-bold">${item.newPrice}</p>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-4">
              <button className="p-2 rounded-md border shadow hover:bg-gray-100">
                <Heart className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600">
                Add to Cart
              </button>
              <button className="p-2 rounded-md border shadow hover:bg-gray-100">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-3 mt-6">
        <button className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 shadow">
          <ArrowLeft />
        </button>
        <button className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 shadow">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
