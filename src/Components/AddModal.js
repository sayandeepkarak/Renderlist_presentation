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

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=Ks-_Mh1QhMc&key=AIzaSyBTsBfekWxf7kIlJPkAF-3CauTVx8J5L_8

const AddModal = (props) => {
  const handleClose = () => props.close();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        url: "",
      },
      validationSchema: AddUrlSchema,
      onSubmit: (value) => {
        console.log(value);
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
