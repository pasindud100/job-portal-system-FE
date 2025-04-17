import React from "react";
import ProfileInfo from "./ProfileInfo";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

function Navbar({ userInfo, logout }) {
  // role from local storage
  const userRole = localStorage.getItem("userRole");

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 py-6 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to={"/"}
              className="font-bold text-2xl sm:text-3xl flex gap-2"
            >
              CareerBridge
            </Link>
          </div>
          <div className="flex justify-between items-center gap-4">
            <DarkMode />
            <ul className="hidden sm:flex items-center gap-4">
              <li>
                <Link to={"/jobs"}>Jobs</Link>
              </li>
              <li>
                <Link to={"/courses"}>Courses</Link>
              </li>
              {/*rendering tabs based on user role */}
              {userRole === "ROLE_EMPLOYER" && (
                <li>
                  <Link to={"/employer"}>Employer</Link>
                </li>
              )}
              {userRole === "ROLE_TRAINER" && (
                <li>
                  <Link to={"/trainer"}>Trainer</Link>
                </li>
              )}
              {userRole === "ROLE_ADMIN" && (
                <li>
                  <Link to={"/admin"}>Admin</Link>
                </li>
              )}
            </ul>
            {userInfo ? (
              <ProfileInfo userInfo={userInfo} logout={logout} />
            ) : (
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;