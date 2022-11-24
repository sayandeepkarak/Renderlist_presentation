import React from "react";
import {
  CreateButton,
  ModalBlock,
  Input,
  PopUpHead,
  PopUpTitle,
} from "../../Components/styles/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { CreateFormSchema } from "../../Schemas";
import { Errortext } from "../styles/Text";
import { useCrudContext } from "../../Context/CrudContext";
import { useAuthContext } from "../../Context/AuthContext";
import { useState } from "react";

const Create = ({ close }) => {
  const handleClose = () => close();
  const { createPlaylist } = useCrudContext();
  const { handleFetchuserData, currentuser } = useAuthContext();
  const [createTxt, setCreateTxt] = useState("Create");

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        playlistName: "",
      },
      validationSchema: CreateFormSchema,
      onSubmit: (value) => {
        setCreateTxt("Creating...");
        createPlaylist(value.playlistName, currentuser).then(() => {
          handleFetchuserData(currentuser.id);
          handleClose();
        });
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
          <span>{createTxt}</span>
        </CreateButton>
      </ModalBlock>
    </>
  );
};

export default Create;
