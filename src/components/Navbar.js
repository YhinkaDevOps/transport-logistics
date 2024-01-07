import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-white pb-4 pt-10 px-4 md:px-[10px] lg:px-[120px] md:pt-7 md:pb-7">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="logo font-bold text-black capitalize flex items-center text-[19px] md:text-[32px] lg:text-[18px] hover:text-gray-500">
              <Link href="/">CHIMKASIMMA TRANSPORT SERVICES</Link>
            </span>
          </div>

          <div className="hidden md:block">
            <ul className="nav-list flex gap-x-9 items-center text-base ">
              <li className="text-black font-medium hover:text-gray-300">
                <Link href="#">Home</Link>
              </li>
              <li className="text-black font-medium hover:text-gray-300">
                <Link href="#">Booking</Link>
              </li>
              <li className="text-black font-medium hover:text-gray-300">
                <Link href="#">Services</Link>
              </li>
              <li className="text-black font-medium hover:text-gray-300">
                <Link href="#">About Us</Link>
              </li>
              <li className="text-black font-medium hover:text-gray-300">
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div> */}
        </div>
      </div>

      {/* <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-100`}>
        <ul className=".nav-list  flex flex-col items-center gap-y-4 py-3 px-4 text-lg font-bold">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Courses</Link>
          </li>
          <li>
            <Link href="#">Testimonials</Link>
          </li>
          <li className="text-[#004DB3]">
            <button>
              <Link href="#">Enroll Now</Link>
            </button>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
