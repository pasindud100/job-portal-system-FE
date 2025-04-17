import React, { useEffect, useState } from "react";
import img1 from "../../assets/slideshow-job-img/seeker1.png";
import img2 from "../../assets/slideshow-job-img/provider1.png";
import img3 from "../../assets/slideshow-job-img/course.png";

const talks = [
  {
    id: 1,
    title: "Unlock Your Future",
    description:
      "Looking for your next career move? Explore endless opportunities with top companies and find the perfect job that matches your skills.",
    img: img1,
  },
  {
    id: 2,
    title: "Explore the Best Opportunities",
    description:
      "Find a job that fits your passion! Browse through multiple industries, explore roles, and apply for jobs that bring you closer to your career goals.",
    img: img2,
  },
  {
    id: 3,
    title: "Unlock New Skills with Professional Courses",
    description:
      "Gain hands-on experience and in-demand skills with expert-led courses. Choose from a wide range of fields and become job-ready today.",
    img: img3,
  },
];

function FirstApper({ handleOrderPopup }) {
  const [activeTalk, setActiveTalk] = useState(0);

  const handlePrev = () => {
    setActiveTalk((activeTalk - 1 + talks.length) % talks.length);
  };

  const handleNext = () => {
    setActiveTalk((activeTalk + 1) % talks.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeTalk]);

  return (
    <div className=" bg-gray-200  flex items-center justify-center py-14  dark:bg-gray-800 dark:text-white duration-200">
      <div className="flex flex-col md:flex-row mx-[100px] items-center justify-center w-full p-5">
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          {talks.map((talk, i) => (
            <div
              className={`data-aos-once="true"
          className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
         ${activeTalk === i ? "block" : "hidden"}`}
              key={talk.id}
            >
              <h1
                data-aos-duration="500"
                data-aos-once="true"
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-700 dark:text-white"
              >
                {talk.title}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-lg mt-5 text-gray-600 dark:text-white"
              >
                {talk.description}
              </p>
            </div>
          ))}
        </div>

        {talks.map((talk, i) => (
          <div
            className={`transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
              activeTalk === i ? "block" : "hidden"
            }`}
            key={talk.id}
          >
            <img
              src={talk.img}
              alt={talk.title}
              className="w-[300px] h-[300px] rounded-lg ml-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstApper;
