import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="text-dark text-md md:text-xl lg:text-2xl font-bold">
      {heading}
    </div>
  );
};

export default Heading;
