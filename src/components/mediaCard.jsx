import React from "react";



const MediaCard = ({ title, content, imageUrl, date }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#2E324D] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">
          {content.length > 120 ? content.slice(0, 120) + "..." : content}
        </p>
        {date && <p className="text-xs text-gray-400">Posted on {date}</p>}
      </div>
    </div>
  );
};

export default MediaCard;
