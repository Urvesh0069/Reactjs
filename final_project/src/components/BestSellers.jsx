import React from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Modern Hoodie",
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
            className="relative h-65 mb-25 bg-gray-100 shadow-md p-6 w-72 text-center"
          >
            {/* Add to Cart Button (Top Right) */}
            <button className="absolute border-2 border-white top-[-25px] right-4 bg-gray-100 rounded-full p-3 hover:bg-blue-600 hover:text-white transition hover:border-blue-600 hover:shadow-lg">
              <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-white" />
            </button>

            {/* Product Info */}
            <div className="text-left mb-4">
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">
                  {item.price}
                </span>
                <span className="text-gray-400 line-through">
                  {item.oldPrice}
                </span>
              </div>

              {/* Ratings */}
              <div className="flex items-center text-yellow-400 mt-1">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                <span className="ml-2 text-gray-500 text-sm">
                  ({item.reviews})
                </span>
              </div>
            </div>

            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-52 h-52 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
