import React from "react";

const Tags = ({ tags }) => {
  return (
    <ul className="flex flex-wrap items-center mb-1 gap-1">
      <span className="text-2xl font-bold">#</span>
      {tags.map((tag) => (
        <li className="text-md text-shadow-sm">{tag.tag}</li>
      ))}
    </ul>
  );
};

export default Tags;
