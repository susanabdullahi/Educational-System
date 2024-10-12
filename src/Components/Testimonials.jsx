import React, { useState } from 'react';
import backArrow from "../assets/back-icon.png";
import nextArrow from "../assets/next-icon.png";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    image: user1,
    name: "Mariame",
    text: "This service has truly transformed the way I work! Highly recommended."
  },
  {
    id: 2,
    image: user2,
    name: "Ali",
    text: "An amazing experience with excellent customer support and great results."
  },
  {
    id: 3,
    image: user3,
    name: "User Susan",
    text: "I'm beyond impressed with the results. This is a must-try for everyone!"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous slide (move 2 slides at once)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 2) % testimonials.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 2 + testimonials.length) % testimonials.length
    );
  };

  // Determine the indices of the two testimonials to display
  const secondIndex = (currentIndex + 1) % testimonials.length;

  return (
    <div id="testimonials" className="mx-auto my-20 px-10 relative max-w-4xl">
      {/* Testimonial container */}
      <div className="flex items-center justify-center relative">
        {/* Back button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#212EA0] text-white p-4 w-[60px] h-[60px] rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          <img src={backArrow} alt="Back" className="w-full h-full" />
        </button>

        {/* Testimonial content */}
        <div className="flex space-x-8">
          {[currentIndex, secondIndex].map((index) => (
            <div key={testimonials[index].id} className="text-center px-8 transition duration-500 ease-in-out transform">
              {/* User Image */}
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-gray-300 shadow-lg"
              />

              {/* User Name */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {testimonials[index].name}
              </h3>

              {/* Testimonial Text */}
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                "{testimonials[index].text}"
              </p>
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#212EA0] text-white p-4 w-[60px] h-[60px] rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          <img src={nextArrow} alt="Next" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
