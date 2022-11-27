import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActivePlaylist } from "../../App/activePlaylistSlice";
import { FlexCenter } from "../../Components/styles/Div";
import { ScaleLoader } from "react-spinners";

const ProtectedVideoPlayer = () => {
  const allPlaylist = useSelector((state) => state.allPlayListReducers.value);
  const dispatch = useDispatch();
  const { playlist, id } = useParams();
  let checkPath = false;
  if (allPlaylist.length === 0) {
    return (
      <>
        <FlexCenter>
          <ScaleLoader color="#242560" loading={true} />
        </FlexCenter>
      </>
    );
  } else {
    allPlaylist.map((element) => {
      return (
        element.Id === playlist &&
        element.Items.map(
          (e) => e.id === id && (checkPath = true),
          dispatch(setActivePlaylist(element))
        )
      );
    });
    return checkPath ? <Outlet /> : <Navigate to="/" />;
  }
};

export default ProtectedVideoPlayer;
