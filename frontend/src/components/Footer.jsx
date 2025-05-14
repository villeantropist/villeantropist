import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaUpwork,
  FaGlobe,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "GitHub",
      title: "Visit my GitHub",
      url: "https://github.com",
      icon: <FaGithub />,
    },
    {
      name: "Upwork",
      title: "Visit my Upwork",
      url: "https://www.upwork.com",
      icon: <FaUpwork />,
    },
    {
      name: "LinkedIn",
      title: "Visit my LinkedIn",
      url: "https://www.linkedin.com",
      icon: <FaLinkedinIn />,
    },
    {
      name: "YouTube",
      title: "Visit my YouTube",
      url: "https://www.youtube.com",
      icon: <FaYoutube />,
    },
    {
      name: "Twitter (X)",
      title: "Visit my Twitter (X)",
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
    <footer className="bg-neutral-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About or Logo */}
        <div>
          <h3 className="text-xl font-bold mb-2">Villeantropist</h3>
          <p className="text-sm text-gray-300">
            Building impactful digital solutions with modern web technologies.
            Passionate about innovation, clean code, and great user experience.
          </p>
        </div>

        {/* Column 2: Navigation or Services */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1 text-gray-300">
            <li>
              <a href="/#portfolio" className="hover:text-teal-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-teal-400">
                About
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:text-teal-400">
                Services
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-teal-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect with Me</h4>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ name, url, title, icon }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="p-2 bg-neutral-800 hover:bg-teal-600 transition rounded-lg text-white text-xl"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-neutral-800 pt-4">
        &copy; {currentYear} Villeantropist. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
