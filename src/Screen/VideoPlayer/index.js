import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActivePlaylist } from "../../App/activePlaylistSlice";
import { FlexCenter } from "../../Components/styles/Div";
import { ScaleLoader } from "react-spinners";
import Watch from "./Watch";

const ProtectedVideoPlayer = () => {
  const allPlaylist = useSelector((state) => state.allPlayListReducers.value);
  const dispatch = useDispatch();
  const { playlistid, videoid } = useParams();
  const [load, setload] = useState(true);

  useEffect(() => {
    allPlaylist.length > 0 && setload(false);
  }, [allPlaylist]);

  if (load) {
    return (
      <>
        <FlexCenter>
          <ScaleLoader color="#242560" loading={true} />
        </FlexCenter>
      </>
    );
  }
  const pIndex = allPlaylist.findIndex((e) => e.Id === playlistid);
  if (pIndex < 0) return <Navigate to="/" />;
  const vIndex = allPlaylist[pIndex].Items.findIndex((e) => e.id === videoid);
  if (vIndex < 0) return <Navigate to="/" />;
  dispatch(setActivePlaylist(allPlaylist[pIndex]));

  return <Watch />;
};

export default ProtectedVideoPlayer;
