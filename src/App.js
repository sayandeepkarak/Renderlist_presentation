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
import Login from "./Screen/Auth/Login";
import Signup from "./Screen/Auth/Signup";
import ProtectedScreen from "./Screen/Auth/ProtectedScreen";
import ProtectedEdit from "./Screen/Edit/ProtectedEdit";
import Edit from "./Screen/Edit";
import { useCrudContext } from "./Context/CrudContext";
import { useAuthContext } from "./Context/AuthContext";

const App = () => {
  const { GetAllPlaylist } = useCrudContext();
  const { handleStableLogin } = useAuthContext();
  const [pageLoader, setPageLoader] = useState(false);
  useEffect(() => {
    setPageLoader(true);
    handleStableLogin();
    GetAllPlaylist();
    setTimeout(() => {
      setPageLoader(false);
    }, 5000);
  }, []);

  return (
    <>
      {false ? (
        <FlexCenter>
          <ScaleLoader color="#242560" loading={pageLoader} />
        </FlexCenter>
      ) : (
        <>
          <Header />
          <FlexBlock>
            <SideBar />
            <Routes>
              <Route end path="/" element={<Navigate to="/home" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route element={<ProtectedScreen />}>
                <Route path="/playlists" element={<Playlists />} />
              </Route>
              <Route element={<ProtectedVideoPlayer />}>
                <Route end path="/watch/:playlist/:id" element={<Watch />} />
              </Route>
              <Route element={<ProtectedScreen />}>
                <Route end path="/save">
                  <Route index element={<Save />} />
                  <Route element={<ProtectedEdit />}>
                    <Route path="/save/:editid" element={<Edit />} />
                  </Route>
                </Route>
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </FlexBlock>
        </>
      )}
    </>
  );
};

export default App;
