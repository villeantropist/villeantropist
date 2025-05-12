import React from "react";

const Stacks = ({stacks}) => {
  return (
    <ul className="text-dark flex flex-wrap justify-center gap-2">
      {stacks.map(({ stack, icon }, idx) => (
        <li key={idx} className="flex items-center gap-1">
          {icon}
          {stack}
        </li>
      ))}
    </ul>
  );
};

export default Stacks;
