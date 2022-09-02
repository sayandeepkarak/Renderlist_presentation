import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Watch = () => {
  const navigate = useNavigate();
  const activeplaylist = useSelector(
    (state) => state.activePlayListReducers.value
  );
  const [activeVideo, setactiveVideo] = useState("");
  console.log(activeplaylist.length);
  useEffect(() => {
    activeplaylist.length === 0
      ? navigate("/")
      : activeVideo === "" && setactiveVideo(activeplaylist.Items[0].url);
  }, []);

  console.log(activeplaylist);
  const handleChangeActiveVideo = (url) => {
    setactiveVideo(url);
  };
  return (
    <>
      <VideoPlayerArea>
        <VideoPlayerBlock>
          <PlayerWrapper>
            <VideoPlayer
              width="100%"
              height="100%"
              url={activeVideo}
              controls
            />
          </PlayerWrapper>
        </VideoPlayerBlock>

        <PlaylistViewBlock>
          <PlayListTitleArea>
            <PlayListTitle>{activeplaylist.Title}</PlayListTitle>
            <TitleBottomtexts>
              <p>5.1</p>
              <img src={rateicon} alt="x" />
              <li>
                <span>25k Views</span>
              </li>
              <li>
                <span>{activeplaylist.UserName}</span>
              </li>
            </TitleBottomtexts>
          </PlayListTitleArea>
          <VideoList>
            {activeplaylist.Items?.map((data) => (
              <PlaylistItem
                key={data.id}
                data={data}
                activevideo={handleChangeActiveVideo}
              />
            ))}
          </VideoList>
        </PlaylistViewBlock>
      </VideoPlayerArea>
    </>
  );
};

export default Watch;
