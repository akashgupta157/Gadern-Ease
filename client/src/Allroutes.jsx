import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import BlogPost from "./pages/BlogPost";

import { Plants } from "./pages/Plants";

import SinglePlantPage from "./components/SinglePlantPage";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog_post" element={<BlogPost />} />

      <Route path="/plants" element={<Plants />} />

      <Route path="/plants/:id" element={<SinglePlantPage />} />

    </Routes>
  );
}
