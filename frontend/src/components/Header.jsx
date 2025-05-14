import React from "react";

const Header = ({ heading }) => {
  return (
    <div className="text-dark text-md md:text-xl lg:text-2xl font-bold">
      {heading}
    </div>
  );
};

export default Header;
