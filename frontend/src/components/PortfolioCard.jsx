import React from "react";
import Heading from "../components/Heading";

import { FaLock, FaCalendarDays } from "react-icons/fa6";
import Tags from "./Tags";
import ProjectStacks from "./ProjectStacks";

const PortfolioCard = ({ image, urls, tags, projectStacks }) => {
  const truncateUrl = (url, maxLength = 150) => {
    if (url.length <= maxLength) return url;
    return url.slice(0, maxLength) + "...";
  };

  return (
    <div className="flex flex-col lg:flex-row gap-3 p-3 bg-customOrange-100 rounded-2xl">
      <div className="w-full lg:max-w-[40%]">
        <img
          src={image}
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
              <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
                <li title={title} className="relative flex items-center gap-1">
                  <span className="shadow-custombox p-1 sm:p-2 bg-neutral-900 hover:bg-neutral-950 rounded-lg sm:rounded-xl text-white">
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
        {tags && <Tags tags={tags} />}

        {/* Project Stack */}
        {projectStacks && <ProjectStacks projectStacks={projectStacks} />}

        {/* Date */}
        <div className="flex items-center gap-2 text-sm">
          <FaCalendarDays /> Updated <span>10/10/1910</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
