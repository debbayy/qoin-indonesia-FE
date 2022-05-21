import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, SideBar } from "../components";

import { Dashboard, Genres, Movies, DetailMovie } from "../pages";

const RoutesComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="d-flex">
          <div className="mt-5" style={{ width: "20%" }}>
            <SideBar />
          </div>
          <div className="mt-5" style={{ width: "75%" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/detail-movie/:id" element={<DetailMovie />} />
              <Route path="/genre" element={<Genres />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default RoutesComponent;
