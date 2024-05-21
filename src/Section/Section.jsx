import React from "react";
import MainContainer from "./MainSection/MainContainer";
import RatingSection from "./RatingSection/RatingSection";
import PurchaseSection from "./PurchaseSection/PurchaseSection";
import SelectSection from "./SelectSection/SelectSection";
import BrowserSection from "./BrowserSection/BrowserSection";
import FeatureSection from "./FeatureSection/FeatureSection";

const Section = () => {
  return (
    <>
      <div className="pt-20 mx-2 xl:w-5/6 xl:mx-auto ">
        <MainContainer />
        <RatingSection />
        <PurchaseSection />
        <SelectSection />
        <BrowserSection />
        <FeatureSection />
      </div>
    </>
  );
};

export default Section;
