import React from "react";
import {
  BodyText,
  CreateButton,
  ModalBlock,
  PopUpHead,
  PopUpTitle,
  RowFlex,
} from "../styles/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const DeleteModal = ({ remove, close, title }) => {
  const handledelete = () => remove();
  const handleClose = () => close();

  return (
    <>
      <ModalBlock>
        <PopUpHead>
          <PopUpTitle>
            <span>Delete Playlist</span>
          </PopUpTitle>
          <IconButton size="large" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </PopUpHead>
        <BodyText>
          <span>Are you sure to delete {title}</span>
        </BodyText>
        <RowFlex style={{ justifyContent: "end", paddingRight: "12px" }}>
          <CreateButton bg="#242560" shadow="#a3abed" onClick={handleClose}>
            Cancle
          </CreateButton>
          <CreateButton bg="#c94d4d" shadow="#f7ccd3" onClick={handledelete}>
            Ok
          </CreateButton>
        </RowFlex>
      </ModalBlock>
    </>
  );
};

export default DeleteModal;
