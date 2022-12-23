import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FlexCenter } from "../../Components/styles/Div";
import Channels from "./Channels";
import { ScaleLoader } from "react-spinners";
import { useAuthContext } from "../../Context/AuthContext";
import { useRef } from "react";

const Users = () => {
  const { userid } = useParams();
  const navigate = useNavigate();
  const { fetchRandomUserdata } = useAuthContext();
  const playlists = useSelector((state) => state.allPlayListReducers.value);
  const [load, setload] = useState(true);
  const [userdata, setuserdata] = useState({});
  const render = useRef(true);

  useEffect(() => {
    if (render.current) {
      const checkValid = async () => {
        try {
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
        } catch (err) {
          console.log(err);
        }
      };
      render.current = false;
      checkValid().then(() => setload(false));
    }
  }, [navigate, userid, playlists, fetchRandomUserdata]);

  if (load) {
    return (
      <>
        <FlexCenter>
          <ScaleLoader color="#242560" loading={true} />
        </FlexCenter>
      </>
    );
  } else {
    return <Channels userdetails={userdata} />;
  }
};

export default Users;
