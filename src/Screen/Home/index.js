import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";

const Home = () => {
  const { GetAllPlaylist, miniUpdate, load, searchValue } = useCrudContext();

  useEffect(() => {
    GetAllPlaylist();
  }, []);

  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);

  const countView = (id, value) => {
    miniUpdate(id, {
      Views: value,
    });
  };

  return (
    <>
      <CardArea>
        {allPlaylists
          .filter((item) => {
            return item["Title"].toLowerCase().includes(searchValue);
          })
          .map((data) => {
            return !data.Hide & (data.Items.length > 0) ? (
              <Card
                key={data.Id}
                data={data}
                viewCount={true}
                viewCounter={countView}
                loading={load}
                videoPlayer={true}
              />
            ) : null;
          })}
      </CardArea>
    </>
  );
};

export default Home;
