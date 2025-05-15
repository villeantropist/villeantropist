import React, { createContext, useContext } from "react";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
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
} from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

export const PortfolioContext = createContext();
export const usePortfolioContext = () => useContext(PortfolioContext);

const PortfolioContextProvider = ({ children }) => {
  const stacks = [
    { stack: "Python", icon: <FaPython /> },
    { stack: "Django", icon: <SiDjango /> },
    { stack: "DRF", icon: <SiDjango /> },
    { stack: "Flask", icon: <FaPython /> },
    { stack: "React", icon: <FaReact /> },
    { stack: "JavaScript", icon: <FaJs /> },
    { stack: "NodeJs", icon: <FaNodeJs /> },
    { stack: "HTML", icon: <FaHtml5 /> },
    { stack: "CSS", icon: <FaCss3Alt /> },
  ];

  const allTechStacks = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Svelte",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "Flask",
    "FastAPI",
    "Java",
    "Spring Boot",
    "C#",
    ".NET",
    "C++",
    "PHP",
    "Laravel",
    "Ruby",
    "Rails",
    "Go",
    "Rust",
    "Kotlin",
    "Swift",
    "Objective-C",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "Redis",
    "Firebase",
    "Supabase",
    "GraphQL",
    "REST API",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "Linux",
    "CI/CD",
    "Git",
    "Jenkins",
    "Ansible",
    "Terraform",
    "TailwindCSS",
    "Bootstrap",
    "Material UI",
    "Chakra UI",
    "Figma",
    "Adobe XD",
    "JIRA",
    "Agile",
    "Scrum",
    "Trello",
    "Webpack",
    "Vite",
    "Parcel",
    "Jest",
    "Mocha",
    "Cypress",
    "Playwright",
    "Three.js",
    "WebSockets",
    "Socket.IO",
    "Nginx",
    "Apache",
    "SEO",
    "WordPress",
    "Shopify",
    "Magento",
    "Salesforce",
    "Power BI",
    "Tableau",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "LangChain",
    "LLMs",
    "OpenAI API",
    "ChatGPT SDK",
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

  const value = { stacks, allTechStacks, urls, tags, projectStacks };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
