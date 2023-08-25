import React from "react";
import Allroutes from "./Allroutes";
import { Navbar } from "./components/Navbar";
import { useLocation } from "react-router-dom";
import { Plants } from "./pages/Plants";
export default function App() {
  const path = useLocation();
  return (
    <div>
       {path.pathname === "/login" || path.pathname === "/register" ? null : (
        <Navbar />
      )}

      <Allroutes /> 
     
    </div>
  );
}
