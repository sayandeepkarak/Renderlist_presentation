import React, { forwardRef, useState } from "react";
import { Button, CreatePlaylistButton } from "../../Components/styles/Button";
import {
  AvatarBadge,
  NameTitle,
  ResponsivePopOver,
  ResponvidePopOverBlock,
  RoundedIconButton,
} from "../../Components/styles/Navbar";
import Modal from "@mui/material/Modal";
import CreateModal from "../../Components/Modals/CreateModal";
import AddIcon from "@mui/icons-material/Add";
import { useAuthContext } from "../../Context/AuthContext";

const NormalBlock = () => {
  const { currentuser, handleLogout } = useAuthContext();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPop = (event) => setAnchorEl(event.currentTarget);
  const handleClosePop = () => setAnchorEl(null);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const logout = () => {
    setAnchorEl(null);
    handleLogout();
  };
  const openUserPop = Boolean(anchorEl);
  const user_pop_Id = openUserPop ? "user-popover" : undefined;
  const CreateModalPop = forwardRef((props, ref) => (
    <CreateModal {...props} innerRef={ref} />
  ));
  return (
    <>
      <CreatePlaylistButton
        bg="#242560"
        shadow="#a3abed"
        onClick={handleOpenModal}
      >
        <span>create playlist</span>
        <AddIcon />
      </CreatePlaylistButton>

      <Modal open={open} onClose={handleCloseModal}>
        <CreateModalPop close={handleCloseModal} />
      </Modal>

      <RoundedIconButton aria-describedby={user_pop_Id} onClick={handleOpenPop}>
        <AvatarBadge src={currentuser.photoUrl} />
      </RoundedIconButton>
      <ResponsivePopOver
        id={user_pop_Id}
        anchorEl={anchorEl}
        open={openUserPop}
        onClose={handleClosePop}
        style={{ display: "block" }}
      >
        <ResponvidePopOverBlock>
          <NameTitle>{currentuser.name}</NameTitle>
          <NameTitle>{currentuser.email}</NameTitle>
          <Button
            bg="#242560"
            shadow="#a3abed"
            style={{ width: "min-content", alignSelf: "end" }}
            onClick={logout}
          >
            <span>Logout</span>
          </Button>
        </ResponvidePopOverBlock>
      </ResponsivePopOver>
    </>
  );
};

export default NormalBlock;
