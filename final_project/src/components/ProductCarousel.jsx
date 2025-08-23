// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const ProductCarousel = () => {
  const products = [
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
      <div className="w-[100%] bg-white mx-auto py-10 ">
        {/* Section Heading */}
        <div className="flex items gap-2 mb-6 flex-col ms-10">
          <p className="text-purple-600 mb-1  rounded-full font-medium flex items-center">
            <FontAwesomeIcon
              icon={faShoppingBasket}
              aria-hidden="true"
              className="p-1 bg-purple-700  rounded-full p-1 text-white me-2 "
            />
            This Week’s
          </p>
          <h2 className="text-4xl font-bold">New Arrivals</h2>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={4.5}
          spaceBetween={20}
          grabCursor={false}
          navigation={true}
          pagination={{ clickable: false }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-md  p-4 relative group hover:shadow-xl transition">
                {/* Discount Badge */}
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {p.discount}
                </span>

                {/* Product Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-48 object-contain"
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
            </SwiperSlide>
          ))}
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCarousel;


