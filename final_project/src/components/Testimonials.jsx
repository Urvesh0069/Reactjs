import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors.",
    name: "James C. Anderson",
    role: "Head Of Idea",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors.",
    name: "James C. Anderson",
    role: "Head Of Idea",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    text: "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors.",
    name: "James C. Anderson",
    role: "Head Of Idea",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#fdf6f4] py-20 h-[90vh]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-pink-600 font-semibold flex items-center gap-2">
            <span className="bg-pink-100 text-pink-600 rounded-full px-2 py-0.5 text-sm font-bold">
              66
            </span>
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-gray-900">Users Feedback</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-2xl shadow-md relative"
            >
              <p className="text-gray-600 italic mb-6">“ {t.text} ”</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm text-gray-500">{t.role}</p>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <div className="absolute -top-16 right-0 flex gap-3">
            <button className="p-3 bg-white rounded-lg shadow hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white rounded-lg shadow hover:bg-gray-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
