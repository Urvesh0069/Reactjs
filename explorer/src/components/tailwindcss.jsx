// src/components/tailwindcss.jsx
const Product = {
  id: 3,
  title: "Mens Cotton Jacket",
  price: 55.99,
  description:
    "Great outerwear for Spring/Autumn/Winter, suitable for work, hiking, camping, and more. A warm gift idea.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  rating: { rate: 4.7, count: 500 },
};

const Tailwindcss = () => {
  return (
    <div className="h-100 bg-amber-300 flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl mb-6 font-bold text-gray-800">Tailwind CSS Component</h1>

      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src={Product.image}
          alt={Product.title}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{Product.title}</h2>
          <p className="text-gray-600 text-sm mt-2">{Product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-indigo-600 font-bold text-lg">${Product.price}</span>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tailwindcss;
