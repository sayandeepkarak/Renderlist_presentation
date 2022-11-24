import React, { useEffect, useRef, useState } from "react";
import { Card } from "../../Components/Others/Card";
import { CardArea } from "../../Components/styles/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";
import { useAuthContext } from "../../Context/AuthContext";

const Playlists = () => {
  const { miniUpdate, deletePlaylist, searchValue } = useCrudContext();
  const { currentuser, handleFetchuserData } = useAuthContext();
  const [loading, setloading] = useState(false);
  const render = useRef(true);

  useEffect(() => {
    if (!render.current) return;
    setloading(true);
    handleFetchuserData(currentuser.id).then(() => setloading(false));
    render.current = false;
  }, [currentuser.id, handleFetchuserData]);

  const allPlaylists = useSelector(
    (state) => state.userPlaylistsReducers.value
  );
  const filterplaylist = allPlaylists.filter((item) => {
    return item["Title"].toLowerCase().includes(searchValue);
  });

  const handleshowhidePlaylist = (id, value) => {
    miniUpdate(currentuser.id, id, { Hide: value }).then(() => {
      handleFetchuserData(currentuser.id);
    });
  };

  const handleDeletePlaylist = (id) => {
    deletePlaylist(currentuser.id, id).then(() => {
      handleFetchuserData(currentuser.id);
    });
  };

  return (
    <>
      <CardArea>
        {filterplaylist.map((data) => {
          return (
            data.Items.length > 0 && (
              <Card
                key={data.Id}
                data={data}
                hascontrol={true}
                menuControl={true}
                viewCount={false}
                videoPlayer={true}
                loading={loading}
                hide={handleshowhidePlaylist}
                remove={handleDeletePlaylist}
              />
            )
          );
        })}
      </CardArea>
    </>
  );
};

export default Playlists;
