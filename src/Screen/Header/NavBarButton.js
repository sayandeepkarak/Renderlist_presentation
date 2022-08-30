import React from "react";
import { Button, CreatePlaylistButton } from "../../Components/Button";
import { MiniDiv, NavButtonArea } from "../../Components/Div";
import Profile from "../../Assets/Images/Avatar.png";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import CreateModal from "./CreateModal";
import {
  AvatarBadge,
  ResponsivePopOver,
  ResponvidePopOverBlock,
  RoundedIconButton,
} from "../../Components/Navbar";
import AddIcon from "@mui/icons-material/Add";

const NavBarButton = () => {
  const [viewdemo, setviewdemo] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleclick = () => setviewdemo(!viewdemo);

  const handleopenResponsivePopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlecloseResponsivePopOver = () => {
    setAnchorEl(null);
  };

  const openresponsivepopover = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const CreateModalPop = React.forwardRef((props, ref) => (
    <CreateModal {...props} innerRef={ref} />
  ));

  return (
    <>
      <NavButtonArea>
        {!viewdemo ? (
          <>
            <MiniDiv id="auth_main_box">
              <Button bg="#c94d4d" shadow="#f7ccd3" onClick={handleclick}>
                <span>signup</span>
              </Button>
              <Button bg="#242560" shadow="#a3abed" onClick={handleclick}>
                <span>login</span>
              </Button>
            </MiniDiv>

            <MiniDiv id="auth_responsive_box">
              <RoundedIconButton
                aria-describedby={id}
                onClick={handleopenResponsivePopOver}
              >
                <AvatarBadge sx={{ height: 38, width: 38 }} />
              </RoundedIconButton>
              <ResponsivePopOver
                id={id}
                open={openresponsivepopover}
                anchorEl={anchorEl}
                onClose={handlecloseResponsivePopOver}
              >
                <ResponvidePopOverBlock>
                  <Button bg="#c94d4d" shadow="#f7ccd3" onClick={handleclick}>
                    <span>signup</span>
                  </Button>
                  <Button bg="#242560" shadow="#a3abed" onClick={handleclick}>
                    <span>login</span>
                  </Button>
                </ResponvidePopOverBlock>
              </ResponsivePopOver>
            </MiniDiv>
          </>
        ) : (
          <>
            <CreatePlaylistButton
              bg="#242560"
              shadow="#a3abed"
              onClick={handleOpen}
            >
              <span>create playlist</span>
              <AddIcon />
            </CreatePlaylistButton>
            <Modal open={open} onClose={handleClose}>
              <CreateModalPop close={handleClose} />
            </Modal>
            <RoundedIconButton>
              <AvatarBadge src={Profile} />
            </RoundedIconButton>
          </>
        )}
      </NavButtonArea>
    </>
  );
};

export default NavBarButton;
