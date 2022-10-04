import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";
import { useAuthContext } from "../../Context/AuthContext";
import { MiniText } from "../../Components/Error";

const Save = () => {
  const { searchValue } = useCrudContext();
  const { handleFetchuserData, currentuser, load } = useAuthContext();

  const allPlaylists = useSelector(
    (state) => state.userPlaylistsReducers.value
  );
  const filterplaylist = allPlaylists.filter((item) => {
    return item["Title"].toLowerCase().includes(searchValue);
  });

  useEffect(() => {
    handleFetchuserData(currentuser.id);
  }, []);

  return (
    <>
      <CardArea>
        {allPlaylists.length !== 0 ? (
          (filterplaylist.length !== 0) & (allPlaylists.length > 0) ? (
            filterplaylist.map((data) => {
              return (
                <Card
                  key={data.Id}
                  data={data}
                  editaccess={true}
                  hascontrol={true}
                  viewCount={false}
                  videoPlayer={false}
                  loading={load}
                />
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

export default Save;
