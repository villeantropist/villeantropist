import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "@mui/material/Icon";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const navigate = useNavigate();
  const navRoutes = [
    { path: "", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/hire", label: "Hire Me" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About Me" },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between  py-5 font-medium border-b-2 bg-green-800 text-white px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
      {/* Navigation Links */}
      <p
        onClick={() => {
          navigate("");
        }}
        className="text-xl items-start cursor-pointer"
      >
        Villeantropist
      </p>
      <ul className="hidden sm:flex  gap-5 text-sm">
        {navRoutes.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className="flex flex-col items-center gap-1"
          >
            <p>{label}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white" hidden />
          </NavLink>
        ))}
      </ul>
      {/* Mobile Menu Icon */}
      <Icon class="me-4 sm:hidden">
        <MenuIcon
          onClick={() => setVisible(!visible)}
          sx={{
            transition: "transform 0.3s ease",
            transform: visible ? "rotate(90deg)" : "rotate(0deg)",
            cursor: "pointer",
          }}
        />
      </Icon>

      {/* Mobile Sidebar Menu */}
      <div
        className={`absolute top-16 right-0 bottom-0 z-10 overflow-hidden transition-all ${
          visible ? "left-1/2" : "w-0"
        }`}
      >
        <div className="flex flex-col bg-teal-800">
          {navRoutes.map(({ path, label }) => (
            <NavLink
              key={path}
              onClick={() => setVisible(false)}
              to={path}
              className="py-2 pl-6 border"
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
