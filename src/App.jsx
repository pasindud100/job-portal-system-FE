import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./pages/Footer/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import FirstAppear from "./pages/FirstAppear/FirstApper";
import MainBanner from "./pages/Banner/MainBanner";
import OurService from "./pages/Service/OurService";
import Login from "./pages/Login/Login";
import Register from "./pages/Signup/Signup";
import JobPost from "./pages/Jobs/JobPost";
import CoursePost from "./pages/Courses/CoursePost";
import EmpDashboard from "./pages/Employer/EmpDashboard";
import TrainerDashboard from "./pages/Trainer/TrainerDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* <Navbar /> */}
      <Home />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner />
              <FirstAppear />
              <OurService />
              <AboutUs />
              <ContactUs />
            </>
          }
        />

        <Route path="/jobs" element={<JobPost />} />
        <Route path="/courses" element={<CoursePost />} />

        {/* Protected Routes */}
        <Route
          path="/employer"
          element={
            <ProtectedRoute
              element={<EmpDashboard />}
              allowedRoles={["ROLE_EMPLOYER", "ROLE_ADMIN"]}
            />
          }
        />
        <Route
          path="/trainer"
          element={
            <ProtectedRoute
              element={<TrainerDashboard />}
              allowedRoles={["ROLE_TRAINER", "ROLE_ADMIN"]}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              element={<AdminDashboard />}
              allowedRoles={["ROLE_ADMIN"]}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
