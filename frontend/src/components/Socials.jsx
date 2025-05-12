import React from "react";

const Socials = ({ socials }) => {
  return (
    <ul className="flex py-4 px-4 text-white gap-2">
      {socials.map((social) => (
        <li className="flex w-full p-0 m-0">
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.title}
            className="shadow-custombox p-1 sm:p-2 bg-green-900 hover:bg-green-950 rounded-lg sm:rounded-xl text-white"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
