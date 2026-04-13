import React from "react";
import Group1 from "../assets/Group1.png";
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";
import Group4 from "../assets/Group4.png"

const Footer = () => {
  return (
    <div className="w-full bg-black p-3">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start py-15">
        <div className="flex-1">
          <h2 className="font-bold text-[24px]">CS — Ticket System</h2>
          <p className="text-[16px] mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex-1 flex justify-center  ">
          <div>
            <h2 className="font-semibold text-[20px]">Company</h2>

            <ul className="mt-5">
              <li className="pt-1.5">About us</li>
              <li className="pt-1.5">Our Mission</li>
              <li className="pt-1.5">Contact Saied</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div>
            <h2 className="font-semibold text-[20px]">Services</h2>
            <ul className="mt-5">
              <li className="pt-1.5">Products & Services</li>
              <li className="pt-1.5">Customer Stories</li>
              <li className="pt-1.5">Download Apps</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div>
            <h2 className="font-semibold text-[20px]">Information</h2>
            <ul className="mt-5">
              <li className="pt-1.5">Privacy Policy</li>
              <li className="pt-1.5">Terms & Conditions</li>
              <li className="pt-1.5">Join Us</li>
            </ul>
          </div>
        </div>

        <div className="flex-1  flex justify-end">
          <div>
            <h2 className="font-semibold text-[20px]">Social Links</h2>
            <ul className="mt-5">
              <li className="pt-2 flex gap-1">
                {" "}
                <img src={Group1} alt="" />
                @CS — Ticket System
              </li>
              <li className="pt-2 flex gap-1">
                <img src={Group2} alt="" />
                @CS — Ticket System
              </li>
              <li className="pt-2 flex gap-1">
                <img src={Group3} alt="" />
                @CS — Ticket System
              </li>
              <li className="pt-2 flex gap-1">
                <img src={Group4} alt="" />
                support@cst.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto text-center">
        <p className="py-2">© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
