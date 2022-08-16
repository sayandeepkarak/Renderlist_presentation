import React from "react";
import styled from "styled-components";
import ThumbNail from "../Assets/Images/demothumb.png";
import { NameText, Title } from "./Card";

const VideoItemBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  font-family: "Poppins", sans-serif;
  margin-bottom: 1.5vw;
`;

const Image = styled.img.attrs({ alt: "" })`
  width: 42%;
  margin-left: 2%;
`;

const ListVideoDetailsArea = styled.div`
  padding: 0.5vw 2%;
  width: 100%;
  height: 100%;
`;

const ListTitle = styled(Title)`
  font-weight: normal;
  opacity: 1;
  line-height: initial;
`;

const ListBottomText = styled(NameText)`
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  flex-wrap: nowrap;
  gap: 1%;
  li span {
    position: relative;
    left: -5px;
  }
`;

const PlaylistItem = (props) => {
  return (
    <>
      <VideoItemBlock>
        <p
          style={{
            fontSize: "0.9vw",
            width: "4%",
          }}
        >
          {props.index}
        </p>
        <Image src={ThumbNail} />
        <ListVideoDetailsArea>
          <ListTitle>
            Pixel OS Review - Forget about Pixel Experience | Redmi Note 10 Pro
            / Max
          </ListTitle>
          <ListBottomText>Barun Mukherjee</ListBottomText>
          <ListBottomText>
            5M Views
            <li>
              <span>5 months ago</span>
            </li>
          </ListBottomText>
        </ListVideoDetailsArea>
      </VideoItemBlock>
    </>
  );
};

export default PlaylistItem;
