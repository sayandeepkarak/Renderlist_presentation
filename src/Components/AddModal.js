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
import { doc, updateDoc, FieldValue, arrayUnion } from "firebase/firestore";

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=Ks-_Mh1QhMc&key=AIzaSyBTsBfekWxf7kIlJPkAF-3CauTVx8J5L_8

const AddModal = (props) => {
  const API_KEY = "AIzaSyBTsBfekWxf7kIlJPkAF-3CauTVx8J5L_8";
  const handleClose = () => props.close();

  const addVideo = async (url) => {
    const { id } = getVideoId(url);
    try {
      const videodata = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${id}&key=${API_KEY}`
      );
      await updateDoc(doc(db, "Playlists", props.data), {
        Thumbnail: videodata.data.items[0].snippet.thumbnails.medium.url,
        Items: arrayUnion({
          url: url,
          id: id,
          thumbnail: videodata.data.items[0].snippet.thumbnails.medium.url,
          channelTitle: videodata.data.items[0].snippet.channelTitle,
          videoTitle: videodata.data.items[0].snippet.title,
        }),
      });
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
