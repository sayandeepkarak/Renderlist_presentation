import React from "react";
import "./App.css";
import Header from "./Screen/Header";
import SideBar from "./Screen/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Screen/Home";
import { FlexBlock } from "./Components/Div";
import Playlists from "./Screen/PlayLists";
import Save from "./Screen/Save";
import Error from "./Components/Error";
import Watch from "./Screen/VideoPlayer";

const App = () => {
  return (
    <>
      <Header />
      <FlexBlock>
        <SideBar />
        <Routes>
          <Route end path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/save" element={<Save />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </FlexBlock>
    </>
  );
};

export default App;
