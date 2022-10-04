import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";
import { useAuthContext } from "../../Context/AuthContext";
import { MiniText } from "../../Components/Error";

const Playlists = () => {
  const { miniUpdate, deletePlaylist, searchValue } = useCrudContext();
  const { currentuser, handleFetchuserData, load } = useAuthContext();

  useEffect(() => {
    handleFetchuserData(currentuser.id);
  }, []);

  const allPlaylists = useSelector(
    (state) => state.userPlaylistsReducers.value
  );
  const filterplaylist = allPlaylists.filter((item) => {
    return item["Title"].toLowerCase().includes(searchValue);
  });

  const handleshowhidePlaylist = (id, value) => {
    miniUpdate(currentuser.id, id, {
      Hide: value,
    });
    handleFetchuserData(currentuser.id);
  };

  const handleDeletePlaylist = (id) => {
    deletePlaylist(currentuser.id, id);
    handleFetchuserData(currentuser.id);
  };

  return (
    <>
      <CardArea>
        {allPlaylists.length !== 0 ? (
          (filterplaylist.length !== 0) & (allPlaylists.length > 0) ? (
            filterplaylist.map((data) => {
              return (
                data.Items.length > 0 && (
                  <Card
                    key={data.Id}
                    data={data}
                    hascontrol={true}
                    menuControl={true}
                    viewCount={false}
                    videoPlayer={true}
                    loading={load}
                    hide={handleshowhidePlaylist}
                    delete={handleDeletePlaylist}
                  />
                )
              );
            })
          ) : (
            <MiniText>No matched result with '{searchValue}'</MiniText>
          )
        ) : (
          <MiniText>No Playlist available</MiniText>
        )}
      </CardArea>
    </>
  );
};

export default Playlists;
