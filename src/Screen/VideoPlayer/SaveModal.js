import React from "react";
import {
  ListRow,
  ListText,
  ModalBlock,
  PopUpHead,
  PopUpTitle,
} from "../../Components/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import { useAuthContext } from "../../Context/AuthContext";
import AddVideoList from "./AddVideoList";
import { useSelector } from "react-redux";

const SaveModal = (props) => {
  const allPlaylists = useSelector(
    (state) => state.userPlaylistsReducers.value
  );
  const allotherplaylist = allPlaylists.filter((e) => {
    return e.Id !== props.currentId;
  });
  const { currentuser } = useAuthContext();
  const navigate = useNavigate();
  const handleclose = () => props.close();
  return (
    <>
      <ModalBlock>
        <PopUpHead>
          <PopUpTitle>
            <span>Add Video</span>
          </PopUpTitle>
          <IconButton size="large" onClick={handleclose}>
            <CloseIcon />
          </IconButton>
        </PopUpHead>
        <ListRow>
          {currentuser !== null ? (
            allotherplaylist.length !== 0 ? (
              allotherplaylist.map((e) => {
                return (
                  <AddVideoList
                    key={e.Id}
                    data={e}
                    videoId={props.videoid}
                    videourl={props.videourl}
                  />
                );
              })
            ) : (
              <ListText style={{ marginBottom: "20px" }}>
                Don't have other playlist
              </ListText>
            )
          ) : (
            <Button
              bg="#242560"
              shadow="#a3abed"
              onClick={() => navigate("/Login")}
            >
              <span>login</span>
            </Button>
          )}
        </ListRow>
      </ModalBlock>
    </>
  );
};

export default SaveModal;
