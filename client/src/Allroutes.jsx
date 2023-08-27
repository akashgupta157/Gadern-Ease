import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import BlogPost from "./pages/BlogPost";
import { Plants } from "./pages/Plants";
import SinglePlantPage from "./components/SinglePlantPage";
import { Home } from "./components/Home";
import { useSelector } from "react-redux";
export default function Allroutes() {
  const auth = useSelector((state) => state.authReducer.isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {auth ? (
        <Route path="/blog_post" element={<BlogPost />} />
      ) : (
        <Route path="/" element={<Home />} />
      )}
      <Route path="/plants" element={<Plants />} />
      <Route path="/plants/:id" element={<SinglePlantPage />} />
    </Routes>
  );
}
