import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import OnlineCompiler from "./Components/online-compiler/OnlineCompiler";

function SiteRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<OnlineCompiler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRouter;
