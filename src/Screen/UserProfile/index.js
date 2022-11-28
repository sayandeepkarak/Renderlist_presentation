import React, { useEffect, useState } from "react";
import { AccountScreenArea } from "../../Components/styles/Account";
import { useAuthContext } from "../../Context/AuthContext";
import TitleBlock from "../../Components/Others/TitleBlock";
import Items from "../../Components/Others/Items";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const userPlaylists = useSelector(
    (state) => state.userPlaylistsReducers.value
  );
  const { currentuser } = useAuthContext();
  const { handleFetchuserData } = useAuthContext();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    return async () => {
      try {
        await handleFetchuserData(currentuser.id);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
  }, [handleFetchuserData, currentuser]);

  return (
    <>
      <AccountScreenArea>
        <TitleBlock
          data={{ ...currentuser, itemslength: userPlaylists.length }}
        />
        <Items load={loading} playlists={userPlaylists} />
      </AccountScreenArea>
    </>
  );
};

export default UserProfile;
