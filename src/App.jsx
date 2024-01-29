import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/LandingPage/LandingPage";
import CallingPage from "./Components/CallingPage/CallingPage";

function App() {
  return (
    <div className="main_container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat/:meatingId" element={<CallingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
