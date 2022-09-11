import React, { useState } from "react";
import axios from "axios";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useContext } from "react";
import { createContext } from "react";
import { useDispatch } from "react-redux";
import { fetchallplaylists } from "../App/allDataSlice";
import { db } from "../Firebase";

const crudContext = createContext();

export const CrudContext = ({ children }) => {
  const dispatch = useDispatch();
  const [load, setload] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const createPlaylist = async (playlistname) => {
    try {
      await addDoc(collection(db, "Playlists"), {
        UserName: "Web_Dev_18",
        Views: 0,
        Title: playlistname,
        Thumbnail: "https://i.ytimg.com/vi/jCY6DH8F4oc/maxresdefault.jpg",
        Hide: false,
        Items: [],
      });
    } catch (exp) {
      console.error(exp);
    }
  };

  const addVideo = async (videoId, playlistId, url) => {
    try {
      const API_KEY = "AIzaSyBTsBfekWxf7kIlJPkAF-3CauTVx8J5L_8";
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      const videodata = response.data.items[0].snippet;
      await updateDoc(doc(db, "Playlists", playlistId), {
        Thumbnail: videodata.thumbnails.medium.url,
        Items: arrayUnion({
          url: url,
          id: videoId,
          thumbnail: videodata.thumbnails.hasOwnProperty("maxres")
            ? videodata.thumbnails.maxres.url
            : videodata.thumbnails.medium.url,
          channelTitle: videodata.channelTitle,
          videoTitle: videodata.title,
          publishedAt: videodata.publishedAt,
          view: response.data.items[0].statistics.viewCount,
        }),
      });
    } catch (exp) {
      console.error(exp);
    }
  };

  const miniUpdate = async (playlistId, obj) => {
    try {
      await updateDoc(doc(db, "Playlists", playlistId), obj);
    } catch (exp) {
      console.error(exp);
    }
  };

  const deletePlaylist = async (playlistId) => {
    try {
      await deleteDoc(doc(db, "Playlists", playlistId));
    } catch (exp) {
      console.error(exp);
    }
  };

  const setupsearch = (text) => {
    setSearchValue(text.toLowerCase());
  };

  const GetAllPlaylist = async () => {
    try {
      setload(true);
      const data = await getDocs(collection(db, "Playlists"));
      dispatch(fetchallplaylists(data.docs));
      setload(false);
    } catch (exp) {
      console.error(exp);
    }
  };

  const value = {
    searchValue,
    load,
    createPlaylist,
    GetAllPlaylist,
    addVideo,
    miniUpdate,
    deletePlaylist,
    setupsearch,
  };
  return (
    <>
      <crudContext.Provider value={value}>{children}</crudContext.Provider>
    </>
  );
};

export const useCrudContext = () => {
  return useContext(crudContext);
};
