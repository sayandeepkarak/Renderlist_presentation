import React from "react";
import Avatar from "react-avatar";
import { MiniText, NameText, TextArea, TitleArea } from "../styles/Account";

const TitleBlock = ({ data }) => {
  return (
    <>
      <TitleArea>
        <Avatar src={data.photoUrl} round="50%" name={data.name} />
        <TextArea>
          <NameText>{data.name}</NameText>
          <MiniText>{data.itemslength} Playlists</MiniText>
        </TextArea>
      </TitleArea>
    </>
  );
};

export default TitleBlock;
