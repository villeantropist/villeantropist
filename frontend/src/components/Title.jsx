import React from "react";

const Title = ({ title }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <div className="text-dark text-3xl">{title}</div>
    </div>
  );
};

export default Title;
