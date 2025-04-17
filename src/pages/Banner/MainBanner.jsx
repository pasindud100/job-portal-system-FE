import React from "react";
import banner from "../../assets/cover-images/banner.png";

const bannerImg = {
  backgroundImage: `url(${banner})`,
  backgroundPosition: "left",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

function MainBanner() {
  return (
    <>
      <div
        className="min-h-[250px]  sm:min-h-[320px]  bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bannerImg}
      >
        <div className="container mx-auto"></div>
      </div>
    </>
  );
}

export default MainBanner;
