import * as React from "react";

export function TestimonialCard({ author, role, content }) {
  return (
    <div className="bg-gradient-to-b from-green-100 to-green-200 p-6 rounded-lg shadow-lg mx-auto w-80 h-96 overflow-hidden">
      <div className="bg-blue-800 text-white rounded-lg p-6 h-full flex flex-col justify-between overflow-hidden">
        {/* Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmgN_DxQvEkX-8Ab-pkveOHdo6PaZ0zU68ig&s"
            alt={author}
            className="w-24 h-24 rounded-full object-cover border-4 border-white"
          />
        </div>
        {/* Star Ratings */}
        <div className="flex justify-center mb-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <span key={index} className="text-yellow-400 text-xl">
                ★
              </span>
            ))}
        </div>
        {/* Name and Title */}
        <p className="text-center text-white font-semibold mb-2">{author}</p>
        {/* Testimonial Text */}
        <p className="text-center text-gray-200 text-sm leading-relaxed overflow-hidden text-ellipsis whitespace-normal">
          {content}
        </p>
      </div>
    </div>
  );
}
