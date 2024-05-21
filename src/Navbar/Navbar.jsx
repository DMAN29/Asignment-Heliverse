import { Button } from "@mui/material";
import React from "react";
const Navbar = () => {
  return (
    <div className="bg-[#26242A] flex px-3 md:px-5 items-center justify-between fixed w-full z-10 py-1 md:py-0">
      <div className="image-container flex items-center text-xl">
        <img src="./images/image.png" alt="Logo" className="w-32 md:w-40" />
      </div>
      <div>
        <Button variant="contained" color="success" size="small">
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
