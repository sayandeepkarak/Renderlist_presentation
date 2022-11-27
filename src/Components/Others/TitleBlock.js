import React from "react";
import {
  MiniText,
  NameText,
  ProfileImage,
  TextArea,
  TitleArea,
} from "../styles/Account";

const TitleBlock = ({ data }) => {
  return (
    <>
      <TitleArea>
        <ProfileImage src={data.photoUrl} />
        <TextArea>
          <NameText>{data.name}</NameText>
          <MiniText>{data.itemslength} Playlists</MiniText>
        </TextArea>
      </TitleArea>
    </>
  );
};

export default TitleBlock;
