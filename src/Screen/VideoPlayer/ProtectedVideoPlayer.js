import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivePlaylist } from "../../App/activePlaylistSlice";

const ProtectedVideoPlayer = () => {
  const allPlaylist = useSelector((state) => state.allPlayListReducers.value);
  const dispatch = useDispatch();
  const { playlist, id } = useParams();
  let checkPath = false;
  allPlaylist.map((element) => {
    return (
      element.Id === playlist &&
      element.Items.map(
        (e) => e.id === id && (checkPath = true),
        dispatch(fetchActivePlaylist(element))
      )
    );
  });
  return checkPath ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedVideoPlayer;
