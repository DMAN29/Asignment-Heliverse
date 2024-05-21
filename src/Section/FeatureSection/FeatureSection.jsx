import React from "react";
import FeatureCard from "./FeatureCard";
import { Grid } from "@mui/material";

const FeatureSection = () => {
  const data = [
    {
      imgUrl: "./images/motionarteffect-img9.png",
      head: "Light Weight",
      content: "Motion Art for Elementor is designed to be lightweight.",
    },
    {
      imgUrl: "./images/motionarteffect-img6.png",
      head: "100% Responsive",
      content: "Create a consistent visual experience across all devices.",
    },
    {
      imgUrl: "./images/motionarteffect-img7.png",
      head: "User Friendly Interface",
      content:
        "Ensure a smooth experience for both applicants and administrators.",
    },
  ];
  return (
    <div className="my-24 m-2">
      <div className=" text-center md:mx-auto md:w-3/5 ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5 px-2 lg:px-10 font-s">
          An All-Round Plugin With Powerful Features
        </h2>
        <p className="md:text-lg text-light mb-10 font-o px-1 lg:px-16">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>
      <Grid container justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} lg={4}>
            <FeatureCard item={item} key={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeatureSection;
