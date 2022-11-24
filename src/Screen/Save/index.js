import React, { useEffect, useRef, useState } from "react";
import { Card } from "../../Components/Others/Card";
import { CardArea } from "../../Components/styles/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";
import { useAuthContext } from "../../Context/AuthContext";

const Save = () => {
  const { searchValue } = useCrudContext();
  const { handleFetchuserData, currentuser } = useAuthContext();
  const [loading, setloading] = useState(false);
  const render = useRef(true);
  const allPlaylists = useSelector(
    (state) => state.userPlaylistsReducers.value
  );
  const filterplaylist = allPlaylists.filter((item) => {
    return item["Title"].toLowerCase().includes(searchValue);
  });

  useEffect(() => {
    if (!render.current) return;
    setloading(true);
    handleFetchuserData(currentuser.id).then(() => setloading(false));
    render.current = false;
  }, [handleFetchuserData, currentuser.id]);

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
              loading={loading}
            />
          );
        })}
      </CardArea>
    </>
  );
};

export default Save;
