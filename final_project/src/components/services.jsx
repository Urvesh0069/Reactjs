const ServiceFeatures = () => {
  const services = [
    {
      icon: "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service1.png",
      title: "Fast & Secure",
      subtitle: "Delivery",
    },
    {
      icon: "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service2.png",
      title: "100% Guarantee",
      subtitle: "On Product",
    },
    {
      icon: "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service3.png",
      title: "24 Hour Return",
      subtitle: "Policy",
    },
    {
      icon: "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service4.png",
      title: "24 Hour Return",
      subtitle: "Policy",
    },
    {
      icon: "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service5.png",
      title: "Next Level Pro",
      subtitle: "Quality",
    },
  ];
  return (
    <section className="py-2 bg-white ">
      <div className=" grid grid-cols-5 gap-6 px-1">
        {services.map((service, index) => (
          <div
            key={index}
            className="h-48 flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-xl transition"
          >
            <img src={service.icon} alt="" />
            <h3 className="text-md font-semibold mt-4 text-center">
              {service.title}
            </h3>
            <p className="text-sm font-semibold text-gray-800 text-center">
              {service.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;
