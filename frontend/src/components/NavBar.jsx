import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navRoutes = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/hire", label: "Hire Me" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About Me" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-neutral-900 text-white border-b-2">
      <div className="flex items-center justify-between px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-4">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-xl font-bold cursor-pointer tracking-wide"
        >
          Villeantropist
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex gap-6 items-center text-sm font-medium">
          {navRoutes.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `relative transition-colors duration-200 hover:text-teal-300 ${
                  isActive ? "text-teal-400 font-semibold" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (
              <CloseIcon className="w-7 h-7" />
            ) : (
              <MenuIcon className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`sm:hidden bg-neutral-800 text-white transition-all duration-200 ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-3">
          {navRoutes.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-1 transition-all border-b border-green-700 ${
                  isActive ? "text-teal-400 font-semibold" : "text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
