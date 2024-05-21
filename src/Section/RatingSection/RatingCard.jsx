import React from "react";

const RatingCard = ({ imgUrl }) => {
  return (
    <>
      <div className="flex justify-center">
        <img src={"./images/" + imgUrl} alt="" />
        <div className="ml-2">
          <img
            src="./images/motionarteffect-img4.png"
            alt=""
            className="my-5 "
          />
          <p className="text-[#9D99AD] font-s text-sm font-medium">
            <span className="font-bold ">4.5</span> Score, 9 Reviews
          </p>
        </div>
      </div>
    </>
  );
};

export default RatingCard;
