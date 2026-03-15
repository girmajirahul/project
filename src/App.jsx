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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeSection from "./Components/Admin/pages/Home";
import JobListSection from "./Components/Admin/pages/JobList";
import UserList from "./Components/Admin/pages/Users";

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}  // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
      />
      {!hideLayout && <Navbar />}

      <Routes>

        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Candidates" element={<Candidates />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/Candidate/profile/:id" element={<CandidateProfile />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Dashboard Layout */}
        <Route path="/admin/dashboard" element={<Dashboard />}>

          <Route index element={<HomeSection />} />
          <Route path="joblist" element={<JobListSection />} />
          <Route path="userList" element={<UserList />} />


        </Route>

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

export default App;