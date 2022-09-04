import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import { CardArea } from "../../Components/Div";
import {
  getDocs,
  collection,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../Firebase";
import { useDispatch } from "react-redux";
import { fetchallplaylists } from "../../App/allDataSlice";
import { useSelector } from "react-redux";
import { fetchActivePlaylist } from "../../App/activePlaylistSlice";

const Playlists = () => {
  const dispatch = useDispatch();
  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);

  const handleshowhidePlaylist = async (id, value) => {
    try {
      await updateDoc(doc(db, "Playlists", id), {
        Hide: value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePlaylist = async (id) => {
    try {
      await deleteDoc(doc(db, "Playlists", id));
      const data = await getDocs(collection(db, "Playlists"));
      dispatch(fetchallplaylists(data.docs));
    } catch (error) {
      console.error(error);
    }
  };

  const setActivePlaylist = (data) => {
    dispatch(fetchActivePlaylist(data));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(collection(db, "Playlists"));
        dispatch(fetchallplaylists(data.docs));
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [dispatch]);
  return (
    <>
      <CardArea>
        {allPlaylists.map((data) => {
          return (
            data.Items.length > 0 && (
              <Card
                key={data.Id}
                data={data}
                hascontrol={true}
                menuControl={true}
                viewCount={false}
                videoPlayer={true}
                activePlaylist={setActivePlaylist}
                hide={handleshowhidePlaylist}
                delete={handleDeletePlaylist}
              />
            )
          );
        })}
      </CardArea>
    </>
  );
};

export default Playlists;
