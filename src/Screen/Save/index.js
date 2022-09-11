import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";

const Save = () => {
  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);
  const { GetAllPlaylist, load, searchValue } = useCrudContext();

  useEffect(() => {
    GetAllPlaylist();
  }, []);

  return (
    <>
      <CardArea>
        {allPlaylists
          .filter((item) => {
            return item["Title"].toLowerCase().includes(searchValue);
          })
          .map((data) => {
            return (
              <Card
                key={data.Id}
                data={data}
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
