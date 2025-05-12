import React from "react";

import {
  FaGlobe,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaUpwork,
} from "react-icons/fa6";
import Socials from "./Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "Git",
      title: "Vist my Github repository",
      url: "https://www.google.com",
      icon: <FaGithub />,
    },
    {
      name: "Upwork",
      title: "Vist my Upwork",
      url: "https://www.upwork.com",
      icon: <FaUpwork />,
    },
    {
      name: "Fiverr",
      title: "Vist my Fiverr",
      url: "https://www.fiverr.com",
      icon: <FaUpwork />,
    },
    {
      name: "LinkedIn",
      title: "Visit my LinkedIn",
      url: "https://www.linkedin.com",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Youtube",
      title: "Visit my Youtube",
      url: "https://www.youtube.com",
      icon: <FaYoutube />,
    },
    {
      name: "X",
      title: "Visit my X",
      url: "https://www.x.com",
      icon: <FaXTwitter />,
    },
    {
      name: "Facebook",
      title: "Visit my Facebook",
      url: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
  ];

  return (
    <div className="text-sm bg-green-800">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] bg-green-700 px-10">
        <div className="">a</div>
        <div className="">b</div>
        <div className="w-full">
          <Socials socials={socials} />
        </div>
      </div>
      {/* <hr /> */}
      <div className="mx-auto text-white">
        <p className="py-2 text-sm text-center">
          &copy; Villeantropist, {currentYear}. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
