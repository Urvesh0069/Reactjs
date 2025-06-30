import { useState } from "react";
import products from "./products";
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {products.map((product, index) => (
        <SingleCard key={index} product={product} />
      ))}
    </div>
  );
};

const SingleCard = ({ product }) => {
  const [rating, setRating] = useState(0);    
  const [locked, setLocked] = useState(false); 
  const handleStarClick = (starNumber) => {
    if (!locked) {
      setRating(starNumber);
      setLocked(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 w-80 h-[400px] flex flex-col items-center">
      <img
        src={product.img}
        alt={product.heading}
        className="w-full h-[160px] object-contain mb-4"
      />

      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{product.heading}</h2>
        <p className="text-sm text-gray-600">{product.details}</p>
        <p className="text-2xl font-extrabold text-teal-700">₹ {product.price}</p>
      </div>

      <div className="flex gap-1 mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`text-2xl cursor-pointer transition ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            } ${locked ? "cursor-default" : "hover:scale-110"}`}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
