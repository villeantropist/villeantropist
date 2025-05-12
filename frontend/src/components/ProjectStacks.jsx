import React from "react";

const ProjectStacks = ({ projectStacks }) => {
  return (
    <ul className="flex flex-wrap items-center gap-2 mb-1">
      {projectStacks.map(({ stack, icon }, idx) => (
        <li key={idx} className="flex items-center gap-1">
          {icon}
          {stack}
        </li>
      ))}
    </ul>
  );
};

export default ProjectStacks;
