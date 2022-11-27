import React, { useState } from "react";
import Items from "../../Components/Others/Items";
import TitleBlock from "../../Components/Others/TitleBlock";
import { AccountScreenArea } from "../../Components/styles/Account";

const Channels = ({ userdetails }) => {
  const [playlists, setplaylists] = useState([]);

  return (
    <>
      <AccountScreenArea>
        <TitleBlock
          data={{
            ...userdetails.details,
            itemslength: userdetails.playlists.length,
          }}
        />
        <Items load={false} playlists={userdetails.playlists} />
      </AccountScreenArea>
    </>
  );
};

export default Channels;
