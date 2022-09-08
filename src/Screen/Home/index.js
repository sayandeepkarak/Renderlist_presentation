import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useDispatch } from "react-redux";
import { fetchallplaylists } from "../../App/allDataSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);

  const countView = async (id, value) => {
    try {
      await updateDoc(doc(db, "Playlists", id), {
        Views: value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(collection(db, "Playlists"));
        dispatch(fetchallplaylists(data.docs));
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [dispatch]);

  return (
    <>
      <CardArea>
        {allPlaylists.map((data) => {
          return !data.Hide & (data.Items.length > 0) ? (
            <Card
              key={data.Id}
              data={data}
              viewCount={true}
              viewCounter={countView}
              videoPlayer={true}
            />
          ) : null;
        })}
      </CardArea>
    </>
  );
};

export default Home;
