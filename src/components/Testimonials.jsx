import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  { name: "Rivu ", review: "Amazing experience! Very easy to book flights.", rating: 5 },
  { name: "Talha", review: "I love the cab booking feature, saved a lot of time!", rating: 4 },
  { name: "Rahul Singh", review: "Super fast and smooth train booking system!", rating: 5 },
  { name: "Sneha Das", review: "Great service, had no issues while booking my bus ticket.", rating: 4 },
  { name: "Vikram Singh", review: "The customer support was really helpful and quick!", rating: 5 },
  { name: "Alisha Roy", review: "Loved the discount feature, got a great deal!", rating: 5 }
];

const Testimonials = () => {
  return (
    <div className="text-center py-14 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-gray-800">What Our Customers Say</h2>
      <p className="text-gray-600 mt-2">Real experiences from our happy travelers</p>

       
      <div className="max-w-5xl mx-auto flex overflow-x-auto scrollbar-hide space-x-6 px-4 py-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reviews.map(({ name, review, rating }, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-xl w-72 flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center mb-2 text-yellow-400">
              {Array(rating).fill().map((_, i) => (
                <FaStar key={i} className="text-xl" />
              ))}
            </div>
            <p className="text-gray-700 italic">"{review}"</p>
            <h4 className="mt-3 font-semibold text-gray-900">{name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
