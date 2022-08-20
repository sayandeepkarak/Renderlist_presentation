import React from "react";
import {
  PlayerWrapper,
  PlayListTitle,
  PlayListTitleArea,
  PlaylistViewBlock,
  TitleBottomtexts,
  VideoList,
  VideoPlayer,
  VideoPlayerArea,
  VideoPlayerBlock,
} from "../../Components/Video";
import rateicon from "../../Assets/Images/rate.png";
import PlaylistItem from "../../Components/PlaylistItem";

const Watch = () => {
  return (
    <>
      <VideoPlayerArea>
        <VideoPlayerBlock>
          <PlayerWrapper>
            <VideoPlayer
              width="100%"
              height="100%"
              url="https://youtu.be/WCauHgLeqZc"
              controls
            />
          </PlayerWrapper>
        </VideoPlayerBlock>

        <PlaylistViewBlock>
          <PlayListTitleArea>
            <PlayListTitle>The React Native Tutorial</PlayListTitle>
            <TitleBottomtexts>
              <p>5.1</p>
              <img src={rateicon} alt="x" />
              <li>
                <span>25k Views</span>
              </li>
              <li>
                <span>novamaster</span>
              </li>
            </TitleBottomtexts>
          </PlayListTitleArea>
          <VideoList>
            {[...Array(10)].map((x, i) => (
              <PlaylistItem key={i} index={i + 1} />
            ))}
          </VideoList>
        </PlaylistViewBlock>
      </VideoPlayerArea>
    </>
  );
};

export default Watch;
