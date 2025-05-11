import React from "react";

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div
      className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-white text-gray-900`}
    >
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
