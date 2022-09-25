import React from "react";
import {
  ListBottomText,
  ListTitle,
  ListVideoDetailsArea,
  VideoItemBlock,
} from "../../Components/PlaylistItem";
import { Image } from "../../Components/Image";
import Deleteicon from "../../Assets/Images/delete.png";
import IconButton from "@mui/material/IconButton";
import { ChildImage } from "../../Components/EditScreen";

const EditPlaylistItem = (props) => {
  return (
    <>
      <VideoItemBlock>
        <ChildImage src={props.data.thumbnail} />
        <ListVideoDetailsArea>
          <ListTitle>{props.data.videoTitle}</ListTitle>
          <ListBottomText>{props.data.channelTitle}</ListBottomText>
        </ListVideoDetailsArea>
        <IconButton
          style={{ alignSelf: "end", margin: "13px 2%" }}
          onClick={() => props.delete(props.data.id)}
        >
          <Image src={Deleteicon} />
        </IconButton>
      </VideoItemBlock>
    </>
  );
};

export default EditPlaylistItem;
