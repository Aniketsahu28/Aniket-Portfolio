import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DesktopNavbar from "./Components/DesktopNavbar"
import MobileNavbar from "./Components/MobileNavbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Project from "./Components/Project"
import Experiences from "./Components/Experiences";
import Achievements from "./Components/Achievements";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 850 ? true : false
  );

  function checkIsMobile() {
    setIsMobile(window.innerWidth < 850 ? true : false);
  }

  window.onresize = checkIsMobile;
  return (
    <Router>
      <div className="bg-black flex flex-col items-center pt-3 lap:pt-6">
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        <HeroSection />
        <About />
        <Technologies />
        <Project />
        <Experiences />
        <Achievements />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App
