import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Card({ image, title, description, tag, slug, className }) {
  return (
    <article
      className={`h-full flex flex-col rounded-2xl bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Image wrapper with hover zoom */}
      <div className="aspect-[4/3] w-full bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800 leading-tight line-clamp-2">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {description}
          </p>
        )}

        {tag && (
          <span className="mt-3 inline-block text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full w-max">
            {tag}
          </span>
        )}

        {/* Read More Button */}
        {slug && (
          <div className="mt-auto pt-4">
            <Link
              to={`/involved/${slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D2737D] hover:text-gradient-to-r from-[#2E5984] to-[#D2737D] px-4 py-2 rounded-lg transition-all duration-300 group"
            >
              Read more
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

export default Card;
