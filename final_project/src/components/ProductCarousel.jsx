import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ProductCarousel = () => {
  const swiperRef = useRef(null);

  const products = [
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-5.png",
      title: "Top Handle Handbag",
      oldPrice: 80,
      newPrice: 60,
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
      title: "Leather Bag For Men",
      oldPrice: 40,
      newPrice: 40,
      discount: "20% OFF",
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-7.png",
      title: "Long Sleeve Sweater",
      oldPrice: 30,
      newPrice: 24,
      discount: "15% OFF",
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-8.png",
      title: "Men's Winter Jacket",
      oldPrice: 50,
      newPrice: 40,
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-5.png",
      title: "Top Handle Handbag",
      oldPrice: 80,
      newPrice: 60,
      discount: "30% OFF",
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
      title: "Leather Bag For Men",
      oldPrice: 40,
      newPrice: 40,
      discount: "20% OFF",
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-7.png",
      title: "Long Sleeve Sweater",
      oldPrice: 30,
      newPrice: 24,
      discount: "15% OFF",
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-8.png",
      title: "Men's Winter Jacket",
      oldPrice: 50,
      newPrice: 40,
      discount: "30% OFF",
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-5.png",
      title: "Top Handle Handbag",
      oldPrice: 80,
      newPrice: 60,
      discount: "30% OFF",
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
      title: "Leather Bag For Men",
      oldPrice: 40,
      newPrice: 40,
      discount: "20% OFF",
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-7.png",
      title: "Long Sleeve Sweater",
      oldPrice: 30,
      newPrice: 24,
      discount: "15% OFF",
    },
    {
      img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-8.png",
      title: "Men's Winter Jacket",
      oldPrice: 50,
      newPrice: 40,
      discount: "30% OFF",
    },
  ];

  return (
    <div className="h-[95vh] bg-white pt-10">
      <div className="w-[100%] bg-white mx-auto py-10 relative">
        {/* Section Heading */}
        <div className="flex items gap-2 mb-6 flex-col mb-12">
          <p className="text-purple-600 mb-1 rounded-full font-medium flex items-center">
            <FontAwesomeIcon
              icon={faShoppingBasket}
              aria-hidden="true"
              className="p-1 bg-purple-700 rounded-full text-white me-2"
            />
            This Week’s
          </p>
          <h2 className="text-4xl font-bold">New Arrivals</h2>
        </div>

        {/* Custom Buttons - Top Right */}
        <div className="absolute top-10 right-35 flex gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 shadow transition"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 shadow transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4.4} // 4.5 card ek time ma
          slidesPerGroup={4} // Next/Prev ma 4 card move
          spaceBetween={20}
          grabCursor={false}
          modules={[Pagination]} // Pagination module remove karvo hoy to aa pan hatai shako
          loop={true}
          loopFillGroupWithBlank={true}
          className="mySwiper"
        >
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="h-[360px] w-[290px] flex items-center justify-center ">
              <div className="bg-white relative group transition ">
                {/* Discount Badge */}
                {p.discount && (
                  <span className="absolute top-8 -right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded shadow-lg">
                    {p.discount}
                  </span>
                )}

                {/* Product Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full object-contain rounded-xl"
                  />
                </div>

                {/* Product Info */}
                <h3 className="text-gray-700 font-medium text-sm text-center">
                  {p.title}
                </h3>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="text-gray-400 line-through">
                    ${p.oldPrice}
                  </span>
                  <span className="text-black font-semibold">
                    ${p.newPrice}
                  </span>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCarousel;
