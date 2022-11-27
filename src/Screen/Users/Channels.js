import React, { useEffect, useState } from "react";
import Items from "../../Components/Others/Items";
import TitleBlock from "../../Components/Others/TitleBlock";
import { AccountScreenArea } from "../../Components/styles/Account";
import { FlexCenter } from "../../Components/styles/Div";
import { useAuthContext } from "../../Context/AuthContext";
import { ScaleLoader } from "react-spinners";

const Channels = ({ userdetails }) => {
  const { fetchRandomUserdata } = useAuthContext();
  const [load, setload] = useState(false);
  const [playlists, setplaylists] = useState([]);

  useEffect(() => {
    return async () => {
      try {
        setload(true);
        const data = await fetchRandomUserdata(userdetails.userId);
        setplaylists(data);
      } catch (error) {
        console.log(error);
      } finally {
        setload(false);
      }
    };
  }, [userdetails, fetchRandomUserdata]);

  if (load) {
    return (
      <>
        <FlexCenter>
          <ScaleLoader color="#242560" loading={true} />
        </FlexCenter>
      </>
    );
  } else {
    return (
      <>
        <AccountScreenArea>
          <TitleBlock data={userdetails} />
          <Items load={load} playlists={playlists} />
        </AccountScreenArea>
      </>
    );
  }
};

export default Channels;
