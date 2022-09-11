import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";

const Playlists = () => {
  const {
    GetAllPlaylist,
    miniUpdate,
    deletePlaylist,
    load,
    searchValue,
  } = useCrudContext();
  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);

  useEffect(() => {
    GetAllPlaylist();
  }, []);

  const handleshowhidePlaylist = (id, value) => {
    miniUpdate(id, {
      Hide: value,
    });
    GetAllPlaylist();
  };

  const handleDeletePlaylist = async (id) => {
    deletePlaylist(id);
    GetAllPlaylist();
  };

  return (
    <>
      <CardArea>
        {allPlaylists
          .filter((item) => {
            return item["Title"].toLowerCase().includes(searchValue);
          })
          .map((data) => {
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
          })}
      </CardArea>
    </>
  );
};

export default Playlists;
