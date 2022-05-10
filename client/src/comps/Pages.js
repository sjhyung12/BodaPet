import { Result } from "postcss";
import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Analysis from "./pages/analysis/Analysis";
import Analysis1 from "./pages/analysis/Analysis1";
import Analysis2 from "./pages/analysis/Analysis2";
import Analysis3 from "./pages/analysis/Analysis3";
import Analysis4 from "./pages/analysis/Analysis4";
import Cctv from "./pages/Cctv";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Report from "./pages/Report";

const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cctv" element={<Cctv />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/analysis1" element={<Analysis1 />} />
        <Route path="/analysis2" element={<Analysis2 />} />
        <Route path="/analysis3" element={<Analysis3 />} />
        <Route path="/analysis4" element={<Analysis4 />} />
        <Route path="/report" element={<Report />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </section>
  );
};

export default Pages;
