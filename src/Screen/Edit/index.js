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
} from "../../Components/EditScreen";
import { AvatarBadge, RoundedIconButton } from "../../Components/Navbar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { CreateButton } from "../../Components/Modal";
import { useState } from "react";
import { TitleBottomtexts } from "../../Components/Video";
import rateicon from "../../Assets/Images/rate.png";
import MenuItem from "@mui/material/MenuItem";
import { Divider, ListItemIcon } from "@mui/material";
import { Image } from "../../Components/Image";
import Shareicon from "../../Assets/Images/share.png";
import Hideicon from "../../Assets/Images/Hide.png";
import Deleteicon from "../../Assets/Images/delete.png";
import EditPlaylistItem from "./EditPlaylistItem";
import Modal from "@mui/material/Modal";
import AddModal from "../../Components/AddModal";
import ShareModal from "../../Components/ShareModal";
import DeleteModal from "../../Components/DeleteModal";
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

  const [editmode, seteditmode] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [editinputValue, seteditinputValue] = useState(activeplaylist.Title);
  const menuopen = Boolean(anchorEl);
  const [addmodalOpen, setaddmodalOpen] = useState(false);
  const [socialmodalOpen, setsocialmodalOpen] = useState(false);
  const [deletemodalOpen, setdeletemodalOpen] = useState(false);
  const { convertview } = useFunctionContext();

  const handleplay = (videoId) => {
    navigate(`/watch/${activeplaylist.Id}/${videoId}`);
  };
  const handledeleteplaylist = () => {
    deletePlaylist(currentuser.id, activeplaylist.Id);
    handleFetchuserData(currentuser.id);
    navigate("/save");
  };
  const handleInput = (e) => seteditinputValue(e.target.value);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handlemenuclose = () => setAnchorEl(null);
  const handleeditclose = () => seteditmode(false);
  const handleeditopen = () => seteditmode(true);
  const handleaddmodalopen = () => setaddmodalOpen(true);

  const handleaddmodalclose = () => setaddmodalOpen(false);
  const handlesocialmodalopen = () => {
    setsocialmodalOpen(true);
    setAnchorEl(null);
  };
  const handlesocialmodalclose = () => setsocialmodalOpen(false);
  const handledeletemodalopen = () => {
    setdeletemodalOpen(true);
    setAnchorEl(null);
  };
  const handledeletemodalclose = () => setdeletemodalOpen(false);

  const handleupdatetitle = () => {
    if (
      (editinputValue.length > 0) &
      (editinputValue !== activeplaylist.Title)
    ) {
      miniUpdate(currentuser.id, activeplaylist.Id, { Title: editinputValue });
      handleFetchuserData(currentuser.id);
    }
    enqueueSnackbar("Successfully updated playlist Title", {
      variant: "success",
    });
    seteditmode(false);
  };

  const handleshowhideplaylist = () => {
    miniUpdate(currentuser.id, activeplaylist.Id, {
      Hide: !activeplaylist.Hide,
    });
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
    setAnchorEl(null);
  };

  const deletevideo = (videoId) => {
    const readyitems = activeplaylist.Items.filter((e) => e.id !== videoId);
    miniUpdate(currentuser.id, activeplaylist.Id, {
      Thumbnail: readyitems[readyitems.length - 1].thumbnail,
      Items: readyitems,
    });
    handleFetchuserData(currentuser.id);
    enqueueSnackbar("Deleted Successfully", {
      variant: "success",
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
          {editmode ? (
            <EditInputBlock>
              <EditInput
                value={editinputValue}
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
                anchorEl={anchorEl}
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
                delete={deletevideo}
              />
            );
          })}
        </ItemsBlock>
      </EditScreenArea>
      <Modal open={addmodalOpen} onClose={handleaddmodalclose}>
        <AddModalPop data={activeplaylist.Id} close={handleaddmodalclose} />
      </Modal>
      <Modal open={socialmodalOpen} onClose={handlesocialmodalopen}>
        <SocialShareModal
          data={activeplaylist}
          close={handlesocialmodalclose}
        />
      </Modal>
      <Modal open={deletemodalOpen} onClose={handledeletemodalopen}>
        <DeletePlaylistModal
          title={activeplaylist.Title}
          delete={handledeleteplaylist}
          close={handledeletemodalclose}
        />
      </Modal>
    </>
  );
};

export default Edit;
