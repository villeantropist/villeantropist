import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaUpwork } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-sm bg-green-800">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] bg-green-700 px-10">
        <div className="">a</div>
        <div className="">b</div>
        <div className="w-full">
          <ul className="flex py-4 px-4 text-white">
            <li className="flex w-full p-0 m-0">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="X (formally Twitter)"
                className="p-3 rounded-full hover:bg-green-900 active:bg-green-800"
              >
                <FaXTwitter />
              </a>
            </li>
            <li className="flex w-full">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="p-3 rounded-full hover:bg-green-900 active:bg-green-800"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="flex w-full">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
                className="p-3 rounded-full hover:bg-green-900 active:bg-green-800"
              >
                <FaYoutube />
              </a>
            </li>
            <li className="flex w-full">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-3 rounded-full hover:bg-green-900 active:bg-green-800"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="flex w-full">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="Upwork"
                className="p-3 rounded-full hover:bg-green-900 active:bg-green-800"
              >
                <FaUpwork />
              </a>
            </li>
            <li className="flex w-full">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="Fiverr"
                className="p-3 rounded-full hover:bg-green-900 active:bg-green-800"
              >
                <FaFacebookF />
              </a>
            </li>
          </ul>
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
