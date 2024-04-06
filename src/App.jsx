import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DesktopNavbar from "./Components/DesktopNavbar"
import MobileNavbar from "./Components/MobileNavbar";

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
      <div className="bg-black h-[100vh] w-[100vw] flex flex-col items-center py-6">
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}


      </div>
    </Router>
  )
}

export default App
