import React, { useEffect, useState } from "react";
import {
  NormalBlock,
  PlayerWrapper,
  PlayListTitle,
  PlayListTitleArea,
  PlaylistViewBlock,
  Tools,
  TitleBottomtexts,
  VideoList,
  VideoPlayer,
  VideoPlayerArea,
  VideoPlayerBlock,
} from "../../Components/styles/Video";
import rateicon from "../../Assets/Images/rate.png";
import PlaylistItem from "../../Components/Others/PlaylistItem";
import { useSelector } from "react-redux";
import { ActiveVideo } from "../../Components/styles/Button";
import { useCrudContext } from "../../Context/CrudContext";
import { useParams } from "react-router-dom";
import { useFunctionContext } from "../../Context/FunctionContext";
import Divider from "@mui/material/Divider";
import { AvatarBadge, RoundedIconButton } from "../../Components/styles/Navbar";
import IconButton from "@mui/material/IconButton";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import SaveModal from "./SaveModal";
import Modal from "@mui/material/Modal";

const Watch = () => {
  const activeplaylist = useSelector(
    (state) => state.activePlayListReducers.value
  );
  const { id } = useParams();
  const { searchValue } = useCrudContext();
  const { convertview } = useFunctionContext();
  const [activeVideo, setactiveVideo] = useState({
    url: "",
    title: "",
    id: undefined,
  });
  const [savemodal, setsavemodal] = useState(false);

  useEffect(() => {
    activeplaylist.Items.map((e, i) => {
      return (
        e.id === id &&
        setactiveVideo({ url: e.url, title: e.videoTitle, id: e.id })
      );
    });
  }, [activeplaylist.Items, id]);

  const handleopensavemodal = () => setsavemodal(true);
  const handleclosesavemodal = () => setsavemodal(false);

  const handleChangeActiveVideo = (url, title, id) => {
    setactiveVideo({ url: url, title: title, id });
  };

  const VideoSaveModal = React.forwardRef((props, ref) => (
    <SaveModal {...props} innerRef={ref} />
  ));

  return (
    <>
      <VideoPlayerArea>
        <VideoPlayerBlock>
          <PlayerWrapper>
            <VideoPlayer
              width="100%"
              height="100%"
              url={activeVideo.url}
              playing={!savemodal}
              controls
            />
          </PlayerWrapper>
          <PlayListTitle style={{ marginLeft: "8px" }}>
            {activeVideo.title}
          </PlayListTitle>
          <Tools>
            <IconButton onClick={handleopensavemodal}>
              <SaveOutlinedIcon />
            </IconButton>
          </Tools>
          <Divider style={{ margin: "10px 0px" }} />
          <NormalBlock>
            <RoundedIconButton>
              <AvatarBadge src={activeplaylist.photo} />
            </RoundedIconButton>
            <span>{activeplaylist.UserName}</span>
          </NormalBlock>
        </VideoPlayerBlock>

        <Modal open={savemodal} onClose={handleclosesavemodal}>
          <VideoSaveModal
            videoid={activeVideo.id}
            videourl={activeVideo.url}
            currentId={activeplaylist.Id}
            close={handleclosesavemodal}
          />
        </Modal>

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
