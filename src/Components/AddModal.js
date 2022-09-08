import React from "react";
import {
  CreateButton,
  ModalBlock,
  Input,
  PopUpHead,
  PopUpTitle,
} from "./Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { AddUrlSchema } from "../Schemas";
import { Errortext } from "./Text";
import axios from "axios";
import getVideoId from "get-video-id";
import { db } from "../Firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  getDocs,
  collection,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { fetchallplaylists } from "../App/allDataSlice";

const AddModal = (props) => {
  const dispatch = useDispatch();
  const API_KEY = "AIzaSyBTsBfekWxf7kIlJPkAF-3CauTVx8J5L_8";
  const handleClose = () => props.close();

  const addVideo = async (url) => {
    const { id } = getVideoId(url);
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
      );
      console.log(response);
      const videodata = response.data.items[0].snippet;
      await updateDoc(doc(db, "Playlists", props.data), {
        Thumbnail: videodata.thumbnails.medium.url,
        Items: arrayUnion({
          url: url,
          id: id,
          thumbnail: videodata.thumbnails.hasOwnProperty("maxres")
            ? videodata.thumbnails.maxres.url
            : videodata.thumbnails.medium.url,
          channelTitle: videodata.channelTitle,
          videoTitle: videodata.title,
          view: response.data.items[0].statistics.viewCount,
        }),
      });
      console.log(videodata.thumbnails.hasOwnProperty("maxres"));
      const data = await getDocs(collection(db, "Playlists"));
      dispatch(fetchallplaylists(data.docs));
    } catch (err) {
      console.error(err);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        url: "",
      },
      validationSchema: AddUrlSchema,
      onSubmit: (value) => {
        addVideo(value.url);
        handleClose();
      },
    });

  return (
    <>
      <ModalBlock onSubmit={handleSubmit}>
        <PopUpHead>
          <PopUpTitle>
            <span>Add Video</span>
          </PopUpTitle>
          <IconButton size="large" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </PopUpHead>
        <Input
          name="url"
          placeholder="Youtube video url"
          value={values.url}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.url && touched.url && <Errortext>{errors.url}</Errortext>}
        <CreateButton type="submit" bg="#c94d4d" shadow="#f7ccd3">
          <span>Add</span>
        </CreateButton>
      </ModalBlock>
    </>
  );
};

export default AddModal;
