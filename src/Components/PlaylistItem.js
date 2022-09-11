import React from "react";
import styled from "styled-components";
import { NameText, Title } from "./Card";
import DateDiff from "date-diff";

const VideoItemBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  @media (max-width: 930px) {
    height: 70px;
    margin-bottom: 13px;
    align-items: flex-start;
  }
`;

const Image = styled.img.attrs({ alt: "" })`
  width: 42%;
  margin-left: 2%;
  @media (max-width: 930px) {
    width: auto;
    height: -webkit-fill-available;
  }
`;

const ListVideoDetailsArea = styled.div`
  padding: 0.5vw 2%;
  padding-right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media (max-width: 930px) {
    padding-top: 0;
  }
`;

const ListTitle = styled(Title)`
  font-weight: normal;
  opacity: 1;
  line-height: initial;
  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

const ListBottomText = styled(NameText)`
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
  const handleactiveVideo = () => {
    props.activevideo(props.data.url);
  };
  const dateDifference = () => {
    const totalDifference = new DateDiff(
      new Date(),
      new Date(props.data.publishedAt)
    );
    let diff;
    if (totalDifference.seconds() < 60) {
      diff = `${totalDifference.seconds()} second `;
    } else if (totalDifference.minutes() < 60) {
      diff = `${totalDifference.minutes()} minute `;
    } else if (totalDifference.hours() < 24) {
      diff = `${totalDifference.hours()} hour `;
    } else if (totalDifference.days() < 7) {
      diff = `${totalDifference.days()} day `;
    } else if (totalDifference.weeks() < 4) {
      diff = `${totalDifference.days()} week `;
    } else if (totalDifference.months() < 12) {
      diff = `${totalDifference.months()} month `;
    } else {
      diff = `${totalDifference.years()} year `;
    }
    return diff;
  };

  return (
    <>
      <VideoItemBlock onClick={handleactiveVideo}>
        <Image src={props.data.thumbnail} />
        <ListVideoDetailsArea>
          <ListTitle>{props.data.videoTitle}</ListTitle>
          <ListBottomText>{props.data.channelTitle}</ListBottomText>
          <ListBottomText>
            {props.viewconvert(props.data.view)} Views
            <li>
              <span>{dateDifference()}ago</span>
            </li>
          </ListBottomText>
        </ListVideoDetailsArea>
      </VideoItemBlock>
    </>
  );
};

export default PlaylistItem;
