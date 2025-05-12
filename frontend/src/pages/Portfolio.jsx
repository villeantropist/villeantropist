import React from "react";
import Title from "../components/Title";
import Heading from "../components/Heading";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaJs,
  FaGlobe,
  FaGithub,
  FaLock,
  FaNetworkWired,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaLink,
  FaJugDetergent,
  FaRestroom,
  FaFlask,
  FaCalendarDays,
} from "react-icons/fa6";

import { assets } from "../assets/frontend_assets/assets";

const Portfolio = () => {
  const stacks = [
    { stack: "Python", icon: <FaPython /> },
    { stack: "Django", icon: <FaPython /> },
    { stack: "Django Rest Framework", icon: <FaPython /> },
    { stack: "Flask", icon: <FaPython /> },
    { stack: "React", icon: <FaReact /> },
    { stack: "JavaScript", icon: <FaJs /> },
    { stack: "NodeJs", icon: <FaNode /> },
    { stack: "HTML", icon: <FaHtml5 /> },
    { stack: "CSS", icon: <FaCss3Alt /> },
  ];

  const projectStacks = [
    { stack: "Python", icon: <FaPython /> },
    { stack: "Django", icon: <FaJugDetergent /> },
    { stack: "Django Rest Framework", icon: <FaRestroom /> },
    { stack: "Flask", icon: <FaFlask /> },
  ];

  const urls = [
    {
      name: "Git",
      title: "View Github repository",
      url: "https://www.google.com",
      icon: <FaGithub />,
    },
    {
      name: "Blog",
      title: "View full project post on the blog",
      url: "https://www.villeantropist.com",
      icon: <FaLink />,
    },
    {
      name: "Website",
      title: "Visit project website",
      url: "https://www.url.com",
      icon: <FaGlobe />,
    },
    {
      name: "Youtube",
      title: "View Youtube video",
      url: "https://www.youtube.com",
      icon: <FaYoutube />,
    },
    {
      name: "X",
      title: "View project social reaction on X",
      url: "https://www.x.com",
      icon: <FaXTwitter />,
    },
    {
      name: "Facebook",
      title: "View project social reaction on Facebook",
      url: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
    {
      name: "LinkedIn",
      title: "View project social reaction on LinkedIn",
      url: "https://www.linkedin.com",
      icon: <FaLinkedinIn />,
    },
  ];
  function wordBreak(url) {
    return url.replace(/([./?=&-_])/g, "$1\u200b"); // Adds line-break hints
  }

  function truncateUrl(url, maxLength = 150) {
    if (url.length <= maxLength) return url;
    return url.slice(0, maxLength) + "...";
  }
  return (
    <div className="flex flex-col gap-12">
      <section id="stacks">
        <div className="text-center">
          <Title title="Stacks" className="mt-6" />
        </div>
        <div className="mx-auto">
          <ul className="text-dark flex flex-wrap justify-center gap-6">
            {stacks.map(({ stack, icon }, idx) => (
              <li key={idx} className="flex items-center gap-1">
                {icon}
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="portfolio">
        <div>
          <Title title="Portfolio" className="mt-6" />
        </div>
        <div className="flex flex-col gap-3">
          {/* Portfolio card */}
          <div className="flex flex-col lg:flex-row gap-3 p-3 bg-customOrange-100 rounded-2xl">
            <div className="w-full lg:max-w-[40%]">
              <img
                src={assets.image}
                alt="project"
                className="shadow-custombox rounded-2xl w-full"
              />
            </div>
            <div className="flex flex-col w-full lg:max-w-[60%]">
              <Heading heading="This a Django Ecommerce Website" />
              <p className="text-sm mb-2">
                {truncateUrl(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis non eveniet ad voluptas quae hic placeat eligendi, necessitatibus, eaque, labore quas. Incidunt autem ab, nesciunt maxime tenetur quam nulla ex laudantium"
                )}
              </p>

              {/* Links to project repo and social posts */}
              {urls && (
                <ul className="mb-3 flex flex-wrap gap-3">
                  {urls.map(({ icon, title, url }, idx) => (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li
                        title={title}
                        className="relative flex items-center gap-1"
                      >
                        <span className="shadow-custombox p-1 sm:p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg sm:rounded-xl text-white">
                          {icon}
                        </span>
                        {title === "View Github repository" && (
                          <span
                            title="Repository is private. Contact me for access"
                            className="absolute top-0 right-0 text-red-500"
                          >
                            <FaLock className="text-xs" />
                          </span>
                        )}
                      </li>
                    </a>
                  ))}
                </ul>
              )}
              {/* Tags */}
              <div className="flex items-center mb-1 gap-1">
                <span className="text-2xl font-bold">#</span>
                <span className="text-md"> Web Automation </span>
              </div>

              <ul className="flex flex-wrap items-center gap-2 mb-1">
                {projectStacks.map(({ stack, icon }, idx) => (
                  <li key={idx} className="flex items-center gap-1">
                    {icon}
                    {stack}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm">
                <FaCalendarDays /> Updated <span>10/10/1910</span>
              </div>
            </div>
          </div>
          {/* Portfolio card */}
          <div className="flex flex-col lg:flex-row gap-3 p-3 bg-customOrange-100 rounded-2xl">
            <div className="w-full lg:max-w-[40%]">
              <img
                src={assets.image}
                alt="project"
                className="shadow-custombox rounded-2xl w-full"
              />
            </div>
            <div className="flex flex-col w-full lg:max-w-[60%]">
              <Heading heading="This a Django Ecommerce Website" />
              <p className="text-sm mb-2">
                {truncateUrl(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis non eveniet ad voluptas quae hic placeat eligendi, necessitatibus, eaque, labore quas. Incidunt autem ab, nesciunt maxime tenetur quam nulla ex laudantium"
                )}
              </p>

              {/* Links to project repo and social posts */}
              {urls && (
                <ul className="mb-3 flex flex-wrap gap-3">
                  {urls.map(({ icon, title, url }, idx) => (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li
                        title={title}
                        className="relative flex items-center gap-1"
                      >
                        <span className="shadow-custombox p-1 sm:p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg sm:rounded-xl text-white">
                          {icon}
                        </span>
                        {title === "View Github repository" && (
                          <span
                            title="Repository is private. Contact me for access"
                            className="absolute top-0 right-0 text-red-500"
                          >
                            <FaLock className="text-xs" />
                          </span>
                        )}
                      </li>
                    </a>
                  ))}
                </ul>
              )}
              {/* Tags */}
              <div className="flex items-center mb-1 gap-1">
                <span className="text-2xl font-bold">#</span>
                <span className="text-md"> Web Automation </span>
              </div>

              <ul className="flex flex-wrap items-center gap-2 mb-1">
                {projectStacks.map(({ stack, icon }, idx) => (
                  <li key={idx} className="flex items-center gap-1">
                    {icon}
                    {stack}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm">
                <FaCalendarDays /> Updated <span>10/10/1910</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
