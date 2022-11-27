import React from "react";
import { CardArea } from "../styles/Div";
import { useCrudContext } from "../../Context/CrudContext";
import { Card } from "../Others/Card";

const Items = ({ playlists, load }) => {
  const { searchValue } = useCrudContext();
  const filterplaylist = playlists.filter((item) => {
    return item["Title"].toLowerCase().includes(searchValue);
  });

  return (
    <>
      <CardArea>
        {filterplaylist.map((data) => {
          return (
            <Card key={data.Id} data={data} videoPlayer={true} loading={load} />
          );
        })}
      </CardArea>
    </>
  );
};

export default Items;
