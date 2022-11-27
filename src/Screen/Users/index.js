import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { FlexCenter } from "../../Components/styles/Div";
import Channels from "./Channels";
import { ScaleLoader } from "react-spinners";

const Users = () => {
  const { userid } = useParams();
  const playlists = useSelector((state) => state.allPlayListReducers.value);
  if (playlists.length === 0) {
    return (
      <>
        <FlexCenter>
          <ScaleLoader color="#242560" loading={true} />
        </FlexCenter>
      </>
    );
  } else {
    const checkValid = () => {
      for (let e of playlists) {
        if (e.userId === userid) {
          return {
            status: true,
            userId: e.userId,
            name: e.UserName,
            photoUrl: e.photo,
          };
        }
      }
      return { status: false };
    };
    const details = checkValid();
    return details.status ? (
      <Channels userdetails={details} />
    ) : (
      <Navigate to="/" />
    );
  }
};

export default Users;
