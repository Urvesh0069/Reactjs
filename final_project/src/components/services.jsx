import {
  Truck,
  ShieldCheck,
  RotateCcw,
  RefreshCw,
  Package,
} from "lucide-react";

const ServiceFeatures = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-blue-500" />,
      title: "Fast & Secure",
      subtitle: "Delivery",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
      title: "100% Guarantee",
      subtitle: "On Product",
    },
    {
      icon: <RotateCcw className="w-12 h-12 text-blue-500" />,
      title: "24 Hour Return",
      subtitle: "Policy",
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-blue-500" />,
      title: "24 Hour Return",
      subtitle: "Policy",
    },
    {
      icon: <Package className="w-12 h-12 text-blue-500" />,
      title: "Next Level Pro",
      subtitle: "Quality",
    },
  ];
  return (
    <section className="py-12 bg-white ">
      <div className=" grid grid-cols-5 gap-6 px-1">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border rounded-lg hover:shadow-md transition"
          >
            {service.icon}
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
