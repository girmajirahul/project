import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Candidates from "./Components/Candidates";
import Profile from "./Components/Profile";
import AdminLogin from "./Components/Admin/AdminLogin";
import Dashboard from "./Components/Admin/Dasboard";

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/admin");
  return (
    <>
     {!hideLayout && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Candidates" element={<Candidates />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dasboard" element={<Dashboard />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
