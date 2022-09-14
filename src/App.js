import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Screen/Header";
import SideBar from "./Screen/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Screen/Home";
import { FlexBlock, FlexCenter } from "./Components/Div";
import Playlists from "./Screen/PlayLists";
import Save from "./Screen/Save";
import Error from "./Components/Error";
import Watch from "./Screen/VideoPlayer";
import ProtectedVideoPlayer from "./Screen/VideoPlayer/ProtectedVideoPlayer";
import { ScaleLoader } from "react-spinners";
import { CrudContext } from "./Context/CrudContext";
import { AuthContext } from "./Context/AuthContext";
import Login from "./Screen/Auth/Login";
import Signup from "./Screen/Auth/Signup";

const App = () => {
  const [pageLoader, setPageLoader] = useState(false);
  useEffect(() => {
    setPageLoader(true);
    setTimeout(() => {
      setPageLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {pageLoader ? (
        <FlexCenter>
          <ScaleLoader color="#242560" loading={pageLoader} />
        </FlexCenter>
      ) : (
        <>
          <AuthContext>
            <CrudContext>
              <Header />
              <FlexBlock>
                <SideBar />
                <Routes>
                  <Route end path="/" element={<Navigate to="/home" />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/Signup" element={<Signup />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/playlists" element={<Playlists />} />
                  <Route element={<ProtectedVideoPlayer />}>
                    <Route path="/watch/:playlist/:id" element={<Watch />} />
                  </Route>
                  <Route path="/save" element={<Save />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </FlexBlock>
            </CrudContext>
          </AuthContext>
        </>
      )}
    </>
  );
};

export default App;
