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
import { useCrudContext } from "../../Context/CrudContext";
import { useAuthContext } from "../../Context/AuthContext";

const Create = (props) => {
  const handleClose = () => props.close();
  const { createPlaylist, GetAllPlaylist } = useCrudContext();
  const { currentuser } = useAuthContext();
  const create = async (playlistName) => {
    createPlaylist(playlistName, currentuser);
    GetAllPlaylist();
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      playlistName: "",
    },
    validationSchema: CreateFormSchema,
    onSubmit: (value) => {
      create(value.playlistName);
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
          autoComplete="off"
          value={values.playlistName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.playlistName && touched.playlistName && (
          <Errortext>{errors.playlistName}</Errortext>
        )}
        <CreateButton type="submit" bg="#242560" shadow="#a3abed">
          <span>Create</span>
        </CreateButton>
      </ModalBlock>
    </>
  );
};

export default Create;
