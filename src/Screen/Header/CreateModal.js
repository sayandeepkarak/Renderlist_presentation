import React from "react";
import {
  CreateButton,
  ModalBlock,
  Input,
  PopUpHead,
  PopUpTitle,
} from "../../Components/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { CreateFormSchema } from "../../Schemas";
import { Errortext } from "../../Components/Text";
import { addDoc, collection, Firestore } from "firebase/firestore";
import { db } from "../../Firebase";

const Create = (props) => {
  const handleClose = () => props.close();

  const createPlaylist = async (playlistName) => {
    await addDoc(collection(db, "Playlists"), {
      UserName: "Nova_master",
      Views: "12K",
      Title: playlistName,
      Thumbnail: "https://i.ytimg.com/vi/jCY6DH8F4oc/maxresdefault.jpg",
      Hide: false,
      Items: [],
    });
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        playlistName: "",
      },
      validationSchema: CreateFormSchema,
      onSubmit: (value) => {
        createPlaylist(value.playlistName);
        handleClose();
      },
    });

  return (
    <>
      <ModalBlock onSubmit={handleSubmit}>
        <PopUpHead>
          <PopUpTitle>
            <span>Create Playlist</span>
          </PopUpTitle>
          <IconButton size="large" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </PopUpHead>
        <Input
          name="playlistName"
          placeholder="Playlist Name"
          value={values.playlistName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.playlistName && touched.playlistName && (
          <Errortext>{errors.playlistName}</Errortext>
        )}
        <CreateButton type="submit" bg="#242560" shadow="#a3abed">
          <span>create</span>
        </CreateButton>
      </ModalBlock>
    </>
  );
};

export default Create;
