import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import Ranking from "./pages/Ranking";
import KartTrack from "./pages/KartTrack";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const GlobalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: white;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <GlobalContainer>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserInfo />} />
          <Route path="/rank" element={<Ranking />} />
          <Route path="/bodytrack" element={<KartTrack />} />
        </Routes>
      </Router>
      <Footer />
    </GlobalContainer>
  );
}

export default App;
