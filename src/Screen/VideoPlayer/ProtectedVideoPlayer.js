import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivePlaylist } from "../../App/activePlaylistSlice";

const ProtectedVideoPlayer = () => {
  const dispatch = useDispatch();
  const allPlaylist = useSelector((state) => state.allPlayListReducers.value);
  const { playlist, id } = useParams();
  const pathConfirm = allPlaylist.map((element) => {
    let checkPath = false;
    element.Id === playlist &&
      element.Items.map(
        (e) => e.id === id && (checkPath = true),
        dispatch(fetchActivePlaylist(element))
      );
    return checkPath;
  });
  return pathConfirm[0] ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedVideoPlayer;
