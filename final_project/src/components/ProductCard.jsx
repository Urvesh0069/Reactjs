import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white h-full rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100">
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-gray-800 font-medium mb-2 group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-2xl font-bold text-gray-900">{price}</p>
    </div>
  );
};

export default ProductCard;