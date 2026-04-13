import React from "react";
import inProgrss from "../assets/vector1.png";
const Banner = ({ Count, complateCount }) => {
  return (
    <div className=" max-w-[1300px] mx-auto my-20 flex flex-col md:flex-row justify-between items-center gap-7">
      <div className="rounded-[10px]  w-full md:flex-1 text-center bg-[#422AD5]  relative h-full">
        <img className="absolute w-[50%] h-full" src={inProgrss} alt="" />
        <img
          className="absolute w-[50%] h-full right-0 scale-x-[-1]"
          src={inProgrss}
          alt=""
        />
        <div className="py-12">
          <p className="font-bold text-[30px]">in-Progress</p>
          <h1 className="font-bold text-[100px]">{Count}</h1>
        </div>
      </div>
      <div className=" rounded-[10px] w-full md:flex-1 text-center bg-gradient-to-r from-green-400 to-emerald-600  relative h-full">
        <img className="absolute w-[50%] h-full" src={inProgrss} alt="" />
        <img
          className="absolute w-[50%] h-full right-0 scale-x-[-1]"
          src={inProgrss}
          alt=""
        />
        <div className="py-12">
          <p className="font-bold text-[30px]">Resolved</p>
          <h1 className="font-bold text-[100px]">{complateCount}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
