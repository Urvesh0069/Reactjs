import React from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Modern Hoddie",
    price: "$29.99",
    oldPrice: "$49.99",
    rating: 5,
    reviews: 64,
    img: "https://i.ibb.co/txL2D3m/hoodie.png",
  },
  {
    id: 2,
    title: "Blue T-shirt",
    price: "$29.99",
    oldPrice: "$49.99",
    rating: 5,
    reviews: 14,
    img: "https://i.ibb.co/XtFpg2q/blue-tshirt.png",
  },
  {
    id: 3,
    title: "Men's Full Sleev T-shirt",
    price: "$29.99",
    oldPrice: "$49.99",
    rating: 5,
    reviews: 64,
    img: "https://i.ibb.co/FxDJcXq/full-tshirt.png",
  },
  {
    id: 4,
    title: "Men's Half Sleev T-shirt",
    price: "$29.99",
    oldPrice: "$49.99",
    rating: 5,
    reviews: 94,
    img: "https://i.ibb.co/F0rL5Rt/half-tshirt.png",
  },
];

const BestSellers = () => {
  return (
    <section className="py-16 px-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-pink-100 text-pink-600 font-medium px-3 py-1 rounded-full text-sm">
          This Month
        </span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-10">Best Sellers</h2>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-50 rounded-xl shadow-sm p-6 group hover:shadow-lg transition"
          >
            {/* Cart Button */}
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
              <ShoppingCart className="w-4 h-4" />
            </button>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-bold text-gray-900">
                {item.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                {item.oldPrice}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center text-yellow-500 text-sm mb-4">
              {"★".repeat(item.rating)}
              <span className="ml-2 text-gray-500">({item.reviews})</span>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img src={item.img} alt={item.title} className="h-48 object-contain" />
            </div>
          </div>
        ))}
      </div>

      {/* Slider Buttons */}
      <div className="flex justify-end mt-8 gap-3">
        <button className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default BestSellers;
