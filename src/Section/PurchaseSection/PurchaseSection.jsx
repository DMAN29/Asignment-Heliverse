import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";

const PurchaseSection = () => {
  return (
    <div className="md:flex justify-between mt-28 ">
      <div className="md:w-3/5 p-2 m-2 text-center md:text-left">
        <h1 className="font-s text-2xl md:text-3xl xl:text-5xl mb-3">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h1>
        <p className="font-o md:text-lg text-light mb-10 ">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <Button
          sx={{
            fontSize: "20px",
            background: "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
            textTransform: "capitalize",
            padding: "16px 35px",
            fontFamily: "Sora sans-serif",
            borderRadius: "20px",
          }}
          variant="contained"
        >
          Purchase From Envato <ArrowForwardIcon />
        </Button>
      </div>
      <div className="p-2 my-auto">
        <img
          src="./images/motionarteffect-img5.png"
          alt=""
          className=" object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default PurchaseSection;
