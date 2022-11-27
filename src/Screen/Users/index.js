import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FlexCenter } from "../../Components/styles/Div";
import Channels from "./Channels";
import { ScaleLoader } from "react-spinners";
import { useAuthContext } from "../../Context/AuthContext";

const Users = () => {
  const { userid } = useParams();
  const navigate = useNavigate();
  const { fetchRandomUserdata } = useAuthContext();
  const playlists = useSelector((state) => state.allPlayListReducers.value);
  const [load, setload] = useState(true);
  const [userdata, setuserdata] = useState({});

  const checkValid = async () => {
    for (let e of playlists) {
      if (e.userId === userid) {
        const data = await fetchRandomUserdata(e.userId);
        setuserdata({
          details: {
            status: true,
            userId: e.userId,
            name: e.UserName,
            photoUrl: e.photo,
          },
          playlists: data,
        });
        return;
      }
    }
    navigate("/");
  };

  useEffect(() => {
    return () => {
      checkValid().then(() => setload(false));
    };
  }, [userid, playlists.length]);

  if (load) {
    return (
      <>
        <FlexCenter>
          <ScaleLoader color="#242560" loading={true} />
        </FlexCenter>
      </>
    );
  }
  return <Channels userdetails={userdata} />;
};

export default Users;
