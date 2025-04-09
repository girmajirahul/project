import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Candidates from "./Components/Candidates";
//import axios from "axios


const App = () => {
  

  return (
    <>
      {/* <div>
       <Navbar/>
       <Home/>
       <About/>
      </div> */}

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Candidates" element={<Candidates />}/>
          <Route path="/Login" element={<Login /> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
    
    
  );
};

export default App;
