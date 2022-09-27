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
import getVideoId from "get-video-id";
import { useCrudContext } from "../Context/CrudContext";
import { useAuthContext } from "../Context/AuthContext";

const AddModal = (props) => {
  const { addVideo } = useCrudContext();
  const { handleFetchuserData, currentuser } = useAuthContext();
  const handleClose = () => props.close();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      url: "",
    },
    validationSchema: AddUrlSchema,
    onSubmit: (value) => {
      const { id } = getVideoId(value.url);
      addVideo(currentuser.id, id, props.data, value.url);
      handleFetchuserData(currentuser.id);
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
          autoComplete="off"
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
