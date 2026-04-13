import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[1300px]  mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black ">
              <svg
                xmlns="http://www.w3.org/2000/svg"

                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm text-black dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Change log</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="text-xl text-black font-bold">CS — Ticket System</a>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <a className="text-black font-semibold">Home</a>
              </li>
              <li>
                <a className="text-black font-semibold">FAQ</a>
              </li>
              <li>
                <a className="text-black font-semibold">Change log</a>
              </li>
              <li>
                <a className="text-black font-semibold">Blog</a>
              </li>
              <li>
                <a className="text-black font-semibold">Download</a>
              </li>
              <li>
                <a className="text-black font-semibold">Contact</a>
              </li>
            </ul>
          </div>
          <button className="flex gap-2 items-center px-4 py-1.5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg text-white font-semibold cursor-pointer transition-transform active:scale-95">
            <i className="fa-solid fa-plus"></i>
            New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
