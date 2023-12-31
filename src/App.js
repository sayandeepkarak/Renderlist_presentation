import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Screen/Header";
import SideBar from "./Components/Others/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Screen/Home";
import { AutoSizeDiv, FlexBlock, FlexCenter } from "./Components/styles/Div";
import Playlists from "./Screen/PlayLists";
import Save from "./Screen/Save";
import Error from "./Components/Others/Error";
import ProtectedVideoPlayer from "./Screen/VideoPlayer";
import { ScaleLoader } from "react-spinners";
import Login from "./Screen/Auth/Login";
import Signup from "./Screen/Auth/Signup";
import ProtectedScreen from "./Screen/Auth/ProtectedScreen";
import ProtectedEdit from "./Screen/Edit/ProtectedEdit";
import Edit from "./Screen/Edit";
import { useCrudContext } from "./Context/CrudContext";
import { useAuthContext } from "./Context/AuthContext";
import { useRef } from "react";
import UserProfile from "./Screen/UserProfile";
import Users from "./Screen/Users";

const App = () => {
  const { FetchPlaylists } = useCrudContext();
  const { handleStableLogin } = useAuthContext();
  const [pageLoader, setPageLoader] = useState(true);
  const render = useRef(true);

  useEffect(() => {
    if (!render.current) return;
    setPageLoader(true);
    handleStableLogin();
    FetchPlaylists().then(() => setPageLoader(false));
    render.current = false;
  }, [FetchPlaylists, handleStableLogin]);

  return (
    <>
      {pageLoader ? (
        <FlexCenter>
          <ScaleLoader color="#242560" loading={pageLoader} />
        </FlexCenter>
      ) : (
        <>
          <Header />
          <FlexBlock>
            <SideBar />
            <AutoSizeDiv>
              <Routes>
                <Route end path="/" element={<Navigate to="/home" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route element={<ProtectedScreen />}>
                  <Route path="/playlists" element={<Playlists />} />
                </Route>
                <Route
                  path="/watch/:playlistid/:videoid"
                  element={<ProtectedVideoPlayer />}
                />
                <Route element={<ProtectedScreen />}>
                  <Route end path="/save">
                    <Route index element={<Save />} />
                    <Route element={<ProtectedEdit />}>
                      <Route path="/save/:editid" element={<Edit />} />
                    </Route>
                  </Route>
                </Route>
                <Route element={<ProtectedScreen />}>
                  <Route path="/profile" element={<UserProfile />} />
                </Route>
                <Route path="/users/:userid" element={<Users />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </AutoSizeDiv>
          </FlexBlock>
        </>
      )}
    </>
  );
};

export default App;
