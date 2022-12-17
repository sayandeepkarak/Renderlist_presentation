import React from "react";
import {
  PlayListTitle,
  PlayListTitleArea,
  PlaylistViewBlock,
  TitleBottomtexts,
  VideoList,
} from "../../Components/styles/Video";
import rateicon from "../../Assets/Images/rate.png";
import { useFunctionContext } from "../../Context/FunctionContext";
import PlaylistItem from "../../Components/Others/PlaylistItem";
import { useCrudContext } from "../../Context/CrudContext";
import { ActiveVideo } from "../../Components/styles/Button";

const VideoListSection = ({ playlist, changeactivevideo }) => {
  const { convertview } = useFunctionContext();
  const { searchValue } = useCrudContext();
  return (
    <>
      <PlaylistViewBlock>
        <PlayListTitleArea>
          <PlayListTitle>{playlist.Title}</PlayListTitle>
          <TitleBottomtexts>
            <p>5.1</p>
            <img src={rateicon} alt="x" />
            <li>
              <span>{convertview(playlist.Views)} Views</span>
            </li>
            <li>
              <span>{playlist.UserName}</span>
            </li>
          </TitleBottomtexts>
        </PlayListTitleArea>

        <VideoList>
          {playlist.Items.filter((item) =>
            item["videoTitle"].toLowerCase().includes(searchValue)
          ).map((data, i) => (
            <ActiveVideo key={i} to={`/watch/${playlist.Id}/${data.id}`}>
              <PlaylistItem
                data={data}
                viewconvert={convertview}
                activevideo={changeactivevideo}
              />
            </ActiveVideo>
          ))}
        </VideoList>
      </PlaylistViewBlock>
    </>
  );
};

export default VideoListSection;
