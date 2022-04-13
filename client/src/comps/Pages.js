import { Result } from "postcss";
import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Analysis from "./pages/Analysis";
import Analysis2 from "./pages/Analysis2";
import Cctv from "./pages/Cctv";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Report from "./pages/Report";

const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cctv" element={<Cctv />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/analysis2" element={<Analysis2 />} />
        <Route path="/report" element={<Report />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </section>
  );
};

export default Pages;