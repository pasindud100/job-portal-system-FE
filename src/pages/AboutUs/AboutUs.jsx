import React from "react";
import aboutus from "../../Assets/aboutus/aboutus.png";

function AboutUs() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white py-16 flex justify-center items-center">
      <div className="container px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade">
          <img
            src={aboutus}
            alt="About Us Image"
            className="object-cover rounded-lg shadow-lg w-full max-w-md mx-auto"
          />
        </div>
        <div data-aos="fade" className="max-w-lg">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify">
            <strong>Empowering Individuals</strong> through innovation and technology, we provide opportunities that foster growth, learning, and career advancement.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-3 pl-4 text-justify">
            <li>
              <strong>Seamless Career Growth</strong> – Explore a vast array of career paths tailored to your expertise and ambitions.
            </li>
            <li>
              <strong>Comprehensive Learning</strong> – Gain access to industry insights, expert mentorship, and skill-enhancing courses.
            </li>
            <li>
              <strong>Smart Job Matching</strong> – Find the perfect opportunities that align with your skills, interests, and goals.
            </li>
            <li>
              <strong>Real-Time Market Insights</strong> – Stay updated with trends, salary benchmarks, and industry demands.
            </li>
            <li>
              <strong>Networking & Collaboration</strong> – Connect with professionals, mentors, and companies to expand your career horizon.
            </li>
          </ul>
          <p className="mt-6 text-gray-800 dark:text-gray-300 text-lg text-justify">
            Join a thriving community that values <strong>growth, excellence, and success.</strong> Your future starts here!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
