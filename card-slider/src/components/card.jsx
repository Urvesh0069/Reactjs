import { useState } from "react";
import { Products } from "./product";

const Card = () => {
  const [index, setIndex] = useState(0);
  const Length = Products.length;

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? Length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === Length - 1 ? 0 : prevIndex + 1));
  };

  const Product = Products[index];

  return (
    <div className="flex justify-center p-20 mt-30 bg-zinc-600">
      <button
        onClick={handlePrev}
        className="px-4 py-2 h-10 my-auto m-10 bg-indigo-600 border-2 text-white rounded-lg hover:bg-indigo-700"
      >
        Prev
      </button>

      <div className="w-72  bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 ">
        <img
          src={Product.image}
          alt={Product.title}
          className="w-full h-44 object-cover p-4"
        />
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">{Product.title.slice(0, 16)}</h2>
          <p className="text-sm h-20 text-left text-gray-600">
            {Product.description.slice(0, 100) + "..."}
          </p>
          <p className="text-lg font-bold text-blue-600">${Product.price}/-</p>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="px-4 py-2 h-10 my-auto m-10 bg-indigo-600 border-2 text-white rounded-lg hover:bg-indigo-700"
      >
        Next
      </button>
    </div>
  );
};

export default Card;
