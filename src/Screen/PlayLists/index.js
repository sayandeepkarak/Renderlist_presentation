import React, { useEffect, useState } from "react";
import { Card } from "../../Components/Others/Card";
import { CardArea } from "../../Components/styles/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Playlists = () => {
  const { miniUpdate, deletePlaylist, searchValue } = useCrudContext();
  const { currentuser, handleFetchuserData } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

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
      navigate("/playlists");
      handleFetchuserData(currentuser.id);
    });
  };

  useEffect(() => {
    const fetchCall = async () => {
      try {
        setloading(true);
        await handleFetchuserData(currentuser.id);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    fetchCall();
  }, [currentuser, handleFetchuserData]);

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
