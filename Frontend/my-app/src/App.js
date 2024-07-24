import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import CalorieCounter from "./components/CalorieCounter";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Registration from './components/Registration';

const App = () => {
  

  return (
    <Router>
     
      
      <Navbar />
     
          <Hero  />
          <WorkoutSessions />
          <Gallery />
          <Pricing />
          <Contact />
          <BMICalculator />
          <CalorieCounter />
          
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
}

export default App;
