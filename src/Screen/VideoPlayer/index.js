import React, { useEffect, useState } from "react";
import {
  NormalBlock,
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
import { ActiveVideo } from "../../Components/Button";
import { useCrudContext } from "../../Context/CrudContext";
import { useParams } from "react-router-dom";
import { useFunctionContext } from "../../Context/FunctionContext";
import Divider from "@mui/material/Divider";
import { AvatarBadge, RoundedIconButton } from "../../Components/Navbar";

const Watch = () => {
  const activeplaylist = useSelector(
    (state) => state.activePlayListReducers.value
  );
  const { id } = useParams();
  const { searchValue } = useCrudContext();
  const { convertview } = useFunctionContext();
  const [activeVideo, setactiveVideo] = useState({ url: "", title: "" });

  useEffect(() => {
    activeplaylist.Items.map((e) => {
      return e.id === id && setactiveVideo({ url: e.url, title: e.videoTitle });
    });
  }, []);

  const handleChangeActiveVideo = (url, title) => {
    setactiveVideo({ url: url, title: title });
  };

  return (
    <>
      <VideoPlayerArea>
        <VideoPlayerBlock>
          <PlayerWrapper>
            <VideoPlayer
              width="100%"
              height="100%"
              url={activeVideo.url}
              playing={true}
              controls
            />
          </PlayerWrapper>
          <PlayListTitle style={{ marginLeft: "8px" }}>
            {activeVideo.title}
          </PlayListTitle>
          <NormalBlock>
            <RoundedIconButton>
              <AvatarBadge src={activeplaylist.photo} />
            </RoundedIconButton>
            <span
              style={{
                cursor: "default",
              }}
            >
              {activeplaylist.UserName}
            </span>
          </NormalBlock>
          <Divider style={{ margin: "10px 0px" }} />
        </VideoPlayerBlock>

        <PlaylistViewBlock>
          <PlayListTitleArea>
            <PlayListTitle>{activeplaylist.Title}</PlayListTitle>
            <TitleBottomtexts>
              <p>5.1</p>
              <img src={rateicon} alt="x" />
              <li>
                <span>{convertview(activeplaylist.Views)} Views</span>
              </li>
              <li>
                <span>{activeplaylist.UserName}</span>
              </li>
            </TitleBottomtexts>
          </PlayListTitleArea>
          <VideoList>
            {activeplaylist.Items.filter((item) =>
              item["videoTitle"].toLowerCase().includes(searchValue)
            ).map((data, i) => (
              <ActiveVideo
                key={i}
                to={`/watch/${activeplaylist.Id}/${data.id}`}
              >
                <PlaylistItem
                  data={data}
                  viewconvert={convertview}
                  activevideo={handleChangeActiveVideo}
                />
              </ActiveVideo>
            ))}
          </VideoList>
        </PlaylistViewBlock>
      </VideoPlayerArea>
    </>
  );
};

export default Watch;
