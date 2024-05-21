import { Button } from "@mui/material";
import React from "react";

const MainContainer = () => {
  return (
    <div>
      <header className="justify-between flex">
        <img
          src="./images/MotionArtEffect-logo.png"
          alt=""
          className="h-8 md:h-auto"
        />
        <Button
          variant="contained"
          sx={{
            display: { xs: "none", lg: "inline-flex" },
            bgcolor: "white",
            color: "black",
            ":hover": {
              bgcolor: "transparent",
              color: "white",
            },
            fontStyle: "Outfit",
            border: "2px solid white",
            paddingX: "28px",
          }}
        >
          Purchase Now
        </Button>
      </header>
      <div className="md:flex my-24 font-o text-center md:text-left">
        <div className="text-lg md:w-1/4">
          <div className="xl:w-1/2 m-2">
            <div className="grad-color font-s">Transform &nbsp;</div>
            <span className="grad-color font-s">Your Website</span>
            <div className="mt-5 font-o">With Motion Art Effect</div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl xl:text-[65px] font-medium font-s px-2 pb-5  leading-relaxed md:leading-normal xl:px-0">
            Attract Your Visitors Attention With Colorful
            <br />
            <span className="grad-color">Motion Art Effect</span>
          </h1>
          <p className="font-o lg:pr-16 text-light md:text-lg text-base px-2 md:px-0  ">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
