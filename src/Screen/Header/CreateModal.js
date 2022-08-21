import React, { useState } from "react";
import {
  CreateButton,
  CreatePopUpBlock,
  Input,
  PopUpHead,
  PopUpTitle,
} from "../../Components/Create";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Create = (props) => {
  const [playlistname, setplaylistname] = useState("");
  const handleinput = (e) => setplaylistname(e.target.value);
  const handleClose = () => props.close();
  return (
    <>
      <CreatePopUpBlock>
        <PopUpHead>
          <PopUpTitle>
            <span>Create Playlist</span>
          </PopUpTitle>
          <IconButton size="large" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </PopUpHead>
        <Input value={playlistname} onChange={handleinput} />
        <CreateButton
          bg="#3d5afe"
          shadow="rgba(61, 90, 254, 0.5)"
          onClick={handleClose}
        >
          <span>create</span>
        </CreateButton>
      </CreatePopUpBlock>
    </>
  );
};

export default Create;
