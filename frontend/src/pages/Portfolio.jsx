import React, { useCallback, useEffect, useMemo, useState } from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";
import Stacks from "../components/Stacks";
import ReactPaginate from "react-paginate";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { assets } from "../assets/frontend_assets/assets";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaJs,
  FaGlobe,
  FaGithub,
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

  const urls = [
    {
      name: "Git",
      title: "View Github repository",
      url: "https://www.google.com",
      icon: <FaGithub />,
    },
    {
      name: "Blog",
      title: "Project write-up",
      url: "https://www.villeantropist.com",
      icon: <FaLink />,
    },
    {
      name: "Website",
      title: "Visit live project",
      url: "https://www.url.com",
      icon: <FaGlobe />,
    },
    {
      name: "Youtube",
      title: "Demo Video",
      url: "https://www.youtube.com",
      icon: <FaYoutube />,
    },
    {
      name: "X",
      title: "See on X",
      url: "https://www.x.com",
      icon: <FaXTwitter />,
    },
    {
      name: "Facebook",
      title: "See on Facebook",
      url: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
    {
      name: "LinkedIn",
      title: "See on LinkedIn",
      url: "https://www.linkedin.com",
      icon: <FaLinkedinIn />,
    },
  ];

  const tags = [
    { tag: "Web" },
    { tag: "Automation" },
    { tag: "WebScraping" },
    { tag: "DataAnalysis" },
  ];

  const projectStacks = [
    { stack: "Python", icon: <FaPython /> },
    { stack: "Django", icon: <FaJugDetergent /> },
    { stack: "Django Rest Framework", icon: <FaRestroom /> },
    { stack: "Flask", icon: <FaFlask /> },
  ];

  const truncateUrl = (url, maxLength = 150) => {
    if (url.length <= maxLength) return url;
    return url.slice(0, maxLength) + "...";
  };

  const [currentPage, setCurrentPage] = useState(0);

  const filterPortfolio = [1, 2, 3, 4];
  const portfolioPerPage = 10;
  const offset = currentPage * portfolioPerPage;

  const handlePageClick = useCallback(({ selected }) => {
    setCurrentPage(selected);
  }, []);

  const currentItems = useMemo(
    () => filterPortfolio.slice(offset, offset + portfolioPerPage),
    [filterPortfolio, offset, portfolioPerPage]
  );

  const pageCount = Math.ceil(filterPortfolio.length / portfolioPerPage);

  return (
    <div className="flex flex-col gap-12">
      <section id="stacks">
        <div className="text-center">
          <Header Header="Stacks" />
        </div>
        <div className="mx-auto">
          <Stacks stacks={stacks} />
        </div>
      </section>

      <section id="portfolio">
        <div>
          <Title title="Portfolio" />
        </div>
        <div className="flex flex-col gap-3">
          {/* Portfolio card */}
          {filterPortfolio.map(() => (
            <PortfolioCard
              image={assets.image2}
              urls={urls}
              tags={tags}
              projectStacks={projectStacks}
            />
          ))}
        </div>

        {/* React Paginate Component */}
        <div className="mt-11">
          <ReactPaginate
            className="flex justify-center items-center gap-4"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            breakLabel={"⦁⦁⦁"}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            activeLinkClassName={"bg-teal-500 text-white"}
            pageLinkClassName={`bg-teal-100 px-2 py-1 border-2 rounded-md transition duration-300 ease-in-out hover:bg-teal-300 text-night_dark`}
            previousLabel={
              currentPage > 0 && (
                <IoMdArrowRoundBack className="text-teal-500 hover:text-teal-700 w-6 h-6 border-2 rounded-full" />
              )
            }
            previousAriaLabel={"Previous"}
            nextLabel={
              currentPage + 1 < pageCount && (
                <IoMdArrowRoundForward className="text-teal-500 hover:text-teal-700 w-6 h-6 border-2 rounded-full" />
              )
            }
            nextAriaLabel={"Next"}
          />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
