import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";
import { useAuthContext } from "../../Context/AuthContext";

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
        {filterplaylist.map((data) => {
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
        })}
      </CardArea>
    </>
  );
};

export default Save;
