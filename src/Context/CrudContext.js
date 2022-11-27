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
import { useDispatch, useSelector } from "react-redux";
import { fetchallplaylists } from "../App/allDataSlice";
import { db } from "../Firebase";
import { useSnackbar } from "notistack";

const crudContext = createContext();

export const CrudContext = ({ children }) => {
  const userdata = useSelector((state) => state.userPlaylistsReducers.value);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [searchValue, setSearchValue] = useState("");

  const FetchPlaylists = async () => {
    try {
      let playlist = [];
      const playlistsData = await getDocs(collection(db, "AllAccounts"));
      const refreshdata = playlistsData.docs.map((user) => {
        return { ...user.data(), id: user.id };
      });
      for (let i of refreshdata) {
        const usersplaylist = await getDocs(
          collection(db, `AllAccounts/${i.id}`, "Playlists")
        );
        const maindata = usersplaylist.docs.map((e) => {
          return {
            ...e.data(),
            userId: i.id,
            Id: e.id,
            photo: i.photoUrl,
          };
        });
        playlist.push(...maindata);
      }
      dispatch(fetchallplaylists(playlist));
    } catch (exp) {
      console.error(exp);
    }
  };

  const createPlaylist = async (playlistname, userdetails) => {
    try {
      await addDoc(
        collection(db, `AllAccounts/${userdetails.id}`, "Playlists"),
        {
          UserName: userdetails.name,
          Views: 0,
          Title: playlistname,
          Thumbnail: "https://i.ytimg.com/vi/jCY6DH8F4oc/maxresdefault.jpg",
          Hide: false,
          Items: [],
        }
      );
      enqueueSnackbar(`Successfully created a playlist named ${playlistname}`, {
        variant: "success",
      });
      setTimeout(() => {
        enqueueSnackbar(
          "Now you can go to save page and add videos to this playlist by clicking on plus icon",
          {
            variant: "info",
          }
        );
      }, 1000);
      FetchPlaylists();
    } catch (exp) {
      console.error(exp);
    }
  };

  const addVideo = async (userId, videoId, playlistId, url) => {
    try {
      let checkexist = false;
      for (const t of userdata) {
        if (t.Id !== playlistId) continue;
        for (const g of t.Items) {
          if (g.id !== videoId) continue;
          checkexist = true;
          break;
        }
        if (checkexist) break;
      }
      if (!checkexist) {
        const API_KEY = "AIzaSyBTsBfekWxf7kIlJPkAF-3CauTVx8J5L_8";
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        );
        const videodata = response.data.items[0].snippet;
        await updateDoc(
          doc(db, `AllAccounts/${userId}`, `Playlists/${playlistId}`),
          {
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
          }
        );
        enqueueSnackbar("Successfully add a video", {
          variant: "success",
        });
        FetchPlaylists();
      } else {
        enqueueSnackbar("Video already exist", {
          variant: "error",
        });
      }
    } catch (exp) {
      console.error(exp);
    }
  };

  const miniUpdate = async (userId, playlistId, obj) => {
    try {
      await updateDoc(
        doc(db, `AllAccounts/${userId}`, `Playlists/${playlistId}`),
        obj
      );
      FetchPlaylists();
    } catch (exp) {
      console.error(exp);
    }
  };

  const deletePlaylist = async (userId, playlistId) => {
    try {
      await deleteDoc(
        doc(db, `AllAccounts/${userId}`, `Playlists/${playlistId}`)
      );
      enqueueSnackbar("Successfully deleted", {
        variant: "success",
      });
      FetchPlaylists();
    } catch (exp) {
      console.error(exp);
    }
  };

  const setupsearch = (text) => {
    setSearchValue(text.toLowerCase());
  };

  const value = {
    searchValue,
    createPlaylist,
    FetchPlaylists,
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
