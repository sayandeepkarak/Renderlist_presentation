import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Firebase";
import { useDispatch } from "react-redux";
import { fetchallplaylists } from "../../App/allDataSlice";
import { useSelector } from "react-redux";
import { fetchActivePlaylist } from "../../App/activePlaylistSlice";

const Home = () => {
  const dispatch = useDispatch();
  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);

  const setActivePlaylist = (data) => {
    dispatch(fetchActivePlaylist(data));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(collection(db, "Playlists"));
        dispatch(fetchallplaylists(data.docs));
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <CardArea>
        {allPlaylists.map((data) => {
          return !data.Hide & (data.Items.length > 0) ? (
            <Card
              key={data.Id}
              data={data}
              activePlaylist={setActivePlaylist}
            />
          ) : null;
        })}
      </CardArea>
    </>
  );
};

export default Home;
