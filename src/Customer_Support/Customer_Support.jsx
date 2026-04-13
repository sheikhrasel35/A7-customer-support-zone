import React from "react";
import greenImg from "../assets/Ellipse.png";
import orangeImg from "../assets/Ellipse2.png";
import vector4 from "../assets/vector4.png";

const Customer_Support = ({ support_Card, onStatusChange }) => {
  const handleClick = () => {
    if (support_Card.status === "Open") {
      onStatusChange(support_Card.id); // Only Open → In Progress
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-[10px] py-3 px-4 cursor-pointer flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[18px] font-bold text-black">{support_Card.title}</h2>
        <div
          onClick={handleClick}
          className={`py-1 px-4 rounded-full text-[14px] font-semibold flex gap-2 items-center ${
            support_Card.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"
          }`}
        >
          <img
            src={support_Card.status === "Open" ? greenImg : orangeImg}
            alt={support_Card.status}
            className="w-4 h-4"
          />
          <p
            className={`${
              support_Card.status === "Open" ? "text-[#0B5E06]" : "text-[#9C7700]"
            }`}
          >
            {support_Card.status}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-black">
        {support_Card.description}
        {/* 👉 Optional: To limit lines and keep card height uniform, uncomment below and comment the above line */}
        {/* <p className="mt-3 text-black line-clamp-3">{support_Card.description}</p> */}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-[14px]">
        <div className="flex gap-2 items-center">
          {/* Ticket ID */}
          <p className="text-black">#{support_Card.id}</p>

          {/* Priority */}
          {support_Card.priority && (
            <p
              className={`${
                support_Card.priority === "High"
                  ? "text-[#F83044]"
                  : support_Card.priority === "Medium"
                  ? "text-[#FEBB0C]"
                  : "text-[#02A53B]"
              } font-medium`}
            >
              {support_Card.priority} PRIORITY
            </p>
          )}
        </div>

        {/* Customer and Date */}
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <p className="text-black">{support_Card.customer}</p>
          <div className="flex items-center gap-1">
            <img src={vector4} alt="calendar" className="w-4 h-4" />
            <p className="text-black">{support_Card.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer_Support;
