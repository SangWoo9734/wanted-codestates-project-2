import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const GlobalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* overflow: scroll; */
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
        </Routes>
        <Footer />
      </Router>
    </GlobalContainer>
  );
}

export default App;
