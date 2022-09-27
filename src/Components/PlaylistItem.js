import React from "react";
import styled from "styled-components";
import { useFunctionContext } from "../Context/FunctionContext";
import { NameText, Title } from "./Card";

export const VideoItemBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #8787871f;
  }
  @media (max-width: 930px) {
    height: 70px;
    margin-bottom: 13px;
    align-items: flex-start;
  }
`;

export const SmallImage = styled.img.attrs({ alt: "" })`
  border-radius: 5px;
  width: 42%;
  margin-left: 2%;
  @media (max-width: 930px) {
    width: auto;
    height: -webkit-fill-available;
  }
`;

export const ListVideoDetailsArea = styled.div`
  padding: 0.5vw 2%;
  padding-right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media (max-width: 930px) {
    padding-top: 0;
  }
`;

export const ListTitle = styled(Title)`
  font-weight: normal;
  opacity: 1;
  line-height: initial;
  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

export const ListBottomText = styled(NameText)`
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  flex-wrap: nowrap;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: initial;
  overflow: hidden;
  text-overflow: ellipsis;
  gap: 1%;
  li span {
    position: relative;
    left: -5px;
  }
  @media (max-width: 1200px) {
    letter-spacing: 0.9px;
  }
  @media (max-width: 930px) {
    margin-top: 2px;
    font-size: 10px;
    line-height: 14px;
  }
`;

const PlaylistItem = (props) => {
  const { dateDifference } = useFunctionContext();

  const handleactiveVideo = () => {
    props.activevideo(props.data.url, props.data.videoTitle, props.data.id);
  };

  return (
    <>
      <VideoItemBlock onClick={handleactiveVideo}>
        <SmallImage src={props.data.thumbnail} />
        <ListVideoDetailsArea>
          <ListTitle>{props.data.videoTitle}</ListTitle>
          <ListBottomText>{props.data.channelTitle}</ListBottomText>
          <ListBottomText>
            {props.viewconvert(props.data.view)} Views
            <li>
              <span>{dateDifference(props.data.publishedAt)}ago</span>
            </li>
          </ListBottomText>
        </ListVideoDetailsArea>
      </VideoItemBlock>
    </>
  );
};

export default PlaylistItem;
