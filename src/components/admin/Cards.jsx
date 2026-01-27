import React from "react";

function Cards({ icon, iconBg, iconColor, title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-2xl hover:-translate-y-1.5 transition-all flex items-center gap-3">
      <div className={`${iconBg} ${iconColor} rounded-full text-2xl p-3`}>
        {icon}
      </div>
      <div className="font-semibold">
        <h2 className="text-lg">{title}</h2>
        <h3 className="text-gray-600 text-4xl">{value}</h3>
      </div>
    </div>
  );
}

export default Cards;