import React from "react";

const SelectSection = () => {
  return (
    <div className="py-24 px-2 ">
      <h2 className="text-2xl lg:text-5xl mx-auto font-s font-semibold lg:w-3/5 text-center px-2">
        Apply On Any Section Or Enable For Whole Page
      </h2>
      <div className="mt-10 md:flex text-center ">
        <div className="md:w-1/2 ">
          <div className=" border border-gray-700 rounded-xl p-5 m-2 grad-bg">
            <h3 className="text-xl md:text-2xl font-s mb-2">
              Apply On Section
            </h3>
            <p className="md:text-lg font-o mb-5 text-[#EEE5FFBD]">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
            <img src="./images/motionarteffect-img11.png" alt="" />
          </div>
        </div>
        <div className="md:w-1/2 border border-gray-700 rounded-xl p-5 m-2 grad-bg md:mt-24">
          <h3 className="text-xl md:text-2xl font-s mb-2">Apply On Page</h3>
          <p className="md:text-lg font-o mb-5 text-[#EEE5FFBD]">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.{" "}
          </p>
          <img src="./images/motionarteffect-img10.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectSection;
