import React from "react";

const BrowserSection = () => {
  return (
    <div className="grad-bg border-gray-700 border m-5 rounded-2xl">
      <div className="md:w-2/3 lg:w-1/2 xl:w-2/5 p-5 md:p-0 mx-auto my-10 text-center">
        <h3 className="text-xl md:text-2xl font-s mb-5">
          Supported by All Popular Browsers
        </h3>
        <p className="md:text-lg text-light font-o p-5 md:px-4 mb-10">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </p>
        <div className="">
          <img
            src="./images/motionarteffect-img8.png"
            alt=""
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BrowserSection;
