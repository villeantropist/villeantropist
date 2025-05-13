import React from "react";
import Title from "../components/Title";

const PortfolioDetails = () => {
  return (
    <div className="shadow-custombox flex flex-col lg:flex-row gap-3 p-3 bg-customOrange-100 rounded-2xl">
      <div className="mx-auto">
        <Title title={"Portfolio Detail"} />
      </div>
    </div>
  );
};

export default PortfolioDetails;
