import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DesktopNavbar from "./Components/DesktopNavbar"
import MobileNavbar from "./Components/MobileNavbar";
import HeroSection from "./Components/HeroSection";

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 820 ? true : false
  );

  function checkIsMobile() {
    setIsMobile(window.innerWidth < 820 ? true : false);
  }

  window.onresize = checkIsMobile;
  return (
    <Router>
      <div className="bg-black flex flex-col items-center py-6">
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        <HeroSection />
      </div>
    </Router>
  )
}

export default App
