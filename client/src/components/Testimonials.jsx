import React from 'react';
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div>
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Customer Testimonials
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white hover:scale-105 transition-all duration-700  ">
            <p className="italic">"{item.text}"</p>
            <div className="flex items-center mt-4">
              <img
                src={item.image}
                alt={item.author}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{item.author}</p>
                <p className="text-sm text-gray-500">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
