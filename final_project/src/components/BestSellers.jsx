import React, { useRef } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

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
    title: "Casual Sneakers",
    price: "$59.99",
    oldPrice: "$89.99",
    rating: 4,
    reviews: 32,
    img: "https://i.ibb.co/4T3Qk0X/shoes.png",
  },
  {
    id: 3,
    title: "Street Cap",
    price: "$19.99",
    oldPrice: "$29.99",
    rating: 4,
    reviews: 48,
    img: "https://i.ibb.co/QXGcRjH/cap.png",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: "$129.99",
    oldPrice: "$199.99",
    rating: 5,
    reviews: 120,
    img: "https://i.ibb.co/v4xYNwK/watch.png",
  },
];

const BestSellers = () => {
  const splideRef = useRef(null);

  // Custom arrow handlers
  const prevSlide = () => {
    if (splideRef.current) splideRef.current.go("<");
  };
  const nextSlide = () => {
    if (splideRef.current) splideRef.current.go(">");
  };

  return (
    <div className="-mt-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        {/* Left Side - Header */}
        <div className="flex flex-col gap-2 mb-6 ms-0">
          <p className="text-[#ff497c] mb-1 font-medium flex items-center">
            <FontAwesomeIcon
              icon={faShoppingBasket}
              aria-hidden="true"
              className="p-1 bg-[#ff497c] rounded-full text-white me-2"
            />
            Best Sellers
          </p>
          <h2 className="text-4xl font-bold">Best Sellers</h2>
        </div>

        {/* Right Side - Navigation Arrows */}
        <div className="flex gap-3 mr-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 shadow transition"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 shadow transition"
          >
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Splide Carousel */}
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          gap: "1.5rem",
          autoplay: false,
          pauseOnHover: true,
          arrows: false,
          pagination: false,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
      >
        {products.map((item) => (
          <SplideSlide key={item.id}>
            <div className="mb-60 relative bg-gray-100 shadow-md w-72 px-6 h-50 rounded-lg">
              {/* Add to Cart Button */}
              <button className="absolute -top-4 right-4 border-2 border-white bg-gray-100 rounded-full p-3 hover:bg-blue-600 hover:text-white transition hover:border-blue-600 hover:shadow-lg">
                <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-white" />
              </button>

              {/* Product Info */}
              <div className="text-left mb-4 mt-6">
                <h3 className="text-lg font-medium text-gray-900 pt-6">
                  {item.title}
                </h3>

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
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default BestSellers;
