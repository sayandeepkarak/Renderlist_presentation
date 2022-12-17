import React, { forwardRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Shareicon from "../../Assets/Images/share.png";
import Hideicon from "../../Assets/Images/Hide.png";
import Deleteicon from "../../Assets/Images/delete.png";
import ShareModal from "../../Components/Modals/ShareModal";
import DeleteModal from "../../Components/Modals/DeleteModal";
import { EditMenu } from "../../Components/styles/EditScreen";
import MenuItem from "@mui/material/MenuItem";
import { Divider, ListItemIcon } from "@mui/material";
import { Image } from "../../Components/styles/Image";
import Modal from "@mui/material/Modal";
import { useAuthContext } from "../../Context/AuthContext";
import { useCrudContext } from "../../Context/CrudContext";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MenuBox = () => {
  const activeplaylist = useSelector(
    (state) => state.activePlayListReducers.value
  );
  const { currentuser, handleFetchuserData } = useAuthContext();
  const { miniUpdate, deletePlaylist } = useCrudContext();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [anchorEl, setanchorEl] = useState(null);
  const [socialModal, setsocialModal] = useState(false);
  const [deleteModal, setdeleteModal] = useState(false);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (e) => setanchorEl(e.currentTarget);
  const handlemenuclose = (e) => setanchorEl(null);

  const handlesocialmodalopen = () => {
    setanchorEl(null);
    setsocialModal(true);
  };
  const handlesocialmodalclose = () => setsocialModal(false);
  const handledeletemodalopen = () => {
    setanchorEl(null);
    setdeleteModal(true);
  };
  const handledeletemodalclose = () => setdeleteModal(false);

  const handleshowhideplaylist = async () => {
    try {
      await miniUpdate(currentuser.id, activeplaylist.Id, {
        Hide: !activeplaylist.Hide,
      });
      handleFetchuserData(currentuser.id);
      let msg = activeplaylist.Hide
        ? "Successfully Show to public"
        : "Successfully Hide from public";
      enqueueSnackbar(msg, {
        variant: "success",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setanchorEl(null);
    }
  };

  const handledeleteplaylist = async () => {
    try {
      navigate("/save");
      await deletePlaylist(currentuser.id, activeplaylist.Id);
      handleFetchuserData(currentuser.id);
    } catch (error) {
      console.log(error);
    }
  };

  const SocialShareModal = forwardRef((props, ref) => (
    <ShareModal {...props} innerRef={ref} />
  ));

  const DeletePlaylistModal = forwardRef((props, ref) => (
    <DeleteModal {...props} innerRef={ref} />
  ));

  return (
    <>
      <IconButton
        id="edit_menu_btn"
        aria-controls={menuOpen ? "edit_menu_btn" : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <EditMenu anchorEl={anchorEl} open={menuOpen} onClose={handlemenuclose}>
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

        <MenuItem style={{ color: "#D32F2F" }} onClick={handledeletemodalopen}>
          <ListItemIcon>
            <Image src={Deleteicon} />
          </ListItemIcon>
          Delete
        </MenuItem>
      </EditMenu>

      <Modal open={socialModal} onClose={handlesocialmodalopen}>
        <SocialShareModal
          data={activeplaylist}
          close={handlesocialmodalclose}
        />
      </Modal>

      <Modal open={deleteModal} onClose={handledeletemodalopen}>
        <DeletePlaylistModal
          title={activeplaylist.Title}
          remove={handledeleteplaylist}
          close={handledeletemodalclose}
        />
      </Modal>
    </>
  );
};

export default MenuBox;
