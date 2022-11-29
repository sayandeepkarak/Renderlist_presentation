import React, { useEffect, useState } from "react";
import { VideoPlayerArea } from "../../Components/styles/Video";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoListSection from "./VideoListSection";
import VideoPlayerSection from "./VideoPlayerSection";

const Watch = () => {
  const activeplaylist = useSelector(
    (state) => state.activePlayListReducers.value
  );
  const { videoid } = useParams();
  const [activeVideo, setactiveVideo] = useState({
    url: "",
    title: "",
    id: undefined,
  });

  useEffect(() => {
    activeplaylist.Items.map((e, i) => {
      return (
        e.id === videoid &&
        setactiveVideo({ url: e.url, title: e.videoTitle, id: e.id })
      );
    });
  }, [activeplaylist.Items, videoid]);

  const handleChangeActiveVideo = (url, title, id) => {
    setactiveVideo({ url: url, title: title, id });
  };

  return (
    <>
      <VideoPlayerArea>
        <VideoPlayerSection
          activeVideo={activeVideo}
          activeplaylist={activeplaylist}
        />
        <VideoListSection
          playlist={activeplaylist}
          changeactivevideo={handleChangeActiveVideo}
        />
      </VideoPlayerArea>
    </>
  );
};

export default Watch;
