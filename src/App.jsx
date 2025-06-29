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
import CandidateProfile from "./Components/CandidateProfile";
import Carasuol from "./Components/Carasuol";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        <Route path="/Candidate/profile/:id" element={<CandidateProfile />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
