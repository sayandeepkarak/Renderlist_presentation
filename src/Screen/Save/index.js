import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Firebase";
import { useDispatch } from "react-redux";
import { fetchallplaylists } from "../../App/allDataSlice";
import { useSelector } from "react-redux";

const Save = () => {
  const dispatch = useDispatch();
  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "Playlists"));
      dispatch(fetchallplaylists(data.docs));
    };
    getData();
  }, []);
  return (
    <>
      <CardArea>
        {allPlaylists.map((data) => {
          return <Card key={data.Id} data={data} hascontrol={true} />;
        })}
      </CardArea>
    </>
  );
};

export default Save;
