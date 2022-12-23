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
  const allPlaylists = useSelector(
    (state) => state.userPlaylistsReducers.value
  );
  const filterplaylist = allPlaylists.filter((item) => {
    return item["Title"].toLowerCase().includes(searchValue);
  });
  const render = useRef(true);

  useEffect(() => {
    if (render.current) {
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
      render.current = false;
      fetchCall();
    }
  }, [handleFetchuserData, currentuser]);

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
