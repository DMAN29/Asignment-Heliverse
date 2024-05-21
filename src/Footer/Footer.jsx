import { Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="text-sm xl:text-base flex flex-col xl:flex-row bg-gradient-to-r from-[#F87516] to-[#5E11FF] pt-2 font-s text-[#EEE5FFB8]">
      <div className="xl:order-1 order-2 p-2 text-center xl:pl-20">
        &copy; 2023 Copywrite. All rights reserved by QodeMatrix
      </div>
      <div className="xl:order-2 order-1 flex justify-around xl:justify-end xl:space-x-2 p-2 md:w-1/2 mx-auto">
        <Button sx={{ color: "#EEE5FFB8" }}>Documentation</Button>
        <Button sx={{ color: "#EEE5FFB8" }}>Support</Button>
      </div>
    </div>
  );
};

export default Footer;
