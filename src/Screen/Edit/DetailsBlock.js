import React from "react";
import { useSelector } from "react-redux";
import {
  BottomBlock,
  PlaylistDetailsArea,
  PlaylistThumb,
} from "../../Components/styles/EditScreen";
import { CreateButton } from "../../Components/styles/Modal";
import DetailsBottom from "./DetailsBottom";
import DetailsTop from "./DetailsTop";

const DetailsBlock = ({ play }) => {
  const activeplaylist = useSelector(
    (state) => state.activePlayListReducers.value
  );
  return (
    <>
      <PlaylistDetailsArea>
        <PlaylistThumb src={activeplaylist.Thumbnail} />
        <DetailsTop />
        <DetailsBottom />
        <BottomBlock style={{ justifyContent: "end" }}>
          <CreateButton
            bg="#c94d4d"
            shadow="#f7ccd3"
            onClick={() => play(activeplaylist.Items[0].id)}
          >
            Play All
          </CreateButton>
        </BottomBlock>
      </PlaylistDetailsArea>
    </>
  );
};

export default DetailsBlock;
