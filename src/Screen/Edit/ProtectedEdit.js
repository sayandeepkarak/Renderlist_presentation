import React, { useEffect } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { FlexCenter } from "../../Components/styles/Div";
import { ScaleLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { setActivePlaylist } from "../../App/activePlaylistSlice";
import { useAuthContext } from "../../Context/AuthContext";

const ProtectedEdit = () => {
  const allPlaylists = useSelector(
    (state) => state.userPlaylistsReducers.value
  );
  const { handleFetchuserData, currentuser } = useAuthContext();

  useEffect(() => {
    handleFetchuserData(currentuser.id);
  }, [handleFetchuserData, currentuser.id]);

  const { editid } = useParams();
  const dispatch = useDispatch();
  let checkpath = false;

  if (allPlaylists.length === 0) {
    return (
      <>
        <FlexCenter>
          <ScaleLoader color="#242560" loading={true} />
        </FlexCenter>
      </>
    );
  } else {
    allPlaylists.map((e) => {
      if (e.Id === editid) {
        dispatch(setActivePlaylist(e));
        checkpath = true;
      }
      return null;
    });
    return checkpath ? <Outlet /> : <Navigate to="/" />;
  }
};

export default ProtectedEdit;
