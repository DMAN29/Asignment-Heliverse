import React from "react";
import RatingCard from "./RatingCard";
import { Grid } from "@mui/material";

const RatingSection = () => {
  const imgData = [
    "motionarteffect-img2.png",
    "motionarteffect-img1.png",
    "motionarteffect-img3.png",
  ];
  return (
    <div className="m-2">
      <h4 className="text-[22px] text-center text-s">
        Trusted by thousands of users around the world
      </h4>
      <Grid container justifyContent="center">
        {imgData.map((item, index) => (
          <Grid item xs={12} sm={6} lg={4} sx={{ marginTop: 5 }}>
            <RatingCard imgUrl={item} key={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RatingSection;
