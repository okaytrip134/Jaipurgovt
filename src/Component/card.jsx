import React from "react";

function Card({ image, title, description, tag, className }) {
  return (
    <div className="flex gap-4 items-start">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className={className}
      />

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        {tag && (
          <span className="mt-2 inline-block text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>
    </div>
  );
}

export default Card;
