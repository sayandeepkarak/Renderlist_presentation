import React, { useEffect } from "react";
import { Card } from "../../Components/Others/Card";
import { CardArea } from "../../Components/styles/Div";
import { useSelector } from "react-redux";
import { useCrudContext } from "../../Context/CrudContext";
import { useState } from "react";

const Home = () => {
  const { miniUpdate, searchValue, FetchPlaylists } = useCrudContext();
  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);
  const filterplaylist = allPlaylists.filter((item) => {
    return item["Title"].toLowerCase().includes(searchValue);
  });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    return async () => {
      try {
        setLoad(true);
        await FetchPlaylists();
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
  }, [FetchPlaylists]);

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
