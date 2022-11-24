import React from "react";
import {
  EditScreenArea,
  PlaylistDetailsArea,
  PlaylistThumb,
  EditTitleBlock,
  TitleText,
  EditInputBlock,
  ButtonBlock,
  EditInput,
  BottomBlock,
  BottomChild,
  EditMenu,
  ItemsBlock,
} from "../../Components/styles/EditScreen";
import { AvatarBadge, RoundedIconButton } from "../../Components/styles/Navbar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { CreateButton } from "../../Components/styles/Modal";
import { useState } from "react";
import { TitleBottomtexts } from "../../Components/styles/Video";
import rateicon from "../../Assets/Images/rate.png";
import MenuItem from "@mui/material/MenuItem";
import { Divider, ListItemIcon } from "@mui/material";
import { Image } from "../../Components/styles/Image";
import Shareicon from "../../Assets/Images/share.png";
import Hideicon from "../../Assets/Images/Hide.png";
import Deleteicon from "../../Assets/Images/delete.png";
import EditPlaylistItem from "./EditPlaylistItem";
import Modal from "@mui/material/Modal";
import AddModal from "../../Components/Modals/AddModal";
import ShareModal from "../../Components/Modals/ShareModal";
import DeleteModal from "../../Components/Modals/DeleteModal";
import { useSelector } from "react-redux";
import { useFunctionContext } from "../../Context/FunctionContext";
import { useAuthContext } from "../../Context/AuthContext";
import { useCrudContext } from "../../Context/CrudContext";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Edit = () => {
  const activeplaylist = useSelector(
    (state) => state.activePlayListReducers.value
  );
  const { currentuser, handleFetchuserData } = useAuthContext();
  const { deletePlaylist, miniUpdate, searchValue } = useCrudContext();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { convertview } = useFunctionContext();
  const [state, setstate] = useState({
    editmode: false,
    anchorEl: null,
    editinputValue: activeplaylist.Title,
    addmodalOpen: false,
    socialmodalOpen: false,
    deletemodalOpen: false,
  });
  const menuopen = Boolean(state.anchorEl);
  const handleplay = (videoId) => {
    navigate(`/watch/${activeplaylist.Id}/${videoId}`);
  };
  const handledeleteplaylist = () => {
    deletePlaylist(currentuser.id, activeplaylist.Id).then(() => {
      handleFetchuserData(currentuser.id);
      navigate("/save");
    });
  };
  const handleInput = (e) => {
    setstate({ ...state, editinputValue: e.target.value });
  };
  const handleClick = (e) => setstate({ ...state, anchorEl: e.currentTarget });
  const handlemenuclose = () => setstate({ ...state, anchorEl: null });
  const handleeditclose = () => setstate({ ...state, editmode: false });
  const handleeditopen = () => setstate({ ...state, editmode: true });
  const handleaddmodalopen = () => setstate({ ...state, addmodalOpen: true });
  const handleaddmodalclose = () => setstate({ ...state, addmodalOpen: false });
  const handlesocialmodalopen = () => {
    setstate({ ...state, socialmodalOpen: true, anchorEl: null });
  };
  const handlesocialmodalclose = () => {
    setstate({ ...state, socialmodalOpen: false });
  };
  const handledeletemodalopen = () => {
    setstate({ ...state, deletemodalOpen: true, anchorEl: null });
  };
  const handledeletemodalclose = () => {
    setstate({ ...state, deletemodalOpen: false });
  };
  const handleupdatetitle = () => {
    if (
      (state.editinputValue.length > 0) &
      (state.editinputValue !== activeplaylist.Title)
    ) {
      miniUpdate(currentuser.id, activeplaylist.Id, {
        Title: state.editinputValue,
      }).then(() => {
        handleFetchuserData(currentuser.id);
        enqueueSnackbar("Successfully updated playlist Title", {
          variant: "success",
        });
      });
    }
    setstate({ ...state, editmode: false });
  };

  const handleshowhideplaylist = () => {
    miniUpdate(currentuser.id, activeplaylist.Id, {
      Hide: !activeplaylist.Hide,
    }).then(() => {
      handleFetchuserData(currentuser.id);
      if (activeplaylist.Hide) {
        enqueueSnackbar("Successfully Show to public", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Successfully Hide from public", {
          variant: "success",
        });
      }
    });
    setstate({ ...state, anchorEl: null });
  };

  const deletevideo = (videoId) => {
    console.log("fire");
    const readyitems = activeplaylist.Items.filter((e) => e.id !== videoId);
    console.log(readyitems);
    const thumb =
      readyitems.length > 0
        ? readyitems[readyitems.length - 1].thumbnail
        : "https://i.ytimg.com/vi/jCY6DH8F4oc/maxresdefault.jpg";
    miniUpdate(currentuser.id, activeplaylist.Id, {
      Thumbnail: thumb,
      Items: readyitems,
    }).then(() => {
      handleFetchuserData(currentuser.id);
      enqueueSnackbar("Deleted Successfully", {
        variant: "success",
      });
    });
  };

  const AddModalPop = React.forwardRef((props, ref) => (
    <AddModal {...props} innerRef={ref} />
  ));

  const SocialShareModal = React.forwardRef((props, ref) => (
    <ShareModal {...props} innerRef={ref} />
  ));

  const DeletePlaylistModal = React.forwardRef((props, ref) => (
    <DeleteModal {...props} innerRef={ref} />
  ));

  return (
    <>
      <EditScreenArea>
        <PlaylistDetailsArea>
          <PlaylistThumb src={activeplaylist.Thumbnail} />
          {state.editmode ? (
            <EditInputBlock>
              <EditInput
                value={state.editinputValue}
                autoComplete="off"
                onChange={handleInput}
              />
              <ButtonBlock>
                <CreateButton
                  bg="#c94d4d"
                  shadow="#f7ccd3"
                  onClick={handleeditclose}
                >
                  Cancle
                </CreateButton>
                <CreateButton
                  bg="#242560"
                  shadow="#a3abed"
                  onClick={handleupdatetitle}
                >
                  Save
                </CreateButton>
              </ButtonBlock>
            </EditInputBlock>
          ) : (
            <EditTitleBlock>
              <TitleText>{activeplaylist.Title}</TitleText>
              <IconButton onClick={handleeditopen}>
                <EditIcon />
              </IconButton>
            </EditTitleBlock>
          )}
          <TitleBottomtexts
            style={{
              cursor: "default",
            }}
          >
            <p>5.1</p>
            <img src={rateicon} alt="x" />
            <li>
              <span>{convertview(activeplaylist.Views)} Views</span>
            </li>
            <li>
              <span>{activeplaylist.UserName}</span>
            </li>
          </TitleBottomtexts>
          <BottomBlock style={{ justifyContent: "end" }}>
            <CreateButton
              bg="#c94d4d"
              shadow="#f7ccd3"
              onClick={() => handleplay(activeplaylist.Items[0].id)}
            >
              Play All
            </CreateButton>
          </BottomBlock>
          <BottomBlock>
            <BottomChild>
              <RoundedIconButton>
                <AvatarBadge src={currentuser.photoUrl} />
              </RoundedIconButton>
              <span
                style={{
                  cursor: "pointer",
                }}
              >
                {activeplaylist.UserName}
              </span>
            </BottomChild>
            <BottomChild>
              <IconButton onClick={handleaddmodalopen}>
                <AddIcon />
              </IconButton>
              <IconButton
                id="edit_menu_btn"
                aria-controls={menuopen ? "edit_menu_btn" : undefined}
                aria-haspopup="true"
                aria-expanded={menuopen ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <EditMenu
                anchorEl={state.anchorEl}
                open={menuopen}
                onClose={handlemenuclose}
              >
                <MenuItem onClick={handlesocialmodalopen}>
                  <ListItemIcon>
                    <Image src={Shareicon} />
                  </ListItemIcon>
                  Share
                </MenuItem>
                <MenuItem onClick={handleshowhideplaylist}>
                  <ListItemIcon>
                    <Image src={Hideicon} />
                  </ListItemIcon>
                  {activeplaylist.Hide ? "Public" : "Private"}
                </MenuItem>
                <Divider style={{ margin: "0px" }} />
                <MenuItem
                  style={{ color: "#D32F2F" }}
                  onClick={handledeletemodalopen}
                >
                  <ListItemIcon>
                    <Image src={Deleteicon} />
                  </ListItemIcon>
                  Delete
                </MenuItem>
              </EditMenu>
            </BottomChild>
          </BottomBlock>
        </PlaylistDetailsArea>
        <ItemsBlock>
          {activeplaylist.Items.filter((e) => {
            return e["videoTitle"].toLowerCase().includes(searchValue);
          }).map((element) => {
            return (
              <EditPlaylistItem
                key={element.id}
                data={element}
                jump={handleplay}
                remove={deletevideo}
              />
            );
          })}
        </ItemsBlock>
      </EditScreenArea>
      <Modal open={state.addmodalOpen} onClose={handleaddmodalclose}>
        <AddModalPop data={activeplaylist.Id} close={handleaddmodalclose} />
      </Modal>
      <Modal open={state.socialmodalOpen} onClose={handlesocialmodalopen}>
        <SocialShareModal
          data={activeplaylist}
          close={handlesocialmodalclose}
        />
      </Modal>
      <Modal open={state.deletemodalOpen} onClose={handledeletemodalopen}>
        <DeletePlaylistModal
          title={activeplaylist.Title}
          remove={handledeleteplaylist}
          close={handledeletemodalclose}
        />
      </Modal>
    </>
  );
};

export default Edit;
