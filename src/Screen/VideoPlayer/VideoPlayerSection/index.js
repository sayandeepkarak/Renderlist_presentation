import React, { forwardRef } from "react";
import {
  NormalBlock,
  PlayerWrapper,
  PlayListTitle,
  Tools,
  VideoPlayer,
  VideoPlayerBlock,
} from "../../../Components/styles/Video";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import {
  AvatarBadge,
  RoundedIconButton,
} from "../../../Components/styles/Navbar";
import SaveModal from "./SaveModal";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const VideoPlayerSection = (props) => {
  const { activeVideo, activeplaylist } = props;
  const [savemodal, setsavemodal] = useState(false);
  const navigate = useNavigate();

  const handleopensavemodal = () => setsavemodal(true);
  const handleclosesavemodal = () => setsavemodal(false);
  const handleNavigateprofile = () => {
    navigate(`/users/${activeplaylist.userId}`);
  };

  const VideoSaveModal = forwardRef((props, ref) => (
    <SaveModal {...props} innerRef={ref} />
  ));

  return (
    <>
      <VideoPlayerBlock>
        <PlayerWrapper>
          <VideoPlayer
            width="100%"
            height="100%"
            url={activeVideo.url}
            playing={!savemodal}
            controls
          />
        </PlayerWrapper>
        <PlayListTitle style={{ marginLeft: "8px" }}>
          {activeVideo.title}
        </PlayListTitle>
        <Tools>
          <IconButton onClick={handleopensavemodal}>
            <SaveOutlinedIcon />
          </IconButton>
        </Tools>
        <Divider style={{ margin: "10px 0px" }} />
        <NormalBlock>
          <RoundedIconButton>
            <AvatarBadge src={activeplaylist.photo} />
          </RoundedIconButton>
          <span onClick={handleNavigateprofile}>{activeplaylist.UserName}</span>
        </NormalBlock>
      </VideoPlayerBlock>

      <Modal open={savemodal} onClose={handleclosesavemodal}>
        <VideoSaveModal
          videoid={activeVideo.id}
          videourl={activeVideo.url}
          currentId={activeplaylist.Id}
          close={handleclosesavemodal}
        />
      </Modal>
    </>
  );
};

export default VideoPlayerSection;
