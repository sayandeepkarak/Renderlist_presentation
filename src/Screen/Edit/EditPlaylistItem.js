import React from "react";
import {
  ListBottomText,
  ListTitle,
  ListVideoDetailsArea,
  VideoItemBlock,
} from "../../Components/Others/PlaylistItem";
import { Image } from "../../Components/styles/Image";
import Deleteicon from "../../Assets/Images/delete.png";
import IconButton from "@mui/material/IconButton";
import { ChildImage } from "../../Components/styles/EditScreen";

const EditPlaylistItem = ({ jump, data, remove }) => {
  const playvideo = () => jump(data.id);
  return (
    <>
      <VideoItemBlock>
        <ChildImage src={data.thumbnail} onClick={playvideo} />
        <ListVideoDetailsArea onClick={playvideo}>
          <ListTitle>{data.videoTitle}</ListTitle>
          <ListBottomText>{data.channelTitle}</ListBottomText>
        </ListVideoDetailsArea>
        <IconButton
          style={{ alignSelf: "end", margin: "13px 2%" }}
          onClick={() => remove(data.id)}
        >
          <Image src={Deleteicon} />
        </IconButton>
      </VideoItemBlock>
    </>
  );
};

export default EditPlaylistItem;
