import React, { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  { 
    name: "Rivu Basak", 
    review: "Amazing experience! Very easy to book flights. The interface is intuitive and saved me so much time compared to other platforms.", 
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2 days ago"
  },
  { 
    name: "Talha Khan", 
    review: "I love the cab booking feature, saved a lot of time! The drivers were punctual and the pricing was transparent.", 
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    date: "1 week ago"
  },
  { 
    name: "Rahul Singh", 
    review: "Super fast and smooth train booking system! Got my tickets confirmed instantly and the app notifications kept me updated.", 
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    date: "3 days ago"
  },
  { 
    name: "Sneha Das", 
    review: "Great service, had no issues while booking my bus ticket. The seat selection feature is particularly useful.", 
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    date: "5 days ago"
  },
  { 
    name: "Vikram Patel", 
    review: "The customer support was really helpful and quick! They resolved my booking issue within minutes.", 
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "2 weeks ago"
  },
  { 
    name: "Alisha Roy", 
    review: "Loved the discount feature, got a great deal on my hotel booking! Will definitely use this service again for my next trip.", 
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "1 month ago"
  },
  { 
    name: "Priya Sharma", 
    review: "The package deals are fantastic! Booked my entire vacation through this platform and everything went smoothly.", 
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    date: "3 weeks ago"
  },
  { 
    name: "Arjun Mehta", 
    review: "Impressed with the real-time tracking feature for buses. Never had to worry about delays.", 
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    date: "4 days ago"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 2));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 2));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviews.length / 2)) % Math.ceil(reviews.length / 2));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Display 2 testimonials at a time on larger screens
  const visibleReviews = reviews.slice(currentIndex * 2, currentIndex * 2 + 2);

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            What Our <span className="text-blue-600">Travelers</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community of happy travelers about their experiences
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-center gap-8">
            {visibleReviews.map(({ name, review, rating, avatar, date }, index) => (
              <motion.div
                key={`${name}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={avatar} 
                    alt={name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="ml-4 text-left">
                    <h4 className="font-semibold text-gray-900">{name}</h4>
                    <p className="text-sm text-gray-500">{date}</p>
                  </div>
                </div>
                
                <div className="flex mb-4 text-yellow-400">
                  {Array(rating).fill().map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>
                
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-2 left-0 text-blue-100 text-2xl" />
                  <p className="text-gray-700 pl-8 italic">"{review}"</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Verified Traveler
                  </span>
                  <div className="flex space-x-1">
                    {Array(5).fill().map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-blue-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array(Math.ceil(reviews.length / 2)).fill().map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;