import React from "react";
import Globalstyle from "./Components/GlobalStyle";
import Header from "./Screen/Header";
import SideBar from "./Screen/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Screen/Home";
import { FlexBlock } from "./Components/Div";

function App() {
  return (
    <>
      <Globalstyle />
      <Header />
      <FlexBlock>
        <SideBar />
        <Routes>
          <Route end path="/" element={<Navigate to="/home" />} />
          <Route end path="/home" element={<Home />} />
          <Route end path="/playlists" element={null} />
          <Route end path="/save" element={null} />
        </Routes>
      </FlexBlock>
    </>
  );
}

export default App;
