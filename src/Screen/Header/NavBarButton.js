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
            <MiniDiv className="auth_main_box">
              <Button
                bg="#FF1744"
                shadow="rgba(255, 23, 68, 0.25)"
                onClick={handleclick}
              >
                <span>signup</span>
              </Button>
              <Button
                bg="#3d5afe"
                shadow="rgba(61, 90, 254, 0.5)"
                onClick={handleclick}
              >
                <span>login</span>
              </Button>
            </MiniDiv>

            <MiniDiv className="auth_responsive_box">
              <RoundedIconButton
                aria-describedby={id}
                onClick={handleopenResponsivePopOver}
              >
                <AvatarBadge />
              </RoundedIconButton>
              <ResponsivePopOver
                id={id}
                open={openresponsivepopover}
                anchorEl={anchorEl}
                onClose={handlecloseResponsivePopOver}
              >
                <ResponvidePopOverBlock>
                  <Button
                    bg="#FF1744"
                    shadow="rgba(255, 23, 68, 0.25)"
                    onClick={handleclick}
                  >
                    <span>signup</span>
                  </Button>
                  <Button
                    bg="#3d5afe"
                    shadow="rgba(61, 90, 254, 0.5)"
                    onClick={handleclick}
                  >
                    <span>login</span>
                  </Button>
                </ResponvidePopOverBlock>
              </ResponsivePopOver>
            </MiniDiv>
          </>
        ) : (
          <>
            <CreatePlaylistButton
              bg="#3d5afe"
              shadow="rgba(61, 90, 254, 0.5)"
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
