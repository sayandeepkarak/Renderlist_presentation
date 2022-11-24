import React, { useEffect, useRef, useState } from "react";
import { Card } from "../../Components/Others/Card";
import { CardArea } from "../../Components/styles/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";

const Home = () => {
  const { GetAllPlaylist, miniUpdate, searchValue } = useCrudContext();
  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);
  const filterplaylist = allPlaylists.filter((item) => {
    return item["Title"].toLowerCase().includes(searchValue);
  });
  const [loading, setloading] = useState(false);
  const render = useRef(true);

  useEffect(() => {
    if (!render.current) return;
    setloading(true);
    GetAllPlaylist().then(() => setloading(false));
    render.current = false;
  }, [GetAllPlaylist]);

  const countView = (userid, id, value) => {
    miniUpdate(userid, id, {
      Views: value,
    });
  };

  return (
    <>
      <CardArea>
        {filterplaylist.map((data) => {
          return !data.Hide & (data.Items.length > 0) ? (
            <Card
              key={data.Id}
              data={data}
              viewCount={true}
              viewCounter={countView}
              loading={loading}
              videoPlayer={true}
            />
          ) : null;
        })}
      </CardArea>
    </>
  );
};

export default Home;
