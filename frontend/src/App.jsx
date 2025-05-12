import React from "react";

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import About from "./pages/About";
import HireMe from "./pages/HireMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className={`bg-white text-gray-900 gap-0`}>
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <div className={`px-4 sm:px-[15vw] md:px-[17vw] lg:px-[22vw]`}>
        <div className="px-4 sm:px-8 shadow-custom py-4">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Routes>
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<HireMe />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
