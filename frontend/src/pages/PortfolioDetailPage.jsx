import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Header from "../components/Header";
import Tags from "../components/Tags";
import ProjectStacks from "../components/ProjectStacks";

import {
  FaCalendarDays,
  FaGithub,
  FaGlobe,
  FaLink,
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaLock,
} from "react-icons/fa6";

const PortfolioDetailPage = () => {
  // delete later
  const urls = [
    {
      name: "Git",
      title: "View Github repository",
      url: "https://www.github.com",
      icon: <FaGithub />,
    },
    {
      name: "Website",
      title: "Visit live project",
      url: "https://www.project.com",
      icon: <FaGlobe />,
    },
    {
      name: "Blog",
      title: "Project write-up",
      url: "https://www.villeantropist.com",
      icon: <FaLink />,
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
      title: "Facebook Post",
      url: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
    {
      name: "LinkedIn",
      title: "LinkedIn Post",
      url: "https://www.linkedin.com",
      icon: <FaLinkedinIn />,
    },
  ];
  // delete later
  const tags = [
    { tag: "Ecommerce" },
    { tag: "Fullstack" },
    { tag: "Responsive" },
    { tag: "SecureAuth" },
  ];
  // delete later
  const projectStacks = [
    { stack: "Python", icon: <FaGithub /> },
    { stack: "Django", icon: <FaGithub /> },
    { stack: "Django Rest Framework", icon: <FaGithub /> },
    { stack: "React", icon: <FaGithub /> },
  ];

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto flex flex-col gap-6">
      <Header heading="Django Ecommerce Website" />

      <div>
        {/* <p className="text-center mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          temporibus voluptatibus nam sed esse dolore atque aliquam rem possimus
          neque iure magnam saepe, omnis vero consectetur labore totam impedit
          suscipit error assumenda quibusdam adipisci tenetur. Numquam similique
          distinctio temporibus dignissimos, error cumque beatae fuga id quia
          sequi quod velit ea. Aliquid, fuga laboriosam beatae minus a adipisci
          repellendus, deleniti aut id ut exercitationem veritatis vel
          consequuntur aspernatur quos ab modi iste minima! Sed possimus odio
          nemo neque quaerat inventore adipisci est consequatur blanditiis
          officiis vitae doloribus ea enim tempore autem illo, nam provident
          cupiditate non incidunt recusandae ab corrupti? Ipsa!
        </p> */}

        <div className="flex justify-center mb-4">
          <img
            src={assets.image2}
            alt="project"
            className="shadow-custombox rounded-2xl max-w-md w-full"
          />
        </div>

        {/* Use either of these if preferred */}
        {/* Fixed Height for a consistent visible size */}
        {/* <div className="flex justify-center">
            <img
              src={assets.image}
              alt="project"
              className="shadow-custombox rounded-2xl w-full max-w-sm md:max-w-lg lg:max-w-xl h-64 object-cover"
            />
          </div> */}

        {/* Aspect Ratio (Preferred for responsive design) */}
        {/* <div className="flex justify-center">
          <div className="w-full max-w-sm md:max-w-lg lg:max-w-4xl aspect-video">
            <img
              src={assets.image}
              alt="project"
              className="shadow-custombox rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div> */}

        <div className="text-gray-800 leading-relaxed text-[15px] sm:text-base">
          <p>
            This Django-powered ecommerce platform includes a secure customer
            login system, admin product control, shopping cart, order history,
            and Stripe payment integration. The frontend is fully responsive and
            built with React. It follows a RESTful architecture using Django
            Rest Framework.
          </p>
          <p className="mt-4">
            I designed it with scalability and performance in mind using
            caching, lazy loading, reusable components, and clean modular code
            structure.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {/* Tags */}
          <Tags tags={tags} />

          {/* Stacks */}
          <ProjectStacks projectStacks={projectStacks} />
          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-night_dark">
              Explore
            </h3>
            <div className="flex flex-wrap gap-3">
              {urls.map(({ icon, title, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                  className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-3 py-2 rounded-lg transition duration-300 text-sm"
                >
                  {icon}
                  {title === "View Github repository" && (
                    <FaLock
                      className="text-red-400 text-xs"
                      title="Repo is private"
                    />
                  )}
                  <span>{title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Detail */}
        <div className="text-sm text-gray-600 flex items-center gap-2 mt-4">
          <FaCalendarDays /> Last Updated: <span>May 10, 2025</span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default PortfolioDetailPage;
