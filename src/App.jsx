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
      <Home />
      {/* <Navbar/> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner />
              <FirstAppear />
             
              <div >
                <OurService />
              </div>
              <div >
                <AboutUs />
              </div>
              <div >
                <ContactUs />
              </div>
            </>
          }
        />

        <Route path="/jobs" element={<JobPost />} />
        <Route path="/courses" element={<CoursePost />} />
        <Route path="/employer" element={<EmpDashboard />} />
        <Route path="/trainer" element={<TrainerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
