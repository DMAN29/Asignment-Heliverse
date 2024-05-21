import React from "react";

const FeatureCard = ({ item }) => {
  return (
    <div className="grad-bg border border-gray-700 m-2 rounded-2xl px-5 py-7 ">
      <img src={item.imgUrl} alt="" />
      <h2 className="text-xl md:text-2xl font-s pb-3">{item.head}</h2>
      <p className="font-o md:text-lg text-light">{item.content}</p>
    </div>
  );
};

export default FeatureCard;
