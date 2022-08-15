import React from "react";
import Globalstyle from "./Components/GlobalStyle";
import Header from "./Screen/Header";
import SideBar from "./Screen/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Screen/Home";
import { FlexBlock } from "./Components/Div";
import Playlists from "./Screen/PlayLists";
import Save from "./Screen/Save";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <Globalstyle />
      <Header />
      <FlexBlock>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/save" element={<Save />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </FlexBlock>
    </>
  );
}

export default App;
