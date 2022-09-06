import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedVideoPlayer = () => {
  const allPlaylist = useSelector((state) => state.allPlayListReducers.value);
  const { playlist, id } = useParams();
  const pathConfirm = allPlaylist.map((element) => {
    let checkPath = false;
    element.Id === playlist &&
      element.Items.map((e) => e.id === id && (checkPath = true));
    return checkPath;
  });

  return pathConfirm[0] === true ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedVideoPlayer;
