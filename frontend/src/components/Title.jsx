import React from "react";

const Title = ({ title }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-4 text-shadow-lg">
      <div className="text-dark font-bold text-3xl">{title}</div>
    </div>
  );
};

export default Title;
