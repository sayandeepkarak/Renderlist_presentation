import React from "react";
import { NameText, ProfileImage, TextArea, TitleArea } from "../styles/Account";

const TitleBlock = ({ data }) => {
  return (
    <>
      <TitleArea>
        <ProfileImage src={data.photoUrl} />
        <TextArea>
          <NameText>{data.name}</NameText>
        </TextArea>
      </TitleArea>
    </>
  );
};

export default TitleBlock;
