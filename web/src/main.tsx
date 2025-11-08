import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App(){
  return (
    <BrowserRouter>
      <nav className="p-4 bg-slate-100">
        <Link className="mr-4" to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById("root")!).render(<App />);
