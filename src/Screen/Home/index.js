import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";
import { MiniText } from "../../Components/Error";

const Home = () => {
  const { GetAllPlaylist, miniUpdate, load, searchValue } = useCrudContext();
  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);
  const filterplaylist = allPlaylists.filter((item) => {
    return item["Title"].toLowerCase().includes(searchValue);
  });

  useEffect(() => {
    GetAllPlaylist();
  }, []);

  const countView = (userid, id, value) => {
    miniUpdate(userid, id, {
      Views: value,
    });
  };

  return (
    <>
      <CardArea>
        {allPlaylists.length !== 0 ? (
          (filterplaylist.length !== 0) & (allPlaylists.length > 0) ? (
            filterplaylist.map((data) => {
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

export default Home;
