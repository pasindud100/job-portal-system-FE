import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
            CareerBridge
            </h1>
            <p className="">
              Connecting professionals with top employers. Build your career
              with expert guidance and opportunities.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>12/13 Wettewa, Mathugama</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+94 112345678</p>
              <p>+94 772345678</p>
            </div>
        
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            &copy; 2025 All rights reserved || Developed by Pasindu Dilshan
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;