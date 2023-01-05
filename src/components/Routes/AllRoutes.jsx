import React from "react";
import { Route, Routes } from "react-router-dom";
import Css from "../../../pages/Css";
import Home from "../../../pages/Home";
import Html from "../../../pages/Html";
import Javascript from "../../../pages/Javascript";
import Repositories from "../../../pages/Repositories";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/repositories/:id" element={<Repositories />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
